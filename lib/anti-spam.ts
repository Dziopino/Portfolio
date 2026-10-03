// Rate limiting with Upstash Redis (Serverless-compatible)
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Upstash REST API credentials
// W Vercel dodaj te zmienne w Settings → Environment Variables
// Pobierz je z Upstash dashboard → Database → REST API section
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

// Konfiguracja rate limiter dla Vercel Serverless
// 3 wiadomości na 1 godzinę (3600 sekund)
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, '3600 s'),
  analytics: true,
  prefix: 'portfolio_contact',
});

export async function checkRateLimit(identifier: string): Promise<{ allowed: boolean; resetIn?: number }> {
  try {
    // Sprawdź czy zmienne są ustawione
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      console.warn('Redis credentials not configured, rate limiting disabled');
      return { allowed: true };
    }

    const { success, limit, reset, remaining } = await ratelimit.limit(identifier);

    if (!success) {
      // Oblicz czas do resetu w minutach
      const resetIn = Math.ceil((reset - Date.now()) / 1000 / 60);
      return { allowed: false, resetIn };
    }

    return { allowed: true };
  } catch (error) {
    // W przypadku błędu połączenia z Redis, pozwól na wysłanie (fail-open)
    console.error('Rate limit error:', error);
    return { allowed: true };
  }
}

// Spam detection heuristics
export function detectSpam(data: { name: string; email: string; message: string }): { isSpam: boolean; reason?: string } {
  const { name, email, message } = data;

  // Check for excessive URLs
  const urlRegex = /(https?:\/\/[^\s]+)/gi;
  const urlCount = (message.match(urlRegex) || []).length;
  if (urlCount > 2) {
    return { isSpam: true, reason: 'Too many URLs' };
  }

  // Check for spam keywords
  const spamKeywords = [
    'viagra', 'casino', 'poker', 'lottery', 'prize', 'winner',
    'click here', 'buy now', 'limited time', 'act now',
    'cryptocurrency', 'bitcoin', 'investment opportunity'
  ];

  const lowerMessage = message.toLowerCase();
  const foundSpamKeyword = spamKeywords.some(keyword => lowerMessage.includes(keyword));
  if (foundSpamKeyword) {
    return { isSpam: true, reason: 'Spam keywords detected' };
  }

  // Check for repetitive characters
  const repetitivePattern = /(.)\1{10,}/;
  if (repetitivePattern.test(message)) {
    return { isSpam: true, reason: 'Repetitive characters' };
  }

  // Check for all caps (more than 70% of message)
  const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (capsRatio > 0.7 && message.length > 20) {
    return { isSpam: true, reason: 'Excessive capitals' };
  }

  // Check for very short messages with URLs
  if (message.length < 20 && urlCount > 0) {
    return { isSpam: true, reason: 'Suspicious short message with URL' };
  }

  return { isSpam: false };
}

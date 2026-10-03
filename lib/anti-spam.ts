import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';


const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, '3600 s'),
  analytics: true,
  prefix: 'portfolio_contact',
});

export async function checkRateLimit(identifier: string): Promise<{ allowed: boolean; resetIn?: number }> {
  try {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      console.warn('Redis credentials not configured, rate limiting disabled');
      return { allowed: true };
    }

    const { success, limit, reset, remaining } = await ratelimit.limit(identifier);

    if (!success) {
      const resetIn = Math.ceil((reset - Date.now()) / 1000 / 60);
      return { allowed: false, resetIn };
    }

    return { allowed: true };
  } catch (error) {
    console.error('Rate limit error:', error);
    return { allowed: true };
  }
}

export function detectSpam(data: { name: string; email: string; message: string }): { isSpam: boolean; reason?: string } {
  const { name, email, message } = data;

  const urlRegex = /(https?:\/\/[^\s]+)/gi;
  const urlCount = (message.match(urlRegex) || []).length;
  if (urlCount > 2) {
    return { isSpam: true, reason: 'Too many URLs' };
  }

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

  const repetitivePattern = /(.)\1{10,}/;
  if (repetitivePattern.test(message)) {
    return { isSpam: true, reason: 'Repetitive characters' };
  }

  const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (capsRatio > 0.7 && message.length > 20) {
    return { isSpam: true, reason: 'Excessive capitals' };
  }

  if (message.length < 20 && urlCount > 0) {
    return { isSpam: true, reason: 'Suspicious short message with URL' };
  }

  return { isSpam: false };
}

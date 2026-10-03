import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { checkRateLimit, detectSpam } from '@/lib/anti-spam';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: number;
  submittedAt?: number;
}

function validateContactForm(data: unknown): data is ContactFormData {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const { name, email, message, timestamp, submittedAt } = data as Record<string, unknown>;

  if (typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return false;
  }

  if (typeof email !== 'string' || !isValidEmail(email) || email.length > 254) {
    return false;
  }

  if (typeof message !== 'string' || message.trim().length === 0 || message.length > 5000) {
    return false;
  }

  if (timestamp !== undefined && typeof timestamp !== 'number') {
    return false;
  }

  if (submittedAt !== undefined && typeof submittedAt !== 'number') {
    return false;
  }

  return true;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function POST(request: NextRequest) {
  try {
    // Pobierz IP klienta z nagłówków Vercel
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                     request.headers.get('x-real-ip') || 'unknown';

    // Sprawdź rate limit (async z Upstash Redis)
    const rateLimitResult = await checkRateLimit(clientIp);
    if (!rateLimitResult.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        {
          error: `Zbyt wiele prób. Spróbuj ponownie za ${rateLimitResult.resetIn} minut.`,
          retryAfter: rateLimitResult.resetIn
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (!validateContactForm(body)) {
      return NextResponse.json(
        { error: 'Nieprawidłowe dane formularza' },
        { status: 400 }
      );
    }

    const { name, email, message, timestamp, submittedAt } = body;

    if (timestamp && submittedAt) {
      const timeDiff = submittedAt - timestamp;
      if (timeDiff < 3000) {
        console.warn(`Suspicious fast submission: ${timeDiff}ms from IP: ${clientIp}`);
        return NextResponse.json(
          { error: 'Nieprawidłowe dane formularza' },
          { status: 400 }
        );
      }
    }

    const spamCheck = detectSpam({ name, email, message });
    if (spamCheck.isSpam) {
      console.warn(`Spam detected: ${spamCheck.reason} from IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Wiadomość została odrzucona. Jeśli uważasz, że to błąd, skontaktuj się bezpośrednio.' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeHtml(name.trim());
    const sanitizedMessage = sanitizeHtml(message.trim());

    const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';
    const emailTo = process.env.EMAIL_TO || 'filip.dziopa2@gmail.com';
    
    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `Nowa wiadomość z portfolio od ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📬 Nowa wiadomość z portfolio</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                Dane kontaktowe
              </h2>
              <p style="margin: 10px 0;">
                <strong style="color: #555;">Imię i nazwisko:</strong><br>
                <span style="color: #333; font-size: 16px;">${sanitizedName}</span>
              </p>
              <p style="margin: 10px 0;">
                <strong style="color: #555;">Email:</strong><br>
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px;">${email}</a>
              </p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h2 style="color: #667eea; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                Treść wiadomości
              </h2>
              <p style="color: #333; white-space: pre-wrap; font-size: 15px; line-height: 1.8;">${sanitizedMessage}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #e8eaf6; border-left: 4px solid #667eea; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #555;">
                💡 <strong>Wskazówka:</strong> Możesz odpowiedzieć bezpośrednio na tego emaila - odpowiedź trafi do nadawcy.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>Ta wiadomość została wysłana z formularza kontaktowego na Twoim portfolio</p>
          </div>
        </body>
        </html>
      `,
      text: `
Nowa wiadomość z portfolio

Od: ${sanitizedName}
Email: ${email}

Wiadomość:
${sanitizedMessage}
      `.trim(),
    });

    if (error) {
      console.error('Resend error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Nie udało się wysłać wiadomości', details: error },
        { status: 500 }
      );
    }

    const { error: autoReplyError } = await resend.emails.send({
      from: emailFrom,
      to: email,
      subject: 'Potwierdzenie otrzymania wiadomości - Filip Dziopa',
      html: `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✅ Wiadomość otrzymana!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
                Cześć <strong>${sanitizedName}</strong>,
              </p>
              <p style="margin: 0 0 15px 0; font-size: 15px; color: #555; line-height: 1.8;">
                Dziękuję za wiadomość wysłaną przez formularz kontaktowy na moim portfolio.
                Potwierdzam, że otrzymałem Twoją wiadomość i postaram się odpowiedzieć jak najszybciej.
              </p>
              <p style="margin: 0 0 15px 0; font-size: 15px; color: #555; line-height: 1.8;">
                Zazwyczaj odpowiadam w ciągu <strong>24-48 godzin</strong>.
              </p>
            </div>

            <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px;">
              <h3 style="margin: 0 0 10px 0; color: #0369a1; font-size: 16px;">📝 Twoja wiadomość:</h3>
              <p style="margin: 0; font-size: 14px; color: #555; white-space: pre-wrap; font-style: italic; line-height: 1.6;">${sanitizedMessage}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
              <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">
                Możesz również skontaktować się ze mną bezpośrednio:
              </p>
              <p style="margin: 5px 0; font-size: 14px;">
                📧 <a href="mailto:${emailTo}" style="color: #06b6d4; text-decoration: none;">${emailTo}</a>
              </p>
              <p style="margin: 5px 0; font-size: 14px;">
                📱 <a href="tel:+48516258138" style="color: #06b6d4; text-decoration: none;">+48 516 258 138</a>
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p style="margin: 5px 0;">Pozdrawiam,</p>
            <p style="margin: 5px 0; font-weight: bold; color: #666;">Filip Dziopa</p>
            <p style="margin: 15px 0 5px 0; font-size: 11px;">
              To jest automatyczna wiadomość potwierdzająca. Proszę nie odpowiadaj na tego emaila.
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
Cześć ${sanitizedName},

Dziękuję za wiadomość wysłaną przez formularz kontaktowy na moim portfolio.

Potwierdzam, że otrzymałem Twoją wiadomość i postaram się odpowiedzieć jak najszybciej. Zazwyczaj odpowiadam w ciągu 24-48 godzin.

Twoja wiadomość:
${sanitizedMessage}

Możesz również skontaktować się ze mną bezpośrednio:
Email: ${emailTo}
Telefon: +48 516 258 138

Pozdrawiam,
Filip Dziopa

---
To jest automatyczna wiadomość potwierdzająca.
      `.trim(),
    });

    if (autoReplyError) {
      console.error('Auto-reply error:', JSON.stringify(autoReplyError, null, 2));
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Wiadomość została wysłana',
        id: data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
}

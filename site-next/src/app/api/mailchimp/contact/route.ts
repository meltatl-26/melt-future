import { NextRequest, NextResponse } from 'next/server';
import { subscribe, isConfigured } from '@/lib/mailchimp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, message } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!firstName) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!isConfigured()) {
      console.log('[Mailchimp] Not configured — mock contact form:', { email, firstName, company, message });
      return NextResponse.json({ success: true, mock: true });
    }

    await subscribe({
      email,
      firstName,
      lastName,
      company,
      tags: ['contact-form', 'lead'],
      source: 'contact-page',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Mailchimp] Contact error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Form submission failed' },
      { status: 500 }
    );
  }
}

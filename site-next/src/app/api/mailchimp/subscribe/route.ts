import { NextRequest, NextResponse } from 'next/server';
import { subscribe, isConfigured } from '@/lib/mailchimp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, tags, source } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!isConfigured()) {
      // In development without API keys, return success
      console.log('[Mailchimp] Not configured — mock subscribe:', email, tags);
      return NextResponse.json({ success: true, mock: true });
    }

    await subscribe({ email, firstName, lastName, tags, source });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Mailchimp] Subscribe error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Subscription failed' },
      { status: 500 }
    );
  }
}

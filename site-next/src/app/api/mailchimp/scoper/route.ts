import { NextRequest, NextResponse } from 'next/server';
import { subscribe, addTags, isConfigured } from '@/lib/mailchimp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      firstName,
      lastName,
      company,
      role,
      industry,
      projectType,
      timeline,
      budgetSignal,
      teamSize,
      goals,
    } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const tags = ['scoper-tool', 'lead', 'high-intent'];
    if (projectType) tags.push(`project:${projectType}`);
    if (industry) tags.push(`industry:${industry}`);
    if (timeline) tags.push(`timeline:${timeline}`);

    if (!isConfigured()) {
      console.log('[Mailchimp] Not configured — mock scoper submission:', {
        email, firstName, company, projectType, timeline, goals,
      });
      return NextResponse.json({ success: true, mock: true });
    }

    await subscribe({
      email,
      firstName,
      lastName,
      company,
      role,
      industry,
      timeline,
      budgetSignal,
      teamSize,
      tags,
      source: 'scoper-tool',
    });

    // Always tag scoper leads as high-intent for team notification
    await addTags(email, ['pipeline:decision', 'notify-team', 'scoper-complete']);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Mailchimp] Scoper error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Scoper submission failed' },
      { status: 500 }
    );
  }
}

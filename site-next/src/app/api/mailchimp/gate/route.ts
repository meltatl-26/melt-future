import { NextRequest, NextResponse } from 'next/server';
import { subscribe, addTags, isConfigured } from '@/lib/mailchimp';

// Gated content tiers:
// Tier 2 (Interest): email + name
// Tier 3 (Consideration): + company, role, industry
// Tier 4 (Decision): + timeline, budget signal, team size

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tier, email, firstName, lastName, company, role, industry, timeline, budgetSignal, teamSize, contentSlug } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!tier || tier < 2 || tier > 4) {
      return NextResponse.json({ error: 'Valid tier (2-4) is required' }, { status: 400 });
    }

    // Validate required fields per tier
    if (tier >= 2 && !firstName) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (tier >= 3 && (!company || !role)) {
      return NextResponse.json({ error: 'Company and role are required for this content' }, { status: 400 });
    }

    const tags = [
      `tier-${tier}`,
      `content:${contentSlug || 'unknown'}`,
      'gated-content',
    ];

    if (industry) tags.push(`industry:${industry}`);
    if (role) tags.push(`role:${role}`);
    if (tier >= 4) {
      tags.push('high-intent');
      if (timeline) tags.push(`timeline:${timeline}`);
    }

    if (!isConfigured()) {
      console.log('[Mailchimp] Not configured — mock gate unlock:', { tier, email, tags });
      return NextResponse.json({ success: true, mock: true, unlocked: true });
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
      source: `gated-tier-${tier}`,
    });

    // Add pipeline stage tags
    if (tier >= 4) {
      await addTags(email, ['pipeline:decision', 'notify-team']);
    } else if (tier >= 3) {
      await addTags(email, ['pipeline:consideration']);
    } else {
      await addTags(email, ['pipeline:interest']);
    }

    return NextResponse.json({ success: true, unlocked: true });
  } catch (error) {
    console.error('[Mailchimp] Gate error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Gate unlock failed' },
      { status: 500 }
    );
  }
}

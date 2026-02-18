'use client';

// Content gating tiers:
// Tier 1: Free (no gate)
// Tier 2: Email + Name (Interest)
// Tier 3: + Company, Role, Industry (Consideration)
// Tier 4: + Timeline, Budget Signal, Team Size (Decision)

export type GateTier = 1 | 2 | 3 | 4;

export interface UserProfile {
  email?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  role?: string;
  industry?: string;
  timeline?: string;
  budgetSignal?: string;
  teamSize?: string;
  unlockedContent: string[];
  maxTierCompleted: GateTier;
}

const STORAGE_KEY = 'melt-user-profile';

const defaultProfile: UserProfile = {
  unlockedContent: [],
  maxTierCompleted: 1,
};

export function getUserProfile(): UserProfile {
  if (typeof window === 'undefined') return defaultProfile;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultProfile, ...JSON.parse(stored) };
    }
  } catch {
    // Corrupted storage
  }
  return defaultProfile;
}

export function saveUserProfile(updates: Partial<UserProfile>): UserProfile {
  const current = getUserProfile();
  const updated = { ...current, ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function canAccessContent(contentTier: GateTier): boolean {
  const profile = getUserProfile();
  return profile.maxTierCompleted >= contentTier;
}

export function unlockContent(slug: string): void {
  const profile = getUserProfile();
  if (!profile.unlockedContent.includes(slug)) {
    saveUserProfile({
      unlockedContent: [...profile.unlockedContent, slug],
    });
  }
}

export function isContentUnlocked(slug: string): boolean {
  const profile = getUserProfile();
  return profile.unlockedContent.includes(slug);
}

export function getRequiredFieldsForTier(tier: GateTier): string[] {
  switch (tier) {
    case 1:
      return [];
    case 2:
      return ['email', 'firstName'];
    case 3:
      return ['email', 'firstName', 'company', 'role', 'industry'];
    case 4:
      return ['email', 'firstName', 'company', 'role', 'industry', 'timeline', 'budgetSignal'];
    default:
      return [];
  }
}

export function getMissingFieldsForTier(tier: GateTier): string[] {
  const profile = getUserProfile();
  const required = getRequiredFieldsForTier(tier);
  return required.filter((field) => !profile[field as keyof UserProfile]);
}

export async function submitGate(tier: GateTier, data: Partial<UserProfile>, contentSlug?: string): Promise<boolean> {
  // Save profile data locally
  const updated = saveUserProfile({
    ...data,
    maxTierCompleted: Math.max(getUserProfile().maxTierCompleted, tier) as GateTier,
  });

  if (contentSlug) {
    unlockContent(contentSlug);
  }

  // Submit to Mailchimp API
  try {
    const res = await fetch('/api/mailchimp/gate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tier,
        email: updated.email,
        firstName: updated.firstName,
        lastName: updated.lastName,
        company: updated.company,
        role: updated.role,
        industry: updated.industry,
        timeline: updated.timeline,
        budgetSignal: updated.budgetSignal,
        teamSize: updated.teamSize,
        contentSlug,
      }),
    });

    return res.ok;
  } catch {
    // Network error — content is still unlocked locally
    return true;
  }
}

export function clearProfile(): void {
  localStorage.removeItem(STORAGE_KEY);
}

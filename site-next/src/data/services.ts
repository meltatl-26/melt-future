/**
 * MELT Parent Services — 6 Core Competencies
 *
 * Each parent service has associated capabilities (tags) that filter the portfolio.
 * Clicking a capability tag will filter /work to show only projects with that tag.
 *
 * Enhanced with Capes deck problem framing, proof points, and related project links.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  angle: number;
  color: string;
  description: string;
  problem: string;
  icon: string;
  capabilities: string[];
  proofPoints: string[];
  relatedProjects: string[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const PARENT_SERVICES: Service[] = [
  {
    id: 'experiential',
    number: '01',
    title: 'Experiential Event Marketing & Sampling',
    slug: '/services/experiential',
    angle: 0,
    color: '#D4FF00',
    description:
      'Creating memorable brand experiences through live events, activations, and strategic sampling programs that engage consumers and drive measurable results.',
    problem:
      'You need to reach consumers across multiple cities without losing brand consistency or quality of execution.',
    icon: 'crowd',
    capabilities: [
      'Sampling',
      'Custom Builds',
      'Multi-City Tour',
      'Activation',
      'Pop-Up Events',
      'Brand Experiences',
      'Event Production',
      'Consumer Engagement',
    ],
    proofPoints: [
      '1.87M impressions — Ghirardelli Tour',
      '14,500 samples distributed',
      '8-city tour execution',
    ],
    relatedProjects: ['ghirardelli', 'bath-body-works', 'holiday-inn'],
  },
  {
    id: 'social-content',
    number: '02',
    title: 'Social Content & Influencer Programs',
    slug: '/services/social-content',
    angle: 60,
    color: '#F4B942',
    description:
      'Amplifying brand stories through authentic creator partnerships, strategic social campaigns, and compelling content that resonates with target audiences.',
    problem:
      'Your content strategy looks great in the deck, but the execution gap between concept and delivery costs you engagement and ROI.',
    icon: 'speech',
    capabilities: [
      'Video Production',
      'TV Programming',
      'Influencer Marketing',
      'Content Creation',
      'Social Media Strategy',
      'Creator Partnerships',
      'Digital Storytelling',
    ],
    proofPoints: [
      '2,563% ROI — Comfort Colors',
      '1M+ social impressions',
      '$766K earned media value',
    ],
    relatedProjects: ['comfort-colors', 'winter-olympics', 'facebook-concert'],
  },
  {
    id: 'sports-music-culinary',
    number: '03',
    title: 'Sports, Music & Culinary Marketing',
    slug: '/services/sports-music-culinary',
    angle: 120,
    color: '#3356FF',
    description:
      'Leveraging the passion points of sports, music, and food to create culturally relevant brand experiences that connect with diverse audiences.',
    problem:
      "You want to leverage passion-point marketing but don't have the relationships, logistics, or execution capability in-house.",
    icon: 'trophy',
    capabilities: [
      'Sports Marketing',
      'Music Events',
      'Culinary Activations',
      'Talent Management',
      'Concert Production',
      'Stadium Activations',
      'Food & Beverage Programs',
    ],
    proofPoints: [
      '10 seasons on ESPN College GameDay',
      'First-ever live Facebook concert',
      '39.7M campaign impressions',
    ],
    relatedProjects: ['coca-cola-gameday', 'ncaa-final-four', 'nil-awards'],
  },
  {
    id: 'retail-promotions',
    number: '04',
    title: 'Retail & National Promotions',
    slug: '/services/retail-promotions',
    angle: 180,
    color: '#FFD600',
    description:
      'Driving sales and brand awareness through strategic retail programs, national promotions, and shopper marketing initiatives.',
    problem:
      'Your retail promotions need to break through the noise at point of purchase and drive measurable sell-through.',
    icon: 'bag',
    capabilities: [
      'Retail Marketing',
      'National Promotions',
      'In-Store Activations',
      'Shopper Marketing',
      'Point of Sale',
      'Trade Marketing',
      'Promotional Campaigns',
    ],
    proofPoints: [
      '560% ROI — Bath & Body Works',
      '$1.5M program budget executed',
      '16-city retail tour',
    ],
    relatedProjects: ['bath-body-works', 'ghirardelli', 'georgia-lottery'],
  },
  {
    id: 'college-nil',
    number: '05',
    title: 'College & NIL Marketing',
    slug: '/services/college-nil',
    angle: 240,
    color: '#FF4040',
    description:
      'Connecting brands with the power of college sports and student-athletes through innovative NIL partnerships and campus marketing programs.',
    problem:
      'The NIL landscape is evolving fast and you need a partner who understands both the regulatory environment and campus culture.',
    icon: 'cap',
    capabilities: [
      'NIL Partnerships',
      'College Marketing',
      'Student-Athlete Engagement',
      'Campus Activations',
      'Collegiate Sports',
      'HBCU Programs',
      'Youth Marketing',
    ],
    proofPoints: [
      'First NIL Awards at Chick-fil-A College Football Hall of Fame',
      '6,000+ t-shirts distributed',
      'Multi-campus HBCU tour',
    ],
    relatedProjects: ['comfort-colors', 'aflac-hbcu', 'nil-awards'],
  },
  {
    id: 'sponsorship',
    number: '06',
    title: 'Sponsorship Strategy & Negotiation',
    slug: '/services/sponsorship',
    angle: 300,
    color: '#00F0FF',
    description:
      'Developing strategic sponsorship partnerships and executing high-impact activations that maximize ROI and strengthen brand positioning.',
    problem:
      "You're spending on sponsorships but not maximizing the activation opportunity — leaving value on the table.",
    icon: 'handshake',
    capabilities: [
      'NCAA Sponsorship',
      'Professional Sports',
      'Event Sponsorship',
      'Partnership Development',
      'Rights Management',
      'Activation Strategy',
      'ROI Measurement',
    ],
    proofPoints: [
      '$300M arena deal — City of Mobile',
      '$10M+/yr Aflac partnership',
      '19+ years NCAA Final Four',
    ],
    relatedProjects: ['city-of-mobile-arena', 'ncaa-final-four', 'aflac-sec-nation'],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getServiceById(id: string): Service | undefined {
  return PARENT_SERVICES.find((service) => service.id === id);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return PARENT_SERVICES.find((service) => service.slug === slug);
}

export function getAllCapabilities(): string[] {
  const capabilities = new Set<string>();
  PARENT_SERVICES.forEach((service) => {
    service.capabilities.forEach((cap) => capabilities.add(cap));
  });
  return Array.from(capabilities).sort();
}

export function getServicesForCapability(capability: string): Service[] {
  return PARENT_SERVICES.filter((service) =>
    service.capabilities.includes(capability)
  );
}

export default PARENT_SERVICES;

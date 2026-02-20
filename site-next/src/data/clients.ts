/**
 * MELT Client Roster — 22 clients
 *
 * Enhanced with slugs, featured flags, industry verticals,
 * relationship context, and linked project slugs.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Client {
  slug: string;
  name: string;
  logo: string;
  fallback?: string;
  featured: boolean;
  relationship?: string;
  industry: string;
  projectSlugs: string[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const clients: Client[] = [
  {
    slug: 'coca-cola',
    name: 'Coca-Cola',
    logo: '/images/clients/coca-cola.svg',
    fallback: '/images/clients/coca-cola.png',
    featured: true,
    relationship: '22-year partnership',
    industry: 'CPG / Beverages',
    projectSlugs: ['coca-cola-gameday', 'ncaa-final-four', 'winter-olympics'],
  },
  {
    slug: 'espn',
    name: 'ESPN',
    logo: '/images/clients/espn.svg',
    fallback: '/images/clients/espn.png',
    featured: true,
    relationship: '10-season College GameDay partnership',
    industry: 'Media / Broadcasting',
    projectSlugs: ['coca-cola-gameday'],
  },
  {
    slug: 'aflac',
    name: 'Aflac',
    logo: '/images/clients/aflac.svg',
    fallback: '/images/clients/aflac.png',
    featured: true,
    relationship: '$10M+/yr partnership',
    industry: 'Insurance / Financial Services',
    projectSlugs: ['aflac-hbcu', 'aflac-sec-nation', 'womens-final-four'],
  },
  {
    slug: 'bath-body-works',
    name: 'Bath & Body Works',
    logo: '/images/clients/bath-body-works.svg',
    fallback: '/images/clients/bath-body-works.png',
    featured: true,
    relationship: 'Multi-city retail activation partner',
    industry: 'Retail / Beauty',
    projectSlugs: ['bath-body-works'],
  },
  {
    slug: 'final-four',
    name: 'Final Four',
    logo: '/images/clients/final-four.svg',
    fallback: '/images/clients/final-four.png',
    featured: false,
    industry: 'Sports / Entertainment',
    projectSlugs: ['ncaa-final-four', 'womens-final-four'],
  },
  {
    slug: 'ghirardelli',
    name: 'Ghirardelli',
    logo: '/images/clients/ghirardelli.svg',
    fallback: '/images/clients/ghirardelli.png',
    featured: true,
    relationship: 'Multi-year sampling tour partner',
    industry: 'CPG / Confections',
    projectSlugs: ['ghirardelli'],
  },
  {
    slug: 'comfort-colors',
    name: 'Comfort Colors',
    logo: '/images/clients/comfort-colors.svg',
    featured: true,
    relationship: 'Campus marketing partner',
    industry: 'Apparel / Fashion',
    projectSlugs: ['comfort-colors'],
  },
  {
    slug: 'kia',
    name: 'Kia',
    logo: '/images/clients/kia.png',
    featured: false,
    industry: 'Automotive',
    projectSlugs: [],
  },
  {
    slug: 'nissan',
    name: 'Nissan',
    logo: '/images/clients/nissan.png',
    featured: false,
    industry: 'Automotive',
    projectSlugs: [],
  },
  {
    slug: 'mercedes',
    name: 'Mercedes',
    logo: '/images/clients/mercedes.png',
    featured: false,
    industry: 'Automotive',
    projectSlugs: [],
  },
  {
    slug: 'state-farm',
    name: 'State Farm',
    logo: '/images/clients/state-farm.png',
    featured: false,
    industry: 'Insurance / Financial Services',
    projectSlugs: [],
  },
  {
    slug: 'popeyes',
    name: 'Popeyes',
    logo: '/images/clients/popeyes.png',
    featured: false,
    industry: 'QSR / Food & Beverage',
    projectSlugs: [],
  },
  {
    slug: 'live-nation',
    name: 'Live Nation',
    logo: '/images/clients/live-nation.png',
    featured: false,
    relationship: 'City of Mobile arena partnership',
    industry: 'Entertainment / Live Events',
    projectSlugs: ['city-of-mobile-arena'],
  },
  {
    slug: 'monster',
    name: 'Monster',
    logo: '/images/clients/monster.png',
    featured: false,
    industry: 'CPG / Beverages',
    projectSlugs: [],
  },
  {
    slug: 'sprite',
    name: 'Sprite',
    logo: '/images/clients/sprite.png',
    featured: false,
    industry: 'CPG / Beverages',
    projectSlugs: [],
  },
  {
    slug: 'powerade',
    name: 'Powerade',
    logo: '/images/clients/powerade.png',
    featured: false,
    industry: 'CPG / Beverages',
    projectSlugs: [],
  },
  {
    slug: 'full-throttle',
    name: 'Full Throttle',
    logo: '/images/clients/full-throttle.png',
    featured: false,
    industry: 'CPG / Beverages',
    projectSlugs: [],
  },
  {
    slug: 'marlins',
    name: 'Marlins',
    logo: '/images/clients/marlins.png',
    featured: false,
    industry: 'Sports / Professional',
    projectSlugs: [],
  },
  {
    slug: 'traeger-grills',
    name: 'Traeger Grills',
    logo: '/images/clients/traeger-grills.png',
    featured: false,
    industry: 'Consumer Products / Outdoor',
    projectSlugs: [],
  },
  {
    slug: 'gildan',
    name: 'Gildan',
    logo: '/images/clients/gildan.png',
    featured: false,
    industry: 'Apparel / Fashion',
    projectSlugs: [],
  },
  {
    slug: 'jj-snack-foods',
    name: 'J&J Snack Foods',
    logo: '/images/clients/jj-snack-foods.png',
    featured: false,
    relationship: 'Dogsters brand activation partner',
    industry: 'CPG / Pet',
    projectSlugs: ['dogsters-mlb', 'dogsters-popup'],
  },
  {
    slug: 'choa',
    name: 'CHOA',
    logo: '/images/clients/choa.webp',
    featured: false,
    industry: 'Healthcare',
    projectSlugs: [],
  },
  {
    slug: 'sec',
    name: 'SEC',
    logo: '/images/clients/sec.png',
    featured: true,
    relationship: 'SEC BeachFest production partner',
    industry: 'Sports / Collegiate',
    projectSlugs: ['sec-beachfest', 'aflac-sec-nation'],
  },
  {
    slug: 'nhra',
    name: 'NHRA',
    logo: '/images/clients/nhra.png',
    featured: false,
    industry: 'Sports / Motorsports',
    projectSlugs: ['full-throttle-nhra'],
  },
  {
    slug: 'bud-light',
    name: 'Bud Light',
    logo: '/images/clients/bud-light.png',
    featured: false,
    industry: 'CPG / Beverages',
    projectSlugs: ['bud-light-cfb'],
  },
  {
    slug: 'georgia-lottery',
    name: 'Georgia Lottery',
    logo: '/images/clients/georgia-lottery.png',
    featured: false,
    industry: 'Government / Gaming',
    projectSlugs: ['georgia-lottery'],
  },
  {
    slug: 'holiday-inn-express',
    name: 'Holiday Inn Express',
    logo: '/images/clients/holiday-inn-express.png',
    featured: false,
    industry: 'Hospitality / Travel',
    projectSlugs: ['holiday-inn'],
  },
  {
    slug: 'pasqualys',
    name: "Pasqually's Pizza & Wings",
    logo: '/images/clients/pasqualys.png',
    featured: false,
    industry: 'QSR / Food & Beverage',
    projectSlugs: ['pasqualys-cfb'],
  },
  {
    slug: 'wellstar',
    name: 'Wellstar',
    logo: '/images/clients/wellstar.png',
    featured: false,
    relationship: 'Corporate event production partner',
    industry: 'Healthcare',
    projectSlugs: ['wellstar'],
  },
  {
    slug: 'wingstop',
    name: 'Wingstop',
    logo: '/images/clients/wingstop.png',
    featured: false,
    industry: 'QSR / Food & Beverage',
    projectSlugs: ['wingstop'],
  },
  {
    slug: 'hangout-fest',
    name: 'Hangout Fest',
    logo: '/images/clients/hangout-fest.png',
    featured: false,
    industry: 'Events / Music',
    projectSlugs: [],
  },
  {
    slug: 'walmart',
    name: 'Walmart',
    logo: '/images/clients/walmart.png',
    featured: false,
    industry: 'Retail',
    projectSlugs: [],
  },
];

export default clients;

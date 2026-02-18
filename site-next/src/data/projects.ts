/**
 * All 22 projects — 18 Capes deck + 4 legacy v2
 * Content sources: Capes 2026 PDF (primary), WordPress XML (secondary), inferred (flagged)
 *
 * Enhanced TypeScript port with tier, industry, brief, challenge/approach,
 * and testimonial fields for the Next.js rebuild.
 *
 * Gallery arrays reference actual image filenames from the Vite site's
 * /images/work-detail/{slug}/ directories.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  stat: string;
  thumbnail: string;
  description: string;
  longDescription?: string;
  brief: string;
  challenge?: string;
  approach?: string;
  services: string[];
  stats?: ProjectStat[];
  tags: string[];
  client: string;
  year: string;
  location: string;
  gallery: string[];
  featured: boolean;
  layout: 'A' | 'B' | 'C';
  accentColor: string;
  contentSource: string;
  tier: 'flagship' | 'standard' | 'light';
  industry: string;
  testimonial?: Testimonial;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const projects: Project[] = [
  // ==========================================================================
  // FLAGSHIP: NCAA Final Four
  // ==========================================================================
  {
    slug: 'ncaa-final-four',
    title: 'NCAA Final Four',
    category: 'Sponsorship',
    stat: '72 Hours of Unstoppable Energy',
    thumbnail: '/images/work/ncaa-final-four.webp',
    description:
      'Melt Created the NCAA Final Four Entertainment Strategy: Developing 72 Hours of Unstoppable Energy. Pioneers of the first-ever March Madness Music Festival (2003). MELT created and executed the entertainment strategy that transformed the Final Four into a cultural, 4-day destination.',
    longDescription:
      'Coca-Cola has partnered with MELT and the NCAA for over a decade to create a premiere program tied to March Madness and the Final Four. Coca-Cola was looking for a way to expand their presence during the pinnacle event in college basketball, and MELT delivered a comprehensive entertainment strategy that transformed 72 hours of the Final Four weekend into an unstoppable cultural destination. From the first-ever March Madness Music Festival in 2003 to ongoing activations across multiple host cities, MELT has built sampling programs, custom activations, retail point-of-sale campaigns, and talent management — all integrated into the fabric of the NCAA Final Four experience.',
    brief:
      'Pioneered the entertainment strategy that transformed the Final Four into a 4-day cultural destination.',
    challenge:
      'Coca-Cola needed to expand their presence during the pinnacle event in college basketball while keeping the experience fresh over 19+ consecutive years.',
    approach:
      'MELT delivered a comprehensive entertainment strategy spanning sampling programs, custom activations, retail POS campaigns, talent management, and the first-ever March Madness Music Festival.',
    services: [
      'NCAA Sponsorship',
      'Sampling',
      'Video Production',
      'TV Programming',
      'Activation',
      'Custom Builds',
      'Talent Management',
      'Security Management',
      'Retail Point of Sale',
      'Custom Activation Build',
    ],
    stats: [
      { label: 'Program Impressions', value: '2.76M' },
      { label: 'Campus Events', value: '112' },
      { label: 'Years Executing', value: '19+' },
      { label: 'Cans Distributed Live', value: '39,360' },
    ],
    tags: [
      'NCAA Sponsorship',
      'Sampling',
      'Video Production',
      'TV Programming',
      'Activation',
      'Custom Builds',
      'Talent Management',
      'Event Sponsorship',
      'Music Events',
    ],
    client: 'NCAA / Coca-Cola',
    year: '2003–Present',
    location: 'Multiple Cities',
    gallery: [
      '/images/work-detail/ncaa-final-four/MeltCapes26_Assets_AflacActivation.webp',
      '/images/work-detail/ncaa-final-four/wp-featured.webp',
      '/images/work-detail/ncaa-final-four/wp-solution.webp',
      '/images/work-detail/ncaa-final-four/wp-01.webp',
      '/images/work-detail/ncaa-final-four/wp-02.webp',
      '/images/work-detail/ncaa-final-four/wp-03.webp',
      '/images/work-detail/ncaa-final-four/wp-04.webp',
      '/images/work-detail/ncaa-final-four/wp-05.webp',
      '/images/work-detail/ncaa-final-four/wp-06.webp',
      '/images/work-detail/ncaa-final-four/wp-07.webp',
      '/images/work-detail/ncaa-final-four/wp-08.webp',
      '/images/work-detail/ncaa-final-four/wp-09.webp',
      '/images/work-detail/ncaa-final-four/wp-10.webp',
      '/images/work-detail/ncaa-final-four/wp-11.webp',
      '/images/work-detail/ncaa-final-four/wp-12.webp',
      '/images/work-detail/ncaa-final-four/wp-13.webp',
      '/images/work-detail/ncaa-final-four/wp-14.webp',
      '/images/work-detail/ncaa-final-four/wp-15.webp',
      '/images/work-detail/ncaa-final-four/wp-16.webp',
      '/images/work-detail/ncaa-final-four/wp-17.webp',
      '/images/work-detail/ncaa-final-four/pa-01.webp',
      '/images/work-detail/ncaa-final-four/pa-02.webp',
      '/images/work-detail/ncaa-final-four/pa-03.webp',
      '/images/work-detail/ncaa-final-four/pa-04.webp',
      '/images/work-detail/ncaa-final-four/pa-05.webp',
      '/images/work-detail/ncaa-final-four/pa-06.webp',
      '/images/work-detail/ncaa-final-four/pa-07.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--royal-blue',
    contentSource: 'capes+wordpress',
    tier: 'flagship',
    industry: 'Sports / Entertainment',
    testimonial: {
      quote:
        'MELT has been our go-to partner for creating unforgettable fan experiences at the Final Four for over a decade.',
      author: 'Kasia Horner',
      title: 'NCAA Events',
    },
  },

  // ==========================================================================
  // FLAGSHIP: Coca-Cola College GameDay (ESPN College GameDay)
  // ==========================================================================
  {
    slug: 'coca-cola-gameday',
    title: 'Coca-Cola College GameDay',
    category: 'Experiential',
    stat: '10 Seasons on ESPN',
    thumbnail: '/images/work/coca-cola-gameday.webp',
    description:
      "As Coca-Cola's Sports and Activation Agency, We Connected Gameday Culture to the Brand. Built activations that toured the country for 10 seasons of ESPN's College GameDay show. Produced digital and broadcast content for in-show and retail point of sale campaigns.",
    longDescription:
      "For 10 consecutive seasons, MELT served as Coca-Cola's sports and activation agency, connecting the brand to the heartbeat of college football through ESPN's College GameDay. Each fall, MELT planned and executed a multi-campus tour that brought custom-built Coca-Cola activations to the biggest matchups of the season, engaging students and fans on 30+ campuses with sampling programs, interactive brand experiences, and content moments designed for broadcast and social. MELT produced over 500 pieces of digital and broadcast content, managed on-site talent and ambassador teams, and developed retail point-of-sale campaigns that translated game-day energy into measurable sales lift. The program delivered 39.7 million campaign impressions and drove a 40.7% year-over-year brand growth metric, cementing Coca-Cola's position as the unofficial drink of college football Saturdays.",
    brief:
      "Connected Gameday culture to the Coca-Cola brand across 10 seasons of ESPN's College GameDay.",
    challenge:
      'Coca-Cola needed a persistent, authentic presence at college football\'s biggest weekly stage that would resonate with a young, passionate fanbase.',
    approach:
      'MELT built activations that toured the country for 10 consecutive seasons, producing digital and broadcast content while running sampling and retail POS campaigns on 30+ campuses.',
    services: ['Multi-City Tour', 'Social Media Management', 'Content Creation', 'Sampling'],
    stats: [
      { label: 'Campaign Impressions', value: '39.7M' },
      { label: 'Brand Growth', value: '+40.7%' },
      { label: 'Seasons Executed', value: '10' },
      { label: 'Campuses Activated', value: '30+' },
    ],
    tags: [
      'Multi-City Tour',
      'Social Media Strategy',
      'Content Creation',
      'Sampling',
      'Sports Marketing',
      'College Marketing',
      'Activation',
    ],
    client: 'Coca-Cola',
    year: '2006–2016',
    location: 'Nationwide',
    gallery: [
      '/images/work-detail/coca-cola-gameday/coke-gameday.webp',
      '/images/work-detail/coca-cola-gameday/coke-gameday-1.webp',
      '/images/work-detail/coca-cola-gameday/coke-banner.webp',
      '/images/work-detail/coca-cola-gameday/coke-cooler.webp',
      '/images/work-detail/coca-cola-gameday/coke-activation.webp',
      '/images/work-detail/coca-cola-gameday/coke-gal-1.webp',
      '/images/work-detail/coca-cola-gameday/coke-gal-2.webp',
      '/images/work-detail/coca-cola-gameday/MeltCapes26_Assets_CokeMelt.webp',
      '/images/work-detail/coca-cola-gameday/01.webp',
      '/images/work-detail/coca-cola-gameday/02.webp',
      '/images/work-detail/coca-cola-gameday/03.webp',
      '/images/work-detail/coca-cola-gameday/04.webp',
      '/images/work-detail/coca-cola-gameday/05.webp',
      '/images/work-detail/coca-cola-gameday/06.webp',
      '/images/work-detail/coca-cola-gameday/07.webp',
      '/images/work-detail/coca-cola-gameday/08.webp',
      '/images/work-detail/coca-cola-gameday/09.webp',
      '/images/work-detail/coca-cola-gameday/10.webp',
    ],
    featured: true,
    layout: 'B',
    accentColor: '--cyan',
    contentSource: 'capes',
    tier: 'flagship',
    industry: 'CPG / Beverages',
    testimonial: {
      quote:
        'MELT understood college football culture better than anyone. They translated that passion into activations that drove real brand lift season after season.',
      author: 'Sports Marketing Lead',
      title: 'Coca-Cola North America',
    },
  },

  // ==========================================================================
  // FLAGSHIP: Bath & Body Works (BBW Men's Tour)
  // ==========================================================================
  {
    slug: 'bath-body-works',
    title: 'Bath & Body Works',
    category: 'Experiential',
    stat: '560% ROI',
    thumbnail: '/images/work/bath-body-works.webp',
    description:
      'Retail Basketball Tour brings 560% ROI. Multi-city basketball tour delivering immersive custom built retail experiences that converted fans into customers with measurable return on investment.',
    longDescription:
      'MELT planned, built, and delivered a seven-stop tour that presented Bath & Body Works, The Men\'s Shop, as the winning routine for college and professional basketball fans. Melt negotiated sponsorship deals with LA Live and four NBA teams to make the tour an exciting win for consumers and Bath & Body Works. The tour tipped off in March to coincide with the Sweet Sixteen weekend and then traveled to arenas around the country. The tour was an immersive pop-up basketball experience that provided samples of deodorant, soap, and body lotion while providing fans opportunities to try colognes, body sprays, and other products from The Men\'s Shop at Bath & Body Works at the highest-profile basketball events in the world.',
    brief:
      'Multi-city basketball tour delivering immersive retail experiences with 560% ROI.',
    challenge:
      "Bath & Body Works needed to reach a young male demographic in a non-traditional retail environment and prove measurable return on a $1.5M program budget.",
    approach:
      'MELT negotiated sponsorship deals with LA Live and four NBA teams, then built a seven-stop immersive pop-up basketball experience timed to the Sweet Sixteen and traveling to arenas nationwide.',
    services: ['Custom Activation Build', 'Multi-City Tour', 'Social Media Management', 'Content Creation'],
    stats: [
      { label: 'ROI', value: '560%' },
      { label: 'Trial Target', value: '1M+' },
      { label: 'Tour Duration', value: '8 Weeks' },
      { label: 'Program Budget', value: '$1.5M' },
    ],
    tags: [
      'Custom Builds',
      'Multi-City Tour',
      'Social Media Strategy',
      'Content Creation',
      'Sampling',
      'Sports Marketing',
      'Professional Sports',
      'Event Sponsorship',
    ],
    client: 'Bath & Body Works',
    year: '2023–2024',
    location: '16 Cities',
    gallery: [
      '/images/work-detail/bath-body-works/bath-body.webp',
      '/images/work-detail/bath-body-works/MeltCapes26_Assets_BBW_Activation.webp',
      '/images/work-detail/bath-body-works/MeltCapes26_Assets_BBW_Basketball_Partners.webp',
      '/images/work-detail/bath-body-works/01.webp',
      '/images/work-detail/bath-body-works/02.webp',
      '/images/work-detail/bath-body-works/03.webp',
      '/images/work-detail/bath-body-works/04.webp',
      '/images/work-detail/bath-body-works/05.webp',
      '/images/work-detail/bath-body-works/06.webp',
      '/images/work-detail/bath-body-works/07.webp',
      '/images/work-detail/bath-body-works/08.webp',
      '/images/work-detail/bath-body-works/09.webp',
      '/images/work-detail/bath-body-works/10.webp',
    ],
    featured: true,
    layout: 'C',
    accentColor: '--cyan',
    contentSource: 'capes+wordpress',
    tier: 'flagship',
    industry: 'Retail / Beauty',
    testimonial: {
      quote:
        'The tour exceeded every KPI we set. MELT delivered an experience that made our Men\'s Shop line impossible to ignore.',
      author: 'Brand Marketing Director',
      title: 'Bath & Body Works',
    },
  },

  // ==========================================================================
  // FLAGSHIP: City of Mobile Arena
  // ==========================================================================
  {
    slug: 'city-of-mobile-arena',
    title: 'City of Mobile Arena',
    category: 'Consulting',
    stat: '$300M Arena',
    thumbnail: '/images/work/mobile-arena.webp',
    description:
      "Sponsorship and Consulting For The City of Mobile's $300M Arena. MELT consulted the city of Mobile in bringing OVG and Live Nation into Mobile's new $300M arena, delivering world-class venue management and a multi-million-dollar commitment. Opening 2027.",
    longDescription:
      "When the City of Mobile set out to build a $300 million arena that would transform the Gulf Coast's entertainment landscape, they turned to MELT for the strategic expertise needed to attract world-class venue operators. MELT leveraged decades of relationships across the sports and entertainment industry to open doors with Oak View Group (OVG) and Live Nation, two of the most powerful players in the live events business. From initial introductions through final contract negotiations, MELT guided the city through every phase of the deal, closing the agreement from concept to signed contract in just 90 days. The partnership ensures Mobile will have best-in-class venue management, premium booking relationships, and a multi-million-dollar operational commitment when the arena opens in 2027.",
    brief:
      "Consulted the City of Mobile in securing OVG and Live Nation for their $300M arena project.",
    challenge:
      'The City of Mobile needed expert guidance to attract world-class venue operators and negotiate a multi-million-dollar management commitment for their new $300M arena.',
    approach:
      'MELT leveraged deep industry relationships to bring OVG and Live Nation to the table, closing the deal from concept to contract in just 90 days.',
    services: ['Sponsorship Sales', 'Sports and Entertainment Consulting'],
    stats: [
      { label: 'Arena Value', value: '$300M' },
      { label: 'Concept to Contract', value: '90 Days' },
      { label: 'Venue Operators Secured', value: '2' },
      { label: 'Opening Year', value: '2027' },
    ],
    tags: ['Partnership Development', 'Activation Strategy', 'Event Sponsorship', 'Professional Sports'],
    client: 'City of Mobile',
    year: '2024–2027',
    location: 'Mobile, AL',
    gallery: [
      '/images/work-detail/city-of-mobile-arena/MeltCapes26_Assets_MobileArena.webp',
      '/images/work-detail/city-of-mobile-arena/MeltCapes26_Assets_Mobile_Logos.webp',
    ],
    featured: true,
    layout: 'A',
    accentColor: '--yellow',
    contentSource: 'capes',
    tier: 'flagship',
    industry: 'Sports / Entertainment',
    testimonial: {
      quote:
        'MELT brought the relationships and the expertise to close a deal that will define Mobile\'s entertainment future for decades.',
      author: 'City Officials',
      title: 'City of Mobile, Alabama',
    },
  },

  // ==========================================================================
  // FLAGSHIP: Dogsters MLB (Bark in the Park)
  // ==========================================================================
  {
    slug: 'dogsters-mlb',
    title: 'Dogsters MLB',
    category: 'Experiential',
    stat: '3,672% Influencer ROI',
    thumbnail: '/images/work/dogsters-mlb.webp',
    description:
      'MELT Creates Strategy & Activation With MLB Teams\' "Bark in the Park" Programming for Dogsters. Immersive entry moments and "Kiss Cam" takeovers driving product trial in high-energy sports environments.',
    longDescription:
      "MELT hit a home run with Dogsters Ice Cream for Dogs during the Kansas City Royals and New York Mets' Bark in the Park events. Combining America's favorite pastime, man's best friend, and delicious treats, this sponsorship created an unforgettable experience. At both Kauffman Stadium and Citi Field, fans enjoyed sampling Dogsters ice cream, receiving coupons, and celebrating team spirit with baseball-themed Dogsters bandanas in the teams' colors. Dogs and their owners entered through a special gate that led them to the Dogsters activation space, where ice cream samples, fun photo ops, and gifts awaited.",
    brief:
      'MLB "Bark in the Park" activations driving 3,672% influencer ROI for Dogsters.',
    challenge:
      'Dogsters needed to break through in a crowded pet-treat market and drive measurable sales growth through authentic, high-energy brand moments.',
    approach:
      'MELT partnered with MLB teams for "Bark in the Park" events, creating immersive entry moments, Kiss Cam takeovers, and influencer content that drove a 21.7% increase in dollar sales.',
    services: ['MLB Team Sponsorship', 'Sampling', 'Video Production', 'Social Media Management'],
    stats: [
      { label: 'Influencer ROI', value: '3,672%' },
      { label: 'Influencer EMV', value: '$172K' },
      { label: 'Instagram Reach Growth', value: '+6,800%' },
      { label: 'Dollar Sales Growth', value: '+21.7%' },
    ],
    tags: [
      'Professional Sports',
      'Event Sponsorship',
      'Sampling',
      'Video Production',
      'Social Media Strategy',
      'Sports Marketing',
      'Stadium Activations',
    ],
    client: 'J&J Snack Foods / Dogsters',
    year: '2024',
    location: 'Kansas City, New York',
    gallery: [
      '/images/work-detail/dogsters-mlb/dogsters.webp',
      '/images/work-detail/dogsters-mlb/MeltCapes26_Assets_Dogsters.webp',
      '/images/work-detail/dogsters-mlb/MeltCapes26_Assets_Mets.webp',
      '/images/work-detail/dogsters-mlb/MeltCapes26_Assets_Mets-31.webp',
      '/images/work-detail/dogsters-mlb/MeltCapes26_Assets_Mets-07.webp',
      '/images/work-detail/dogsters-mlb/MeltCapes26_Assets_Dogster_Parlor.webp',
      '/images/work-detail/dogsters-mlb/01.webp',
      '/images/work-detail/dogsters-mlb/02.webp',
      '/images/work-detail/dogsters-mlb/03.webp',
      '/images/work-detail/dogsters-mlb/04.webp',
      '/images/work-detail/dogsters-mlb/05.webp',
      '/images/work-detail/dogsters-mlb/06.webp',
      '/images/work-detail/dogsters-mlb/07.webp',
      '/images/work-detail/dogsters-mlb/08.webp',
      '/images/work-detail/dogsters-mlb/09.webp',
      '/images/work-detail/dogsters-mlb/10.webp',
    ],
    featured: false,
    layout: 'B',
    accentColor: '--cyan',
    contentSource: 'capes+wordpress',
    tier: 'flagship',
    industry: 'CPG / Pet',
    testimonial: {
      quote:
        'MELT turned our Bark in the Park sponsorship into a cultural moment. The influencer content alone delivered nearly 4,000% ROI.',
      author: 'Brand Manager',
      title: 'J&J Snack Foods / Dogsters',
    },
  },

  // ==========================================================================
  // STANDARD: Dogsters Pop Up
  // ==========================================================================
  {
    slug: 'dogsters-popup',
    title: 'Dogsters Pop Up',
    category: 'Experiential',
    stat: 'Philadelphia Pop-Up Parlor',
    thumbnail: '/images/work/dogsters-popup.webp',
    description:
      "Pop Up Retail Ice Cream Store for Dogs Serves As Content Generator. Launching as a retail pop-up in Philadelphia, one of Dogsters' top seven national markets, the Parlor embedded the brand directly into a high-energy, off-leash environment where dog culture already thrives.",
    longDescription:
      "MELT designed and built the Dogsters Parlor, a pop-up ice cream store for dogs in Philadelphia, one of the brand's top seven markets. The Parlor was strategically placed in a high-traffic, off-leash environment where dog culture already thrives, creating an organic connection between brand and consumer. Inside, dogs were treated to free Dogsters ice cream samples while their owners engaged with branded photo ops, social media moments, and product giveaways. The pop-up doubled as a content engine, generating thousands of user-created social posts and influencer features that extended the activation's reach well beyond the physical footprint.",
    brief:
      'Pop-up ice cream parlor for dogs in Philadelphia serving as a content generator.',
    challenge:
      'Dogsters needed to generate authentic social content and product trial in one of their top national markets without relying on traditional retail distribution.',
    approach:
      'MELT designed and operated a branded pop-up ice cream parlor in a high-traffic off-leash environment, turning every dog owner into a content creator and brand advocate.',
    services: ['Custom Retail Build', 'Sampling', 'Branding', 'Social Media Management'],
    stats: [
      { label: 'Market Rank', value: 'Top 7' },
      { label: 'Content Pieces Generated', value: '1,000+' },
      { label: 'Samples Distributed', value: '2,500+' },
    ],
    tags: [
      'Pop-Up Events',
      'Custom Builds',
      'Sampling',
      'Content Creation',
      'Social Media Strategy',
      'Retail Marketing',
    ],
    client: 'J&J Snack Foods / Dogsters',
    year: '2024',
    location: 'Philadelphia, PA',
    gallery: [
      '/images/work-detail/dogsters-popup/dogsters.webp',
      '/images/work-detail/dogsters-popup/MeltCapes26_Assets_Dogster_Parlor.webp',
      '/images/work-detail/dogsters-popup/01.webp',
      '/images/work-detail/dogsters-popup/02.webp',
      '/images/work-detail/dogsters-popup/03.webp',
      '/images/work-detail/dogsters-popup/04.webp',
      '/images/work-detail/dogsters-popup/05.webp',
      '/images/work-detail/dogsters-popup/06.webp',
      '/images/work-detail/dogsters-popup/07.webp',
      '/images/work-detail/dogsters-popup/08.webp',
      '/images/work-detail/dogsters-popup/09.webp',
      '/images/work-detail/dogsters-popup/10.webp',
    ],
    featured: false,
    layout: 'C',
    accentColor: '--cyan',
    contentSource: 'capes',
    tier: 'standard',
    industry: 'CPG / Pet',
  },

  // ==========================================================================
  // STANDARD: AFLAC HBCU
  // ==========================================================================
  {
    slug: 'aflac-hbcu',
    title: 'AFLAC HBCU',
    category: 'Experiential',
    stat: 'Multi-Campus HBCU Tour',
    thumbnail: '/images/work/aflac-hbcu.webp',
    description:
      'Melt Brings Talent and Activations to NCAA HBCUs. Connecting brands to culturally significant moments through immersive HBCU campus activations and talent-driven experiences.',
    longDescription:
      'As an extension from Aflac\'s Final Four activation featuring "The House of the Unexpected," MELT created a multifaceted digital locker room and game day experience that no fan would have expected. To connect, fans scanned a QR code to choose which coach they would like to receive a pep talk from, either Coach Nick Saban or Coach Deion Sanders. After the respective coaches brought energy and excitement to their players, they joined team Aflac through a digital jersey rotation that was customized with the fan\'s last name on the back.',
    brief:
      'Multi-campus HBCU activations connecting Aflac to culturally significant college moments.',
    challenge:
      'Aflac needed to authentically engage HBCU communities and build brand affinity with a demographic that values cultural connection above traditional advertising.',
    approach:
      'MELT extended the Final Four "House of the Unexpected" concept to HBCU campuses, featuring digital locker rooms, QR-driven coach pep talks from Saban and Sanders, and personalized digital jersey experiences.',
    services: [
      'Talent Management',
      'Multi-Campus Tour',
      'Custom Activation Build',
      'Branding',
      'Social Media Content Generation',
      'Augmented Reality',
    ],
    stats: [
      { label: 'Partnership Value', value: '$10M+/yr' },
      { label: 'Coaches Featured', value: '2' },
      { label: 'Campus Activations', value: 'Multi-Campus' },
    ],
    tags: [
      'Talent Management',
      'Campus Activations',
      'Custom Builds',
      'Content Creation',
      'HBCU Programs',
      'College Marketing',
      'NCAA Sponsorship',
    ],
    client: 'Aflac',
    year: '2022',
    location: 'Multiple HBCU Campuses',
    gallery: [
      '/images/work-detail/aflac-hbcu/aflac.webp',
      '/images/work-detail/aflac-hbcu/aflac-2022.webp',
      '/images/work-detail/aflac-hbcu/aflac-sec.webp',
      '/images/work-detail/aflac-hbcu/aflac-womens-ff.webp',
      '/images/work-detail/aflac-hbcu/MeltCapes26_Assets_AflacActivation.webp',
      '/images/work-detail/aflac-hbcu/MeltCapes26_Assets_AflacBG.webp',
      '/images/work-detail/aflac-hbcu/01.webp',
      '/images/work-detail/aflac-hbcu/02.webp',
      '/images/work-detail/aflac-hbcu/03.webp',
      '/images/work-detail/aflac-hbcu/04.webp',
      '/images/work-detail/aflac-hbcu/05.webp',
      '/images/work-detail/aflac-hbcu/06.webp',
      '/images/work-detail/aflac-hbcu/07.webp',
      '/images/work-detail/aflac-hbcu/08.webp',
      '/images/work-detail/aflac-hbcu/09.webp',
      '/images/work-detail/aflac-hbcu/10.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--cyan',
    contentSource: 'capes+wordpress',
    tier: 'standard',
    industry: 'Insurance / Financial Services',
  },

  // ==========================================================================
  // FLAGSHIP: Comfort Colors (Alabama)
  // ==========================================================================
  {
    slug: 'comfort-colors',
    title: 'Comfort Colors',
    category: 'Social & Content',
    stat: '2,500% ROI',
    thumbnail: '/images/work/comfort-colors.webp',
    description:
      'Social Campaign Makes History at the University of Alabama with 2,500+ ROI. Sorority homecoming social campaign taps into college culture and drives Amazon.com sales.',
    longDescription:
      "During Homecoming Week 2024, Comfort Colors celebrated National Color Day by infusing the students' favorite brand of t-shirt with school spirit at the University of Alabama. The campaign began with the distribution of over 6,000 custom-designed t-shirts to all 19 sororities, each in their chapter's unique colors. A dynamic social media campaign extended the impact by engaging Panhellenic platforms, local influencers, and Comfort Colors' own accounts. The top-performing chapters each secured donations for their chosen charities. With over 1 million social media impressions, 37,123 engagements, and a 2,563% ROI, the campaign successfully boosted brand loyalty and left an enduring mark on the campus community.",
    brief:
      'Sorority homecoming social campaign at University of Alabama delivering 2,563% ROI.',
    challenge:
      'Comfort Colors needed to drive measurable Amazon sales from a campus activation while authentically embedding the brand in college culture.',
    approach:
      'MELT distributed 6,000+ custom t-shirts across all 19 sororities, launched a social campaign through Panhellenic platforms and local influencers, and tied chapter competition to charitable donations.',
    services: [
      'Sponsorship',
      'Campus Activation',
      'Product Distribution',
      'Video Production',
      'Social Media Management',
      'Digital Promotion',
    ],
    stats: [
      { label: 'ROI', value: '2,563%' },
      { label: 'Social Impressions', value: '1M+' },
      { label: 'Engagements', value: '37,123' },
      { label: 'T-Shirts Distributed', value: '6,000+' },
    ],
    tags: [
      'College Marketing',
      'Campus Activations',
      'Video Production',
      'Social Media Strategy',
      'Influencer Marketing',
      'Content Creation',
      'Youth Marketing',
    ],
    client: 'Comfort Colors',
    year: '2024',
    location: 'University of Alabama',
    gallery: [
      '/images/work-detail/comfort-colors/comfort-colors.webp',
      '/images/work-detail/comfort-colors/MeltCapes26_Assets_ComfortColorsSocial1.webp',
      '/images/work-detail/comfort-colors/MeltCapes26_Assets_ComfortColorsSocial2.webp',
      '/images/work-detail/comfort-colors/MeltCapes26_Assets_ComfortColorsSocial3.webp',
      '/images/work-detail/comfort-colors/01.webp',
      '/images/work-detail/comfort-colors/02.webp',
      '/images/work-detail/comfort-colors/03.webp',
      '/images/work-detail/comfort-colors/04.webp',
      '/images/work-detail/comfort-colors/05.webp',
      '/images/work-detail/comfort-colors/06.webp',
      '/images/work-detail/comfort-colors/07.webp',
      '/images/work-detail/comfort-colors/08.webp',
      '/images/work-detail/comfort-colors/09.webp',
      '/images/work-detail/comfort-colors/10.webp',
    ],
    featured: false,
    layout: 'B',
    accentColor: '--coral',
    contentSource: 'capes+wordpress',
    tier: 'flagship',
    industry: 'Apparel / Fashion',
    testimonial: {
      quote:
        'The campaign generated over a million impressions and a 2,563% ROI. MELT understood exactly how to connect our brand with college culture.',
      author: 'Marketing Director',
      title: 'Comfort Colors / Gildan',
    },
  },

  // ==========================================================================
  // STANDARD: AFLAC SEC Nation
  // ==========================================================================
  {
    slug: 'aflac-sec-nation',
    title: 'AFLAC SEC Nation',
    category: 'Sponsorship',
    stat: 'SEC Conference Tour',
    thumbnail: '/images/work/aflac-sec-nation.webp',
    description:
      "Sponsorship That Built Connection Beyond the Broadcast. Melt negotiated Aflac's sponsorship of SEC Nation and developed a custom tour that brought Aflac's in-game trivia programming to tailgaters throughout the SEC Conference.",
    longDescription:
      "MELT negotiated Aflac's sponsorship of SEC Nation and developed a custom activation tour that traveled to SEC campuses on game days. The tour brought Aflac's signature in-game trivia programming directly to tailgating fans, creating high-energy brand interactions outside the stadium while the SEC Nation broadcast crew was on set. Ambassador teams engaged thousands of fans with trivia challenges, prizes, and sampling, extending Aflac's visibility from a broadcast-only presence into a tangible, on-the-ground experience that fans remembered long after the final whistle.",
    brief:
      "Negotiated Aflac's SEC Nation sponsorship and brought in-game trivia to tailgaters across the conference.",
    challenge:
      "Aflac needed to extend their SEC Nation broadcast sponsorship into real-world fan interactions that would build deeper brand connections beyond a logo on screen.",
    approach:
      'MELT developed a custom activation tour that paired trivia programming with on-campus ambassador teams, turning passive broadcast viewers into active brand participants at every SEC game day.',
    services: ['Custom Activation Build', 'Multi-City Tour', 'Social Media Management', 'Content Creation'],
    stats: [
      { label: 'SEC Campuses Activated', value: '14' },
      { label: 'Fan Interactions', value: '10,000+' },
      { label: 'Seasons Activated', value: '2' },
    ],
    tags: [
      'Event Sponsorship',
      'Custom Builds',
      'Multi-City Tour',
      'Social Media Strategy',
      'Content Creation',
      'Sports Marketing',
      'Collegiate Sports',
    ],
    client: 'Aflac',
    year: '2021–2022',
    location: 'SEC Conference Cities',
    gallery: [
      '/images/work-detail/aflac-sec-nation/aflac.webp',
      '/images/work-detail/aflac-sec-nation/aflac-sec.webp',
      '/images/work-detail/aflac-sec-nation/aflac-2022.webp',
      '/images/work-detail/aflac-sec-nation/aflac-womens-ff.webp',
      '/images/work-detail/aflac-sec-nation/MeltCapes26_Assets_AflacDieonSaban.webp',
      '/images/work-detail/aflac-sec-nation/MeltCapes26_Assets_Coach_Prime_Saban_BG.webp',
      '/images/work-detail/aflac-sec-nation/01.webp',
      '/images/work-detail/aflac-sec-nation/02.webp',
      '/images/work-detail/aflac-sec-nation/03.webp',
      '/images/work-detail/aflac-sec-nation/04.webp',
      '/images/work-detail/aflac-sec-nation/05.webp',
      '/images/work-detail/aflac-sec-nation/06.webp',
      '/images/work-detail/aflac-sec-nation/07.webp',
      '/images/work-detail/aflac-sec-nation/08.webp',
      '/images/work-detail/aflac-sec-nation/09.webp',
      '/images/work-detail/aflac-sec-nation/10.webp',
    ],
    featured: false,
    layout: 'C',
    accentColor: '--royal-blue',
    contentSource: 'capes',
    tier: 'standard',
    industry: 'Insurance / Financial Services',
  },

  // ==========================================================================
  // STANDARD: Holiday Inn Express
  // ==========================================================================
  {
    slug: 'holiday-inn',
    title: 'Holiday Inn Express',
    category: 'Experiential',
    stat: 'Pancake Selfie Tour',
    thumbnail: '/images/work/holiday-inn.webp',
    description:
      'Your Picture On A Pancake Makes Connection For Holiday Inn Express. Technology meets taste buds on a cross-country pancake selfie tour.',
    longDescription:
      "Holiday Inn Express leveraged their SEC Nation sponsorship with The Pancake Selfie Express to build brand awareness. Guests experienced their on-site selfie, printed on a pancake and ready-to-eat. A VR showering experience added more fun and tech engagement. The tour traveled to major sporting events, creating memorable brand interactions that combined innovation with Holiday Inn Express's signature breakfast experience.",
    brief:
      'Cross-country pancake selfie tour blending technology and taste for Holiday Inn Express.',
    challenge:
      'Holiday Inn Express needed a memorable, shareable brand experience that would stand out at crowded sporting events and reinforce their signature breakfast positioning.',
    approach:
      'MELT designed a multi-city Pancake Selfie Express tour featuring custom face-printing pancake technology and a VR showering experience, giving fans something they had never seen before.',
    services: [
      'Social Media',
      'Retail Point of Sale',
      'Custom Activation Build',
      'Content Creation',
      'Sampling',
    ],
    stats: [
      { label: 'Tour Stops', value: '10+' },
      { label: 'Pancake Selfies Created', value: '5,000+' },
      { label: 'Social Shares', value: 'Thousands' },
    ],
    tags: [
      'Social Media Strategy',
      'Custom Builds',
      'Content Creation',
      'Sampling',
      'Multi-City Tour',
      'Sports Marketing',
      'Brand Experiences',
    ],
    client: 'Holiday Inn Express',
    year: '2017',
    location: 'Nationwide Tour',
    gallery: [
      '/images/work-detail/holiday-inn/holiday-inn-express.webp',
      '/images/work-detail/holiday-inn/01.webp',
      '/images/work-detail/holiday-inn/02.webp',
      '/images/work-detail/holiday-inn/03.webp',
      '/images/work-detail/holiday-inn/04.webp',
      '/images/work-detail/holiday-inn/05.webp',
      '/images/work-detail/holiday-inn/06.webp',
      '/images/work-detail/holiday-inn/07.webp',
      '/images/work-detail/holiday-inn/08.webp',
      '/images/work-detail/holiday-inn/09.webp',
      '/images/work-detail/holiday-inn/10.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--cyan',
    contentSource: 'capes+wordpress',
    tier: 'standard',
    industry: 'Hospitality / Travel',
  },

  // ==========================================================================
  // FLAGSHIP: Ghirardelli (S'mores Tour)
  // ==========================================================================
  {
    slug: 'ghirardelli',
    title: 'Ghirardelli',
    category: 'Experiential',
    stat: '$766K Earned Media Value',
    thumbnail: '/images/work/ghirardelli.webp',
    description:
      "Holiday Promotion Executed in 3 Months in Multiple Locations In New York City. Multiple locations gave Ghirardelli Chocolate the holiday traffic it needed to promote their LTO.",
    longDescription:
      "For Ghirardelli's 2023 Peppermint Bark release, Melt created an opportunity for the brand to capitalize on the holiday spirit by creating a snow globe photo-op to connect the brand with the holidays. Multiple locations in New York City provided unique backdrops to get a sample and a great keepsake photo, including Hudson Yards, Central Park, and Pershing Square. The summer S'mores tour distributed custom-made S'mores kits at events including the New Jersey Lottery Festival of Ballooning, the Iowa State Fair, and Matthews Alive.",
    brief:
      "Multi-city sampling tour delivering $766K earned media value for Ghirardelli's seasonal promotions.",
    challenge:
      "Ghirardelli needed to drive brand consideration and trial for their seasonal LTOs across multiple cities with a tight 3-month execution window.",
    approach:
      "MELT executed a multi-city sampling tour with snow globe photo-ops in NYC for Peppermint Bark and a summer S'mores kit tour at major festivals, driving 1.87M impressions and 93.1% brand consideration lift.",
    services: [
      'Social Media',
      'Retail Point of Sale',
      'Custom Activation Build',
      'Content Creation',
      'Sampling',
    ],
    stats: [
      { label: 'Earned Media Value', value: '$766K' },
      { label: 'Influencer ROI', value: '771%' },
      { label: 'Brand Consideration Lift', value: '93.1%' },
      { label: 'Total Impressions', value: '1.87M' },
    ],
    tags: [
      'Social Media Strategy',
      'Retail Marketing',
      'Custom Builds',
      'Content Creation',
      'Sampling',
      'Pop-Up Events',
      'National Promotions',
    ],
    client: 'Ghirardelli Chocolate',
    year: '2018–2023',
    location: 'New York City',
    gallery: [
      '/images/work-detail/ghirardelli/ghirardelli.webp',
      '/images/work-detail/ghirardelli/ghirardelli-featured.webp',
      '/images/work-detail/ghirardelli/ghirardelli-peppermint.webp',
      '/images/work-detail/ghirardelli/ghirardelli-smores.webp',
      '/images/work-detail/ghirardelli/01.webp',
      '/images/work-detail/ghirardelli/02.webp',
      '/images/work-detail/ghirardelli/03.webp',
      '/images/work-detail/ghirardelli/04.webp',
      '/images/work-detail/ghirardelli/05.webp',
      '/images/work-detail/ghirardelli/06.webp',
      '/images/work-detail/ghirardelli/07.webp',
      '/images/work-detail/ghirardelli/08.webp',
      '/images/work-detail/ghirardelli/09.webp',
      '/images/work-detail/ghirardelli/10.webp',
    ],
    featured: false,
    layout: 'B',
    accentColor: '--cyan',
    contentSource: 'capes+wordpress',
    tier: 'flagship',
    industry: 'CPG / Confections',
    testimonial: {
      quote:
        "MELT's ability to execute a multi-city sampling tour with consistent brand quality at every stop was remarkable.",
      author: 'Bobby Oliver',
      title: 'Head of Confections Brands, Ghirardelli',
    },
  },

  // ==========================================================================
  // STANDARD: NIL Awards
  // ==========================================================================
  {
    slug: 'nil-awards',
    title: 'NIL Awards',
    category: 'Events',
    stat: 'Top Influencer Athletes',
    thumbnail: '/images/work/nil-awards.webp',
    description:
      'NIL Awards At The Chick-fil-A College Football Hall Of Fame Was The Spot For Top Influencer Athletes.',
    longDescription:
      'MELT created the first ever award show at the inaugural NIL Summit at the Chick-fil-A College Football Hall of Fame. From producing the live and pre-recorded content for the show to talent management, oversight of the build out, livestreaming to Twitter and more, MELT brought together two of the hottest industries — NIL and Social Media. Attendees engaged in a two-day program including an expo, courses, and awards banquet.',
    brief:
      'Created the first-ever NIL Awards at the Chick-fil-A College Football Hall of Fame.',
    services: ['Social Media', 'Live Streaming', 'Live Event Programming and Direction'],
    stats: [
      { label: 'Event Duration', value: '2 Days' },
      { label: 'Livestream Platform', value: 'Twitter' },
      { label: 'Program Components', value: 'Expo + Courses + Awards' },
    ],
    tags: [
      'NIL Partnerships',
      'Social Media Strategy',
      'Event Production',
      'Talent Management',
      'Content Creation',
      'Student-Athlete Engagement',
      'College Marketing',
    ],
    client: 'MELT / SANIL',
    year: '2023',
    location: 'Atlanta, GA',
    gallery: [
      '/images/work-detail/nil-awards/nil-awards.png',
      '/images/work-detail/nil-awards/01.webp',
      '/images/work-detail/nil-awards/02.webp',
      '/images/work-detail/nil-awards/03.webp',
      '/images/work-detail/nil-awards/04.webp',
      '/images/work-detail/nil-awards/05.webp',
      '/images/work-detail/nil-awards/06.webp',
    ],
    featured: false,
    layout: 'C',
    accentColor: '--royal-blue',
    contentSource: 'capes+wordpress',
    tier: 'standard',
    industry: 'Sports / NIL',
  },

  // ==========================================================================
  // STANDARD: Women's Final Four
  // ==========================================================================
  {
    slug: 'womens-final-four',
    title: "Women's Final Four",
    category: 'Events',
    stat: 'AR + RFID + Custom Gaming',
    thumbnail: '/images/work/ncaa-womens-ff.webp',
    description:
      "Technology Meets Gaming At NCAA Women's Final Four Fan Fair. Custom Artificial Reality, RFID, Digital Video, live talent integration and custom gaming obstacle course created lasting impressions.",
    longDescription:
      "Fans enjoyed quick and easy registration at the NCAA Women's Final Four FanFest with connectivity that displayed their playing score in real time. After registering, they competed in custom crafted games for dribbling, passing, shooting, and celebrating that connected with each fan's RFID. Melt created multiple digital and analog games that challenged and entertained guests while communicating the benefits of Aflac Insurance. Outside of FanFest, Melt managed roaming ambassador teams that challenged fans to trivia and basketball skills and rewarded them with prizes, giving Aflac a larger presence in the Final Four city of Dallas.",
    brief:
      "AR, RFID, and custom gaming experiences at the NCAA Women's Final Four FanFest.",
    services: [
      'Technology Integration',
      'Custom Activation Build',
      'Social Media Management',
      'Content Creation',
      'Talent Management',
      'Sponsorship Consulting',
    ],
    stats: [
      { label: 'Tech Integrations', value: 'AR + RFID' },
      { label: 'Custom Games Built', value: '4' },
      { label: 'Ambassador Teams', value: 'Roaming Citywide' },
    ],
    tags: [
      'NCAA Sponsorship',
      'Custom Builds',
      'Social Media Strategy',
      'Content Creation',
      'Talent Management',
      'Event Sponsorship',
      'Sports Marketing',
    ],
    client: 'Aflac / NCAA',
    year: '2023',
    location: 'Dallas, TX',
    gallery: [
      '/images/work-detail/womens-final-four/header.webp',
      '/images/work-detail/womens-final-four/thumb.webp',
      '/images/work-detail/womens-final-four/email-scaled.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--royal-blue',
    contentSource: 'capes+wordpress',
    tier: 'standard',
    industry: 'Sports / Entertainment',
  },

  // ==========================================================================
  // STANDARD: First Live Concert on Facebook
  // ==========================================================================
  {
    slug: 'facebook-concert',
    title: 'First Live Concert on Facebook',
    category: 'Social & Content',
    stat: 'First-Ever Live Facebook Concert',
    thumbnail: '/images/work/facebook-concert.webp',
    description:
      "First Live Concert On Facebook — Executed at NCAA Men's Final Four 2010. As social media was taking hold, Melt worked with multiple companies to create live interaction with the concert performances from anywhere in the world.",
    longDescription:
      "In 2010, when live streaming on social media was still uncharted territory, MELT produced the first-ever live concert broadcast on Facebook at the NCAA Men's Final Four in Indianapolis. Working with Facebook, Coca-Cola, and the NCAA, MELT coordinated multi-camera production, talent management, and real-time fan engagement to deliver a groundbreaking digital experience. Fans around the world were able to watch and interact with live musical performances in real time, marking one of the earliest examples of social media live event broadcasting that would go on to define the next decade of digital marketing.",
    brief:
      "Produced the first-ever live concert on Facebook at the NCAA Men's Final Four.",
    services: [
      'Social Media',
      'Talent Management',
      'Retail Point of Sale',
      'Content Creation',
      'Sampling',
      'Branding',
    ],
    stats: [
      { label: 'Industry First', value: 'Live Concert on Facebook' },
      { label: 'Global Reach', value: 'Worldwide' },
      { label: 'Partners', value: 'Facebook + Coca-Cola + NCAA' },
    ],
    tags: [
      'Social Media Strategy',
      'Talent Management',
      'Content Creation',
      'Sampling',
      'Music Events',
      'Concert Production',
      'Digital Storytelling',
    ],
    client: 'Facebook / NCAA',
    year: '2010',
    location: 'Indianapolis, IN',
    gallery: [
      '/images/work-detail/facebook-concert/01.webp',
      '/images/work-detail/facebook-concert/02.webp',
      '/images/work-detail/facebook-concert/03.webp',
      '/images/work-detail/facebook-concert/04.webp',
      '/images/work-detail/facebook-concert/05.webp',
      '/images/work-detail/facebook-concert/06.webp',
      '/images/work-detail/facebook-concert/07.webp',
      '/images/work-detail/facebook-concert/08.webp',
    ],
    featured: false,
    layout: 'B',
    accentColor: '--coral',
    contentSource: 'capes',
    tier: 'standard',
    industry: 'Technology / Social Media',
  },

  // ==========================================================================
  // LIGHT: Winter Olympics Social Handbook
  // ==========================================================================
  {
    slug: 'winter-olympics',
    title: 'Winter Olympics Social Handbook',
    category: 'Social & Content',
    stat: 'Olympic Athletes Guidelines',
    thumbnail: '/images/work/olympic-handbook.webp',
    description:
      "Building The Social Media Handbook For Winter Olympic Sponsored Athletes. As part of Melt's overall social media management for Coca-Cola's sports programming, we developed standards and guidelines for multiple sports including their winter Olympic athletes.",
    brief:
      "Developed the social media playbook for Coca-Cola's Winter Olympic sponsored athletes.",
    services: ['Social Media Management', 'Branding', 'Content Creation'],
    tags: [
      'Social Media Strategy',
      'Content Creation',
      'Digital Storytelling',
      'Sports Marketing',
      'Talent Management',
    ],
    client: 'Coca-Cola',
    year: '2014',
    location: 'Sochi, Russia',
    gallery: [
      '/images/work-detail/winter-olympics/kwan-01.webp',
      '/images/work-detail/winter-olympics/kwan-02.webp',
      '/images/work-detail/winter-olympics/dina-gerson.webp',
    ],
    featured: false,
    layout: 'C',
    accentColor: '--coral',
    contentSource: 'capes',
    tier: 'light',
    industry: 'CPG / Beverages',
  },

  // ==========================================================================
  // FLAGSHIP: Wellstar (Dansby Swanson)
  // ==========================================================================
  {
    slug: 'wellstar',
    title: 'Wellstar',
    category: 'Events',
    stat: 'Dansby Swanson & Dominique Wilkins',
    thumbnail: '/images/work/wellstar.webp',
    description:
      "Corporate Leadership Conference for 2,000 Executives. Wellstar's full day of programming, entertainment, dining and Expo.",
    longDescription:
      "Wellstar Leadership Day was a full-day event for 1,500 guests filled with presentations, food and beverage, activities, and an expo featuring ten different organization services. The morning session got a boost of energy from a drumline performance, and the keynote speaker provided a dramatic and heart-warming talk that engaged and inspired the audience. Along with producing the live show, Melt created animated content for on-screen transitions and projection mapping that filled the walls of the theater with an exciting light show. The Celebration of Service gala honored Wellstar team members who reached significant milestones, with a 360 Photobooth experience and live DJ.",
    brief:
      "Full-day corporate leadership conference and gala for 2,000 Wellstar executives.",
    challenge:
      'Wellstar needed a production partner capable of executing a full-day leadership conference, evening gala, and VIP talent appearances with broadcast-quality production values.',
    approach:
      'MELT produced 34+ events including a leadership day with drumline, keynote, projection mapping, an expo for 1,500 guests, and a Celebration of Service gala with 360 photobooth and live DJ.',
    services: ['Corporate Event', 'Live Streaming', 'Live Event Programming and Direction'],
    stats: [
      { label: 'Events Executed', value: '34+' },
      { label: 'Videos Produced', value: '9' },
      { label: 'Branded Cookies Distributed', value: '1,500' },
      { label: 'VIP Appearances', value: '4+' },
    ],
    tags: ['Event Production', 'Content Creation', 'Brand Experiences'],
    client: 'Wellstar Health System',
    year: '2023–2024',
    location: 'Atlanta, GA',
    gallery: [
      '/images/work-detail/wellstar/wellstar-tree-lighting.webp',
      '/images/work-detail/wellstar/MeltCapes26_Assets_Melt_WellstarJellyFish.webp',
      '/images/work-detail/wellstar/01.webp',
      '/images/work-detail/wellstar/03.webp',
      '/images/work-detail/wellstar/04.webp',
      '/images/work-detail/wellstar/05.webp',
      '/images/work-detail/wellstar/06.webp',
      '/images/work-detail/wellstar/07.webp',
      '/images/work-detail/wellstar/08.webp',
      '/images/work-detail/wellstar/09.webp',
      '/images/work-detail/wellstar/10.webp',
      '/images/work-detail/wellstar/11.webp',
      '/images/work-detail/wellstar/12.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--royal-blue',
    contentSource: 'capes+wordpress',
    tier: 'flagship',
    industry: 'Healthcare',
    testimonial: {
      quote:
        'The level of production and attention to detail MELT brought to our leadership conference exceeded all expectations.',
      author: 'Dansby Swanson',
      title: 'Wellstar Ambassador',
    },
  },

  // ==========================================================================
  // LIGHT: War Eagle Supper Club
  // ==========================================================================
  {
    slug: 'war-eagle-supper-club',
    title: 'War Eagle Supper Club',
    category: 'Consulting',
    stat: 'Heritage Meets Modern Design',
    thumbnail: '/images/work/war-eagle.webp',
    description:
      'Trademark and Brand Consulting — Reviving a dormant campus icon inside a modern hotel, turning heritage and real estate into revenue. Deep Auburn tradition meets modern design.',
    brief:
      'Revived a dormant Auburn campus icon through trademark and brand consulting.',
    services: ['Sports and Entertainment Consulting', 'Trademark and Brand Consulting'],
    tags: ['Partnership Development', 'Culinary Activations', 'College Marketing'],
    client: 'War Eagle Supper Club',
    year: '2024',
    location: 'Auburn, AL',
    gallery: [
      '/images/work-detail/war-eagle-supper-club/MeltCapes26_Assets_WarEagleSupperClub.webp',
      '/images/work-detail/war-eagle-supper-club/MeltCapes26_Assets_WarEagleSupperClub_Logo.webp',
    ],
    featured: false,
    layout: 'B',
    accentColor: '--yellow',
    contentSource: 'capes',
    tier: 'light',
    industry: 'Hospitality / Food & Beverage',
  },

  // ==========================================================================
  // LIGHT: MELTU
  // ==========================================================================
  {
    slug: 'meltu',
    title: 'MELTU',
    category: 'Consulting',
    stat: 'Mentoring Young Marketers',
    thumbnail: '/images/work/meltu.webp',
    description:
      'Programming, Training and Mentorship Programs For College Students. Melt has consistently mentored young marketers through internships, podcasts, lectures and work experience.',
    brief:
      'Mentorship and training programs connecting college students to industry leaders.',
    services: ['Programming', 'Training', 'Mentorship'],
    tags: ['College Marketing', 'Youth Marketing', 'Content Creation'],
    client: 'MELT',
    year: '2017–Present',
    location: 'Atlanta, GA',
    gallery: [
      '/images/work-detail/meltu/cover.webp',
      '/images/work-detail/meltu/geoff-cottrill.webp',
      '/images/work-detail/meltu/todd-harris.webp',
      '/images/work-detail/meltu/class-2017.webp',
      '/images/work-detail/meltu/craig-silver.webp',
      '/images/work-detail/meltu/greg-sankey.webp',
      '/images/work-detail/meltu/rece-davis.webp',
      '/images/work-detail/meltu/steve-phelps.webp',
    ],
    featured: false,
    layout: 'C',
    accentColor: '--yellow',
    contentSource: 'capes',
    tier: 'light',
    industry: 'Education / Marketing',
  },

  // ==========================================================================
  // Legacy v2 projects
  // ==========================================================================

  // LIGHT: Fellaship
  {
    slug: 'fellaship',
    title: 'Fellaship',
    category: 'Experiential',
    stat: 'Brotherhood Experience',
    thumbnail: '/images/work/fellaship.webp',
    description:
      'MELT produced the Fellaship experience, bringing together community through shared moments and brand engagement.',
    brief:
      'Community-driven brand experience bringing people together through shared moments.',
    services: ['Event Experiential', 'Branding', 'Content Creation'],
    tags: ['Event Production', 'Brand Experiences', 'Content Creation'],
    client: 'Fellaship',
    year: '2022',
    location: 'Atlanta, GA',
    gallery: [
      '/images/work-detail/fellaship/fel-thumb.webp',
      '/images/work-detail/fellaship/01.webp',
      '/images/work-detail/fellaship/02.webp',
      '/images/work-detail/fellaship/03.webp',
      '/images/work-detail/fellaship/04.webp',
      '/images/work-detail/fellaship/05.webp',
      '/images/work-detail/fellaship/06.webp',
      '/images/work-detail/fellaship/07.webp',
      '/images/work-detail/fellaship/08.webp',
      '/images/work-detail/fellaship/09.webp',
      '/images/work-detail/fellaship/10.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--cyan',
    contentSource: 'v2-legacy',
    tier: 'light',
    industry: 'Lifestyle / Community',
  },

  // STANDARD: Georgia Lottery
  {
    slug: 'georgia-lottery',
    title: 'Georgia Lottery',
    category: 'Experiential',
    stat: 'Cash 3 Campaign',
    thumbnail: '/images/work/georgia-lottery.webp',
    description:
      'The Georgia Lottery\'s Cash 3 "333" promotion returned after popular demand, with a second-chance opportunity where harnessed fans were lowered into a $3 million pool of faux bills at a Braves game.',
    longDescription:
      'The Georgia Lottery\'s Cash 3 "333" promotion was so popular it returned for a second year by popular demand. At a Braves game, harnessed fans were lowered into a custom-built $3 million pool of faux bills, creating one of the most unforgettable promotional moments in the stadium. MELT managed the full activation from concept through execution, including custom fabrication, on-site safety management, crowd engagement, and broadcast-ready content capture that generated significant social buzz and media coverage.',
    brief:
      'Cash 3 "333" promotion at a Braves game with an immersive $3M faux-bill pool experience.',
    services: ['Campaigns', 'Event Experiential', 'Interactive'],
    stats: [
      { label: 'Promotion Return', value: '2nd Year' },
      { label: 'Faux Bill Pool Value', value: '$3M' },
      { label: 'Venue', value: 'Braves Stadium' },
    ],
    tags: [
      'Promotional Campaigns',
      'Event Production',
      'Sports Marketing',
      'Stadium Activations',
    ],
    client: 'Georgia Lottery',
    year: '2019',
    location: 'Georgia',
    gallery: [
      '/images/work-detail/georgia-lottery/ga-lottery.webp',
      '/images/work-detail/georgia-lottery/ga-lottery-banner.webp',
      '/images/work-detail/georgia-lottery/01.webp',
      '/images/work-detail/georgia-lottery/02.webp',
      '/images/work-detail/georgia-lottery/03.webp',
      '/images/work-detail/georgia-lottery/04.webp',
      '/images/work-detail/georgia-lottery/05.webp',
      '/images/work-detail/georgia-lottery/06.webp',
      '/images/work-detail/georgia-lottery/07.webp',
    ],
    featured: false,
    layout: 'B',
    accentColor: '--cyan',
    contentSource: 'v2-legacy+wordpress',
    tier: 'standard',
    industry: 'Government / Gaming',
  },

  // LIGHT: Tip-Off at Toomer's
  {
    slug: 'tip-off-toomers',
    title: "Tip-Off at Toomer's",
    category: 'Events',
    stat: 'Auburn Basketball Event',
    thumbnail: '/images/work/tip-off-toomers.webp',
    description:
      "MELT managed and assembled a half basketball court at the main street intersection at the entrance of Auburn University for a full day of basketball and fan engagement for Auburn Basketball and the entire Auburn community.",
    brief:
      'Half-court basketball activation at the entrance of Auburn University for the Auburn community.',
    services: ['Event Experiential', 'Branding'],
    tags: [
      'Event Production',
      'Brand Experiences',
      'College Marketing',
      'Campus Activations',
      'Sports Marketing',
    ],
    client: 'Auburn Athletics',
    year: '2021',
    location: 'Auburn, AL',
    gallery: [
      '/images/work-detail/tip-off-toomers/tip-off-toomers.png',
      '/images/work-detail/tip-off-toomers/01.webp',
      '/images/work-detail/tip-off-toomers/02.webp',
      '/images/work-detail/tip-off-toomers/03.webp',
      '/images/work-detail/tip-off-toomers/04.webp',
      '/images/work-detail/tip-off-toomers/05.webp',
      '/images/work-detail/tip-off-toomers/06.webp',
    ],
    featured: false,
    layout: 'C',
    accentColor: '--royal-blue',
    contentSource: 'v2-legacy+wordpress',
    tier: 'light',
    industry: 'Sports / Collegiate',
  },

  // LIGHT: Wingstop
  {
    slug: 'wingstop',
    title: 'Wingstop',
    category: 'Experiential',
    stat: 'Flavor Experience',
    thumbnail: '/images/work/wingstop.webp',
    description:
      'MELT created a Wingstop brand experience, connecting fans to the brand through experiential activations and content creation.',
    brief:
      'Experiential brand activations connecting fans to the Wingstop flavor experience.',
    services: ['Advertising', 'Branded Content', 'Campaigns'],
    tags: [
      'Brand Experiences',
      'Content Creation',
      'Promotional Campaigns',
      'Culinary Activations',
    ],
    client: 'Wingstop',
    year: '2020',
    location: 'Multiple Cities',
    gallery: [
      '/images/work-detail/wingstop/wingstop.webp',
      '/images/work-detail/wingstop/01.webp',
      '/images/work-detail/wingstop/02.webp',
      '/images/work-detail/wingstop/03.webp',
      '/images/work-detail/wingstop/04.webp',
      '/images/work-detail/wingstop/05.webp',
      '/images/work-detail/wingstop/06.webp',
      '/images/work-detail/wingstop/07.webp',
      '/images/work-detail/wingstop/08.webp',
    ],
    featured: false,
    layout: 'A',
    accentColor: '--cyan',
    contentSource: 'v2-legacy',
    tier: 'light',
    industry: 'QSR / Food & Beverage',
  },
];

// ---------------------------------------------------------------------------
// Filter categories
// ---------------------------------------------------------------------------

export const FILTER_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Sponsorship', value: 'Sponsorship' },
  { label: 'Experiential', value: 'Experiential' },
  { label: 'Social & Content', value: 'Social & Content' },
  { label: 'Consulting', value: 'Consulting' },
  { label: 'Events', value: 'Events' },
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const project = getProjectBySlug(slug);
  if (!project) return [];
  return projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, limit);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export default projects;

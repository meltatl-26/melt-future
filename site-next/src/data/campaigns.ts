/**
 * MELT Campaign Metrics — Flagship project detailed metrics
 *
 * Structured campaign data from recap reports for expandable
 * "Full Metrics" sections on case study pages.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CampaignMetric {
  metric: string;
  value: string;
  context?: string;
}

export interface Campaign {
  slug: string;
  projectSlug: string;
  title: string;
  year: string;
  metrics: CampaignMetric[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const campaigns: Campaign[] = [
  {
    slug: 'ghirardelli-smores-2023',
    projectSlug: 'ghirardelli',
    title: "Ghirardelli S'mores Summer Tour 2023",
    year: '2023',
    metrics: [
      { metric: 'Total Impressions', value: '1.87M+' },
      { metric: 'Influencer ROI', value: '771%' },
      { metric: 'Brand Consideration Lift', value: '93.1%' },
      { metric: 'Earned Media Value', value: '$766K' },
      { metric: 'Program Cost', value: '$578K' },
      { metric: 'Influencer EMV', value: '$259K' },
    ],
  },
  {
    slug: 'coca-cola-gameday-2006-2016',
    projectSlug: 'coca-cola-gameday',
    title: 'Coca-Cola College GameDay — 10 Seasons',
    year: '2006–2016',
    metrics: [
      { metric: 'Campaign Impressions', value: '39.7M' },
      { metric: 'Brand Growth', value: '+40.7%', context: 'Year-over-year brand lift' },
      { metric: 'Seasons Executed', value: '10' },
      { metric: 'Campuses Activated', value: '30+' },
      { metric: 'Content Pieces Produced', value: '500+', context: 'Digital and broadcast' },
      { metric: 'Sampling Interactions', value: 'Millions', context: 'Across all tour stops' },
    ],
  },
  {
    slug: 'bath-body-works-basketball-tour-2023',
    projectSlug: 'bath-body-works',
    title: "Bath & Body Works Men's Shop Basketball Tour",
    year: '2023–2024',
    metrics: [
      { metric: 'ROI', value: '560%' },
      { metric: 'Trial Target', value: '1M+', context: 'Consumer product trials' },
      { metric: 'Tour Duration', value: '8 Weeks' },
      { metric: 'Program Budget', value: '$1.5M' },
      { metric: 'Cities Visited', value: '16' },
      { metric: 'NBA Team Partnerships', value: '4' },
    ],
  },
  {
    slug: 'city-of-mobile-arena-2024',
    projectSlug: 'city-of-mobile-arena',
    title: 'City of Mobile $300M Arena Consulting',
    year: '2024–2027',
    metrics: [
      { metric: 'Arena Value', value: '$300M' },
      { metric: 'Concept to Contract', value: '90 Days' },
      { metric: 'Opening Year', value: '2027' },
      { metric: 'Venue Operators Secured', value: '2', context: 'OVG and Live Nation' },
      { metric: 'Deal Structure', value: 'Multi-million dollar commitment' },
    ],
  },
  {
    slug: 'comfort-colors-homecoming-2024',
    projectSlug: 'comfort-colors',
    title: 'Comfort Colors Homecoming — University of Alabama',
    year: '2024',
    metrics: [
      { metric: 'ROI', value: '2,563%' },
      { metric: 'Social Impressions', value: '1M+' },
      { metric: 'Engagements', value: '37,123' },
      { metric: 'T-Shirts Distributed', value: '6,000+' },
      { metric: 'Sororities Activated', value: '19', context: 'All Panhellenic chapters' },
      { metric: 'Charitable Donations', value: 'Multiple', context: 'Top-performing chapters earned donations for chosen charities' },
    ],
  },
  {
    slug: 'ncaa-final-four-2003-present',
    projectSlug: 'ncaa-final-four',
    title: 'NCAA Final Four Entertainment Strategy',
    year: '2003–Present',
    metrics: [
      { metric: 'Program Impressions', value: '2.76M' },
      { metric: 'Campus Events', value: '112' },
      { metric: 'Years Executing', value: '19+' },
      { metric: 'Cans Distributed Live', value: '39,360' },
      { metric: 'First March Madness Music Festival', value: '2003', context: 'Pioneered the format' },
      { metric: 'Host Cities Activated', value: 'Multiple', context: 'Ongoing multi-city execution' },
    ],
  },
  {
    slug: 'dogsters-mlb-bark-in-the-park-2024',
    projectSlug: 'dogsters-mlb',
    title: 'Dogsters MLB Bark in the Park',
    year: '2024',
    metrics: [
      { metric: 'Influencer ROI', value: '3,672%' },
      { metric: 'Influencer EMV', value: '$172K' },
      { metric: 'Instagram Reach Growth', value: '+6,800%' },
      { metric: 'Dollar Sales Growth', value: '+21.7%' },
      { metric: 'MLB Teams Activated', value: '2', context: 'Kansas City Royals and New York Mets' },
      { metric: 'Stadiums', value: '2', context: 'Kauffman Stadium and Citi Field' },
    ],
  },
  {
    slug: 'wellstar-leadership-day-2023',
    projectSlug: 'wellstar',
    title: 'Wellstar Leadership Day & Celebration of Service',
    year: '2023–2024',
    metrics: [
      { metric: 'Events Executed', value: '34+' },
      { metric: 'Videos Produced', value: '9' },
      { metric: 'Branded Cookies Distributed', value: '1,500' },
      { metric: 'VIP Appearances', value: '4+', context: 'Including Dansby Swanson and Dominique Wilkins' },
      { metric: 'Attendees', value: '1,500+', context: 'Leadership Day guests' },
      { metric: 'Expo Services Featured', value: '10', context: 'Different organization services' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getCampaignsByProject(projectSlug: string): Campaign[] {
  return campaigns.filter((c) => c.projectSlug === projectSlug);
}

export default campaigns;

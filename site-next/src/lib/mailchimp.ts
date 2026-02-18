const API_KEY = process.env.MAILCHIMP_API_KEY || '';
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || 'us1';
const LIST_ID = process.env.MAILCHIMP_LIST_ID || '';

const BASE_URL = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0`;

async function mailchimpFetch(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(error.detail || `Mailchimp API error: ${res.status}`);
  }

  return res.json();
}

export interface SubscribeData {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  role?: string;
  industry?: string;
  timeline?: string;
  budgetSignal?: string;
  teamSize?: string;
  tags?: string[];
  source?: string;
}

export async function subscribe(data: SubscribeData) {
  const { email, firstName, lastName, company, role, industry, timeline, budgetSignal, teamSize, tags, source } = data;

  const mergeFields: Record<string, string> = {};
  if (firstName) mergeFields.FNAME = firstName;
  if (lastName) mergeFields.LNAME = lastName;
  if (company) mergeFields.COMPANY = company;
  if (role) mergeFields.ROLE = role;
  if (industry) mergeFields.INDUSTRY = industry;
  if (timeline) mergeFields.TIMELINE = timeline;
  if (budgetSignal) mergeFields.BUDGET = budgetSignal;
  if (teamSize) mergeFields.TEAMSIZE = teamSize;
  if (source) mergeFields.SOURCE = source;

  const body = {
    email_address: email,
    status_if_new: 'subscribed',
    merge_fields: mergeFields,
    tags: tags || [],
  };

  return mailchimpFetch(`/lists/${LIST_ID}/members/${emailHash(email)}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export async function addTags(email: string, tags: string[]) {
  const tagBody = {
    tags: tags.map((name) => ({ name, status: 'active' })),
  };

  return mailchimpFetch(`/lists/${LIST_ID}/members/${emailHash(email)}/tags`, {
    method: 'POST',
    body: JSON.stringify(tagBody),
  });
}

function emailHash(email: string): string {
  // MD5 hash for Mailchimp subscriber lookup
  // Using Web Crypto API (available in Node.js 18+)
  const crypto = require('crypto');
  return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
}

export function isConfigured(): boolean {
  return Boolean(API_KEY && LIST_ID);
}

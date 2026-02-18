'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useVersion } from '@/lib/version-context';
import './scoper.css';
import './scoper-hc.css';

const PROJECT_TYPES = [
  { id: 'experiential', title: 'Experiential Event', desc: 'Live activations, sampling, pop-ups' },
  { id: 'sponsorship', title: 'Sponsorship Activation', desc: 'Sports, entertainment, venue programs' },
  { id: 'content', title: 'Content & Social', desc: 'Video, influencer, social campaigns' },
  { id: 'tour', title: 'Multi-City Tour', desc: 'National or regional touring programs' },
  { id: 'nil', title: 'NIL / College', desc: 'Student-athlete partnerships, campus marketing' },
  { id: 'other', title: 'Something Else', desc: 'Tell us about your unique project' },
];

const TIMELINE_OPTIONS = [
  'Within 30 days',
  '1-3 months',
  '3-6 months',
  '6+ months / planning stage',
];

const TEAM_SIZE_OPTIONS = [
  'Just me',
  'Small team (2-5)',
  'Marketing department (5-20)',
  'Enterprise (20+)',
];

interface ScoperData {
  projectType: string;
  name: string;
  email: string;
  company: string;
  role: string;
  timeline: string;
  teamSize: string;
  goals: string;
}

const QUESTION_LABELS = [
  'Project Type',
  'About You',
  'Timeline',
  'Team',
  'Goals',
];

function HandcraftedScoper() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<ScoperData>({
    projectType: '',
    name: '',
    email: '',
    company: '',
    role: '',
    timeline: '',
    teamSize: '',
    goals: '',
  });

  const update = (field: keyof ScoperData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const totalSteps = 5;

  const canProceed = () => {
    if (step === 0) return !!data.projectType;
    if (step === 1) return !!data.name && !!data.email && !!data.company;
    if (step === 2) return !!data.timeline;
    if (step === 3) return !!data.teamSize;
    if (step === 4) return true; // goals is optional
    return false;
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/mailchimp/scoper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          firstName: data.name,
          company: data.company,
          role: data.role,
          projectType: data.projectType,
          timeline: data.timeline,
          teamSize: data.teamSize,
          goals: data.goals,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently fail
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="hc-scoper">
        <div className="hc-scoper__success">
          <h1 className="hc-scoper__success-title">We&apos;ll Be<br />In Touch</h1>
          <p className="hc-scoper__success-text">
            Our team will review your project details and get back to you within 24 hours with a tailored recommendation.
          </p>
          <Link href="/work" className="hc-scoper__success-link">
            Explore Our Work
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="hc-scoper">
      <div className="hc-scoper__container">
        {/* Progress dots */}
        <div className="hc-scoper__progress">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`hc-scoper__dot ${
                i === step ? 'hc-scoper__dot--active' : ''
              } ${i < step ? 'hc-scoper__dot--done' : ''}`}
            />
          ))}
        </div>

        {/* Step 0: Project Type */}
        {step === 0 && (
          <div className="hc-scoper__question">
            <span className="hc-scoper__question-label">{QUESTION_LABELS[0]}</span>
            <h2 className="hc-scoper__question-text">What Are<br />You Building?</h2>
            <div className="hc-scoper__options">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`hc-scoper__option ${data.projectType === type.id ? 'hc-scoper__option--selected' : ''}`}
                  onClick={() => update('projectType', type.id)}
                >
                  <span className="hc-scoper__option-title">{type.title}</span>
                  <span className="hc-scoper__option-desc">{type.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Contact Info */}
        {step === 1 && (
          <div className="hc-scoper__question">
            <span className="hc-scoper__question-label">{QUESTION_LABELS[1]}</span>
            <h2 className="hc-scoper__question-text">Who Are You?</h2>
            <div className="hc-scoper__fields">
              <div className="hc-scoper__field">
                <label htmlFor="hc-scoper-name">Name *</label>
                <input
                  id="hc-scoper-name"
                  type="text"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="hc-scoper__field">
                <label htmlFor="hc-scoper-email">Email *</label>
                <input
                  id="hc-scoper-email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="hc-scoper__field">
                <label htmlFor="hc-scoper-company">Company *</label>
                <input
                  id="hc-scoper-company"
                  type="text"
                  value={data.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Your company"
                  required
                />
              </div>
              <div className="hc-scoper__field">
                <label htmlFor="hc-scoper-role">Role</label>
                <input
                  id="hc-scoper-role"
                  type="text"
                  value={data.role}
                  onChange={(e) => update('role', e.target.value)}
                  placeholder="Your title / role"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Timeline */}
        {step === 2 && (
          <div className="hc-scoper__question">
            <span className="hc-scoper__question-label">{QUESTION_LABELS[2]}</span>
            <h2 className="hc-scoper__question-text">When Do You<br />Need It?</h2>
            <div className="hc-scoper__options">
              {TIMELINE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`hc-scoper__option ${data.timeline === opt ? 'hc-scoper__option--selected' : ''}`}
                  onClick={() => update('timeline', opt)}
                >
                  <span className="hc-scoper__option-title">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Team Size */}
        {step === 3 && (
          <div className="hc-scoper__question">
            <span className="hc-scoper__question-label">{QUESTION_LABELS[3]}</span>
            <h2 className="hc-scoper__question-text">How Big Is<br />Your Team?</h2>
            <div className="hc-scoper__options">
              {TEAM_SIZE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`hc-scoper__option ${data.teamSize === opt ? 'hc-scoper__option--selected' : ''}`}
                  onClick={() => update('teamSize', opt)}
                >
                  <span className="hc-scoper__option-title">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Goals */}
        {step === 4 && (
          <div className="hc-scoper__question">
            <span className="hc-scoper__question-label">{QUESTION_LABELS[4]}</span>
            <h2 className="hc-scoper__question-text">What Are Your<br />Goals?</h2>
            <div className="hc-scoper__fields">
              <div className="hc-scoper__field">
                <label htmlFor="hc-scoper-goals">Tell us what you&apos;re looking to achieve</label>
                <textarea
                  id="hc-scoper-goals"
                  value={data.goals}
                  onChange={(e) => update('goals', e.target.value)}
                  placeholder="Brand awareness, sampling reach, content creation, community engagement..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="hc-scoper__nav">
          {step > 0 && (
            <button
              type="button"
              className="hc-scoper__btn hc-scoper__btn--back"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button
            type="button"
            className="hc-scoper__btn hc-scoper__btn--next"
            disabled={!canProceed() || submitting}
            onClick={handleNext}
          >
            {step === totalSteps - 1
              ? submitting
                ? 'Submitting...'
                : 'Submit'
              : 'Continue'}
          </button>
        </div>
      </div>
    </section>
  );
}

function CapesScoper() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<ScoperData>({
    projectType: '',
    name: '',
    email: '',
    company: '',
    role: '',
    timeline: '',
    teamSize: '',
    goals: '',
  });

  const update = (field: keyof ScoperData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return !!data.projectType;
    if (step === 2) return !!data.name && !!data.email && !!data.company;
    if (step === 3) return !!data.timeline;
    return false;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/mailchimp/scoper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          firstName: data.name,
          company: data.company,
          role: data.role,
          projectType: data.projectType,
          timeline: data.timeline,
          teamSize: data.teamSize,
          goals: data.goals,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently fail — form data captured
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="capes-scoper">
        <div className="container">
          <div className="capes-scoper__card">
            <div className="capes-scoper__success">
              <div className="capes-scoper__success-icon" aria-hidden="true">&#10003;</div>
              <h2>We&apos;ve Got Your Project Details</h2>
              <p>
                Our team will review your submission and get back to you within 24 hours
                with a tailored recommendation.
              </p>
              <Link href="/work" className="capes-scoper__btn capes-scoper__btn--next">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="capes-scoper">
      <div className="container">
        <div className="capes-scoper__header">
          <span className="capes-scoper__label">Project Scoper</span>
          <h1 className="capes-scoper__title">Scope Your Project</h1>
          <p className="capes-scoper__subtitle">
            Tell us about your project in 3 quick steps and we&apos;ll follow up with a tailored recommendation.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="capes-scoper__progress">
          {[1, 2, 3].map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
              {i > 0 && (
                <div className={`capes-scoper__step-line ${step > s - 1 ? 'capes-scoper__step-line--done' : ''}`} />
              )}
              <div
                className={`capes-scoper__step-indicator ${
                  step === s ? 'capes-scoper__step-indicator--active' : ''
                } ${step > s ? 'capes-scoper__step-indicator--done' : ''}`}
              >
                <span className="capes-scoper__step-dot">{step > s ? '\u2713' : s}</span>
                <span>{s === 1 ? 'Project' : s === 2 ? 'About You' : 'Details'}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="capes-scoper__card">
          {/* Step 1: Project Type */}
          {step === 1 && (
            <>
              <h2 className="capes-scoper__step-title">What type of project?</h2>
              <p className="capes-scoper__step-desc">Select the category that best fits your needs.</p>
              <div className="capes-scoper__options">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    className={`capes-scoper__option ${data.projectType === type.id ? 'capes-scoper__option--selected' : ''}`}
                    onClick={() => update('projectType', type.id)}
                    type="button"
                  >
                    <span className="capes-scoper__option-title">{type.title}</span>
                    <span className="capes-scoper__option-desc">{type.desc}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <>
              <h2 className="capes-scoper__step-title">Tell us about yourself</h2>
              <p className="capes-scoper__step-desc">So we can get back to you with a recommendation.</p>
              <div className="capes-scoper__field">
                <label htmlFor="scoper-name">Name *</label>
                <input
                  id="scoper-name"
                  type="text"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="capes-scoper__field">
                <label htmlFor="scoper-email">Email *</label>
                <input
                  id="scoper-email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="capes-scoper__field">
                <label htmlFor="scoper-company">Company *</label>
                <input
                  id="scoper-company"
                  type="text"
                  value={data.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Your company"
                  required
                />
              </div>
              <div className="capes-scoper__field">
                <label htmlFor="scoper-role">Role</label>
                <input
                  id="scoper-role"
                  type="text"
                  value={data.role}
                  onChange={(e) => update('role', e.target.value)}
                  placeholder="Your title / role"
                />
              </div>
            </>
          )}

          {/* Step 3: Project Details */}
          {step === 3 && (
            <>
              <h2 className="capes-scoper__step-title">Project details</h2>
              <p className="capes-scoper__step-desc">Help us understand your timeline and goals.</p>
              <div className="capes-scoper__field">
                <label>Timeline *</label>
                <div className="capes-scoper__options" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  {TIMELINE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`capes-scoper__option ${data.timeline === opt ? 'capes-scoper__option--selected' : ''}`}
                      onClick={() => update('timeline', opt)}
                    >
                      <span className="capes-scoper__option-title">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="capes-scoper__field">
                <label>Team size</label>
                <div className="capes-scoper__options" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  {TEAM_SIZE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`capes-scoper__option ${data.teamSize === opt ? 'capes-scoper__option--selected' : ''}`}
                      onClick={() => update('teamSize', opt)}
                    >
                      <span className="capes-scoper__option-title">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="capes-scoper__field">
                <label htmlFor="scoper-goals">What are your goals?</label>
                <textarea
                  id="scoper-goals"
                  value={data.goals}
                  onChange={(e) => update('goals', e.target.value)}
                  placeholder="Tell us what you're looking to achieve..."
                />
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="capes-scoper__nav">
            {step > 1 && (
              <button
                type="button"
                className="capes-scoper__btn capes-scoper__btn--back"
                onClick={() => setStep(step - 1)}
              >
                &larr; Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                className="capes-scoper__btn capes-scoper__btn--next"
                disabled={!canProceed()}
                onClick={() => setStep(step + 1)}
              >
                Next &rarr;
              </button>
            ) : (
              <button
                type="button"
                className="capes-scoper__btn capes-scoper__btn--next"
                disabled={!canProceed() || submitting}
                onClick={handleSubmit}
              >
                {submitting ? 'Submitting...' : 'Submit Project'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ScoperPage() {
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedScoper />;
  }

  return <CapesScoper />;
}

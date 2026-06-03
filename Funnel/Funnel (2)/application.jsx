// Multi-step application modal. Exposes window.Application
const { useState, useEffect, useRef } = React;

const QUESTIONS = [
  {
    id: 'revenue',
    title: 'What\'s your brokerage\'s annual commission revenue?',
    sub: 'Commission revenue — not funded volume. We only work with established brokerages, so this is the first qualifier.',
    options: [
      { value: 'under_500k', label: 'Under $500K in commissions', disqualify: true },
      { value: '500k_1m', label: '$500K – $1M in commissions' },
      { value: '1m_3m', label: '$1M – $3M in commissions' },
      { value: '3m_plus', label: '$3M+ in commissions' },
    ],
  },
  {
    id: 'lead_source',
    title: 'How are you currently getting leads?',
    sub: 'Pick the closest match. Determines what we\'d replace first.',
    options: [
      { value: 'vendors', label: 'Expensive lead vendors (Zillow, LendingTree, etc.)' },
      { value: 'referrals', label: 'Referrals and realtor partners only' },
      { value: 'inhouse', label: 'In-house ads, but inconsistent results' },
      { value: 'none', label: 'Nothing systematic — hoping for the best', disqualify: false },
    ],
  },
  {
    id: 'goal',
    title: 'What\'s your 90-day growth goal?',
    sub: 'Be honest. Helps us scope the system.',
    options: [
      { value: 'add_60k', label: 'Add $60K+ in new pipeline' },
      { value: 'add_240k', label: 'Add $240K+ in new pipeline' },
      { value: 'replace', label: 'Replace vendor leads entirely' },
      { value: 'scale', label: 'Scale past current capacity' },
    ],
  },
  {
    id: 'ready',
    title: 'Are you ready to invest in proper infrastructure?',
    sub: 'This is not a plug-and-play tools subscription. We build systems brokerages own.',
    options: [
      { value: 'yes_now', label: 'Yes — ready to move in the next 30 days' },
      { value: 'yes_soon', label: 'Yes — within 60–90 days' },
      { value: 'exploring', label: 'Exploring options, not committed yet' },
      { value: 'no', label: 'Looking for a cheap or DIY solution', disqualify: true },
    ],
  },
  {
    id: 'timeline',
    title: 'When are you looking to launch?',
    sub: 'Last one. We only onboard 6 brokerages a month.',
    options: [
      { value: 'asap', label: 'ASAP — this week if possible', tag: 'PRIORITY' },
      { value: '2_4_weeks', label: 'In the next 2–4 weeks' },
      { value: '1_3_months', label: 'In 1–3 months' },
      { value: 'just_looking', label: 'Just gathering info for now' },
    ],
  },
];

function Application({ open, onClose }) {
  const [step, setStep] = useState(0); // 0..QUESTIONS.length-1 = questions, then contact, then result
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: '', brokerage: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = QUESTIONS.length + 1; // questions + contact form
  const isQuestionStep = step < QUESTIONS.length;
  const isContactStep = step === QUESTIONS.length;
  const isResultStep = submitted;

  // Determine qualification — disqualify on first disqualifying answer
  const disqualified = QUESTIONS.some(q => {
    const a = answers[q.id];
    const opt = q.options.find(o => o.value === a);
    return opt && opt.disqualify === true;
  });

  // Reset on open
  useEffect(() => {
    if (open) {
      setStep(0);
      setAnswers({});
      setContact({ name: '', brokerage: '', email: '', phone: '' });
      setSubmitted(false);
    }
  }, [open]);

  // Escape closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const selectOption = (val) => {
    const q = QUESTIONS[step];
    setAnswers(prev => ({ ...prev, [q.id]: val }));
    // Auto-advance after a short beat for tactile feedback
    setTimeout(() => {
      if (step < QUESTIONS.length) setStep(s => s + 1);
    }, 250);
  };

  const handleBack = () => {
    if (step > 0) setStep(s => s - 1);
  };

  const handleSubmit = () => {
    if (!contact.name || !contact.email || !contact.brokerage) return;
    setSubmitted(true);
  };

  const progress = isResultStep ? 100 : ((step + 1) / (totalSteps + 1)) * 100;

  return (
    <div className={`modal-overlay${open ? ' is-open' : ''}${isResultStep ? ' calendar' : ''}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="progress-label">
            {isResultStep ? (disqualified ? 'REVIEWED' : 'QUALIFIED') : `${step + 1} / ${totalSteps}`}
          </span>
          <div className="progress"><div className="progress-bar" style={{ width: `${progress}%` }} /></div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6L18 18M6 18L18 6"/></svg>
          </button>
        </div>

        <div className="modal-body">
          {isQuestionStep && (
            <div className="modal-step" key={step}>
              <h3>{QUESTIONS[step].title}</h3>
              <p className="step-sub">{QUESTIONS[step].sub}</p>
              <div className="modal-options">
                {QUESTIONS[step].options.map(opt => {
                  const active = answers[QUESTIONS[step].id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      className={`modal-option${active ? ' is-active' : ''}`}
                      onClick={() => selectOption(opt.value)}
                    >
                      <span className="opt-circle" />
                      <span className="opt-label">{opt.label}</span>
                      {opt.tag && <span className="opt-meta">{opt.tag}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {isContactStep && !submitted && (
            <div className="modal-step">
              <h3>Last step — where do we send your custom plan?</h3>
              <p className="step-sub">We'll review your answers and follow up within 24 hours. Your info is never sold or shared.</p>
              <div className="modal-field">
                <label>Your name</label>
                <input type="text" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} placeholder="Brian O'Neill" />
              </div>
              <div className="modal-field">
                <label>Brokerage name</label>
                <input type="text" value={contact.brokerage} onChange={(e) => setContact({...contact, brokerage: e.target.value})} placeholder="Sore Thumb Agency" />
              </div>
              <div className="modal-field">
                <label>Best email</label>
                <input type="email" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} placeholder="you@brokerage.com" />
              </div>
              <div className="modal-field">
                <label>Phone (optional)</label>
                <input type="tel" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})} placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          )}

          {isResultStep && !disqualified && (
            <div className="qualified-screen">
              <div className="qualified-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>You qualify. Pick a time below.</h3>
              <p>15-minute diagnostic call with Brian. We'll map your custom system, expected results, and timeline. No pressure. No pitch.</p>
              <div className="cal-frame">
                <div className="cal-placeholder">
                  <span className="mono">CALENDLY EMBED · REPLACE WITH YOUR LINK</span>
                  <div style={{ fontWeight: 700, fontSize: 18, marginTop: 8 }}>15-min Diagnostic Call · Brian O'Neill</div>
                  <div className="placeholder-grid">
                    {Array.from({ length: 21 }, (_, i) => (
                      <div key={i} className={`ph-cell${[5, 8, 12, 15, 18].includes(i) ? ' hot' : ''}`} />
                    ))}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-mute)', marginTop: 8 }}>5 slots open this week · Pacific Time</div>
                </div>
              </div>
            </div>
          )}

          {isResultStep && disqualified && (
            <div className="dq-screen">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 8v4M12 16h.01"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <h3>Thanks — we'll be in touch.</h3>
              <p>Based on your answers, we're not the right fit right now. We'll send you a few free resources to help you grow to where this system makes sense. When you're ready, come back.</p>
            </div>
          )}
        </div>

        {!isResultStep && (
          <div className="modal-footer">
            <button className="modal-back" onClick={handleBack} disabled={step === 0}>← BACK</button>
            <span className="modal-foot-meta">
              {isContactStep ? '🔒 Reviewed within 24 hours' : 'Takes under 60 seconds'}
            </span>
            {isContactStep && (
              <button
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
                disabled={!contact.name || !contact.email || !contact.brokerage}
                style={{ opacity: (!contact.name || !contact.email || !contact.brokerage) ? 0.5 : 1 }}
              >
                Submit application
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

window.Application = Application;

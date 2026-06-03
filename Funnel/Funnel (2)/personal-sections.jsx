// All landing page sections. Exposes everything to window for app.jsx
const { useEffect: useEffectS, useState: useStateS } = React;

// ============================ ICONS

const Icon = {
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
  X: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>,
  Arrow: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
  Play: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l16 8-16 8z" /></svg>,
  Shield: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  Bolt: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>,
  Star: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  Target: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Brain: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M12 4.5a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0 1.5 2.6A3 3 0 0 0 9 18a3 3 0 0 0 3-1.5 3 3 0 0 0 3 1.5 3 3 0 0 0 1.5-4.9A3 3 0 0 0 18 10.5a3 3 0 0 0-3-3 3 3 0 0 0-3-3z" /></svg>,
  Funnel: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M3 4h18l-7 9v6l-4 2v-8L3 4z" /></svg>,
  Sparkle: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" /><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>,
  Chart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3v18h18" /><polyline points="7 14 12 9 16 13 21 7" /></svg>,
  Layers: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  Loop: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /></svg>
};

// ============================ SCARCITY BAR

function ScarcityBar({ spots, total }) {
  const message =
  <span className="scarcity-msg">
      <span className="pulse-dot" />
      ONLY <strong>{spots} OF {total}</strong> AGENCY SLOTS LEFT THIS MONTH
      <span className="sep">|</span>
      ONE AGENCY PER TERRITORY
      <span className="sep">|</span>
    </span>;

  return (
    <div className="scarcity" role="status" aria-live="polite">
      <div className="scarcity-track">
        <div className="scarcity-row">{message}{message}{message}</div>
        <div className="scarcity-row" aria-hidden="true">{message}{message}{message}</div>
      </div>
    </div>);

}

// ============================ TOP BAR

function TopBar({ onApply }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <img className="topbar-logo" src="assets/logo.png" alt="Sore Thumb Agency" />
        <div className="topbar-meta">
          <span className="topbar-meta-dot" />
          <span>SYSTEM ACTIVE · ONBOARDING 6 AGENCIES THIS MONTH</span>
        </div>
        <button className="topbar-cta" onClick={onApply}>
          Apply now
          <Icon.Arrow />
        </button>
      </div>
    </header>);

}

// ============================ HERO

function Hero({ onApply, variant }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-head">
          <span className="eyebrow"><span className="dot" />BY APPLICATION · ONE AGENCY PER TERRITORY</span>

          {variant === 'inbound' &&
          <h1>
              <span className="text-grad">Stop chasing leads.</span>
              <br />
              <span className="accent">Become the agency clients come to.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.5em', fontWeight: 800 }}>An exclusive, compliant acquisition system that delivers qualified opportunities to you — built in 7 days. Owned forever.</span>
            </h1>
          }

          {variant === 'closing' &&
          <h1>
              <span className="text-grad">Stop chasing. Start closing.</span>
              <br />
              <span className="accent">Qualified pipeline, on autopilot.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.5em', fontWeight: 800 }}>We install your exclusive, compliant acquisition system. Built in 7 days. Owned forever.</span>
            </h1>
          }

          {variant === 'premium' &&
          <h1>
              <span className="text-grad">Add $1M+ in new premium —</span>
              <br />
              <span className="accent">without chasing a single lead.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.5em', fontWeight: 800 }}>Your exclusive, compliant acquisition system. Qualified pipeline on autopilot. Built in 7 days.</span>
            </h1>
          }

          {variant === 'territory' &&
          <h1>
              <span className="text-grad">Own your territory.</span>
              <br />
              <span className="accent">Be the only agency they find.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.5em', fontWeight: 800 }}>An exclusive, compliant acquisition system — one agency per territory. Built in 7 days. Owned forever.</span>
            </h1>
          }

          {variant === 'infrastructure' &&
          <h1>
              <span className="text-grad">The acquisition infrastructure</span>
              <br />
              <span className="accent">that makes you the insurance agency to beat.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.5em', fontWeight: 800 }}>Exclusive inbound, automated nurture, qualified opportunities — engineered, installed in 7 days, owned forever. One agency per territory.</span>
            </h1>
          }

          {variant === 'pipeline' &&
          <h1>
              <span className="text-grad">Your insurance agency's</span>
              <br />
              <span className="accent">inbound pipeline.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.6em', fontWeight: 800 }}>Exclusive leads, ready to quote. Built in 7 days. Owned forever.</span>
            </h1>
          }

          {variant === 'install' &&
          <h1>
              <span className="text-grad">We install your agency's</span>
              <br />
              <span className="accent">insurance acquisition system.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.6em', fontWeight: 800 }}>In 7 days. Owned forever.</span>
            </h1>
          }

          {variant === 'builtToScale' &&
          <h1>
              <span className="text-grad">The Built to Scale™ system.</span>
              <br />
              <span className="accent">Installed in 7 days.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.6em', fontWeight: 800 }}>The acquisition infrastructure your insurance agency should've had from day one.</span>
            </h1>
          }

          {variant === 'own' &&
          <h1>
              <span className="text-grad">Stop renting leads.</span>
              <br />
              <span className="accent">Install the system.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.65em', fontWeight: 800 }}>An AI-driven insurance acquisition machine. Built in 7 days. Yours forever.</span>
            </h1>
          }

          {variant === 'exclusive' &&
          <h1>
              <span className="text-grad">Predictable, exclusive</span>
              <br />
              <span className="accent">insurance leads.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.6em', fontWeight: 800 }}>100% exclusive. Ready to quote. Installed in 7 days. Owned forever.</span>
            </h1>
          }

          {variant === 'weekly' &&
          <h1>
              <span className="text-grad">Exclusive insurance leads,</span>
              <br />
              <span className="accent">ready to quote — every week.</span>
              <br />
              <span className="text-grad" style={{ fontSize: '0.7em', fontWeight: 800 }}>Without shared lists, aged leads, or price-shoppers.</span>
            </h1>
          }

          <p className="lede">
            We don't sell leads — we engineer and install a complete client-acquisition infrastructure inside your agency. Exclusive inbound, automated nurture, and follow-up that delivers qualified opportunities to you, every week. Built by people who know insurance, so every campaign stays compliant. Installed in 7 days. Owned forever. We take one agency per territory — once yours is claimed, your competitors are locked out.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onApply}>
              Book your diagnostic call
              <span className="arrow"><Icon.Arrow /></span>
            </button>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button className="btn btn-secondary" onClick={onApply}>
                See if you qualify
              </button>
              <span className="btn-sub">5 questions · under 60 seconds</span>
            </div>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item"><Icon.Shield />Established book of business</div>
            <div className="hero-trust-item"><Icon.Bolt />Launched in 7 days</div>
            <div className="hero-trust-item hero-trust-item--feature"><Icon.Target />One agency per territory</div>
          </div>
        </div>

        <div className="hero-ribbon">
          <div className="hero-ribbon-cell">
            <span className="num">$12.39</span>
            <span className="label">Avg cost per lead</span>
          </div>
          <div className="hero-ribbon-cell">
            <span className="num">$1.14M</span>
            <span className="label">New premium written</span>
          </div>
          <div className="hero-ribbon-cell">
            <span className="num">87.5%</span>
            <span className="label">Lead volume increase</span>
          </div>
          <div className="hero-ribbon-cell">
            <span className="num">7 days</span>
            <span className="label">To full launch</span>
          </div>
        </div>
      </div>
    </section>);

}

// ============================ RESULTS / CASE STUDIES

function Results({ onApply }) {
  return (
    <section className="section" id="results">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />PROVEN RESULTS</span>
          <h2 className="text-grad">Real agencies. Real revenue. Real receipts.</h2>
          <p className="lede">Not vanity numbers. Not screenshots from 2019. These are agencies running our Built to Scale™ system right now.</p>
        </div>

        <div className="case-grid">
          {/* Feature card */}
          <div className="case-card case-card--feature">
            <div>
              <div className="case-label">FLAGSHIP RESULT · 57 DAYS</div>
              <div className="case-num">$60,000</div>
              <div style={{ fontSize: 17, color: 'var(--text-mute)', marginTop: 8 }}>added to Kenny's pipeline in his first 57 days.</div>
            </div>
            <div>
              <div className="spark">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <div className="case-title" style={{ marginTop: 18 }}>150 leads, 87.5% more volume, 64.2% lower CPL.</div>
              <div className="case-meta">
                <span><strong>$8.11</strong> CPL</span>
                <span><strong>57</strong> days</span>
                <span><strong>150</strong> leads</span>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div>
              <div className="case-label">DECEMBER · HOME & AUTO AGENCY</div>
              <div className="case-num">146</div>
              <div style={{ fontSize: 16, color: 'var(--text-mute)', marginTop: 4 }}>exclusive leads at $4.72 each.</div>
            </div>
            <div className="case-meta">
              <span><strong>+50.5%</strong> volume</span>
              <span><strong>-41.4%</strong> CPL</span>
            </div>
          </div>

          <div className="case-card">
            <div>
              <div className="case-label">TOTAL PREMIUM · ONE CLIENT</div>
              <div className="case-num">$1.14M</div>
              <div style={{ fontSize: 16, color: 'var(--text-mute)', marginTop: 4 }}>in new personal lines premium, written without cold calling.</div>
            </div>
            <div className="case-meta">
              <span><strong>Mar–May</strong></span>
              <span><strong>Zero</strong> cold dials</span>
            </div>
          </div>

          <div className="case-card">
            <div>
              <div className="case-label">FIRST 24 HOURS · THOMAS</div>
              <div className="case-num">2</div>
              <div style={{ fontSize: 16, color: 'var(--text-mute)', marginTop: 4 }}>appointments + 6 leads on day one.</div>
            </div>
            <div className="case-meta">
              <span><strong>$5</strong> CPL</span>
              <span><strong>0</strong> ramp time</span>
            </div>
          </div>

          <div className="case-card">
            <div>
              <div className="case-label">ANDREW · MONTH 3</div>
              <div className="case-num">$13K</div>
              <div style={{ fontSize: 16, color: 'var(--text-mute)', marginTop: 4 }}>in commission in his third month alone — how the pipeline compounds over 90 days.</div>
            </div>
            <div className="case-meta">
              <span><strong>Strategy</strong> → execution</span>
            </div>
          </div>

          <div className="case-card">
            <div>
              <div className="case-label">COMPOUNDING · MONTH-OVER-MONTH</div>
              <div className="case-num">$9.06</div>
              <div style={{ fontSize: 16, color: 'var(--text-mute)', marginTop: 4 }}>CPL — improved every single month.</div>
            </div>
            <div className="case-meta">
              <span><strong>+6.5%</strong> volume</span>
              <span><strong>-6.6%</strong> CPL</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={onApply}>
            See how we'd build this for you
            <span className="arrow"><Icon.Arrow /></span>
          </button>
        </div>
      </div>
    </section>);

}

// ============================ PROBLEM / SOLUTION

function ProblemSolution({ onApply }) {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" />WHAT'S ACTUALLY HAPPENING</span>
          <h2 className="text-grad">The shared-lead model is quietly killing your margin.</h2>
          <p className="lede">Behind closed doors, a small group of agencies are replacing fragility before it becomes visible. They don't buy leads. They engineer pipelines. Here's the split.</p>
        </div>

        <div className="compare-grid">
          <div className="compare-card compare-card--bad">
            <h4><Icon.X /> The old model</h4>
            <ul className="compare-list">
              <li><span className="icon"><Icon.X /></span>Shared lead lists and aged data sold to every agency in your zip</li>
              <li><span className="icon"><Icon.X /></span>Generic creatives stuck on stock photos and tired hooks</li>
              <li><span className="icon"><Icon.X /></span>Agents wasting hours chasing aged leads and price-shoppers</li>
              <li><span className="icon"><Icon.X /></span>One-size-fits-all strategy from a vendor with 200 other clients</li>
              <li><span className="icon"><Icon.X /></span>A pipeline that lives and dies on referrals and renewals</li>
              <li><span className="icon"><Icon.X /></span>Owners absorb invisible risk without real control</li>
            </ul>
          </div>

          <div className="compare-card compare-card--good">
            <h4><Icon.Check /> The Built to Scale™ system</h4>
            <ul className="compare-list">
              <li><span className="icon"><Icon.Check /></span>Exclusive inbound at agency level — leads only you get</li>
              <li><span className="icon"><Icon.Check /></span>An AI-driven system end to end — targeting, creative, and follow-up that optimize continuously</li>
              <li><span className="icon"><Icon.Check /></span>Automated nurture — agents only talk to qualified prospects</li>
              <li><span className="icon"><Icon.Check /></span>One channel mastered, then stacked. Built specifically for insurance.</li>
              <li><span className="icon"><Icon.Check /></span>A predictable pipeline that doesn't depend on referrals</li>
              <li><span className="icon"><Icon.Check /></span>Full owner visibility. Predictable, exclusive, owned forever.</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={onApply}>
            Replace your vendors in 7 days
            <span className="arrow"><Icon.Arrow /></span>
          </button>
        </div>
      </div>
    </section>);

}

// ============================ VIDEO

function VideoBreakdown({ onApply }) {
  const [playing, setPlaying] = useStateS(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    // Defer to next frame so the video element is mounted before we call play().
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (v) {
        v.muted = false;
        v.volume = 1;
        const p = v.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }
    });
  };

  return (
    <section className="section section--tight" id="video">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />FULL BREAKDOWN · 4 MIN</span>
          <h2 className="text-grad">Watch: 146 leads at $4.72 each, in 30 days.</h2>
          <p className="lede">Brian walks through the exact 9-stage system we installed for a personal lines agency — what we built, what changed, and what happened to their cost per lead.</p>
        </div>

        <div className={"video-frame" + (playing ? " is-playing" : "")} onClick={playing ? undefined : handlePlay}>
          <video
            ref={videoRef}
            className="video-el"
            src="https://assets.cdn.filesafe.space/VeS7pDhDmkRYLbsp3wjM/media/687bc265da28cf6eca7861cf.mp4"
            poster="assets/video-breakdown-thumb.png"
            controls={playing}
            playsInline
            preload="metadata" />
          
          {!playing &&
          <>
              <div className="video-play">
                <Icon.Play />
              </div>
              <div className="video-meta">
                <div className="vm-title">How we cut CPL by 41% and 2x'd lead volume in one month.</div>
                <div className="vm-time">04:12</div>
              </div>
            </>
          }
        </div>

        <div className="video-bullets">
          <div className="video-bullet">
            <div>
              <div className="vb-num">01 / WATCH FOR</div>
              <div className="vb-body">The exact 9-stage system, end-to-end</div>
            </div>
          </div>
          <div className="video-bullet">
            <div>
              <div className="vb-num">02 / WATCH FOR</div>
              <div className="vb-body">How we cut CPL by 41.4% while doubling volume</div>
            </div>
          </div>
          <div className="video-bullet">
            <div>
              <div className="vb-num">03 / WATCH FOR</div>
              <div className="vb-body">Why this works for established insurance agencies (but not brand-new startups)</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ============================ SYSTEM (9 stages)

const STAGES = [
{ icon: <Icon.Target />, title: 'Audience Research', body: 'Who are they? What triggers them to buy? We uncover the psychological levers that turn cold traffic into qualified leads.' },
{ icon: <Icon.Sparkle />, title: 'Offer Crafting', body: 'Insurance isn\'t sexy. Outcomes are. We position protection, certainty, and continuity — not premiums and policies.' },
{ icon: <Icon.Brain />, title: 'Creative Assets', body: 'AI-generated images, video, and copy engineered to stop the scroll. Hook, anchor, solve, drive action — in seconds.' },
{ icon: <Icon.Funnel />, title: 'Lead Qualification', body: 'You define qualified. We build the funnel that filters tire-kickers before they ever hit your agents\' calendars.' },
{ icon: <Icon.Loop />, title: 'CRM Automations', body: 'Auto-sync to your CRM. Automated SMS and email nurture. Instant alerts when a qualified lead comes in. Zero manual work.' },
{ icon: <Icon.Bolt />, title: 'Campaign Launch', body: 'We launch on the highest-leverage channel first. One channel, done right, before we expand. Speed and focus.' },
{ icon: <Icon.Loop />, title: 'Feedback Loops', body: '20 leads → 10 quotes → 4 bind. We feed those 4 back into targeting. CPL drops while volume rises. Every month.' },
{ icon: <Icon.Chart />, title: 'Live Tracking', body: '24/7 real-time dashboards. Cost per lead, lead-to-quote ratio, ROI, conversions. Every metric. No waiting.' },
{ icon: <Icon.Layers />, title: 'Multi-Channel Scale', body: 'Once one channel is predictable and profitable, we stack the next. Growth becomes scalable, not chaotic.' }];


function System({ onApply }) {
  return (
    <section className="section" id="system">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />THE 9-STAGE SYSTEM</span>
          <h2 className="text-grad">Everything we install. <span className="text-brand">Launched in 7 days. Owned forever.</span></h2>
          <p className="lede">No black box. No vendor lock-in. The full infrastructure your agency should've had from day one.</p>
        </div>

        <div className="system-grid">
          {STAGES.map((s, i) =>
          <div key={i} className="stage-card">
              <div className="corner">{s.icon}</div>
              <div className="num">STAGE {String(i + 1).padStart(2, '0')}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          )}
        </div>

        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={onApply}>
            See how we'd install this for your agency
            <span className="arrow"><Icon.Arrow /></span>
          </button>
        </div>
      </div>
    </section>);

}

// ============================ TESTIMONIALS

const TESTIMONIALS = [
{
  initials: 'RM',
  name: 'Ryan Marriott',
  role: 'Owner',
  pull: 'More clients in 2.5 months than I got myself in 4 years.',
  body: "Since I've been working with Brian, my client base has gone absolutely out of this world. We're in the process of closing a deal that will add hundreds of new households. The biggest thing? Support. He's there 24/7."
},
{
  initials: 'AD',
  name: 'Alan Diamond & Mason Silvia',
  role: 'Co-owners',
  pull: 'Leads come to us automatically now.',
  body: "We used to spend hours a day chasing leads. Now they come to us, automatically. Brian set up a system that brings in qualified home & auto shoppers ready to quote — hands-off, in the background."
},
{
  initials: 'CA',
  name: 'Carlos Alvarez',
  role: 'Director',
  pull: 'Huge boost in sales. Very professional.',
  body: "Having recently started with the Sore Thumb team, we've seen a huge boost in our sales. The team are very professional in all areas and take on board everything we say."
},
{
  initials: 'SF',
  name: 'Seth Fenn',
  role: 'Owner',
  pull: 'Financially, it just makes sense.',
  body: "Brian has been great to work with. Communication is always there. I'm happy with the amount so far — financially it just makes sense for me."
}];


function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />WHAT PARTNERS SAY</span>
          <h2 className="text-grad">Real agencies. Real feedback. No scripts.</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) =>
          <div key={i} className="testimonial">
              <div className="stars">
                {[0, 1, 2, 3, 4].map((s) => <Icon.Star key={s} />)}
              </div>
              <div className="pull">"{t.pull}"</div>
              <div className="body">{t.body}</div>
              <div className="signer">
                <div className="avatar">{t.initials}</div>
                <div className="who">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============================ QUALIFY (For / Not for)

function Qualify({ onApply }) {
  return (
    <section className="section" id="qualify">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />IS THIS FOR YOU?</span>
          <h2 className="text-grad">Built for a specific kind of agency.</h2>
          <p className="lede">We say no more than we say yes. If you're a fit, you'll know in 30 seconds. If not, we'll tell you fast.</p>
        </div>

        <div className="qualify-grid">
          <div className="qualify-card is-yes">
            <div className="qhead"><Icon.Check /> This is you if</div>
            <ul>
              <li><span className="icon"><Icon.Check /></span>You run an established agency writing <strong>real premium volume</strong> (not brand-new)</li>
              <li><span className="icon"><Icon.Check /></span>You're tired of shared lead lists, aged data, and price-shoppers</li>
              <li><span className="icon"><Icon.Check /></span>You want full visibility into your lead-gen ROI, not monthly reports</li>
              <li><span className="icon"><Icon.Check /></span>You value infrastructure over tactics and long-term leverage</li>
              <li><span className="icon"><Icon.Check /></span>You're ready to invest to own — not rent — your pipeline</li>
              <li><span className="icon"><Icon.Check /></span>You'll provide data and access so we can hit the numbers</li>
            </ul>
            <div className="bottom-line">If you're serious about scaling and ready to invest, book the call.</div>
          </div>

          <div className="qualify-card is-no">
            <div className="qhead"><Icon.X /> This is not you if</div>
            <ul>
              <li><span className="icon"><Icon.X /></span>You're looking for a quick fix or the cheapest option</li>
              <li><span className="icon"><Icon.X /></span>You're brand-new or writing little premium volume</li>
              <li><span className="icon"><Icon.X /></span>You need volume over quality — any lead, any price</li>
              <li><span className="icon"><Icon.X /></span>You prefer DIY and don't want a partner optimizing</li>
              <li><span className="icon"><Icon.X /></span>You won't provide data or access for proper tracking</li>
              <li><span className="icon"><Icon.X /></span>You want a cheap "set it and forget it" subscription</li>
            </ul>
            <div className="bottom-line">If that's where you are, no hard feelings — bookmark us and come back later.</div>
          </div>
        </div>

        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={onApply}>
            See if you qualify in 60 seconds
            <span className="arrow"><Icon.Arrow /></span>
          </button>
        </div>
      </div>
    </section>);

}

// ============================ PROCESS

const PROCESS = [
{ num: '01', title: 'You submit your application', body: '5 quick questions. Takes under 60 seconds.', time: '60 SEC' },
{ num: '02', title: 'We review within 24 hours', body: 'If you\'re a fit, you\'ll see a calendar link to book. If not, we tell you fast and point you in the right direction.', time: '< 24 HRS' },
{ num: '03', title: 'Diagnostic call with Brian', body: '15 minutes. We walk through your current setup, identify the gaps, and show you exactly what we\'d build.', time: '15 MIN' },
{ num: '04', title: 'Custom system proposal', body: 'You see what we\'d build, expected results, timeline, and investment. No mystery. No pressure.', time: 'SAME DAY' },
{ num: '05', title: 'Installed in 7 days. Live forever.', body: 'If you move forward, we install the full Built to Scale™ system. Launched in 7 days. Owned by you.', time: '7 DAYS' }];


function Process({ onApply }) {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />HOW IT WORKS</span>
          <h2 className="text-grad">From application to live system. <span className="text-brand">5 steps.</span></h2>
          <p className="lede">We don't waste your time. Here's the exact path from clicking apply to a fully installed pipeline.</p>
        </div>

        <div className="process-list">
          {PROCESS.map((p, i) =>
          <div key={i} className="process-row">
              <div className="pr-num">STEP {p.num}</div>
              <div className="pr-content">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
              <div className="pr-time">{p.time}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============================ FAQ

const FAQS = [
{ q: 'What happens on the diagnostic call?', a: 'We walk through your current lead-gen setup — what you\'re running, what it costs, how many leads you\'re getting, and what conversion looks like from lead to quote to bind. Then we identify the gaps and show you exactly what we\'d build. If we can\'t help, we tell you fast.' },
{ q: 'Will this disrupt our current operations?', a: 'No. We integrate with your existing setup and handle the buildout behind the scenes. You provide access to ad accounts and lead tracking — we don\'t require you to pause campaigns or overhaul your process. Most agencies are up and running within 7 days.' },
{ q: 'How quickly will we see results?', a: 'Most agencies see improved cost per lead and lead quality within the first 30–45 days. Significant pipeline impact — $60K+ added in commission — typically happens within 60–90 days. The system compounds over time as the optimization feedback loop runs.' },
{ q: 'How is this different from shared lead vendors?', a: 'Lead vendors sell the same lead to 5 or 6 agencies. You\'re competing for attention, and half the time the prospect has already bound with someone else. We build you exclusive inbound — leads are yours alone, targeted to active home & auto shoppers ready to quote. No competition. Higher pick-up. Better bind rates. One agency per territory.' },
{ q: 'What do we need to provide on our end?', a: 'Access to ad accounts, CRM/AMS, and lead tracking so we can set up proper measurement. Someone available for the weekly check-in call. That\'s it. We handle strategy, execution, tracking, optimization, and reporting.' },
{ q: 'How do you ensure the leads are qualified?', a: 'You define what "qualified" means for your agency — coverage type, household profile, intent, timeline. We build the pre-qualification process into the funnel so tire-kickers get filtered out before they ever hit an agent. Only the right prospects make it through.' },
{ q: 'What results can we realistically expect?', a: 'Agencies running Built to Scale™ typically see CPL drop from $30–$50 to $4–$12 within 60–90 days. Lead-to-quote ratios improve to 25–35%. Commission adds of $60K–$240K in the first 90 days are common. Volume increases 50–87% while CPL drops 40–65%.' },
{ q: 'How do we get started?', a: 'Click the button below to apply. 5 quick questions, takes about 60 seconds. We review within 24 hours and get back to you to schedule your diagnostic call.' }];


function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" />STILL HAVE QUESTIONS?</span>
          <h2 className="text-grad">The honest answers. No sales fluff.</h2>
        </div>
        <div className="faq">
          {FAQS.map((f, i) =>
          <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          )}
        </div>
      </div>
    </section>);

}

// ============================ FINAL CTA

function FinalCTA({ onApply, spots }) {
  return (
    <section className="section" id="apply">
      <div className="container">
        <div className="final-cta">
          <span className="eyebrow"><span className="dot" />{spots} OF 6 SLOTS LEFT THIS MONTH</span>
          <h2 className="text-grad" style={{ marginTop: 24 }}>Stop relying on vendors. <span className="text-brand">Start owning your pipeline.</span></h2>
          <p className="lede">You've seen the results. You've read the testimonials. You know this works. The only question left: are you ready?</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, alignItems: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={onApply}>
              Book your diagnostic call
              <span className="arrow"><Icon.Arrow /></span>
            </button>
          </div>
          <div className="mono" style={{ marginTop: 20, fontSize: 12, letterSpacing: '0.12em', color: 'var(--text-mute)' }}>
            15 MINUTES · NO PITCH · JUST A PLAN
          </div>
        </div>
      </div>
    </section>);

}

// ============================ FOOTER

function Footer() {
  return (
    <footer className="footer">
      <img src="assets/logo.png" alt="Sore Thumb Agency" />
      <div className="small">© 2026 Sore Thumb Agency. All rights reserved.</div>
      <div className="small">We install the infrastructure your business should've had from day one.</div>
    </footer>);

}

// ============================ STICKY MOBILE

function StickyMobile({ onApply }) {
  return (
    <div className="sticky-mobile">
      <button className="btn btn-primary btn-lg" onClick={onApply}>
        Apply now — 60 sec
        <span className="arrow"><Icon.Arrow /></span>
      </button>
    </div>);

}

Object.assign(window, {
  TopBar, ScarcityBar, Hero, Results, ProblemSolution, VideoBreakdown,
  System, Testimonials, Qualify, Process, FAQ, FinalCTA, Footer, StickyMobile, Icon
});
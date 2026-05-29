const { useState: useStateA, useEffect: useEffectA } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "infrastructure",
  "spotsLeft": 2,
  "showScarcity": true,
  "autoSpots": true
}/*EDITMODE-END*/;

// Auto-decrement through the month: start at 6 on day 1, lose one slot
// every ~5 days, floor at 1. Resets on the 1st of each month.
function computeSpots() {
  const day = new Date().getDate(); // 1..31
  return Math.max(1, 6 - Math.floor((day - 1) / 5));
}

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  const [autoSpots, setAutoSpots] = useStateA(computeSpots());

  // Refresh once an hour while the page sits open so it ticks across day boundaries.
  useEffectA(() => {
    const id = setInterval(() => setAutoSpots(computeSpots()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const spots = t.autoSpots ? autoSpots : t.spotsLeft;

  // Launches the Typeform popup defined in index.html.
  const openApp = () => {
    if (typeof window.openTypeform === 'function') {
      window.openTypeform();
    }
  };

  return (
    <>
      <div className="atmosphere" />
      <div className="grain" />

      <div className="sticky-stack">
        {t.showScarcity && <ScarcityBar spots={spots} total={6} />}
        <TopBar onApply={openApp} />
      </div>

      <Hero onApply={openApp} variant={t.heroVariant} />
      <Results onApply={openApp} />
      <ProblemSolution onApply={openApp} />
      <VideoBreakdown onApply={openApp} />
      <System onApply={openApp} />
      <Testimonials />
      <Qualify onApply={openApp} />
      <Process onApply={openApp} />
      <FAQ />
      <FinalCTA onApply={openApp} spots={spots} />
      <Footer />

      <StickyMobile onApply={openApp} />

      <TweaksPanel title="Funnel Tweaks">
        <TweakSection label="Hero hook">
          <TweakSelect
            label="Headline angle"
            value={t.heroVariant}
            options={[
              { label: 'Stop chasing · agency they come to', value: 'inbound' },
              { label: 'Stop chasing, start closing', value: 'closing' },
              { label: 'Add $1M+ in premium (bolder)', value: 'premium' },
              { label: 'Own your territory', value: 'territory' },
              { label: 'Acquisition infrastructure', value: 'infrastructure' },
              { label: 'Inbound pipeline', value: 'pipeline' },
              { label: 'Exclusive leads, ready to quote', value: 'exclusive' },
              { label: 'Install the system', value: 'install' },
              { label: 'Built to Scale™ system', value: 'builtToScale' },
              { label: 'Stop renting · install the system', value: 'own' },
              { label: 'Exclusive leads every week', value: 'weekly' },
            ]}
            onChange={(v) => setTweak('heroVariant', v)}
          />
        </TweakSection>
        <TweakSection label="Scarcity">
          <TweakToggle label="Show scarcity bar" value={t.showScarcity} onChange={(v) => setTweak('showScarcity', v)} />
          <TweakToggle label="Auto-count down through month" value={t.autoSpots} onChange={(v) => setTweak('autoSpots', v)} />
          {!t.autoSpots && (
            <TweakSlider label="Spots remaining (manual)" value={t.spotsLeft} min={1} max={6} step={1} onChange={(v) => setTweak('spotsLeft', v)} />
          )}
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

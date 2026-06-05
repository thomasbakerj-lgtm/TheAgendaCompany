"use client";

import { useEffect, useRef, useState } from "react";

function Count({ to, prefix = "", suffix = "", decimals = 0, run }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf, start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / 1200);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{prefix}{v.toFixed(decimals)}{suffix}</>;
}

export default function ProofStats() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); ob.disconnect(); } }, { threshold: 0.3 });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <div className="stat-band" ref={ref} style={{ marginTop: "3rem" }}>
      <div className="stat">
        <div className="figure"><Count to={70} suffix="%" run={seen} /></div>
        <div className="label">of the events industry isn&rsquo;t equipped to prove what its events delivered.</div>
        <div style={{ height: "10px", borderRadius: "6px", background: "var(--sand)", overflow: "hidden", marginTop: "1rem" }}>
          <span style={{ display: "block", height: "100%", width: seen ? "70%" : "0%", background: "var(--gold-soft)", borderRadius: "6px", transition: "width 1.1s cubic-bezier(.2,.7,.2,1)" }} />
        </div>
        <span className="src">Global DMC Partners, 2026</span>
      </div>
      <div className="stat">
        <div className="figure"><Count to={57.86} prefix="$" suffix="B" decimals={2} run={seen} /></div>
        <div className="label">projected U.S. corporate event services market by 2035, up from $29.49B in 2024.</div>
        <span className="src">Allied Market Research, 2025</span>
      </div>
      <div className="stat">
        <div className="figure"><Count to={85} suffix="%" run={seen} /></div>
        <div className="label">of meeting professionals are optimistic about 2026 &mdash; a five-year high.</div>
        <span className="src">Amex GBT 2026 Forecast</span>
      </div>
    </div>
  );
}

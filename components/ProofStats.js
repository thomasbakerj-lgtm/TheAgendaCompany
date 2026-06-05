"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); ob.disconnect(); } },
      { threshold: 0.3 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return [ref, seen];
}

function Count({ to, prefix = "", suffix = "", decimals = 0, run }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf, start;
    const dur = 1200;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{prefix}{v.toFixed(decimals)}{suffix}</>;
}

export default function ProofStats() {
  const [ref, seen] = useInView();
  return (
    <div className="proviz" ref={ref}>
      <div className="pv">
        <div className="pvfig"><Count to={70} suffix="%" run={seen} /></div>
        <div className="pvlabel">of the events industry isn&rsquo;t equipped to prove what its events delivered.</div>
        <div className="gapbar" aria-hidden="true">
          <span className="b1" style={{ width: seen ? "70%" : "0%" }} />
        </div>
        <span className="pvsrc">Global DMC Partners, 2026</span>
      </div>
      <div className="pv">
        <div className="pvfig"><Count to={57.86} prefix="$" suffix="B" decimals={2} run={seen} /></div>
        <div className="pvlabel">projected U.S. corporate event services market by 2035, up from $29.49B in 2024.</div>
        <span className="pvsrc">Allied Market Research, 2025</span>
      </div>
      <div className="pv">
        <div className="pvfig"><Count to={85} suffix="%" run={seen} /></div>
        <div className="pvlabel">of meeting professionals are optimistic about 2026 &mdash; a five-year high.</div>
        <span className="pvsrc">Amex GBT 2026 Forecast</span>
      </div>
    </div>
  );
}

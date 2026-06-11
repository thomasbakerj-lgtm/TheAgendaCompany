"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector(".sf-home");
    if (!root) return;

    // Accordion (method)
    const rows = Array.from(root.querySelectorAll("#sf-agenda .arow"));
    const hover = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const setBody = (r) => {
      const b = r.querySelector(".arow-body");
      const inner = b.querySelector(".arow-inner");
      b.style.maxHeight = r.classList.contains("open") ? inner.offsetHeight + "px" : "0";
    };
    const openRow = (i) => rows.forEach((r, j) => { r.classList.toggle("open", j === i); setBody(r); });
    const cleanups = [];
    rows.forEach((r, i) => {
      const head = r.querySelector(".arow-head");
      if (hover) {
        const onEnter = () => openRow(i);
        r.addEventListener("mouseenter", onEnter);
        cleanups.push(() => r.removeEventListener("mouseenter", onEnter));
      }
      const onClick = () => {
        const wasOpen = r.classList.contains("open");
        if (wasOpen && !hover) { r.classList.remove("open"); setBody(r); }
        else openRow(i);
      };
      head.addEventListener("click", onClick);
      cleanups.push(() => head.removeEventListener("click", onClick));
    });
    if (rows.length) openRow(0);
    const onResize = () => rows.forEach(setBody);
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    // Scroll reveal
    const revIO = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revIO.unobserve(e.target); } });
    }, { threshold: 0.12 });
    root.querySelectorAll(".reveal").forEach((el) => revIO.observe(el));

    // Stat counters
    const stats = root.querySelector("#sf-stats");
    let counted = false;
    let statIO;
    if (stats) {
      statIO = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !counted) {
            counted = true;
            root.querySelectorAll(".fig").forEach((f) => {
              const to = parseFloat(f.dataset.to), suf = f.dataset.suf || "";
              let start = null;
              const tick = (t) => {
                start = start || t;
                const p = Math.min(1, (t - start) / 1300);
                const v = to * (1 - Math.pow(1 - p, 3));
                f.textContent = Math.round(v) + suf;
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            });
          }
        });
      }, { threshold: 0.4 });
      statIO.observe(stats);
    }

    return () => {
      cleanups.forEach((fn) => fn());
      revIO.disconnect();
      if (statIO) statIO.disconnect();
    };
  }, []);

  return null;
}

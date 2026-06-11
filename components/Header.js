"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, CTA } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sf-header">
      <div className="wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="The Agenda Company home">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ flex: "none" }}>
            <defs>
              <linearGradient id="sfHeadGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FF6B5A" />
                <stop offset="1" stopColor="#7C84FF" />
              </linearGradient>
            </defs>
            <path d="M74 26 A37 37 0 1 0 74 78" stroke="url(#sfHeadGrad)" strokeWidth="3" strokeLinecap="round" />
            <path d="M32 82 L50 19 L68 82" stroke="url(#sfHeadGrad)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="39.7" y1="55" x2="60.3" y2="55" stroke="url(#sfHeadGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="36.9" y1="65" x2="63.1" y2="65" stroke="url(#sfHeadGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="34.3" y1="74" x2="65.7" y2="74" stroke="url(#sfHeadGrad)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="34.6" cy="55" r="3.2" fill="#FF6B5A" />
            <circle cx="31.8" cy="65" r="3.2" fill="#FF7AA8" />
            <circle cx="29.2" cy="74" r="3.2" fill="#7C84FF" />
          </svg>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span className="wm">The Agenda Company</span>
            <span className="sub">Boutique events &middot; Phoenix</span>
          </span>
        </Link>

        <button className="menu-toggle" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Menu"}
        </button>

        <nav className={open ? "open" : ""}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="btn" href={CTA.primary.href} onClick={() => setOpen(false)}>
            Let&rsquo;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

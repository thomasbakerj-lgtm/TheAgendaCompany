"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, CTA } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="The Agenda Company home"
          style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
            style={{ color: "var(--gold)", flex: "none" }}
          >
            <path d="M74 26 A37 37 0 1 0 74 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 82 L50 19 L68 82" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="39.7" y1="55" x2="60.3" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="36.9" y1="65" x2="63.1" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="34.3" y1="74" x2="65.7" y2="74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34.6" cy="55" r="3" fill="currentColor" />
            <circle cx="31.8" cy="65" r="3" fill="currentColor" />
            <circle cx="29.2" cy="74" r="3" fill="currentColor" />
          </svg>

          <span aria-hidden="true" style={{ width: "1px", height: "34px", background: "var(--line-strong)" }} />

          <span style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: "1.25rem",
                letterSpacing: "0.09em",
                color: "var(--gold)",
              }}
            >
              THE AGENDA
            </span>
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "0.55rem",
                letterSpacing: "0.42em",
                color: "var(--cream)",
                marginTop: "3px",
                paddingLeft: "2px",
              }}
            >
              COMPANY
            </span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="btn" href={CTA.primary.href} onClick={() => setOpen(false)}>
            Start a Conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}

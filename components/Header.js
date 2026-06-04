"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, CTA } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <b>The Agenda Company</b>
          <span className="dot">.</span>
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

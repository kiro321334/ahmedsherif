"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    ) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const link = (id: string) =>
    `text-[13px] font-semibold uppercase tracking-wider transition-colors ${active === id ? "text-gold" : "text-cream/80 hover:text-cream"}`;

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-[var(--nav-h)] max-w-5xl items-center justify-between px-8">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "page" : undefined}
                  className={link(n.id)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-wider text-ink"
          >
            Let&apos;s Talk
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full bg-surface text-gold md:hidden"
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-white/5 bg-ink px-8 pb-4 shadow-[0_20px_30px_rgba(0,0,0,0.5)] md:hidden"
        >
          <ul>
            {NAV.map((n) => (
              <li key={n.id} className="border-b border-white/5 last:border-0">
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === n.id ? "page" : undefined}
                  className={`block py-4 ${link(n.id)}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

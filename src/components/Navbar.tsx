"use client";

import { pageLinks, navLinks, site } from "@/data/content";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** Sticky header: logo left, links + Pages dropdown + hamburger right. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pagesRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPagesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target as Node)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-hero/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/#home" className="flex items-center gap-2 text-sm font-medium tracking-wide">
          <Code2 className="h-5 w-5 text-accent" aria-hidden />
          <span className="font-heading text-[15px] text-white">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] tracking-wide text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <div className="relative" ref={pagesRef}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-[13px] tracking-wide text-white/80 transition hover:text-white"
                  aria-expanded={pagesOpen}
                  aria-haspopup="true"
                  onClick={() => setPagesOpen((v) => !v)}
                >
                  Pages
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition ${pagesOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {pagesOpen && (
                  <ul className="absolute right-0 top-full z-20 mt-3 min-w-[160px] rounded-lg border border-white/10 bg-section py-2 shadow-xl">
                    {pageLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-[13px] text-white/80 hover:bg-white/5 hover:text-white"
                          onClick={() => setPagesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </ul>

          <button
            type="button"
            className="text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-section px-6 py-6 shadow-2xl md:w-80"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-heading text-sm">{site.name}</span>
              <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {[...navLinks, ...pageLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-2 py-3 text-sm text-white/85 hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}

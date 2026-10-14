"use client";

import {
  heroAboutPreview,
  heroBio,
  heroWorkPreview,
  site,
} from "@/data/content";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { SocialIcons } from "./ui/SocialIcons";

const fade = (delay: number, reduce: boolean | null) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
      };

/** Full-viewport hero: heading left, cutout portrait center, info column right. */
export function Hero() {
  const reduce = useReducedMotion();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-hero"
      aria-label="Introduction"
    >
      {/* Thin vertical accent strip on the far left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[5px] bg-accent sm:w-1.5" />

      <div className="relative mx-auto min-h-[100svh] max-w-site px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[100svh] grid-cols-1 pt-20 lg:grid-cols-12 lg:pt-8">
          {/* LEFT — heading + bio + scroll button (sits above the photo) */}
          <div className="relative z-20 order-1 flex flex-col justify-center py-8 lg:col-span-5 lg:row-start-1 lg:py-0">
            <motion.div {...fade(0.05, reduce)}>
              <span className="mb-6 block h-px w-12 bg-white" aria-hidden />
            </motion.div>

            <motion.h1
              className="max-w-[11ch] font-heading text-[2.65rem] font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.35rem] xl:text-[4.75rem]"
              {...fade(0.15, reduce)}
            >
              I&apos;m {site.firstName}, a {site.role}
            </motion.h1>

            <motion.p
              className="mt-6 max-w-sm text-sm leading-relaxed text-muted sm:text-[15px]"
              {...fade(0.28, reduce)}
            >
              {heroBio}
            </motion.p>

            <motion.button
              type="button"
              onClick={scrollToAbout}
              aria-label="Scroll to about section"
              className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_30px_rgba(29,95,255,0.35)] transition hover:bg-blue-600"
              {...fade(0.4, reduce)}
            >
              <motion.span
                className="inline-flex"
                animate={reduce ? undefined : { y: [0, 6, 0] }}
                transition={
                  reduce ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <ChevronDown className="h-6 w-6" aria-hidden />
              </motion.span>
            </motion.button>
          </div>

          {/* RIGHT — about / work / socials */}
          <motion.aside
            className="relative z-20 order-3 flex flex-col justify-center border-t border-white/10 py-8 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:border-t-0 lg:py-0"
            {...fade(0.35, reduce)}
          >
            <div className="space-y-8">
              <div>
                <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-white">
                  ABOUT ME
                </p>
                <p className="text-[13px] leading-relaxed text-muted">{heroAboutPreview}</p>
                <a
                  href="#about"
                  className="mt-4 inline-flex text-[12px] font-semibold tracking-wide text-white underline decoration-white/50 underline-offset-[6px] transition hover:text-accent hover:decoration-accent"
                >
                  LEARN MORE →
                </a>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-white">
                  MY WORK
                </p>
                <p className="text-[13px] leading-relaxed text-muted">{heroWorkPreview}</p>
                <a
                  href="#projects"
                  className="mt-4 inline-flex text-[12px] font-semibold tracking-wide text-white underline decoration-white/50 underline-offset-[6px] transition hover:text-accent hover:decoration-accent"
                >
                  BROWSE PORTFOLIO →
                </a>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-white">
                  FOLLOW ME
                </p>
                <SocialIcons />
              </div>
            </div>
          </motion.aside>

          {/* Portrait: flows under the heading on mobile; pinned to the hero bottom on desktop */}
          <motion.div
            className="relative z-10 order-2 mx-auto mt-2 w-full max-w-md lg:absolute lg:bottom-0 lg:left-[18%] lg:mx-0 lg:mt-0 lg:h-[90%] lg:w-[52%] lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative h-[420px] w-full sm:h-[520px] lg:h-full">
              <Image
                src={site.profileImage}
                alt={`Portrait of ${site.name}, ${site.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 52vw"
                className="object-contain object-bottom"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-hero via-hero/70 to-transparent"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

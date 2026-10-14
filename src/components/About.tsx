"use client";

import { aboutHeadingPhrase, aboutText, stats } from "@/data/content";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    /* Blue parent + large top-left radius creates the template's overlapping corner. */
    <div className="relative z-20 bg-accent">
      <section
        id="about"
        className="scroll-mt-24 rounded-tl-[4.5rem] bg-section px-5 pb-20 pt-20 sm:rounded-tl-[7rem] sm:px-8 lg:rounded-tl-[10rem] lg:px-10 lg:pb-28 lg:pt-28"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading
              id="about-heading"
              label="ABOUT ME"
              title={`I've been developing ${aboutHeadingPhrase}`}
            />
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">{aboutText}</p>
          </div>

          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-5 lg:content-end">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <dt className="text-xs tracking-[0.16em] text-muted">{stat.label}</dt>
                <dd className="mt-2 font-heading text-4xl font-medium text-white lg:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}

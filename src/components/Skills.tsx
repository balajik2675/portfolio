import { skills } from "@/data/content";
import {
  FaCss3Alt,
  FaJava,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import type { IconType } from "react-icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** Maps skill names from content.ts to brand icons. Unknown names get a fallback letter. */
const icons: Record<string, IconType> = {
  Java: FaJava,
  Python: FaPython,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  SQL: SiMysql,
  MongoDB: SiMongodb,
  GitHub: FaGithub,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-section px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-site">
        <Reveal>
          <SectionHeading id="skills-title" label="SKILLS" title="Tools I use to ship ideas." />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, i) => {
            const Icon = icons[skill];
            return (
              <Reveal key={skill} delay={i * 0.04}>
                <li className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-hero/40 px-4 py-4 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_0_24px_rgba(29,95,255,0.25)]">
                  {Icon ? (
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  ) : (
                    <span className="flex h-5 w-5 items-center justify-center text-xs text-accent">
                      {skill[0]}
                    </span>
                  )}
                  <span className="text-sm text-white/90">{skill}</span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

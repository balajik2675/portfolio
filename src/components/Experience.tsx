import { timeline } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  const experience = timeline.filter((item) => item.type === "experience");
  const education = timeline.filter((item) => item.type === "education");

  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-section px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-site">
        <Reveal>
          <SectionHeading
            id="experience-title"
            label="EDUCATION"
            title="My academic journey."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {experience.length > 0 && <TimelineColumn heading="Experience" items={experience} />}
          <TimelineColumn heading="Education" items={education} />
        </div>
      </div>
    </section>
  );
}

function TimelineColumn({
  heading,
  items,
}: {
  heading: string;
  items: typeof timeline;
}) {
  return (
    <div>
      <h3 className="mb-6 font-heading text-lg text-white">{heading}</h3>
      <ol className="relative space-y-8 border-l border-white/10 pl-6">
        {items.map((item, i) => (
          <Reveal key={`${item.title}-${item.period}`} delay={i * 0.08}>
            <li className="relative">
              <span
                className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden
              />
              <p className="text-xs tracking-wide text-accent">{item.period}</p>
              <p className="mt-1 font-heading text-lg text-white">{item.title}</p>
              <p className="text-sm text-white/70">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

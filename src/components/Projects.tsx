import { projects } from "@/data/content";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-hero px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-site">
        <Reveal>
          <SectionHeading
            id="projects-title"
            label="PORTFOLIO"
            title="Selected work and experiments."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <li className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-section transition hover:-translate-y-1 hover:border-accent">
                <div className="relative aspect-[16/10] overflow-hidden bg-hero">
                  <Image
                    src={project.image}
                    alt={`Screenshot placeholder for ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized={project.image.endsWith(".svg")}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <ul className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] tracking-wide text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-heading text-xl font-medium text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/80 hover:text-accent"
                    >
                      <FaGithub className="h-3.5 w-3.5" aria-hidden />
                      GitHub
                    </a>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

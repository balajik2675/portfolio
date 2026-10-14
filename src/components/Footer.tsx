import { footerLinks, site } from "@/data/content";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { SocialIcons } from "./ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-hero px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-site flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href="/#home" className="inline-flex items-center gap-2">
            <Code2 className="h-5 w-5 text-accent" aria-hidden />
            <span className="font-heading text-sm">{site.name}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {site.role} — building clear, fast web experiences.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialIcons />
      </div>
      <p className="mx-auto mt-10 max-w-site text-xs text-muted">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}

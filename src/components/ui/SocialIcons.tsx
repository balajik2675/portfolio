import { socials, type SocialLink } from "@/data/content";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

type Props = {
  links?: SocialLink[];
  className?: string;
  iconClassName?: string;
};

/** Brand icons for GitHub, LinkedIn, X, Instagram, and YouTube. */
export function SocialIcons({
  links = socials,
  className = "",
  iconClassName = "h-4 w-4",
}: Props) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.name];
        return (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="inline-flex text-white/80 transition hover:text-accent"
            >
              <Icon className={iconClassName} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

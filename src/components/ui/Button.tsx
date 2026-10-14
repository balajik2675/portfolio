import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "link";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & { href: string; type?: never; onClick?: () => void };

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-accent text-white transition hover:bg-blue-600 disabled:opacity-60",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-white/15 text-white transition hover:border-accent hover:text-accent",
  link: "inline-flex items-center gap-1 text-sm font-medium text-white underline underline-offset-4 decoration-white/40 transition hover:text-accent hover:decoration-accent",
};

/** Reusable button. Pass `href` to render a Next.js link instead. */
export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const cls = `${styles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={cls} onClick={onClick} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

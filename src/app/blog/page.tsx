import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/data/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing and notes from ${site.name}. Coming soon.`,
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="mx-auto min-h-[70vh] max-w-site px-5 py-24 sm:px-8">
        <p className="mb-3 text-xs font-medium tracking-[0.18em] text-muted">
          <span className="text-accent">/</span> BLOG
        </p>
        <h1 className="font-heading text-4xl font-medium sm:text-5xl">Notes coming soon.</h1>
        <p className="mt-6 max-w-lg text-muted">
          This page is a placeholder so the Blog nav link has a real destination. Add posts here
          later — MDX, a CMS, or a simple list of articles all work well.
        </p>
        <Link href="/#home" className="mt-8 inline-block text-sm text-accent hover:underline">
          ← Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}

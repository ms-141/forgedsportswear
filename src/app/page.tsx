import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoCard } from "@/components/VideoCard";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Shop By Category"
            title="Gear We Build From Scratch"
            description="Every piece is 100% custom-sublimated to your team or brand. Minimum 6 pieces per design."
          />
          <Link
            href="/shop"
            className="inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-brand-orange hover:text-brand-orange-glow"
          >
            View Full Shop <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="border-t border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From Idea To Game Day"
            description="No templates, no limits. Here's how a custom Forged Sportswear order comes together."
          />
          <div className="mt-10">
            <HowItWorks />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See It In Action"
          title="Forged From Scratch"
          description="Straight off our sublimation printers — watch how we turn blank fabric into fully custom teamwear."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <VideoCard
            src="/media/videos/ad-vertical.mp4"
            poster="/media/images/ad-vertical-poster.jpg"
            title="Forged From Scratch"
            vertical
          />
          <VideoCard
            src="/media/videos/ad-horizontal.mp4"
            poster="/media/images/ad-horizontal-poster.jpg"
            title="Forged Sportswear Production"
          />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-brand-orange hover:text-brand-orange-glow"
          >
            See More In The Gallery <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-border bg-gradient-to-br from-brand-surface via-brand-bg to-brand-surface">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Ready to <span className="text-gradient-orange">forge</span> your team&apos;s look?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
            Submit your design and quantities for a free custom quote. {site.minQty}-piece
            minimum per design, shipping across Canada &amp; the USA.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand-orange-dark"
            >
              Start Your Custom Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-silver-dark/60 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

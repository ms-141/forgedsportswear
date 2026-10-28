import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden border-b border-brand-border">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/images/ad-vertical-poster.jpg"
      >
        <source src="/media/clips/clip-4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-bg/95 via-brand-bg/40 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-brand-orange">
            100% Custom &middot; Premium Quality &middot; No Limits
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-steel">Forged</span>
            <br />
            <span className="text-gradient-orange">From Scratch</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-silver">
            Fully custom sublimated jerseys, tees, hoodies, shorts & compression gear
            for teams and brands that refuse to look off-the-rack. {site.shipping}.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/quote"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand-orange-dark"
            >
              Start Your Custom Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-md border border-brand-silver-dark/60 bg-black/30 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Browse Products
            </Link>
          </div>

          <p className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
            {site.minQty}-piece minimum per design &middot; Canada &amp; USA
          </p>
        </div>
      </div>
    </section>
  );
}

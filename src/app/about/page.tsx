import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Ruler, Package } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: "Forged Sportswear is a 100% custom teamwear and sportswear brand, forged from scratch.",
};

const values = [
  {
    icon: Flame,
    title: "Forged From Scratch",
    description:
      "No clip-art templates or recycled designs. Every order starts as a blank canvas built around your team, brand or event.",
  },
  {
    icon: Ruler,
    title: "No Limits",
    description:
      "Unlimited colors, full-garment sublimation, and sizing from youth small to 3XL — your design, your fit.",
  },
  {
    icon: Package,
    title: "Built For Teams",
    description:
      `Every design is produced to a ${site.minQty}-piece minimum so teams, clubs and brands get consistent, premium gear at a fair price.`,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Us"
        title="100% Custom. Premium Quality. No Limits."
        description="Forged Sportswear builds fully custom, dye-sublimated teamwear and sportswear for teams and brands across Canada and the United States."
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-border">
          <Image
            src="/media/images/ad1-poster.jpg"
            alt="Forged Sportswear sublimation printing in action"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-base leading-relaxed text-brand-muted">
            We print every design in-house on our own sublimation equipment, which means your
            team&apos;s colors and logo are baked directly into the fabric — not a sticker, not a
            decal, and it won&apos;t crack, peel or fade after a season of wear and washes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Whether you&apos;re outfitting a youth league, a competitive club, a corporate team, or
            launching your own sportswear line, we work with you from concept to final product so
            every piece looks exactly how you imagined it.
          </p>
          <Link
            href="/quote"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-orange hover:text-brand-orange-glow"
          >
            Start your custom order <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-brand-border bg-brand-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <Icon size={22} />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

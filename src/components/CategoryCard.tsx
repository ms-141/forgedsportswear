import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/lib/products";
import { site } from "@/lib/site";

export function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-border bg-brand-surface transition-colors hover:border-brand-orange/60"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-brand-orange backdrop-blur-sm">
          From ${category.startingPrice.toFixed(2)} {site.currency}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
          {category.shortName}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{category.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-orange">
          View &amp; Request Quote
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

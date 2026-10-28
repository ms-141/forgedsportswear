import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ChevronLeft } from "lucide-react";
import { categories, getCategory } from "@/lib/products";
import { CategoryOrderPanel } from "@/components/CategoryOrderPanel";
import { CategoryCard } from "@/components/CategoryCard";
import { site } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} | ${site.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-orange"
      >
        <ChevronLeft size={14} /> Back to Shop
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-border">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {category.fabricNote}
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-white">
            {category.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {category.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {category.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-brand-silver">
                <Check size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-silver">
              Available Sizes
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {category.sizes.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-brand-border bg-brand-surface px-3 py-1 font-display text-xs font-semibold text-brand-silver"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <CategoryOrderPanel category={category} />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white">
          Also Customizable
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {others.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

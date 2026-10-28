import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description: "Browse custom jerseys, tees, hoodies, shorts and compression gear. 6-piece minimum per design.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="The Shop"
        title="Build Your Custom Kit"
        description={`Every category below is fully customizable \u2014 your colors, your logo, your art. ${site.minQty}-piece minimum per design, no exceptions.`}
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}

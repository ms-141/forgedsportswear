"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QuantitySelector } from "@/components/QuantitySelector";
import { site } from "@/lib/site";
import type { ProductCategory } from "@/lib/products";

export function CategoryOrderPanel({ category }: { category: ProductCategory }) {
  const [qty, setQty] = useState(site.minQty);

  return (
    <div className="rounded-xl border border-brand-border bg-brand-surface p-6">
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
        Estimate Your Order
      </h3>
      <p className="mt-1 text-sm text-brand-muted">
        {site.minQty}-piece minimum per design. Mix sizes freely within your order.
      </p>

      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
          Quantity
        </span>
        <QuantitySelector value={qty} min={site.minQty} onChange={setQty} />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-5">
        <span className="font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
          Estimated Starting Total
        </span>
        <span className="font-display text-xl font-bold text-white">
          ${(category.startingPrice * qty).toFixed(2)}
        </span>
      </div>
      <p className="mt-1 text-xs text-brand-muted">
        Starting price shown. Final pricing depends on design complexity &amp; fabric — confirmed in your free quote.
      </p>

      <Link
        href={`/quote?category=${category.slug}&qty=${qty}`}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand-orange-dark"
      >
        Request This Quote
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

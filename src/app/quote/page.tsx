import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Request a Quote | ${site.name}`,
  description: "Submit your custom teamwear design and quantities for a free quote. 6-piece minimum per design.",
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Free Custom Quote"
        title="Let's Forge Your Gear"
        description={`Fill out the details below and we'll follow up with a custom quote and design proof. ${site.minQty}-piece minimum per design.`}
      />
      <div className="mt-10 rounded-xl border border-brand-border bg-brand-surface p-6 sm:p-8">
        <Suspense fallback={null}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}

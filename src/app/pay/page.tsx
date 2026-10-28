import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { PayForm } from "@/components/PayForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Pay Your Invoice | ${site.name}`,
  description: "Securely pay your Forged Sportswear quote or invoice by card via Stripe.",
};

export default function PayPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Secure Checkout"
        title="Pay Your Invoice"
        description="Enter the amount from your approved quote to pay by card. All payments are processed securely by Stripe."
      />
      <div className="mt-10 rounded-xl border border-brand-border bg-brand-surface p-6 sm:p-8">
        <Suspense fallback={null}>
          <PayForm />
        </Suspense>
      </div>
      <p className="mt-6 text-center text-xs text-brand-muted">
        Questions about your invoice? Email {site.email} or call {site.phone}.
      </p>
    </div>
  );
}

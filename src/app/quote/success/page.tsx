import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Quote Submitted | ${site.name}`,
};

export default function QuoteSuccessPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <CheckCircle2 size={56} className="text-brand-orange" />
      <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight text-white">
        Quote Request Sent
      </h1>
      <p className="mt-4 text-base leading-relaxed text-brand-muted">
        Thanks for reaching out! Our team will review your design details and follow up at the
        email you provided, usually within 1-2 business days. You can also reach us directly at{" "}
        <a href={`mailto:${site.email}`} className="text-brand-orange hover:underline">
          {site.email}
        </a>{" "}
        or{" "}
        <a href={site.phoneHref} className="text-brand-orange hover:underline">
          {site.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/shop"
          className="rounded-md bg-brand-orange px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-black hover:bg-brand-orange-dark"
        >
          Continue Browsing
        </Link>
        <Link
          href="/"
          className="rounded-md border border-brand-silver-dark/60 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:border-brand-orange hover:text-brand-orange"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

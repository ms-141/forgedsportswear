import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export default function PaySuccessPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <CheckCircle2 size={56} className="text-brand-orange" />
      <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight text-white">
        Payment Received
      </h1>
      <p className="mt-4 text-base leading-relaxed text-brand-muted">
        Thank you! Your payment was successful. We&apos;ll confirm by email and get your order into
        production. Reach us anytime at {site.email}.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-brand-orange px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-black hover:bg-brand-orange-dark"
      >
        Back Home
      </Link>
    </div>
  );
}

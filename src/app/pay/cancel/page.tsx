import Link from "next/link";
import { XCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function PayCancelPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <XCircle size={56} className="text-brand-muted" />
      <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight text-white">
        Payment Cancelled
      </h1>
      <p className="mt-4 text-base leading-relaxed text-brand-muted">
        No charge was made. If you ran into an issue, reach out to us at {site.email} or{" "}
        {site.phone} and we&apos;ll help you complete your payment.
      </p>
      <Link
        href="/pay"
        className="mt-8 rounded-md bg-brand-orange px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-black hover:bg-brand-orange-dark"
      >
        Try Again
      </Link>
    </div>
  );
}

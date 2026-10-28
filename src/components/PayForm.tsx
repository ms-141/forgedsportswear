"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import { site } from "@/lib/site";

export function PayForm() {
  const searchParams = useSearchParams();
  const [description, setDescription] = useState(searchParams.get("description") ?? "");
  const [amount, setAmount] = useState(searchParams.get("amount") ?? "");
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, amount, email }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Could not start checkout.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}
      <div>
        <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
          What&apos;s this invoice for?
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="e.g. Eagles U14 Jerseys x12 Deposit"
          className="w-full rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
          Amount ({site.currency})
        </label>
        <input
          type="number"
          min="1"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          placeholder="350.00"
          className="w-full rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
          Email (optional)
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Lock size={16} />}
        {loading ? "Redirecting to Secure Checkout..." : "Pay Securely with Stripe"}
      </button>
    </form>
  );
}

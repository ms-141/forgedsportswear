"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Paperclip, Send } from "lucide-react";
import { QuantitySelector } from "@/components/QuantitySelector";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

export function QuoteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") ?? categories[0].slug;
  const initialQty = Math.max(site.minQty, parseInt(searchParams.get("qty") ?? "", 10) || site.minQty);

  const [category, setCategory] = useState(initialCategory);
  const [qty, setQty] = useState(initialQty);
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (qty < site.minQty) {
      setError(`Quantity must be at least ${site.minQty} pieces.`);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("quantity", String(qty));
    formData.set("category", category);
    files.forEach((file) => formData.append("attachments", file));

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong submitting your quote.");
      }
      router.push("/quote/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong submitting your quote.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <fieldset className="space-y-5">
        <legend className="font-display text-sm font-semibold uppercase tracking-wider text-brand-orange">
          Your Info
        </legend>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Team / Organization" name="organization" />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-display text-sm font-semibold uppercase tracking-wider text-brand-orange">
          Order Details
        </legend>

        <div>
          <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Product
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-md border border-brand-border bg-brand-bg/60 px-4 py-3">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
              Quantity
            </span>
            <p className="text-xs text-brand-muted">{site.minQty}-piece minimum per design</p>
          </div>
          <QuantitySelector value={qty} min={site.minQty} onChange={setQty} />
        </div>

        <Textarea
          label="Size Breakdown"
          name="sizeBreakdown"
          placeholder="e.g. 2x S, 6x M, 4x L, 2x XL"
        />

        <Textarea
          label="Design & Color Notes"
          name="designNotes"
          placeholder="Tell us about your colors, logo placement, inspiration, or paste a link to reference images."
          required
        />

        <div>
          <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Upload Logo / Artwork (optional)
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-brand-border bg-brand-bg/60 px-4 py-6 text-sm text-brand-muted transition-colors hover:border-brand-orange hover:text-brand-orange">
            <Paperclip size={16} />
            {files.length > 0
              ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
              : "Click to attach files (images, PDF, AI, EPS)"}
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-display text-sm font-semibold uppercase tracking-wider text-brand-orange">
          Shipping
        </legend>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
              Country
            </label>
            <select
              name="country"
              defaultValue="Canada"
              className="w-full rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
            >
              <option value="Canada">Canada</option>
              <option value="United States">United States</option>
            </select>
          </div>
          <Field label="City / Province or State" name="location" />
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
        {submitting ? "Sending Your Request..." : "Submit Quote Request"}
      </button>
      <p className="text-center text-xs text-brand-muted">
        We typically reply within 1-2 business days to {site.email}.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-silver">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={3}
        className="w-full resize-none rounded-md border border-brand-border bg-brand-bg px-3.5 py-2.5 text-sm text-white outline-none focus:border-brand-orange"
      />
    </div>
  );
}

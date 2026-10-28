import { PencilRuler, FileCheck2, CreditCard, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: PencilRuler,
    title: "1. Tell Us Your Vision",
    description:
      "Pick your gear, pick your quantities (6-piece minimum per design) and submit your logo, colors or artwork \u2014 or let our designers build it from scratch.",
  },
  {
    icon: FileCheck2,
    title: "2. Approve Your Proof",
    description:
      "We send a custom quote and digital mockup for your design. Nothing goes to print until you approve it.",
  },
  {
    icon: CreditCard,
    title: "3. Pay Securely",
    description:
      "Once approved, pay your invoice through a secure Stripe checkout \u2014 no guesswork, no hidden fees.",
  },
  {
    icon: PackageCheck,
    title: "4. We Forge & Ship",
    description:
      "Your gear is sublimated in-house and shipped straight to you anywhere in Canada or the USA.",
  },
];

export function HowItWorks() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-xl border border-brand-border bg-brand-surface p-6 transition-colors hover:border-brand-orange/50"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
            <Icon size={22} />
          </span>
          <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}

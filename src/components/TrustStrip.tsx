import { Truck, Sparkles, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  { icon: Sparkles, label: "100% Custom Designs" },
  { icon: ShieldCheck, label: "Premium Sublimated Quality" },
  { icon: InfinityIcon, label: "No Limits on Colors or Art" },
  { icon: Truck, label: site.shipping },
];

export function TrustStrip() {
  return (
    <div className="border-y border-brand-border bg-brand-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={20} className="shrink-0 text-brand-orange" />
            <span className="font-display text-xs font-semibold uppercase tracking-wide text-brand-silver sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: "Get in touch with Forged Sportswear for custom teamwear quotes, support and orders.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Get In Touch"
        title="We'd Love To Hear From You"
        description="Have a question about an order, pricing or turnaround? Reach out any time."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {contactMethods.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group rounded-xl border border-brand-border bg-brand-surface p-6 transition-colors hover:border-brand-orange/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <Icon size={22} />
            </span>
            <h3 className="mt-4 font-display text-xs font-semibold uppercase tracking-wider text-brand-muted">
              {label}
            </h3>
            <p className="mt-1 break-words font-display text-base font-semibold text-white group-hover:text-brand-orange">
              {value}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-6">
          <MapPin size={20} className="mt-0.5 shrink-0 text-brand-orange" />
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Where We Ship
            </h3>
            <p className="mt-1 text-sm text-brand-muted">{site.shipping}.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-6">
          <Clock size={20} className="mt-0.5 shrink-0 text-brand-orange" />
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Response Time
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              We reply to quote requests and emails within 1-2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

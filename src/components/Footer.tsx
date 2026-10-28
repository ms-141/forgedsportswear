import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { site, navLinks } from "@/lib/site";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/media/images/logo-120.jpg"
                alt={`${site.name} logo`}
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-cover"
              />
              <span className="font-display text-base font-semibold tracking-wide text-white">
                FORGED <span className="text-brand-orange">SPORTSWEAR</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-brand-muted">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-brand-silver transition-colors hover:text-brand-orange"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/shop/${c.slug}`}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-orange"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-orange"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-orange break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <a href={site.phoneHref} className="hover:text-brand-orange">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <span>{site.shipping}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-brand-border pt-6 text-xs text-brand-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Every order 100% custom &middot; {site.minQty}-piece minimum per design</p>
        </div>
      </div>
    </footer>
  );
}

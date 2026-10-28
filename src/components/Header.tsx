"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/media/images/logo-120.jpg"
            alt={`${site.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide text-white">
            FORGED <span className="text-brand-orange">SPORTSWEAR</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-orange ${
                  active ? "text-brand-orange" : "text-brand-silver"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Forged Sportswear on Instagram"
            className="text-brand-silver transition-colors hover:text-brand-orange"
          >
            <InstagramIcon size={19} />
          </a>
          <a
            href={site.phoneHref}
            aria-label="Call Forged Sportswear"
            className="text-brand-silver transition-colors hover:text-brand-orange"
          >
            <Phone size={19} />
          </a>
          <Link
            href="/quote"
            className="rounded-md bg-brand-orange px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-brand-orange-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-brand-bg px-4 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-display text-base font-medium uppercase tracking-wide text-brand-silver hover:bg-brand-surface hover:text-brand-orange"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-2 py-2.5 font-display text-base font-medium uppercase tracking-wide text-brand-silver hover:bg-brand-surface hover:text-brand-orange"
            >
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

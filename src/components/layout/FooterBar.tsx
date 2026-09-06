import Link from "next/link";
import MondrianStrip from "@/components/layout/MondrianStrip";
import type { ChromeLink } from "@/types/content";

function FooterNavLink({ href, label }: ChromeLink) {
  return (
    <Link
      href={href}
      className="type-caption relative uppercase tracking-[0.08em] text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-de-gold after:transition-[width] after:duration-300 hover:text-de-gold hover:after:w-full"
    >
      {label}
    </Link>
  );
}

export default function FooterBar({
  name,
  tagline,
  siteLinks,
  legalLinks,
}: {
  name: string;
  tagline: string;
  siteLinks: ChromeLink[];
  legalLinks: ChromeLink[];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="flex h-auto w-full flex-col bg-black pb-[env(safe-area-inset-bottom,0px)] text-white md:min-h-[50vh] lg:min-h-[50vh]">
      <div className="shrink-0 border-y-2 border-black" aria-hidden>
        <MondrianStrip rule="black" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="mx-auto grid w-full min-w-0 max-w-[var(--content-max)] grid-cols-1 gap-[var(--grid-gap)] px-[var(--page-px)] py-[var(--space-5)] md:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-w-0 flex-col items-end justify-start border-b-2 border-white pb-[var(--space-4)] text-right md:col-span-2 md:border-b-0 md:pb-0 lg:pr-[var(--space-4)]">
            <div className="flex w-full max-w-full flex-col items-end text-right lg:w-max">
              <p className="font-nav w-full text-[clamp(1.875rem,3.1vw,2.75rem)] leading-[1.15] tracking-[0.02em] lg:w-0 lg:min-w-full">
                {name}
              </p>
              <p className="mt-[var(--space-2)] text-[clamp(1.125rem,1.6vw,1.5rem)] leading-[1.35] tracking-[0.04em] text-white/80 lg:whitespace-nowrap">
                {tagline}
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="relative flex flex-col items-end justify-start gap-[var(--space-3)] border-b-2 border-white pb-[var(--space-4)] md:border-b-0 md:pb-0 lg:pl-[var(--space-4)]"
          >
            <div
              className="side-rule is-light absolute inset-y-0 left-0 hidden lg:block"
              aria-hidden
            />
            {siteLinks.map((link) => (
              <FooterNavLink key={link.href} {...link} />
            ))}
          </nav>

          <nav
            aria-label="Legal"
            className="relative flex flex-col items-end justify-start gap-[var(--space-3)] lg:pl-[var(--space-4)]"
          >
            <div
              className="side-rule is-light absolute inset-y-0 left-0 hidden lg:block"
              aria-hidden
            />
            {legalLinks.map((link) => (
              <FooterNavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div>
          <div className="section-divider is-light" />
          <div className="px-[var(--page-px)] py-[var(--space-3)]">
            <p className="mx-auto max-w-[var(--content-max)] text-right">
              <Link
                href="/copyright"
                className="type-caption inline-block max-w-full uppercase tracking-[0.08em] text-white/70 transition-colors duration-300 hover:text-de-gold"
              >
                © {year} / {name} All rights reserved.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import MondrianStrip from "@/components/layout/MondrianStrip";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/galleries", label: "Galleries" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

const legalLinks = [
  { href: "/copyright", label: "Copyright Notice" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
];

function FooterNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="type-caption relative uppercase tracking-[0.08em] text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-de-gold after:transition-[width] after:duration-300 hover:text-de-gold hover:after:w-full"
    >
      {label}
    </Link>
  );
}

export default function FooterBar() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      <div className="border-y-2 border-black" aria-hidden>
        <MondrianStrip rule="black" />
      </div>

      <div>
        <div className="mx-auto grid w-full max-w-[var(--content-max)] grid-cols-1 gap-[var(--grid-gap)] px-[var(--page-px)] py-[var(--space-5)] md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-end justify-start text-right md:col-span-2">
            <p className="type-headline leading-tight">
              The Keyboard Curator &amp; Co.
            </p>
            <p className="type-body mt-[var(--space-2)] text-white/80">
              Curated by enthusiasts for enthusiasts.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="relative flex flex-col items-end justify-start gap-[var(--space-3)] lg:pl-[var(--space-4)]"
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
                className="type-caption uppercase tracking-[0.08em] text-white/70 transition-colors duration-300 hover:text-de-gold"
              >
                &copy; {year} The Keyboard Curator &amp; Co. All rights reserved.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import FooterBar from "@/components/layout/FooterBar";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getSite } from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSite();
  if (!site.settings) notFound();

  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <header className="border-b-2 border-black bg-white pt-[env(safe-area-inset-top,0px)]">
          <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-end px-[var(--page-px)] py-[var(--space-3)]">
            <Link href="/" className="nav-link">
              Back to site
            </Link>
          </div>
        </header>

        <div className="flex-grow">{children}</div>
        <FooterBar
          name={site.settings.name}
          tagline={site.settings.footerTagline}
          siteLinks={site.siteLinks}
          legalLinks={site.legalLinks}
        />
      </div>
    </MotionProvider>
  );
}

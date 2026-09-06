import FooterBar from "@/components/layout/FooterBar";
import LoadingSplash from "@/components/layout/LoadingSplash";
import Navbar from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getSite } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSite();
  if (!site.settings) notFound();

  return (
    <MotionProvider>
      <Navbar
        name={site.settings.name}
        shortName={site.settings.shortName}
        links={site.navbarLinks}
      />
      <div className="flex min-h-screen flex-col pt-[calc(var(--nav-height)+env(safe-area-inset-top,0px))]">
        <div className="flex-grow">{children}</div>
        <FooterBar
          name={site.settings.name}
          tagline={site.settings.footerTagline}
          siteLinks={site.siteLinks}
          legalLinks={site.legalLinks}
        />
      </div>
      <LoadingSplash />
    </MotionProvider>
  );
}

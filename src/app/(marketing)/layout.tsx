import FooterBar from "@/components/layout/FooterBar";
import LoadingSplash from "@/components/layout/LoadingSplash";
import Navbar from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/motion/MotionProvider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <Navbar />
      <div className="flex min-h-screen flex-col pt-[var(--nav-height)]">
        <div className="flex-grow">{children}</div>
        <FooterBar />
      </div>
      <LoadingSplash />
    </MotionProvider>
  );
}

import FooterCard from "@/components/layout/FooterCard";
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
      <div className="pt-[var(--nav-height)]">{children}</div>
      <LoadingSplash />
    </MotionProvider>
  );
}

import FooterBar from "@/components/layout/FooterBar";
import { MotionProvider } from "@/components/motion/MotionProvider";
import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <header className="border-b-2 border-black bg-white">
          <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-end px-[var(--page-px)] py-[var(--space-3)]">
            <Link href="/" className="nav-link">
              Back to site
            </Link>
          </div>
        </header>

        <div className="flex-grow">{children}</div>
        <FooterBar />
      </div>
    </MotionProvider>
  );
}

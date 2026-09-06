import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Keyboard Curator | Home",
  description:
    "Custom mechanical keyboards curated with care — builds, mods, and premium keycaps.",
  openGraph: { images: ["/og-image.png"] },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${bebasNeue.className} min-h-full flex flex-col bg-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

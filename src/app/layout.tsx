import type { Metadata } from "next";
import { Bebas_Neue, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "The Keyboard Curator | Home",
  description:
    "Custom mechanical keyboards curated with care — builds, mods, and premium keycaps.",
  openGraph: { images: ["/og-image.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${robotoCondensed.variable} h-full antialiased`}
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

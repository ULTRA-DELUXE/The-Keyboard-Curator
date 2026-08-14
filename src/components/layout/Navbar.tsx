"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full border-b-2 border-black bg-white/95 shadow-sm backdrop-blur-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={`${robotoCondensed.className} relative`}>
        <div className="mx-auto flex h-[var(--nav-height)] max-w-[var(--content-max)] items-center justify-between px-[var(--page-px)]">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-[var(--space-2)] sm:gap-[var(--space-3)]"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/thekblogo.png"
              alt="Logo"
              width={40}
              height={40}
              className="inline-block shrink-0"
            />
            <span className="type-subhead truncate font-semibold tracking-[0.02em] text-black">
              <span className="sm:hidden">TKC & Co.</span>
              <span className="hidden sm:inline">
                The Keyboard Curator & Co.
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-[var(--space-4)] lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-2 border-black lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`h-0.5 w-5 bg-black transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-black transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-nav"
              className="absolute left-0 right-0 top-[var(--nav-height)] border-b-2 border-black bg-white lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col px-[var(--page-px)] py-[var(--space-3)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link border-b border-black/10 py-[var(--space-3)] last:border-b-0 ${
                      pathname === link.href ? "text-de-blue" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

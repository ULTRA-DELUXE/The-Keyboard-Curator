export default function FooterCard() {
  return (
    <footer className="flex min-h-[calc(var(--space-6)*1.2)] w-full items-center justify-center border-t-2 border-black bg-black px-[var(--page-px)] py-[var(--space-4)] text-white">
      <p className="type-caption max-w-[24rem] text-center tracking-[0.08em] uppercase sm:max-w-none">
        &copy; {new Date().getFullYear()} The Keyboard Curator & Co. All rights
        reserved.
      </p>
    </footer>
  );
}

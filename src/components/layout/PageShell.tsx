export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`page-shell mx-auto w-full max-w-[var(--content-max)] ${className}`}>
      {children}
    </div>
  );
}

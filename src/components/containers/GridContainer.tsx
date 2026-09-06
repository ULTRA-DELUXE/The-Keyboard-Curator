export default function GridContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`page-section ${className}`}>
      <div className="marketing-grid">{children}</div>
    </section>
  );
}

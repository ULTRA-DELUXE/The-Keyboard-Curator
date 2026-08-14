export default function AboutGridContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="page-section">
      <div className="marketing-grid">{children}</div>
    </section>
  );
}

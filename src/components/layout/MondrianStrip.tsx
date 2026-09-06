export default function MondrianStrip({
  rule = "white",
}: {
  rule?: "white" | "black";
}) {
  const ruleClass = rule === "white" ? "bg-white" : "bg-black";

  return (
    <div className="flex h-[var(--space-3)] w-full" aria-hidden>
      <div className="min-w-0 flex-[2] bg-de-red" />
      <div className={`w-[2px] shrink-0 ${ruleClass}`} />
      <div className="min-w-0 flex-1 bg-de-gold" />
      <div className={`w-[2px] shrink-0 ${ruleClass}`} />
      <div className="min-w-0 flex-1 bg-de-blue" />
    </div>
  );
}

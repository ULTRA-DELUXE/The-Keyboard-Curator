export default function SideHeading({ text }: { text: string }) {
  return (
    <div className="flex min-h-0 w-full flex-col items-end justify-center py-[var(--space-4)] md:min-h-[var(--panel-height)] md:flex-row md:items-center md:justify-end md:gap-[var(--grid-gap)] md:py-0">
      <p className="type-headline w-full text-balance text-right leading-[1.1] md:w-auto md:shrink">
        {text}
      </p>
      <div className="side-rule mt-[var(--space-3)] hidden h-[2px] w-full min-h-0 md:mt-0 md:block md:h-full md:min-h-[var(--panel-height)] md:w-[2px] md:shrink-0" />
      <div className="section-divider mt-[var(--space-3)] w-full md:hidden" />
    </div>
  );
}

export default function SideHeading({ text }: { text: string }) {
  return (
    <div className="flex w-full min-h-[var(--panel-height)] flex-col items-end justify-center md:flex-row md:items-center">
      <p className="type-headline w-full text-balance text-right leading-[1.1] md:mr-[var(--space-4)] md:w-auto">
        {text}
      </p>
      <div className="side-rule mt-[var(--space-3)] hidden h-[2px] w-full min-h-0 md:mt-0 md:block md:h-full md:min-h-[var(--panel-height)] md:w-[2px]" />
      <div className="section-divider mt-[var(--space-3)] w-full md:hidden" />
    </div>
  );
}

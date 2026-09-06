export const VINTAGE_HIGHLIGHTS = [
  "bg-vintage-red",
  "bg-vintage-yellow",
  "bg-vintage-blue",
] as const;

export type VintageHighlight = (typeof VINTAGE_HIGHLIGHTS)[number];

const MIX = [0, 2, 1, 2, 0, 1] as const;

export function highlightAt(index: number): VintageHighlight {
  return VINTAGE_HIGHLIGHTS[MIX[index % MIX.length]];
}

export function highlightFor(seed: string): VintageHighlight {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return VINTAGE_HIGHLIGHTS[Math.abs(hash) % VINTAGE_HIGHLIGHTS.length];
}

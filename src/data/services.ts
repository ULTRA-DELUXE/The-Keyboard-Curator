import type { ProcessStep, Service } from "@/types/content";

export const services: Service[] = [
  {
    id: 1,
    title: "Full Build Assembly",
    tagline: "From bare PCB to battle-ready.",
    description:
      "We solder your switches, install stabilizers, stack your foam, and assemble your dream board — KBDfans TKL, 1800, or ortho, we have built them all.",
    price: "From $89",
    gradient: "bg-gradient-to-l from-de-blue to-transparent",
  },
  {
    id: 2,
    title: "Switch Lubing & Film",
    tagline: "Buttery smooth, every single time.",
    description:
      "Krytox 205g0, Tribosys 3203, or your preferred lube. Optional TX films included. We treat every switch like it is going into our personal daily driver.",
    price: "$1.50 / switch",
    gradient: "bg-gradient-to-l from-de-gold to-transparent",
  },
  {
    id: 3,
    title: "Stabilizer Tune-Up",
    tagline: "No more rattly spacebars. Ever.",
    description:
      "Clip, band-aid, holee mod, wire balancing, and grease application. Your spacebar will sound as clean as your enter key — that is the Curator guarantee.",
    price: "$35 / set",
    gradient: "bg-gradient-to-l from-de-red to-transparent",
  },
  {
    id: 4,
    title: "Tape & Foam Modding",
    tagline: "Thock without the guesswork.",
    description:
      "PE foam, Tempest tape mod, silicone fill — we dial in your acoustic profile based on plate material, case resonance, and switch type. Science, not vibes.",
    price: "From $45",
    gradient: "bg-gradient-to-l from-de-blue to-transparent",
  },
  {
    id: 5,
    title: "QMK & VIA Firmware",
    tagline: "Your layers. Your rules.",
    description:
      "Custom keymaps, tap-dance, combo layers, and VIA JSON exports. Whether you game, code, or run a 40% with six layers — we flash it clean.",
    price: "From $25",
    gradient: "bg-gradient-to-l from-de-gold to-transparent",
  },
  {
    id: 6,
    title: "Group Buy Concierge",
    tagline: "Navigate GB season like a pro.",
    description:
      "Confused by Google Forms, MOQ, and regional vendors? We track active KBDfans and international GBs, advise on plate options, and help you not miss the drop.",
    price: "Free consult",
    gradient: "bg-gradient-to-l from-de-red to-transparent",
  },
  {
    id: 7,
    title: "Hot-Swap & Desolder",
    tagline: "Salvage switches. Save boards.",
    description:
      "Botched solder job? Want to swap in Kailh sockets? We desolder cleanly with a Hakko, preserve your PCB pads, and restore boards others wrote off.",
    price: "From $55",
    gradient: "bg-gradient-to-l from-de-blue to-transparent",
  },
  {
    id: 8,
    title: "Acoustic Sound Profile",
    tagline: "We measure the thock.",
    description:
      "Before-and-after sound tests, recorded on our workbench mic. You get a comparison clip so you can hear exactly what your mods did — shareable for r/MechanicalKeyboards.",
    price: "$40",
    gradient: "bg-gradient-to-l from-de-gold to-transparent",
  },
];

export const serviceMarqueeItems = [
  "Lube",
  "Film Mod",
  "Tape Mod",
  "Stab Tune",
  "QMK Flash",
  "GB Advisory",
  "Foam Stack",
  "Thock Test",
  "Desolder",
  "Hot-Swap",
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Ship or Drop Off",
    description:
      "Send your kit, parts bag, or half-finished build. We log every component on arrival — no lost screws on our watch.",
  },
  {
    step: 2,
    title: "Diagnose & Quote",
    description:
      "We inspect PCB, plate, and switches within 48 hours. You get a clear line-item quote before we touch a single switch.",
  },
  {
    step: 3,
    title: "Build & Mod",
    description:
      "Our bench nerds assemble, lube, mod, and tune. Every board gets a multi-point QC checklist — stabs, sound, and key feel.",
  },
  {
    step: 4,
    title: "Sound Test & Return",
    description:
      "Optional acoustic recording included. Insured shipping back to your door, anywhere on earth. Clacky satisfaction guaranteed.",
  },
];

export const workbenchOath = `We swear on our personal KBD8X that no board leaves this workbench with a rattling spacebar, a mushy modifier, or an untested stab wire. Every switch is lubed with intention. Every foam layer is cut with care. We are not a factory — we are enthusiasts who happen to have better tools than your kitchen table.`;

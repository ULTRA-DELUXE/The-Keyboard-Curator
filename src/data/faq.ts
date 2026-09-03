import type { FaqItem } from "@/types/content";

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What does The Keyboard Curator actually do?",
    answer:
      "We curate mechanical keyboards and finish them properly — assembly, lubing, stab tuning, foam, firmware. You get a board that feels like it was built by someone who types on one every day.",
    plane: "bg-de-red",
  },
  {
    id: 2,
    question: "Can you assemble a kit I already bought?",
    answer:
      "Yes. Send the kit, the switches, and the caps. We log every part on arrival, build to your spec, and ship it back sound-tested. Half-finished boards and salvage jobs are welcome too.",
    plane: "bg-de-gold",
  },
  {
    id: 3,
    question: "Do I have to lube the switches myself?",
    answer:
      "No. Switch lubing and filming is one of our core services. Tell us the lube you prefer — or let us pick for your switch type — and we treat every stem like it is going into our own daily driver.",
    plane: "bg-de-blue",
  },
  {
    id: 4,
    question: "Do you ship worldwide?",
    answer:
      "Yes. We pack boards foam-in, bubble-wrapped, and insured. Jakarta to Oslo is a normal Tuesday. Transit time depends on the carrier and your customs office, not on our willingness to send thock across oceans.",
    plane: "bg-de-red",
  },
  {
    id: 5,
    question: "Can you help me through a group buy?",
    answer:
      "That is the concierge. We track active GBs, explain plates and extras, and help you not miss the form. The consult is free. Buying the wrong layout because of a Google Form should be a war crime.",
    plane: "bg-de-gold",
  },
  {
    id: 6,
    question: "How long does a build take?",
    answer:
      "We inspect and quote within 48 hours of the parts landing. A standard lube-and-assemble is usually a week on the bench after you approve the quote. GB season and desolder jobs run longer — we will tell you before we touch a switch.",
    plane: "bg-de-blue",
  },
  {
    id: 7,
    question: "What if I hate the sound when it comes back?",
    answer:
      "Every board gets a stab check, a feel check, and an optional before-and-after recording. If something rattles, we fix it. No board leaves with a mushy modifier or an untested spacebar. That is the workbench oath.",
    plane: "bg-de-red",
  },
];

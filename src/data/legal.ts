import type { LegalDocument } from "@/types/content";

export const copyrightNotice: LegalDocument = {
  title: "Copyright Notice",
  lastUpdated: "2 September 2026",
  intro:
    "This page explains who owns the words, images, and design on this website, and what you may (and may not) do with them.",
  sections: [
    {
      heading: "Who owns this site",
      paragraphs: [
        "© 2026 The Keyboard Curator & Co. All rights reserved.",
        "Unless we say otherwise, we own the text, layout, graphics we created, and the overall design of this website. That includes the De Stijl-inspired look: the grid, the black rules, and the red, yellow, and blue colour planes.",
      ],
    },
    {
      heading: "What you may do",
      paragraphs: [
        "You may browse this site, share a link to a page, and print a copy of these legal pages for your own records.",
      ],
    },
    {
      heading: "What you may not do",
      paragraphs: [
        "Please do not copy, republish, sell, or reuse our writing or original design as if it were your own. Do not scrape the site to build a lookalike shop or profile.",
      ],
    },
    {
      heading: "Other people’s brands and photos",
      paragraphs: [
        "Keyboard names, logos, and product photos on this site may belong to their makers or retailers (for example KBDfans, Omnitype, and others). We show them to illustrate boards we curate or service. Those trademarks and images remain with their owners. We do not claim them.",
      ],
    },
    {
      heading: "Questions",
      paragraphs: [
        "If you need permission to use something from this site, or you believe we have used your work by mistake, contact us through the details on our Services page and we will look into it promptly.",
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "2 September 2026",
  intro:
    "This policy is written in plain language. It covers how The Keyboard Curator & Co. handles information when you use this website.",
  sections: [
    {
      heading: "The short version",
      paragraphs: [
        "This is a company-profile site. We do not ask you to create an account. We do not sell your personal information.",
      ],
    },
    {
      heading: "Information you give us",
      paragraphs: [
        "If you email us or send a message about a build or a quote, we will use that information to reply and to do the work you asked for — for example your name, contact details, board model, and notes about switches or mods.",
        "We keep that correspondence only as long as we need it to help you, keep our records, or meet a legal duty.",
      ],
    },
    {
      heading: "Information collected automatically",
      paragraphs: [
        "Like most websites, our host may log basic technical data such as your browser type, the pages you open, and the date and time of the visit. We use this to keep the site working and to fix problems. We do not use it to build a marketing profile of you.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "We only use cookies or similar storage if they are needed for the site to function (for example, to remember a short loading state). We do not run advertising cookies.",
      ],
    },
    {
      heading: "Other services",
      paragraphs: [
        "This site may load fonts or images from other companies. Those companies have their own privacy policies. We do not control how they handle data.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it where we do not need to keep it. Send that request using the contact path on our Services page.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "If this policy changes, we will update the date at the top of this page. Continued use of the site after that date means you have read the new version.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms and Conditions",
  lastUpdated: "2 September 2026",
  intro:
    "These terms are a simple set of rules for using this website. They are not a substitute for a written quote or a workshop agreement once we take on a build.",
  sections: [
    {
      heading: "Using this website",
      paragraphs: [
        "By opening this site you agree to these terms. If you do not agree, please do not use the site.",
        "The site is for information about The Keyboard Curator & Co. — who we are, what we sell or curate, and the services we offer. Content may change without notice.",
      ],
    },
    {
      heading: "Services and prices",
      paragraphs: [
        "Prices, service lists, and product details on this site are a guide. A job is only booked when we confirm it with you (usually after a quote). Shipping times and worldwide delivery depend on the carrier and your location.",
        "We may refuse or pause a job if parts are missing, unsafe, or not as described.",
      ],
    },
    {
      heading: "No professional advice",
      paragraphs: [
        "Articles and descriptions here are for enthusiasts. They are not legal, financial, or engineering advice. Always check compatibility for your own board.",
      ],
    },
    {
      heading: "Your use of the site",
      paragraphs: [
        "Do not misuse the site: do not attempt to break it, overload it, or copy it in a way that breaks our copyright notice.",
      ],
      bullets: [
        "Do not scrape or clone the site for a competing shop.",
        "Do not post unlawful, harmful, or misleading material through any form or message you send us.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "This website is provided as-is. We take care with what we publish, but we cannot promise that every page is always complete or error-free.",
        "To the extent the law allows, we are not liable for loss that comes only from reading or relying on this website. Separate terms can apply once we accept a paid build or sale.",
      ],
    },
    {
      heading: "These terms",
      paragraphs: [
        "We may update these terms from time to time. The date at the top of the page is the latest version. If a court finds one part unenforceable, the rest still applies.",
        "Questions about these terms can be sent through the contact path on our Services page.",
      ],
    },
  ],
};

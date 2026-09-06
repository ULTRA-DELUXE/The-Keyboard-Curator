import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { homeClosers } from "../src/data/home";
import { testimonials } from "../src/data/testimonials";
import {
  services,
  processSteps,
  serviceClosers,
  serviceMarqueeItems,
  workbenchOath,
} from "../src/data/services";
import { faqs } from "../src/data/faq";
import { products } from "../src/data/product";
import {
  galleryRows,
  galleryPreview,
  galleryCloser,
  type GalleryRowData,
} from "../src/data/gallery";
import {
  aboutCasesImage,
  aboutClosers,
  aboutFamilyImage,
  aboutMarqueeItems,
  aboutOath,
} from "../src/data/about";
import {
  copyrightNotice,
  privacyPolicy,
  termsAndConditions,
} from "../src/data/legal";
import { banners } from "../src/data/banners";

const FAMILY_BODY =
  "In a cozy basement, three keyboard enthusiasts turned an obsession into a workbench. Energy drinks, spare stems, and a lot of thock later — The Keyboard Curator & Co. was a shop instead of a joke.";

const FAMILY_CARD =
  "Family is the secret ingredient. Kids orbit the office, cats claim the desk mats, and snack breaks turn into switch debates. We design and build with that same care — a tight-knit bench where every clack is supposed to feel like it belongs to someone.";

const PLEDGE_BODY =
  "We only curate what we would type on. If it is on this site, someone on this bench has lubed it, hated a stab on it, or shipped it across an ocean.";

const SERVICES_CTA_BODY =
  "Drop us a line with your board model, switch count, and mod wishlist. We reply within 24 hours — faster during GB season, because we know the anxiety.";

const SITE_NAV = [
  { href: "/", label: "Home", group: "site", sortOrder: 0 },
  { href: "/services", label: "Services", group: "site", sortOrder: 1 },
  { href: "/galleries", label: "Galleries", group: "site", sortOrder: 2 },
  { href: "/faq", label: "FAQ", group: "site", sortOrder: 3 },
  { href: "/about", label: "About", group: "site", sortOrder: 4 },
] as const;

const LEGAL_NAV = [
  {
    href: "/copyright",
    label: "Copyright Notice",
    group: "legal",
    sortOrder: 0,
  },
  { href: "/privacy", label: "Privacy Policy", group: "legal", sortOrder: 1 },
  {
    href: "/terms",
    label: "Terms and Conditions",
    group: "legal",
    sortOrder: 2,
  },
] as const;

async function seedGalleryRow(
  row: GalleryRowData,
  productIds: Map<number, string>,
  isPreview: boolean,
) {
  await prisma.galleryRow.create({
    data: {
      sortOrder: row.id,
      direction: row.direction,
      duration: row.duration,
      isPreview,
      items: {
        create: row.items.map((item, index) => {
          const productId = productIds.get(item.id);
          if (!productId) {
            throw new Error(`Missing product id ${item.id} for gallery row`);
          }
          return { productId, sortOrder: index };
        }),
      },
    },
  });
}

async function main() {
  await prisma.galleryRowItem.deleteMany();
  await prisma.galleryRow.deleteMany();
  await prisma.product.deleteMany();
  await prisma.legalSection.deleteMany();
  await prisma.legalDocument.deleteMany();
  await prisma.banner.deleteMany();
  await prisma.faq.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.processStep.deleteMany();
  await prisma.service.deleteMany();
  await prisma.navLink.deleteMany();
  await prisma.sitePage.deleteMany();
  await prisma.siteSettings.deleteMany();

  await prisma.siteSettings.create({
    data: {
      id: "site",
      name: "The Keyboard Curator & Co.",
      shortName: "TKC & Co.",
      footerTagline: "Curated by nerds for nerds.",
      homeMarquee:
        "One Keyboard to rule them all and in darkness bind them. You decide.",
    },
  });

  await prisma.navLink.createMany({
    data: [...SITE_NAV, ...LEGAL_NAV],
  });

  await prisma.sitePage.createMany({
    data: [
      {
        slug: "home",
        metaTitle: "The Keyboard Curator | Home",
        metaDescription:
          "Custom mechanical keyboards curated with care — builds, mods, and premium keycaps.",
        copy: {
          welcomeTitle: "Welcome to our curation!",
          welcomeSubtitle: "We only curate the best of keyboards.",
          testimonyHeading: "Testimonies of the Wicked.",
          galleryHeading: "Galleries.",
          closers: homeClosers,
        },
      },
      {
        slug: "about",
        metaTitle: "The Keyboard Curator | About",
        metaDescription:
          "Meet the keyboard enthusiasts behind The Keyboard Curator & Co.",
        copy: {
          heroTitle: "About the Curator.",
          heroSubtitle: "A workbench, not a factory.",
          familyTitle: "What we do here as a family of nerds.",
          familyBody: FAMILY_BODY,
          familyCard: FAMILY_CARD,
          familyImage: aboutFamilyImage,
          casesImage: aboutCasesImage,
          pledgeHeading: "By nerds, for nerds.",
          pledgeBody: PLEDGE_BODY,
          oath: aboutOath,
          marquee: aboutMarqueeItems,
          closers: aboutClosers,
        },
      },
      {
        slug: "services",
        metaTitle: "The Keyboard Curator | Services",
        metaDescription:
          "Professional keyboard assembly, switch lubing, stabilizer tuning, tape mods, QMK flashing, and group buy concierge for enthusiasts.",
        copy: {
          heroTitle: "Services for the Clacky.",
          heroSubtitle: "We speak thock fluently.",
          processHeading: "The Sacred Process.",
          ctaHeading: "Ready to send your kit?",
          ctaBody: SERVICES_CTA_BODY,
          oath: workbenchOath,
          marquee: serviceMarqueeItems,
          closers: serviceClosers,
        },
      },
      {
        slug: "galleries",
        metaTitle: "The Keyboard Curator | Galleries",
        metaDescription:
          "A gallery of mechanical keyboards we curate, assemble, and ship — the same boards from our daily selections.",
        copy: {
          heading: "Galleries.",
          closerHeading: galleryCloser.heading,
          closerBody: galleryCloser.body,
          points: galleryCloser.points,
        },
      },
      {
        slug: "faq",
        metaTitle: "The Keyboard Curator | FAQ",
        metaDescription:
          "Answers about custom builds, switch lubing, worldwide shipping, group buys, and the workbench oath.",
        copy: {
          heading: "Questions for the clacky.",
        },
      },
    ],
  });

  await prisma.service.createMany({
    data: services.map((service, index) => ({
      title: service.title,
      tagline: service.tagline,
      description: service.description,
      price: service.price,
      sortOrder: index,
    })),
  });

  await prisma.processStep.createMany({
    data: processSteps.map((step) => ({
      step: step.step,
      title: step.title,
      description: step.description,
    })),
  });

  await prisma.testimonial.createMany({
    data: testimonials.map((item, index) => ({
      quote: item.quote,
      name: item.name,
      sortOrder: index,
    })),
  });

  await prisma.faq.createMany({
    data: faqs.map((item, index) => ({
      question: item.question,
      answer: item.answer,
      sortOrder: index,
    })),
  });

  const productIds = new Map<number, string>();
  for (const product of products) {
    const created = await prisma.product.create({
      data: {
        title: product.title,
        imageUrl: product.image,
        sortOrder: product.id,
      },
    });
    productIds.set(product.id, created.id);
  }

  await seedGalleryRow(galleryPreview, productIds, true);
  for (const row of galleryRows) {
    await seedGalleryRow(row, productIds, false);
  }

  const legalDocs = [
    { slug: "copyright", doc: copyrightNotice },
    { slug: "privacy", doc: privacyPolicy },
    { slug: "terms", doc: termsAndConditions },
  ] as const;

  for (const { slug, doc } of legalDocs) {
    await prisma.legalDocument.create({
      data: {
        slug,
        title: doc.title,
        lastUpdated: doc.lastUpdated,
        intro: doc.intro,
        sections: {
          create: doc.sections.map((section, index) => ({
            heading: section.heading,
            paragraphs: section.paragraphs,
            bullets: section.bullets ?? [],
            sortOrder: index,
          })),
        },
      },
    });
  }

  await prisma.banner.createMany({
    data: banners.map((banner, index) => ({
      title: banner.title,
      content: banner.content,
      imageUrl: banner.imageUrl,
      sortOrder: index,
    })),
  });

  const counts = {
    siteSettings: await prisma.siteSettings.count(),
    navLinks: await prisma.navLink.count(),
    sitePages: await prisma.sitePage.count(),
    services: await prisma.service.count(),
    processSteps: await prisma.processStep.count(),
    testimonials: await prisma.testimonial.count(),
    faqs: await prisma.faq.count(),
    products: await prisma.product.count(),
    galleryRows: await prisma.galleryRow.count(),
    legalDocs: await prisma.legalDocument.count(),
    banners: await prisma.banner.count(),
  };

  console.log("Seed complete:", counts);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

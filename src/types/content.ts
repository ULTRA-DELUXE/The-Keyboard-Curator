export interface Product {
  id: number;
  title: string;
  image: string;
}

export interface Banner {
  title: string;
  content: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
}

export interface QuoteContent {
  quote: string;
  name: string;
}

export interface CloserItem {
  title: string;
  description: string;
}

export interface HomePageCopy {
  welcomeTitle: string;
  welcomeSubtitle: string;
  testimonyHeading: string;
  galleryHeading: string;
  closers: CloserItem[];
}

export interface AboutPageCopy {
  heroTitle: string;
  heroSubtitle: string;
  familyTitle: string;
  familyBody: string;
  familyCard: string;
  familyImage: string;
  casesImage: string;
  pledgeHeading: string;
  pledgeBody: string;
  oath: string;
  marquee: string[];
  closers: CloserItem[];
}

export interface GalleryTile {
  id: string | number;
  title: string;
  imageUrl: string;
}

export interface GalleryMarqueeRow {
  id: string | number;
  direction: "rtl" | "ltr";
  duration: number;
  items: GalleryTile[];
}

export interface ServicesPageCopy {
  heroTitle: string;
  heroSubtitle: string;
  processHeading: string;
  ctaHeading: string;
  ctaBody: string;
  oath: string;
  marquee: string[];
  closers: CloserItem[];
}

export interface GalleriesPageCopy {
  heading: string;
  closerHeading: string;
  closerBody: string;
  points: CloserItem[];
}

export interface FaqPageCopy {
  heading: string;
}

export type PageSlug = "home" | "about" | "services" | "galleries" | "faq";

export type LegalSlug = "copyright" | "privacy" | "terms";

export interface SitePageData<TCopy> {
  slug: PageSlug;
  metaTitle: string;
  metaDescription: string;
  copy: TCopy;
}

export interface Service {
  id: number | string;
  title: string;
  tagline: string;
  description: string;
  price: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export interface ChromeLink {
  href: string;
  label: string;
}

export type FaqPlane = "bg-de-red" | "bg-de-gold" | "bg-de-blue";

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
  plane: FaqPlane;
}

import type { Product } from "@/types/content";
import { products } from "@/data/product";

export type GalleryDirection = "rtl" | "ltr";

export interface GalleryRowData {
  id: number;
  direction: GalleryDirection;
  duration: number;
  items: Product[];
}

export const galleryRows: GalleryRowData[] = [
  {
    id: 1,
    direction: "rtl",
    duration: 34,
    items: products.slice(0, 3),
  },
  {
    id: 2,
    direction: "ltr",
    duration: 28,
    items: products.slice(3, 6),
  },
  {
    id: 3,
    direction: "rtl",
    duration: 32,
    items: products.slice(6, 9),
  },
  {
    id: 4,
    direction: "ltr",
    duration: 26,
    items: products.slice(9, 12),
  },
  {
    id: 5,
    direction: "rtl",
    duration: 30,
    items: [products[1], products[4], products[7]],
  },
];

export const galleryPreview: GalleryRowData = {
  id: 0,
  direction: "rtl",
  duration: 36,
  items: products.slice(0, 6),
};

export const galleryCloser = {
  heading: "We only curate from the best.",
  body: "Every board in this gallery is something we would put on our own desks. Makers we trust, kits we have built, layouts we have argued about — if it is here, it survived the bench.",
  points: [
    {
      title: "No catalog filler.",
      description:
        "We do not hang boards for the algorithm. If we would not type on it, it does not scroll by.",
      gradient: "bg-gradient-to-l from-de-blue to-transparent",
    },
    {
      title: "Same boards. Same bench.",
      description:
        "These are the boards we assemble, lube, and ship — photographed before they leave the basement, not scraped from a lookbook.",
      gradient: "bg-gradient-to-l from-de-red to-transparent",
    },
  ],
};

export interface Product {
  id: number;
  title: string;
  productType: string;
  price: string;
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

export interface Service {
  id: number;
  title: string;
  tagline: string;
  description: string;
  price: string;
  gradient: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

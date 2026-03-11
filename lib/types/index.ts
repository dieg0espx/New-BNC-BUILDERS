// BNC Builders - Type Definitions

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneLink: string;
  address: Address;
  officeHours: string;
  founded: number;
  experience: string;
  projectsCompleted: string;
}

export interface CoreValue {
  id: string;
  name: string;
  icon: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroHeading: string;
  heroContent: string[];
  features?: string[];
  faqs?: FAQ[];
  process?: ProcessStep[];
  category: 'interior' | 'exterior';
  bannerImage: string;
  cardImage: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface LocationPage {
  city: string;
  state: string;
  service: string;
  serviceSlug: string;
  slug: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  location: string;
  category: PortfolioCategory;
  images: CloudinaryImage[];
  description?: string;
}

export type PortfolioCategory =
  | 'adus'
  | 'bathrooms'
  | 'kitchens'
  | 'exterior'
  | 'common-areas';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  publishedAt: string;
  featuredImage: CloudinaryImage;
}

export type BlogCategory =
  | 'bathroom'
  | 'home-remodeling'
  | 'irrigation'
  | 'kitchen'
  | 'landscaping'
  | 'living-room'
  | 'adus'
  | 'general';

export interface CloudinaryImage {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Accolade {
  name: string;
  image: string;
  alt: string;
}

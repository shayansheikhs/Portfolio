export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'shopify' | 'wordpress' | 'bigcommerce' | 'other';
  imageGradient: string; // Gradient class for mockups
  image?: string; // Optional image url
  projectLink?: string; // Optional live project url link
  tags: string[];
  features: string[];
  clientSector: string;
  scope: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  initials: string;
  bgGradient: string;
}

export interface PlatformSkill {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
  color: string; // Tailwind border/text color class
  bgGlow: string; // Tailwind glow gradient
  details: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  bullets: string[];
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface Service {
  title: string;
  image: string;
  category: 'Idioma' | 'Refuerzo' | 'Modalidad';
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}
// BNC Builders - Company Information

import { CompanyInfo, CoreValue, Accolade } from '../types';

export const company: CompanyInfo = {
  name: 'BNC Builders Inc.',
  tagline: 'Transforming San Diego Homes With Expert Craftsmanship',
  phone: '(760) 993-3204',
  address: {
    street: '101 State Pl Suite N',
    city: 'Escondido',
    state: 'CA',
    zip: '92029',
    full: '101 State Pl Suite N, Escondido, CA 92029',
  },
  officeHours: 'Monday - Saturday, 8:00am - 5:00pm',
  founded: 2019,
  experience: '30+',
  projectsCompleted: '900+',
};

export const coreValues: CoreValue[] = [
  { id: 'honesty_transparency', name: 'Honesty & Transparency', icon: 'honesty_transparency' },
  { id: 'extreme_ownership', name: 'Extreme Ownership', icon: 'extreme_ownership' },
  { id: 'team_first', name: 'Team First', icon: 'team_first' },
  { id: 'clear_communication', name: 'Clear Communication', icon: 'clear_communication' },
  { id: 'client_obsessed', name: 'Client Obsessed', icon: 'client_obsessed' },
  { id: 'growth_adaptability', name: 'Growth & Adaptability', icon: 'growth_adaptability' },
  { id: 'pride_passion', name: 'Pride & Passion', icon: 'pride_passion' },
  { id: 'positive_attitude', name: 'Positive Attitude', icon: 'positive_attitude' },
];

export const keySellingPoints = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured contractor trusted for kitchen remodel Escondido CA, bathroom remodeling San Diego, and projects throughout the region',
  },
  {
    title: 'Financing Available',
    description: 'Flexible financing options make your ADUs San Diego, ADUs Los Angeles, room addition San Diego, or garage remodeling project affordable',
  },
  {
    title: 'Hablamos Español',
    description: 'Bilingual team ready to discuss your kitchen remodeling services, deck repair San Diego, or remodeling Escondido needs',
  },
  {
    title: 'Free Estimates',
    description: 'Free detailed estimates for kitchen remodel San Diego, exterior remodeling, outdoor kitchens, and landscape remodeling projects',
  },
  {
    title: 'BBB Accredited',
    description: 'BBB accredited business known for exceptional bathroom remodeling Escondido, bathroom remodel Escondido, and kitchen renovation San Diego results',
  },
  {
    title: 'Top-Rated Craftsmanship',
    description: 'Top-rated craftsmanship for kitchen remodel Poway, Escondido kitchen remodeling, deck repair contractor work, and 3D landscape design near me consultations',
  },
];

export const serviceAreas = [
  'Escondido',
  'Carlsbad',
  'Chula Vista',
  'El Cajon',
  'Encinitas',
  'La Mesa',
  'National City',
  'Oceanside',
  'Poway',
  'Vista',
  'La Jolla',
  'Valley Center',
  'Solana Beach',
  'Rancho Santa Fe',
];

export const accolades: Accolade[] = [];

export const socialLinks = [
  { name: 'Google', icon: 'google_plus', href: '#' },
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'YouTube', icon: 'youtube', href: '#' },
  { name: 'Yelp', icon: 'yelp', href: '#' },
  { name: 'BBB', icon: 'bbb', href: '#' },
  { name: 'Nextdoor', icon: 'nextdoor', href: '#' },
  { name: 'Houzz', icon: 'houzz', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
];

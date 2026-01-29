// BNC Builders - Navigation Structure

import { NavItem } from '../types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        label: 'Interior',
        href: '#',
        children: [
          { label: 'Home Remodeling', href: '/home-remodeling' },
          { label: 'Kitchen Remodeling', href: '/kitchen-remodeling' },
          { label: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
          { label: 'Garage Remodeling', href: '/garage-remodeling' },
          { label: 'New Room Additions', href: '/new-room-additions' },
          { label: 'Pre-Construction', href: '/pre-construction' },
        ],
      },
      {
        label: 'Exterior',
        href: '#',
        children: [
          { label: 'Exterior Remodeling', href: '/exterior-remodeling' },
          { label: 'ADUs', href: '/adus' },
          { label: 'Deck Repair', href: '/deck-repair' },
          { label: 'Hardscaping', href: '/hardscaping' },
          { label: 'Outdoor Kitchens', href: '/outdoor-kitchens' },
          { label: 'Landscape Remodeling', href: '/landscape-remodeling' },
          { label: '3D Landscape Design', href: '/3d-landscape-design' },
        ],
      },
    ],
  },
  { label: 'Our Process', href: '/our-process' },
  { label: 'Reviews', href: '/reviews' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Areas We Serve', href: '/areas-we-serve' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Process', href: '/our-process' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  services: [
    { label: 'Kitchen Remodeling', href: '/kitchen-remodeling' },
    { label: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
    { label: 'Home Remodeling', href: '/home-remodeling' },
    { label: 'ADUs', href: '/adus' },
    { label: 'Exterior Remodeling', href: '/exterior-remodeling' },
  ],
  resources: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Areas We Serve', href: '/areas-we-serve' },
    { label: 'Referral Program', href: '/customer-referral-program' },
    { label: 'ADU Handbook', href: '/adu-handbook-download' },
  ],
};

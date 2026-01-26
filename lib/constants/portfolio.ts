// BNC Builders - Portfolio Data
// Images stored on Cloudinary in BNC-BUILDERS/projects folder

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  location: string;
  description?: string;
  featuredImage: string;
  images: string[];
}

export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredImage: string;
}

// Portfolio Categories
export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'kitchens',
    name: 'Kitchens',
    slug: 'kitchens',
    description: 'Beautiful kitchen transformations featuring modern designs, custom cabinetry, and premium finishes.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN',
  },
  {
    id: 'bathrooms',
    name: 'Bathrooms',
    slug: 'bathrooms',
    description: 'Luxurious bathroom remodels with spa-like features, elegant fixtures, and custom tilework.',
    featuredImage: 'BNC-BUILDERS/projects/bathrooms/47thStreet/A7402606',
  },
  {
    id: 'adus',
    name: 'ADUs',
    slug: 'adus',
    description: 'Accessory Dwelling Units that maximize your property value with thoughtful design and quality construction.',
    featuredImage: 'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS',
  },
  {
    id: 'exterior',
    name: 'Exterior Remodeling',
    slug: 'exterior',
    description: 'Stunning outdoor transformations including outdoor kitchens, patios, and landscape enhancements.',
    featuredImage: 'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA',
  },
  {
    id: 'common-areas',
    name: 'Common Areas',
    slug: 'common-areas',
    description: 'Living spaces, dining rooms, and entryways transformed with attention to detail and craftsmanship.',
    featuredImage: 'BNC-BUILDERS/projects/LivingSpaceTransformation/Copy_of_A7402492',
  },
];

// All Portfolio Projects with Cloudinary public IDs
export const portfolioProjects: PortfolioProject[] = [
  // KITCHEN PROJECTS
  {
    id: 'kitchen-47th-street-san-diego',
    title: '47th Street, San Diego',
    slug: '47th-street-san-diego',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'San Diego, CA',
    description: 'A stunning kitchen transformation featuring modern cabinetry, quartz countertops, and contemporary lighting.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/47thStreet/A7402402',
    images: [
      'BNC-BUILDERS/projects/kitchens/47thStreet/A7402402',
      'BNC-BUILDERS/projects/kitchens/47thStreet/A7402417',
      'BNC-BUILDERS/projects/kitchens/47thStreet/A7402432',
      'BNC-BUILDERS/projects/kitchens/47thStreet/A7402468',
      'BNC-BUILDERS/projects/kitchens/47thStreet/A7402480',
    ],
  },
  {
    id: 'kitchen-ezze-street-encinitas',
    title: 'Ezze Street, Encinitas',
    slug: 'ezze-street-encinitas',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'Encinitas, CA',
    description: 'Complete kitchen remodel with custom island, premium appliances, and elegant finishes.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/EzzeStreet/KITCHEN_EZZE_ST_',
    images: [
      'BNC-BUILDERS/projects/kitchens/EzzeStreet/KITCHEN_EZZE_ST_',
      'BNC-BUILDERS/projects/kitchens/EzzeStreet/KITCHEN_EZZE_ST_1',
      'BNC-BUILDERS/projects/kitchens/EzzeStreet/KITCHEN_EZZE_ST_2',
      'BNC-BUILDERS/projects/kitchens/EzzeStreet/KITCHEN_EZZE_ST_3',
      'BNC-BUILDERS/projects/kitchens/EzzeStreet/KITCHEN_EZZE_ST_4',
    ],
  },
  {
    id: 'kitchen-granite-rd-san-marcos',
    title: 'Granite Rd, San Marcos',
    slug: 'granite-rd-san-marcos',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'San Marcos, CA',
    description: 'Modern kitchen renovation with open floor plan, shaker-style cabinets, and stainless steel appliances.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/Granite/KITCHEN_GRANITE_RD',
    images: [
      'BNC-BUILDERS/projects/kitchens/Granite/KITCHEN_GRANITE_RD',
      'BNC-BUILDERS/projects/kitchens/Granite/KITCHEN_GRANITE_RD1',
      'BNC-BUILDERS/projects/kitchens/Granite/KITCHEN_GRANITE_RD2',
      'BNC-BUILDERS/projects/kitchens/Granite/KITCHEN_GRANITE_RD3',
      'BNC-BUILDERS/projects/kitchens/Granite/KITCHEN_GRANITE_RD4',
    ],
  },
  {
    id: 'kitchen-south-elm-st-escondido',
    title: 'South Elm St, Escondido',
    slug: 'south-elm-st-escondido',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'Escondido, CA',
    description: 'Elegant kitchen transformation featuring white cabinetry, marble countertops, and modern fixtures.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0013',
    images: [
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0013',
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0030',
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0051',
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0057',
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0066',
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0082',
      'BNC-BUILDERS/projects/kitchens/SouthElm/_DSC0095',
    ],
  },
  {
    id: 'kitchen-stewart-way-encinitas',
    title: 'Stewart Way, Encinitas',
    slug: 'stewart-way-encinitas',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'Encinitas, CA',
    description: 'Contemporary kitchen design with waterfall island, custom lighting, and high-end finishes.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/StewartWay/A7402402',
    images: [
      'BNC-BUILDERS/projects/kitchens/StewartWay/A7402402',
      'BNC-BUILDERS/projects/kitchens/StewartWay/A7402417',
      'BNC-BUILDERS/projects/kitchens/StewartWay/A7402432',
      'BNC-BUILDERS/projects/kitchens/StewartWay/A7402468',
      'BNC-BUILDERS/projects/kitchens/StewartWay/A7402480',
    ],
  },
  {
    id: 'kitchen-caminitos-vecinos-san-diego',
    title: 'Caminitos Vecinos, San Diego',
    slug: 'caminitos-vecinos-san-diego',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'San Diego, CA',
    description: 'Full kitchen renovation with modern design, custom cabinetry, and premium countertops.',
    featuredImage: 'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN',
    images: [
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN1',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN2',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN3',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN4',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN5',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN6',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN7',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN8',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN9',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN10',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN11',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN12',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN13',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN14',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN15',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN16',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN17',
      'BNC-BUILDERS/projects/kitchens/Caminitos/KITCHEN18',
    ],
  },

  // BATHROOM PROJECTS
  {
    id: 'bathroom-47-street-san-diego',
    title: '47 Street, San Diego',
    slug: '47-street-san-diego',
    category: 'Bathrooms',
    categorySlug: 'bathrooms',
    location: 'San Diego, CA',
    description: 'Luxurious master bathroom remodel with walk-in shower, freestanding tub, and custom vanity.',
    featuredImage: 'BNC-BUILDERS/projects/bathrooms/47thStreet/A7402606',
    images: [
      'BNC-BUILDERS/projects/bathrooms/47thStreet/A7402606',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/A7402639',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/A7402651',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/A7402654',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/_DSC0470_1',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/_DSC0495',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/_DSC0502_1',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/BATHROOM_EZZE_ST',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC00964-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC00967-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC00976-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC00979-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC00991-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC01006-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC01030-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC01033-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC01036-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC01054-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03279-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03285-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03288-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03291-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03294-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03297-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03300-HDR',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03337',
      'BNC-BUILDERS/projects/bathrooms/47thStreet/Copy_of_DSC03341',
    ],
  },
  {
    id: 'bathroom-dexter-place-escondido',
    title: 'Dexter Place, Escondido',
    slug: 'dexter-place-escondido',
    category: 'Bathrooms',
    categorySlug: 'bathrooms',
    location: 'Escondido, CA',
    description: 'Complete bathroom renovation with modern fixtures, custom tilework, and spa-like features.',
    featuredImage: 'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM',
    images: [
      'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM',
      'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM1',
      'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM2',
      'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM3',
      'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM4',
      'BNC-BUILDERS/projects/bathrooms/Dexter/ESCONDIDO_BATHROOM5',
      'BNC-BUILDERS/projects/bathrooms/Dexter/BATHROOM_EZZE_ST',
      'BNC-BUILDERS/projects/bathrooms/Dexter/BATHROOM_EZZE_ST1',
      'BNC-BUILDERS/projects/bathrooms/Dexter/BATHROOM_EZZE_ST2',
      'BNC-BUILDERS/projects/bathrooms/Dexter/BATHROOM_EZZE_ST3',
      'BNC-BUILDERS/projects/bathrooms/Dexter/BATHROOM_EZZE_ST4',
      'BNC-BUILDERS/projects/bathrooms/Dexter/BATHROOM_EZZE_ST5',
    ],
  },

  // ADU PROJECTS
  {
    id: 'adu-granite-rd-san-marcos',
    title: 'Granite Rd, San Marcos ADU',
    slug: 'granite-rd-san-marcos-adu',
    category: 'ADUs',
    categorySlug: 'adus',
    location: 'San Marcos, CA',
    description: 'Custom-built ADU featuring modern design, full kitchen, and separate living space.',
    featuredImage: 'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS',
    images: [
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS1',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS2',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS3',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS4',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS5',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS6',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD_',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_1',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_2',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_3',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_4',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_5',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_6',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_7',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_8',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_9',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_10',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_11',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_12',
      'BNC-BUILDERS/projects/ADU/Granite/ADU_-_1235_GRANITE_RD._SAN_MARCOS_13',
    ],
  },
  {
    id: 'adu-ezze-street-encinitas',
    title: 'Ezze Street, Encinitas ADU',
    slug: 'ezze-street-encinitas-adu',
    category: 'ADUs',
    categorySlug: 'adus',
    location: 'Encinitas, CA',
    description: 'Beautiful detached ADU with contemporary design, full amenities, and private entrance.',
    featuredImage: 'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_',
    images: [
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_1',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_2',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_3',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_4',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_5',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_6',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_7',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_8',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_9',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_10',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_11',
      'BNC-BUILDERS/projects/ADU/Ezze/ADU_EZZE_ST_12',
    ],
  },

  // EXTERIOR PROJECTS
  {
    id: 'exterior-paxton-way-encinitas',
    title: 'Paxton Way, Encinitas',
    slug: 'paxton-way-encinitas',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Encinitas, CA',
    description: 'Stunning outdoor kitchen and patio renovation with custom BBQ island, pergola, and landscape design.',
    featuredImage: 'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA',
    images: [
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA1',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA2',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA3',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA4',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA5',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA6',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA7',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA8',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA9',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA10',
      'BNC-BUILDERS/projects/exterior/paxton/PAXTON_WAY_SPA11',
    ],
  },
  {
    id: 'exterior-rancho-santa-fe',
    title: 'Rancho Santa Fe, CA',
    slug: 'rancho-santa-fe-ca',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Rancho Santa Fe, CA',
    description: 'Comprehensive exterior renovation including new facade, landscaping, and outdoor living space.',
    featuredImage: 'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL',
    images: [
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL',
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL1',
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL2',
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL3',
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL4',
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL5',
      'BNC-BUILDERS/projects/exterior/santaFe/RANCHO_SANTA_FE_POOL6',
    ],
  },
  {
    id: 'exterior-ezze-street-encinitas',
    title: 'Ezze Street, Encinitas',
    slug: 'ezze-street-encinitas-exterior',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Encinitas, CA',
    description: 'Complete exterior remodel with modern finishes, new entry, and landscape design.',
    featuredImage: 'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_',
    images: [
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_1',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_2',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_3',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_4',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_5',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_6',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_7',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_8',
      'BNC-BUILDERS/projects/exterior/ezze/EZZE_ST_LANDSCAPE_9',
    ],
  },

  // COMMON AREAS
  {
    id: 'common-areas-showcase',
    title: 'Living Space Transformations',
    slug: 'living-space-transformations',
    category: 'Common Areas',
    categorySlug: 'common-areas',
    location: 'San Diego County',
    description: 'Collection of beautifully transformed living rooms, dining areas, and entryways.',
    featuredImage: 'BNC-BUILDERS/projects/LivingSpaceTransformation/Copy_of_A7402492',
    images: [
      'BNC-BUILDERS/projects/LivingSpaceTransformation/Copy_of_A7402492',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/Copy_of_A7402504',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/Copy_of_A7402519',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/Copy_of_A7402558',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/COLIN',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/COLIN1',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/COLLIN',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/TRAVIS',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/TRAVIS1',
      'BNC-BUILDERS/projects/LivingSpaceTransformation/TRAVIS2',
    ],
  },
];

// Helper functions
export function getProjectsByCategory(categorySlug: string): PortfolioProject[] {
  return portfolioProjects.filter(project => project.categorySlug === categorySlug);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find(category => category.slug === slug);
}

export function getAllProjectSlugs(): { category: string; slug: string }[] {
  return portfolioProjects.map(project => ({
    category: project.categorySlug,
    slug: project.slug,
  }));
}

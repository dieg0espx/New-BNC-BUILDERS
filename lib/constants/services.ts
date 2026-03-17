// BNC Builders - Services Data (SEO Optimized)

import { Service } from '../types';
import { serviceImages, bannerImages } from './images';

export const services: Service[] = [
  // Interior Services
  {
    slug: 'home-remodeling',
    title: 'Transform Your Entire Home With Confidence',
    shortTitle: 'Home Remodeling',
    description: 'Full-service home remodeling in Escondido & San Diego County. From single rooms to whole-home renovations, BNC Builders transforms your space with expert craftsmanship.',
    heroHeading: 'Transform Your Entire Home With Confidence',
    heroContent: [
      'Your home should fit your life today, not the way it looked a decade ago. BNC Builders specializes in complete home remodeling, helping homeowners across San Diego County modernize, improve functionality, and beautify their living spaces from top to bottom.',
      'With over 900 successful projects and three decades of combined expertise, our remodeling team handles everything - from opening up cramped floor plans to updating every surface, fixture, and finish. We bring fresh ideas while respecting your budget and timeline.',
      'Whether you want to tackle one room at a time or dive into a whole-house renovation, we deliver kitchen updates, bathroom refreshes, garage conversions, room additions, and exterior upgrades with the same attention to detail on every project.',
    ],
    features: [
      'Whole-house renovation planning and execution',
      'Open concept conversions and floor plan updates',
      'Comprehensive bathroom remodeling Escondido packages',
      'Full kitchen remodeling services integration',
      'Custom storage and organization systems',
      'Modern electrical and lighting upgrades',
      'Flooring replacement throughout',
      'Interior painting and wall treatments',
    ],
    faqs: [
      {
        question: 'Can I live in my home during a major remodel?',
        answer: 'Usually yes! BNC Builders carefully phases work to minimize disruption. For extensive projects, we discuss the best approach during planning - some families prefer to stay, others take a brief vacation during the most intensive phases.',
      },
      {
        question: 'How do you handle unexpected issues during renovation?',
        answer: 'Every older home has surprises behind the walls. Our experienced team identifies potential issues early, and we maintain open communication about any discoveries. We never proceed with changes without your approval.',
      },
      {
        question: 'Do you handle permits for remodeling projects in Escondido?',
        answer: 'Absolutely. BNC Builders manages all permitting and inspections as part of our service. We know San Diego County codes inside and out, ensuring your project meets every requirement.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Vision Discovery',
        description: 'We start by understanding how you actually live in your space. What works? What frustrates you daily? Your answers shape our recommendations for your remodeling Escondido project.',
      },
      {
        number: 2,
        title: 'Design & Budgeting',
        description: 'Our designers create detailed plans with material options at various price points. You will know exactly what to expect before we begin.',
      },
      {
        number: 3,
        title: 'Expert Execution',
        description: 'Our skilled craftsmen transform your vision into reality with precision, regular updates, and respect for your home throughout the process.',
      },
    ],
    category: 'interior',
    bannerImage: bannerImages.faq,
    cardImage: serviceImages.homeRemodel,
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Your Dream Kitchen Awaits',
    shortTitle: 'Kitchen Remodeling',
    description: 'Expert kitchen remodeling in Escondido & San Diego. Custom cabinetry, countertops, layouts & more. 30+ years experience. Free design consultation.',
    heroHeading: 'Your Dream Kitchen Awaits',
    heroContent: [
      'The kitchen is where morning coffee happens, where homework gets done at the counter, where friends gather during parties. At BNC Builders, we know a kitchen remodel is about more than cabinets and countertops-it\'s about creating the heart of your home.',
      'Our kitchen remodeling expertise covers everything from cozy galley kitchens to chef-worthy open-concept spaces. Whether you prefer a warm farmhouse style or sleek modern design, we have the skill and experience to bring your vision to life.',
      'From initial concept through final walkthrough, our team handles every detail - custom cabinetry, premium countertops, professional-grade appliances, and thoughtful lighting - ensuring your investment delivers lasting value and daily joy.',
    ],
    features: [
      'Custom cabinet design and installation',
      'Granite, quartz, and marble countertops',
      'Kitchen island additions and expansions',
      'Modern backsplash design and installation',
      'Under-cabinet and pendant lighting',
      'Appliance selection and installation',
      'Soft-close hardware throughout',
      '3D design previews before construction',
    ],
    faqs: [
      {
        question: 'How long does a typical kitchen remodel take?',
        answer: 'Most kitchen projects run 6-10 weeks after design finalization. Scope significantly affects timeline - a cabinet refacing differs from a complete gut renovation. We provide detailed schedules during your consultation.',
      },
      {
        question: 'Can I keep using my kitchen during the remodel?',
        answer: 'We set up temporary cooking stations for longer projects. Many homeowners appreciate having a hot plate, microwave, and access to refrigeration in another room while their kitchen remodel transformation takes shape.',
      },
      {
        question: 'What adds the most value in a kitchen remodel?',
        answer: 'Quality cabinets, durable countertops, and thoughtful layouts consistently deliver the best returns. We help prioritize upgrades that align with your budget and goals.',
      },
      {
        question: 'Do you offer financing for kitchen remodel projects in Poway, Escondido, San Diego?',
        answer: 'Yes! We offer flexible financing options for all our services. We believe everyone deserves access to quality craftsmanship.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Kitchen Consultation',
        description: 'We examine your current kitchen, discuss your wish list, and explore possibilities. Share photos you love - they help us understand your kitchen remodel vision.',
      },
      {
        number: 2,
        title: 'Design Development',
        description: 'Our designers create 3D renderings so you can virtually walk through your kitchen renovation before construction begins. We refine until it is perfect.',
      },
      {
        number: 3,
        title: 'Skilled Construction',
        description: 'Our kitchen remodel craftsmen bring your design to life with precision, keeping you informed daily as your dream kitchen takes shape.',
      },
    ],
    category: 'interior',
    bannerImage: bannerImages.kitchen,
    cardImage: serviceImages.kitchenRemodel,
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathrooms That Start Your Day Right',
    shortTitle: 'Bathroom Remodeling',
    description: 'Professional bathroom remodeling in Escondido & San Diego. Spa-worthy retreats, walk-in showers, double vanities & complete renovations. Free estimates.',
    heroHeading: 'Bathrooms That Start Your Day Right',
    heroContent: [
      'Your bathroom should feel like a sanctuary, not a source of frustration. BNC Builders creates bathrooms that families love - from simple updates for busy mornings to spa-inspired renovations that make every day feel like a retreat.',
      'Our team has transformed hundreds of outdated bathrooms into stunning, functional spaces. We understand that every project requires balancing aesthetics with practicality - gorgeous tile means nothing if the layout does not work for your family.',
      'From walk-in showers with frameless glass to double vanities, heated floors, and smart storage, we cover the upgrades that make your space more comfortable, functional, and clutter-free.',
    ],
    features: [
      'Walk-in shower conversions with frameless glass',
      'Freestanding and soaking tub installations',
      'Custom vanity design and installation',
      'Heated flooring systems',
      'Modern tile work - walls, floors, niches',
      'Low-flow fixtures for water savings',
      'Ventilation and lighting improvements',
      'Accessibility modifications available',
    ],
    faqs: [
      {
        question: 'How long does a typical bathroom remodel take?',
        answer: 'A standard bathroom remodel runs 3-4 weeks. Larger master bath renovations or projects involving layout changes may extend to 6 weeks. We provide accurate timelines during your consultation.',
      },
      {
        question: 'Should I convert my tub to a walk-in shower?',
        answer: 'It depends on your household. Families with young children often keep at least one tub. For master baths, walk-in showers are increasingly popular. Our team helps you weigh the options.',
      },
      {
        question: 'Can you make my bathroom more accessible?',
        answer: 'Absolutely. Grab bars, zero-threshold showers, comfort-height toilets, and wider doorways are all part of our expertise. We create beautiful spaces that work for everyone.',
      },
      {
        question: 'What tile trends are popular right now?',
        answer: 'Large-format tiles, patterned cement tiles, and natural stone looks remain popular. Our design team stays current on trends while helping you choose timeless options that will not date quickly.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Bath Assessment',
        description: 'We evaluate your current bathroom, discuss your must-haves, and measure carefully. Every successful project starts with understanding your needs.',
      },
      {
        number: 2,
        title: 'Design & Selection',
        description: 'Our team presents design options with material selections at your budget level. You will approve every tile, fixture, and finish before bathroom remodel work begins.',
      },
      {
        number: 3,
        title: 'Quality Construction',
        description: 'Our skilled team executes your bathroom remodeling project with precision - waterproofing, plumbing, electrical, and beautiful finishes that last.',
      },
    ],
    category: 'interior',
    bannerImage: bannerImages.bathroom,
    cardImage: serviceImages.bathroomRemodel,
  },
  {
    slug: 'garage-remodeling',
    title: 'Garage Remodeling | Conversions & Upgrades | BNC Builders',
    shortTitle: 'Garage Remodeling',
    description: 'Professional garage remodeling & conversions in Escondido & San Diego. Transform your garage into a living space, home office, or ADU. Licensed contractor.',
    heroHeading: 'Your Garage Can Be So Much More',
    heroContent: [
      'Most garages collect junk. Yours could become a home gym, a professional office, a guest suite, or even a rental unit.',
      'BNC Builders transforms underutilized garage space into valuable living areas that enhance your lifestyle and property value.',
      "We handle everything - from simple organization upgrades to complete living space conversions. We understand local codes, insulation requirements, and the structural considerations that make garage conversions successful. Whether you want a clean, organized garage or a full conversion, we'll build a solution that fits your property and how you actually live.",
    ],
    features: [
      'Complete garage-to-living-space conversions',
      'Home gym and workout room setups',
      'Professional home office installations',
      'Guest suite and in-law unit builds',
      'Workshop and hobby room creations',
      'Storage optimization systems',
      'Epoxy flooring and wall systems',
      'Climate control additions',
    ],
    faqs: [
      {
        question: 'Do I need permits for garage remodeling?',
        answer: 'Most garage remodeling projects require permits, especially those adding electrical, plumbing, or converting to living space. BNC Builders handles all permitting as part of our comprehensive service.',
      },
      {
        question: 'Will converting my garage hurt resale value?',
        answer: 'Done properly, garage remodeling typically increases value - especially ADU conversions with rental potential. The key is professional execution with proper permits. Amateur conversions can hurt value.',
      },
      {
        question: 'Can I convert part of my garage and keep some parking?',
        answer: 'Absolutely. Many homeowners create a single-car garage with an attached office, gym, or storage room. Our garage remodeling designs maximize your options.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Space Evaluation',
        description: 'We assess your garage structure, discuss your vision, and explore what is possible within local codes. Every great conversion starts with understanding what you have to work with.',
      },
      {
        number: 2,
        title: 'Design Planning',
        description: 'Our team creates detailed plans for your garage remodeling project, including mechanical systems, finishes, and any structural modifications needed.',
      },
      {
        number: 3,
        title: 'Complete Build-Out',
        description: 'BNC Builders transforms your garage with professional craftsmanship - insulation, drywall, electrical, flooring, and every finishing touch.',
      },
    ],
    category: 'interior',
    bannerImage: bannerImages.garage,
    cardImage: serviceImages.garageRemodel,
  },
  {
    slug: 'new-room-additions',
    title: 'Add Space Without Leaving Home',
    shortTitle: 'New Room Additions',
    description: 'New room additions in Escondido & San Diego County. Expand your living space with seamless additions that match your home. Permits to completion.',
    heroHeading: 'Add Space Without Leaving Home',
    heroContent: [
      'Your family has grown, your needs have changed, but you love your neighborhood. Our room addition services let you stay in the home you love while adding the space you need - no moving trucks required.',
      'We specialize in seamless additions that look like they were always part of your home. Our team matches rooflines, siding, and architectural details so your expansion enhances curb appeal rather than detracting from it.',
      'Guest bedrooms, home offices, expanded kitchens, entertainment rooms, in-law suites - whatever space you need, we deliver additions that add both square footage and property value.',
    ],
    features: [
      'Bedroom and guest suite additions',
      'Home office and study expansions',
      'Family room and entertainment areas',
      'Kitchen and dining room extensions',
      'In-law and multi-generational suites',
      'Second story additions',
      'Sunroom and enclosed patio builds',
      'Seamless architectural matching',
    ],
    faqs: [
      {
        question: 'How long does a room addition take?',
        answer: 'Most single-room additions take 4-6 months from permit approval to completion. Larger or more complex projects may extend longer. We provide detailed timelines during consultation.',
      },
      {
        question: 'Will my addition match my existing home?',
        answer: 'That\'s our specialty. We carefully match roof pitch, siding, windows, and trim. Most guests can\'t tell where the original home ends and the addition begins.',
      },
      {
        question: 'What about foundation and structural work?',
        answer: 'Our licensed team handles all foundation work, structural engineering, and connections to your existing home. Every addition includes proper engineering.',
      },
      {
        question: 'Can I add a room above my garage?',
        answer: 'Often yes! Above-garage additions are popular options. We evaluate your garage structure to determine feasibility and design options.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Needs Assessment',
        description: 'We discuss exactly what space you need and how you\'ll use it. Understanding your lifestyle helps us design the perfect solution.',
      },
      {
        number: 2,
        title: 'Design & Engineering',
        description: 'Our architects create plans that seamlessly integrate with your home. We handle engineering, permits, and all approvals.',
      },
      {
        number: 3,
        title: 'Professional Construction',
        description: 'Our experienced crew builds your addition with care, maintaining clear communication from foundation to final paint.',
      },
    ],
    category: 'interior',
    bannerImage: bannerImages.newRoom,
    cardImage: serviceImages.newRoomAddition,
  },
  {
    slug: 'pre-construction',
    title: 'Pre-Construction Services | Planning & Permits | BNC Builders',
    shortTitle: 'Pre-Construction',
    description: 'Pre-construction planning & permitting services in Escondido & San Diego. Site evaluation, architectural plans, engineering & permit management.',
    heroHeading: 'Start Your Project On Solid Ground',
    heroContent: [
      'The difference between a smooth construction project and a nightmare often comes down to planning. Our pre-construction services ensure your renovation, ADUs or addition starts on the strongest possible foundation.',
      "Our comprehensive pre-construction packages cover everything before the first hammer swings - site analysis, architectural drawings, engineering, permits, material selection, and detailed scheduling. We handle the complexity, so you don't have to.",
      "Whether you're building an ADU, planning a major renovation, or adding to your home, our pre-construction expertise sets you up for success.",
    ],
    features: [
      'Detailed site analysis and feasibility studies',
      'Custom architectural drawings and plans',
      'Structural engineering and approvals',
      'Title 24 energy compliance documentation',
      'Complete permit submission and management',
      'Interior design with mood boards',
      '360-degree VR project previews',
      'Material selection and procurement',
    ],
    faqs: [
      {
        question: 'Why is pre-construction planning so important?',
        answer: 'Proper planning prevents costly mid-project changes, permit delays, and budget surprises. Investing in pre-construction typically saves money overall by catching issues before they become expensive problems.',
      },
      {
        question: 'Do you handle all permits?',
        answer: 'Yes. We manage complete permit packages for projects in San Diego and Los Angeles, including architectural plans, engineering, Title 24 compliance, and all city/county submissions.',
      },
      {
        question: 'What is included in your VR previews?',
        answer: 'Our 360-degree virtual reality previews let you walk through your finished project before construction begins. This helps catch design issues early and ensures you love the result.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Site Analysis',
        description: 'We thoroughly evaluate your property - boundaries, utilities, access, and any constraints that affect your project.',
      },
      {
        number: 2,
        title: 'Design & Documentation',
        description: 'Our team creates complete construction documents including architectural plans, engineering, energy compliance, and all permit-ready submissions.',
      },
      {
        number: 3,
        title: 'Permit Management',
        description: 'BNC Builders submits your permits and manages the approval process, responding to any requests and coordinating inspections.',
      },
    ],
    category: 'interior',
    bannerImage: bannerImages.faq,
    cardImage: serviceImages.homeRenovation,
  },

  // Exterior Services
  {
    slug: 'exterior-remodeling',
    title: 'Reinvent Your Outdoor Living',
    shortTitle: 'Exterior Remodeling',
    description: 'Exterior remodeling in Escondido & San Diego. Outdoor living spaces, curb appeal upgrades, siding, patios & complete exterior transformations.',
    heroHeading: 'Reinvent Your Outdoor Living',
    heroContent: [
      'Your property extends beyond your walls. BNC Builders transforms patios, decks, landscaping, and outdoor living areas into spaces you actually want to use - not just look at from the window.',
      'As experienced exterior specialists, we understand that outdoor projects face unique challenges - weather, drainage, sun exposure, and integration with your existing landscape. Our team delivers durable, beautiful results built for the San Diego climate.',
      'From landscape remodeling and hardscaping to outdoor kitchens and complete backyard makeovers, we create outdoor spaces that extend your living area and add significant property value.',
    ],
    features: [
      'Complete backyard transformations',
      'Landscape remodeling and design',
      'Professional hardscaping installation',
      'Patio and deck construction',
      'Outdoor living room creation',
      'Fire pit and fireplace installations',
      'Privacy screening and fencing',
      'Outdoor lighting systems',
    ],
    faqs: [
      {
        question: 'What is included in exterior remodeling?',
        answer: 'We handle landscape remodeling, hardscaping, outdoor kitchens, decks, patios, pergolas, fire features, lighting, and fencing - creating complete outdoor environments.',
      },
      {
        question: 'How do you handle drainage in exterior remodeling?',
        answer: 'Proper drainage is critical. Our designs always account for water flow, grading, and drainage solutions to protect your investment and your home\'s foundation.',
      },
      {
        question: 'Can I do exterior remodeling in phases?',
        answer: 'Absolutely. Many homeowners tackle their outdoor transformation over multiple seasons. We design with phases in mind, so each step looks complete while preparing for future work.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Site Evaluation',
        description: 'We assess your property, discuss your outdoor living goals, and identify opportunities for transformation.',
      },
      {
        number: 2,
        title: 'Design Creation',
        description: 'We create detailed plans, often with 3D visualization technology so you can see the finished result before we start.',
      },
      {
        number: 3,
        title: 'Expert Installation',
        description: 'Our team executes your project with skilled craftsmanship, quality materials, and attention to every detail.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.exterior,
    cardImage: serviceImages.exteriorRemodel,
  },
  {
    slug: 'adus',
    title: 'ADUs San Diego & Los Angeles | Accessory Dwelling Units',
    shortTitle: 'ADUs',
    description: 'ADU construction in Escondido & San Diego. Complete accessory dwelling units from permits to move-in ready. Maximize property value & rental income.',
    heroHeading: 'Add Value With A Quality ADU',
    heroContent: [
      'ADUs have become one of the smartest investments homeowners in San Diego and Los Angeles can make. Whether you envision rental income, a space for aging parents, a home office, or a guest retreat, BNC Builders delivers complete ADU solutions from permits to move-in ready.',
      'Our team has navigated the ADU permit process dozens of times. We understand the specific requirements across San Diego and Los Angeles, streamlining approvals that trip up less experienced builders and saving you months of delays.',
      'From efficient studio layouts to spacious two-bedroom units, we build ADUs that families love - thoughtfully designed, beautifully built, and ready for whatever purpose you choose.',
    ],
    features: [
      'Detached and attached ADU construction',
      'Garage conversion ADUs',
      'Junior ADU (JADU) builds',
      'Complete permit management',
      'Full kitchen and bathroom installations',
      'Energy-efficient construction',
      'Custom design to match your home',
      'Financing assistance available',
    ],
    faqs: [
      {
        question: 'What is the ROI on an ADU?',
        answer: 'ADUs in San Diego typically rent for $1,500-$3,000+ monthly depending on size and location. Many homeowners see their construction costs recovered within 5-7 years through rental income.',
      },
      {
        question: 'How long does it take to build an ADU?',
        answer: 'Total timeline runs 8-14 months including design, permits, and construction. Our proactive permit management often shortens typical timelines.',
      },
      {
        question: 'Can I build an ADU in my backyard?',
        answer: 'Most San Diego and Los Angeles properties can accommodate some form of ADU. Setbacks, lot coverage, and other factors determine size and placement. We provide free feasibility assessments.',
      },
      {
        question: 'Do you handle ADU permits?',
        answer: 'Yes - comprehensive permit management is included with our ADUs San Diego and ADUs Los Angeles packages. We handle architectural plans, engineering, and all city submissions.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Feasibility Study',
        description: "We evaluate your property's ADU potential - including lot size, setbacks, utility connections, and local zoning requirements.",
      },
      {
        number: 2,
        title: 'Design & Permits',
        description: 'Our team designs your ADU and manages the complete permit process. We keep you informed at every step.',
      },
      {
        number: 3,
        title: 'Quality Construction',
        description: 'BNC Builders constructs your ADU with the same quality standards as any custom home - because it is one.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.adu,
    cardImage: serviceImages.adusExterior,
  },
  {
    slug: 'deck-repair',
    title: 'Restore Your Deck To Its Full Glory',
    shortTitle: 'Deck Repair',
    description: 'Deck repair & restoration in Escondido & San Diego County. Fix structural issues, replace boards, refinish surfaces & restore your outdoor living space.',
    heroHeading: 'Restore Your Deck To Its Full Glory',
    heroContent: [
      'A neglected deck is not just an eyesore - it is a safety hazard. Rotting boards, wobbly railings, and failing structures put your family at risk.',
      'BNC Builders restores decks to safe, beautiful condition before small problems become expensive replacements. Our team has seen it all - weather damage, termite issues, structural concerns, and cosmetic wear.',
      'We diagnose problems accurately and repair them properly using quality materials built to stand up to the San Diego sun. Whether you need a few boards replaced or comprehensive structural repairs, we deliver honest assessments and lasting solutions.',
    ],
    features: [
      'Structural assessment and repair',
      'Board replacement and refinishing',
      'Railing repair and upgrades',
      'Post and joist restoration',
      'Stairway repairs and rebuilds',
      'Waterproofing and sealing',
      'Hardware updates and reinforcement',
      'Complete deck restoration',
    ],
    faqs: [
      {
        question: 'How do I know if my deck needs repairs?',
        answer: 'Warning signs include soft or bouncy boards, wobbly railings, visible rot, separated connections, and faded or peeling finishes. We offer free inspections - no commitment required.',
      },
      {
        question: 'Should I repair or replace my deck?',
        answer: 'It depends on the extent of damage and the deck\'s age. Our assessment gives you honest options - sometimes repair makes more sense, sometimes replacement is more economical.',
      },
      {
        question: 'What decking materials do you recommend?',
        answer: 'Options include pressure-treated wood, cedar, redwood, and composite materials. We help you balance aesthetics, durability, and budget for your specific situation.',
      },
      {
        question: 'How long do deck repairs take?',
        answer: 'Minor repairs typically take 1-2 days. More extensive repairs or partial rebuilds may take 1-2 weeks. We provide accurate timelines during the assessment.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Deck Inspection',
        description: 'We thoroughly examine your deck - structure, surfaces, railings, and connections. We document every issue and prioritize repairs.',
      },
      {
        number: 2,
        title: 'Repair Proposal',
        description: 'We provide a detailed repair plan with clear pricing. You know exactly what we will fix and how much it costs before work begins.',
      },
      {
        number: 3,
        title: 'Professional Repair',
        description: 'Our team completes your repairs using quality materials and proven techniques, leaving you with a safe, attractive outdoor space.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.exterior,
    cardImage: serviceImages.exteriorRemodel,
  },
  {
    slug: 'hardscaping',
    title: 'Hardscaping Services | Patios, Walkways & More | BNC Builders',
    shortTitle: 'Hardscaping',
    description: 'Hardscaping services in Escondido & San Diego. Patios, walkways, retaining walls, fire pits & outdoor features built with quality materials.',
    heroHeading: 'Structure Your Outdoor Paradise',
    heroContent: [
      'Great landscaping starts with great structure. We build the patios, walkways, retaining walls, and features that give your outdoor space its shape and durability.',
      'Our hardscaping installations use quality materials - natural stone, pavers, concrete, and brick - designed to handle San Diego weather while looking beautiful for decades. We understand proper base preparation, drainage, and construction techniques that prevent settling and cracking.',
      'From intimate courtyard patios to expansive entertainment areas, our hardscaping expertise transforms your outdoor vision into lasting reality.',
    ],
    features: [
      'Patio design and installation',
      'Walkway and pathway construction',
      'Retaining wall systems',
      'Driveway installation and repair',
      'Outdoor kitchen foundations',
      'Fire pit surrounds and seating walls',
      'Drainage solutions',
      'Decorative concrete work',
    ],
    faqs: [
      {
        question: 'What materials work best for hardscaping in San Diego?',
        answer: 'Natural stone, concrete pavers, and porcelain tiles all perform excellently. Our team helps you choose materials that match your aesthetic and budget.',
      },
      {
        question: 'How long does hardscaping installation take?',
        answer: 'A typical patio takes 5-10 days. Larger projects with multiple features may take several weeks. Weather rarely disrupts San Diego construction schedules.',
      },
      {
        question: 'Do you handle drainage with hardscaping?',
        answer: 'Absolutely. Proper drainage is built into every project. We slope surfaces appropriately and install drainage systems to protect your investment.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Site Assessment',
        description: 'We evaluate your property, discuss your goals, and identify the best hardscaping solutions for your space and budget.',
      },
      {
        number: 2,
        title: 'Design Development',
        description: 'Our team creates detailed plans with material selections, balancing aesthetics, function, and how features integrate with your landscape.',
      },
      {
        number: 3,
        title: 'Expert Installation',
        description: 'BNC Builders installs your hardscaping with proper preparation, quality materials, and skilled craftsmanship that ensures lasting beauty.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.landscape,
    cardImage: serviceImages.hardscaping,
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Cook, Gather, And Celebrate Outside',
    shortTitle: 'Outdoor Kitchens',
    description: 'Custom outdoor kitchens in Escondido & San Diego. Built-in grills, countertops, refrigeration & bar seating. Design, build & install by BNC Builders.',
    heroHeading: 'Cook, Gather, And Celebrate Outside',
    heroContent: [
      'San Diego weather begs for outdoor living. BNC Builders transforms your backyard into the ultimate entertainment destination - a fully equipped outdoor kitchen where you can prepare entire meals without missing a moment with guests.',
      'Our outdoor kitchens range from simple built-in grilling stations to complete chef-worthy setups with refrigeration, sinks, storage, and seating. We design each one to flow naturally with your landscape and lifestyle.',
      'Quality construction matters outdoors even more than indoors. We use weather-resistant materials, proper ventilation, and professional gas and electrical connections built to perform reliably for years.',
    ],
    features: [
      'Built-in grill islands and stations',
      'Outdoor refrigeration and ice makers',
      'Sink and prep area installations',
      'Pizza oven additions',
      'Bar seating and counters',
      'Weather-resistant cabinetry',
      'Professional gas line installation',
      'Outdoor lighting integration',
    ],
    faqs: [
      {
        question: 'How much space does an outdoor kitchen need?',
        answer: 'Functional setups start at about 6 feet of counter length. More elaborate designs with seating may span 15-20 feet. We maximize your available space in every design.',
      },
      {
        question: 'Do outdoor kitchens require permits?',
        answer: 'Usually yes, especially for gas and electrical work. BNC Builders handles all permitting for outdoor kitchens as part of our comprehensive service.',
      },
      {
        question: 'What about maintenance?',
        answer: 'We use low-maintenance materials throughout. Regular cleaning and annual appliance checks keep everything running smoothly. We provide care instructions with every project.',
      },
      {
        question: 'Can you add an outdoor kitchen to an existing patio?',
        answer: 'Often yes! We evaluate your existing hardscape and make recommendations. Sometimes minor modifications are all it takes.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Lifestyle Consultation',
        description: 'We discuss how you entertain, what you cook, and how you envision using your outdoor kitchen. This shapes every design decision.',
      },
      {
        number: 2,
        title: 'Custom Design',
        description: 'Our team designs an outdoor kitchen tailored to your space, cooking style, and budget - with appliance selections and material choices you approve.',
      },
      {
        number: 3,
        title: 'Professional Build',
        description: 'BNC Builders constructs your outdoor kitchen with proper utilities, quality materials, and craftsmanship that makes outdoor cooking a pleasure.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.outdoorKitchen,
    cardImage: serviceImages.outdoorKitchen,
  },
  {
    slug: 'landscape-remodeling',
    title: 'Landscape Remodeling | Complete Outdoor Transformations',
    shortTitle: 'Landscape Remodeling',
    description: 'Landscape remodeling in Escondido & San Diego County. Complete outdoor makeovers including plantings, hardscaping, lighting & irrigation systems.',
    heroHeading: 'Reimagine Your Entire Landscape',
    heroContent: [
      `Your outdoor space has potential you might not see yet. BNC Builders' landscape remodeling services envision and execute complete outdoor transformations - from tired, neglected yards to stunning environments you actually want to spend time in.`,
      'We combine hardscaping, plantings, and functional zones into one cohesive design - outdoor rooms for cooking, relaxing, playing, or whatever your family actually does outside.',
      'Whether you want drought-tolerant elegance, lush tropical vibes, or clean modern minimalism, our expertise brings your vision to life with plants and features suited to the San Diego climate.',
    ],
    features: [
      'Complete yard redesign and installation',
      'Hardscaping and softscaping integration',
      'Outdoor kitchens and dining areas',
      'Fire pits and gathering spaces',
      'Water features and pools coordination',
      'Irrigation system installation',
      'Landscape lighting design',
      'Privacy and screening solutions',
    ],
    faqs: [
      {
        question: 'How long does landscape remodeling take?',
        answer: 'A complete landscape remodel typically runs 6-12 weeks depending on scope. We can phase larger projects across multiple seasons if preferred.',
      },
      {
        question: 'Do you handle both plants and hardscaping?',
        answer: 'Yes. We integrate hardscaping, softscaping, irrigation, and lighting into unified designs and coordinate everything for seamless results.',
      },
      {
        question: 'What about drought-tolerant landscaping?',
        answer: 'We specialize in beautiful, water-wise landscaping. Native plants, succulents, and efficient irrigation reduce water use without sacrificing aesthetics.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Vision Discussion',
        description: 'We explore how you want to use your outdoor space, your aesthetic preferences, and the practical needs that shape our design.',
      },
      {
        number: 2,
        title: 'Comprehensive Design',
        description: 'Our team creates detailed plans covering every element - hardscaping, planting, lighting, and irrigation.',
      },
      {
        number: 3,
        title: 'Complete Installation',
        description: 'BNC Builders executes the project with skilled craftsmanship, installing every feature and plant according to plan.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.landscape,
    cardImage: serviceImages.landscaping,
  },
  {
    slug: '3d-landscape-design',
    title: 'Walk Through Your New Landscape Before We Build',
    shortTitle: '3D Landscape Design',
    description: '3D landscape design & visualization in Escondido & San Diego. See your outdoor project before construction begins. Accurate renderings & detailed plans.',
    heroHeading: 'Walk Through Your New Landscape Before We Build',
    heroContent: [
      'Imagine seeing your completed project before a single shovel breaks ground. BNC Builders\' 3D landscape design services use advanced visualization technology to create photorealistic renderings of your landscape.',
      'Our 3D design technology eliminates guesswork. You will see exactly how proposed features fit your space, how plants will look at maturity, and how lighting transforms the scene after dark. Make informed decisions with confidence.',
      'This powerful tool helps you visualize outdoor kitchen placement, patio proportions, plant selections, and every other element of your project before committing to construction.',
    ],
    features: [
      'Photorealistic 3D renderings',
      'Multiple viewpoint presentations',
      'Day and night lighting visualization',
      'Plant growth projections',
      'Material and color options comparison',
      'Virtual walkthrough experiences',
      'Design revision support',
      'Construction-ready documentation',
    ],
    faqs: [
      {
        question: 'How does 3D landscape design save money?',
        answer: 'By visualizing your project first, you catch design issues before construction begins. Changes on screen cost nothing - changes during construction can be expensive.',
      },
      {
        question: 'Can I see different material options?',
        answer: 'Absolutely. Our 3D technology lets you compare different pavers, plant selections, and finishes side by side before making decisions.',
      },
      {
        question: 'How long does 3D design take?',
        answer: 'Initial concepts typically take 1-2 weeks after our site visit. Revisions are incorporated quickly as you refine your vision.',
      },
    ],
    process: [
      {
        number: 1,
        title: 'Property Survey',
        description: 'We measure your property precisely and photograph existing conditions - the foundation for accurate 3D modeling.',
      },
      {
        number: 2,
        title: '3D Development',
        description: 'Our designers build detailed 3D models incorporating your preferences, showing proposed features from multiple angles.',
      },
      {
        number: 3,
        title: 'Refinement & Approval',
        description: 'We present your 3D visualization, incorporate your feedback, and refine until you approve the final design for construction.',
      },
    ],
    category: 'exterior',
    bannerImage: bannerImages.landscape2,
    cardImage: serviceImages.landscape3D,
  },
];

export const interiorServices = services.filter((s) => s.category === 'interior');
export const exteriorServices = services.filter((s) => s.category === 'exterior');

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

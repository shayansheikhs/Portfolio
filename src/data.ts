import { Project, Testimonial, PlatformSkill, Service, TimelineStep } from './types';
import victoriaPoolImg from '../assets/victoria_pool_live_full_screenshot.png';
import arnaValleyImg from '../assets/arna_valley_exxon_screenshot.png';
import vapePortalImg from '../assets/vape_portal_screenshot.png';
import skullVapingImg from '../assets/skull_vaping_screenshot.png';
import richmondAutohubImg from '../assets/richmond_autohub_screenshot.png';
import expresspnpImg from '../assets/expresspnp_screenshot.png';
import junkgenieImg from '../assets/junkgenie_screenshot.png';
import othello4kingsImg from '../assets/othello4kings_screenshot.png';
import westgateImg from '../assets/westgate_contractors_screenshot.png';
import grandAdventuresImg from '../assets/grand_adventures_screenshot.png';
import vaporhatchImg from '../assets/vaporhatch_screenshot.png';

export const PLATFORMS_DATA: PlatformSkill[] = [
  {
    id: 'shopify',
    name: 'Shopify / Shopify Plus',
    icon: 'ShoppingBag',
    description: 'Expert-level customization, Liquid templates, and custom checkout implementation.',
    color: 'border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/70',
    bgGlow: 'from-emerald-500/10 to-transparent',
    details: [
      'OS 2.0 Theme architecture & schema customization',
      'Bespoke Liquid template & JSON section programming',
      'Checkout Extensibility & Custom App integrations',
      'Headless Shopify with Hydrogen & Storefront API',
      'Inventory, shipping, and API flow automations'
    ]
  },
  {
    id: 'wordpress',
    name: 'WordPress / WooCommerce',
    icon: 'Globe',
    description: 'Tailored plugins, full WooCommerce store builds, and Gutenberg/Elementor integrations.',
    color: 'border-blue-500/30 text-blue-400 group-hover:border-blue-500/70',
    bgGlow: 'from-blue-500/10 to-transparent',
    details: [
      'Custom theme creation from Figma with pure PHP/SASS',
      'WooCommerce extension & customized payment gateway integrations',
      'Custom block building for Gutenberg using React/JS',
      'Elementor / Divi highly optimized performance setups',
      'Advanced Custom Fields (ACF) & custom post type structuring'
    ]
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce Enterprise',
    icon: 'Layers',
    description: 'Advanced Stencil styling, Multi-Storefront (MSF) deployments, and API widgets.',
    color: 'border-indigo-500/30 text-indigo-400 group-hover:border-indigo-500/70',
    bgGlow: 'from-indigo-500/10 to-transparent',
    details: [
      'Stencil theme customization (Handlebars & SASS)',
      'GraphQL Storefront API and Cart/Checkout SDK scripts',
      'Multi-Storefront (MSF) configurations for global brands',
      'Complex catalog migrations and product option architectures',
      'B2B Edition customized workflow configuration'
    ]
  },
  {
    id: 'other',
    name: 'Webflow, Wix, Squarespace & PHP',
    icon: 'Cpu',
    description: 'Sleek visual styling, custom PHP integrations, and Laravel backend setups.',
    color: 'border-purple-500/30 text-purple-400 group-hover:border-purple-500/70',
    bgGlow: 'from-purple-500/10 to-transparent',
    details: [
      'Webflow custom layouts, interactions, and GSAP scripting',
      'Wix Velo backend code & Squarespace developer-mode features',
      'Custom PHP/Laravel web development & secure databases',
      'Database migration & legacy portal upkeep',
      'Third-party CRM, ERP & marketing tool connections'
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'setup-migration',
    title: 'Store Setup & Migration',
    icon: 'ArrowLeftRight',
    description: 'Seamless migration of catalog, orders, and customer accounts with absolute zero downtime.',
    bullets: [
      'Platform audits & strategy planning',
      'SEO metadata mapping & automatic redirects',
      'Bulk data export/import & schema normalization',
      'Integrations check & system sync tests'
    ]
  },
  {
    id: 'theme-customization',
    title: 'Theme Customization',
    icon: 'Paintbrush',
    description: 'Transforming off-the-shelf templates into highly tailored, brand-perfect storefronts.',
    bullets: [
      'Bespoke section & widget development',
      'Pixel-perfect Figma to theme conversions',
      'Mobile-first responsive adjustments',
      'Interactive e-commerce product customizers'
    ]
  },
  {
    id: 'speed-optimization',
    title: 'Speed Optimization',
    icon: 'Zap',
    description: 'Achieve Core Web Vitals green scores (90+) to improve conversion rate and SEO ranks.',
    bullets: [
      'Advanced image lazyloading & format conversion',
      'Script deferral and unused CSS/JS purging',
      'Server-side caching & CDN configurations',
      'Database query indexing and optimization'
    ]
  },
  {
    id: 'custom-dev',
    title: 'Custom App & Plugins',
    icon: 'Code',
    description: 'Building custom features that normal apps or plug-ins simply cannot do.',
    bullets: [
      'Custom Shopify custom apps (Node.js/React)',
      'Tailored WordPress/WooCommerce plugin design',
      'BigCommerce widgets and customized dashboard feeds',
      'Secure third-party API hookups (ERP, CRM)'
    ]
  },
  {
    id: 'seo-deliverability',
    title: 'SEO & Structured Data',
    icon: 'TrendingUp',
    description: 'Increasing organic reach through semantic schemas and fast search ranking layouts.',
    bullets: [
      'Structured JSON-LD schema microdata setups',
      'Sitemap and canonical index configurations',
      'Technical site structure corrections',
      'Google Search Console diagnostics'
    ]
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    icon: 'ShieldCheck',
    description: '24/7 priority support to resolve urgent issues and ensure persistent store availability.',
    bullets: [
      'Scheduled security audit logs and patches',
      'Backup automations and recovery validations',
      'Weekly app & plugin update audits',
      'Emergency store fix resolution dispatch'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-vape-portal',
    title: 'Vape Portal UK',
    description: 'A full-featured Shopify e-commerce store for a UK-based vape retailer. Custom theme with age gate verification, product filtering by brand and category, dynamic product recommendations, and integrated blog for vape news and tips. Optimized for UK compliance and fast mobile experience.',
    category: 'shopify',
    imageGradient: 'from-amber-600/30 via-yellow-500/15 to-slate-900',
    image: vapePortalImg,
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Age Gate', 'SEO', 'Custom Sections'],
    features: [
      'Age Verification Gate (18+ Compliance)',
      'Brand-Filtered Product Collections',
      'Dynamic Product Recommendations Engine',
      'Newsletter & Blog Integration',
      'Mobile-Optimized Responsive Storefront'
    ],
    clientSector: 'Vape & E-Cigarette Retail',
    scope: 'Shopify Theme Development, UK Compliance, & Product Catalog Setup',
    projectLink: 'https://vapeportal.co.uk/'
  },
  {
    id: 'proj-skull-vaping',
    title: 'Skull Vaping UK',
    description: 'A premium Shopify e-commerce platform designed and optimized for a prominent UK vape brand. Integrated dynamic search filtering, robust age verification systems, trust badges, Trustpilot reviews, and clean layouts focused on bulk purchasing and conversion rate optimization.',
    category: 'shopify',
    imageGradient: 'from-purple-900/30 via-slate-800/10 to-slate-900',
    image: skullVapingImg,
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind', 'Conversion CRO', 'Speed Tuning'],
    features: [
      'Custom 18+ Age verification pop-up modal',
      'Advanced product attribute filters (Brand, Nicotine, Puffs)',
      'Trustpilot reviews & social verification integration',
      'One-click add-to-cart layout for fast shopping',
      'Search engine friendly structured schema'
    ],
    clientSector: 'Vape Distribution & E-Commerce',
    scope: 'Shopify Theme Redesign, CRO, & Speed Optimization',
    projectLink: 'https://www.skullvaping.com/'
  },
  {
    id: 'proj-7',
    title: 'Victoria Pool Service & Supply',
    description: 'A comprehensive WordPress & Elementor website build for Victoria’s trusted pool service, repair, and retail supply store active since 1968. Integrated custom local SEO schemas, Rank Math SEO optimizations, and structured service/product catalogs.',
    category: 'wordpress',
    imageGradient: 'from-blue-600/30 via-cyan-500/15 to-slate-900',
    image: victoriaPoolImg,
    tags: ['WordPress', 'Elementor Pro', 'Rank Math SEO', 'Schema.org Graph', 'LiteSpeed Cache'],
    features: [
      'Weekly Pool Service App Flow (Tech photos & messaging)',
      'Free BioGuard Spin Lab Water Testing Booking',
      'TDLR RAIL Licensed Repair Booking Portal',
      'Above-Ground Pools & Spas Catalog',
      'Big Green Egg Grill Dealer Shop'
    ],
    clientSector: 'Pool Service & Retail Supply',
    scope: 'WordPress Development, Local SEO Strategy, & Custom Product Catalogs',
    projectLink: 'https://victoriapoolservice.net/'
  },
  {
    id: 'proj-8',
    title: 'Arna Valley Exxon',
    description: 'A WordPress & Elementor website build for Arna Valley Exxon, operated by Rizvi Corporation. A trusted auto repair & maintenance center in Virginia offering oil changes, state inspections, emissions testing, and full vehicle diagnostics.',
    category: 'wordpress',
    imageGradient: 'from-orange-600/30 via-amber-500/15 to-slate-900',
    image: arnaValleyImg,
    tags: ['WordPress', 'Elementor Pro', 'ElementsKit', 'MetForm', 'Smush'],
    features: [
      'Oil Changes & Scheduled Maintenance',
      'Virginia State & Emissions Inspection Portal',
      'Vehicle Diagnostics & AC/Heat Repair',
      'Brakes, Tires & Full Service Catalog',
      'Online Booking & Contact Form'
    ],
    clientSector: 'Automotive Service & Gas Station',
    scope: 'WordPress Development, Service Pages, & Lead Generation Forms',
    projectLink: 'https://arnavalleyexxon.us/'
  },
  {
    id: 'proj-richmond-autohub',
    title: 'Richmond Auto Hub',
    description: 'A professional WordPress & WooCommerce website build for Richmond Auto Hub, featuring custom auto-financing application forms, lease structures, clean interactive vehicle service layouts, and localized SEO schema integrations.',
    category: 'wordpress',
    imageGradient: 'from-yellow-600/30 via-slate-800/15 to-slate-900',
    image: richmondAutohubImg,
    tags: ['WordPress', 'Elementor Pro', 'Lease Forms', 'Local SEO', 'Custom Contact UI'],
    features: [
      'Flexible Auto-Financing Solutions Portal',
      'Interactive Finance Application Form',
      'Leasing & Financing Comparison Layouts',
      'Custom Service Catalog & CTAs',
      'Fully Responsive Mobile-First Design'
    ],
    clientSector: 'Auto Finance & Leasing Services',
    scope: 'WordPress Theme Redesign, Custom Lead Forms, & Local SEO Strategy',
    projectLink: 'https://richmondautohub.com/'
  },
  {
    id: 'proj-expresspnp',
    title: 'Express PNP',
    description: 'A custom WordPress & Elementor site designed for Express PNP, a manufacturer of customized packaging boxes and commercial printing. Features custom box product catalogs, structured grid designs, client testimonial slider setups, interactive FAQs, and consultation forms optimized for B2B conversions.',
    category: 'wordpress',
    imageGradient: 'from-blue-600/20 via-cyan-600/10 to-slate-900',
    image: expresspnpImg,
    tags: ['WordPress', 'Elementor Pro', 'B2B Custom UI', 'Lead Capture Form', 'SEO Schema'],
    features: [
      'Bespoke Product Showcase Grid (Mailer, Tuck & Cosmetic Boxes)',
      'Custom "Make a Consultant" quotation form',
      'Frictionless interactive client testimonial sliders',
      'Detailed accordion-style FAQ sections',
      'Fast-loading responsive media optimization'
    ],
    clientSector: 'Packaging & Custom Printing Industry',
    scope: 'WordPress Development, Custom Forms, & Conversion Flow Optimization',
    projectLink: 'https://www.expresspnp.com/'
  },
  {
    id: 'proj-junkgenie',
    title: 'Junk Genie Removal',
    description: 'A robust WordPress & Elementor website build for Junk Genie, a professional junk and waste removal service provider in California. Integrated interactive scheduling modules, detailed waste solutions grids, customer review sliders, and local SEO schema integrations.',
    category: 'wordpress',
    imageGradient: 'from-green-600/30 via-slate-800/10 to-slate-900',
    image: junkgenieImg,
    tags: ['WordPress', 'Elementor Pro', 'Local SEO', 'Custom Forms', 'Booking Integration'],
    features: [
      'Comprehensive Waste Solutions & Service Grid',
      'Custom "Reach Out to Us" lead capture form',
      'Trust badges, client statistics & satisfaction rating UI',
      'Interactive customer review slider setup',
      'Localized structured schema for SEO optimization'
    ],
    clientSector: 'Junk Removal & Waste Management Services',
    scope: 'WordPress Development, Conversion Rate Optimization, & Local SEO Strategy',
    projectLink: 'https://www.junkgenieremoval.com/'
  },
  {
    id: 'proj-othello4kings',
    title: 'Othello4Kings',
    description: 'A premium WordPress & WooCommerce website for Othello, a luxury hair care brand "Formulated For Kings." Features elegant product catalogs for beard oils, conditioners, curly creams & shampoos, style trend galleries with curated looks, integrated contact forms, and a dedicated women\'s hair treatment section. Built with rich visuals, gold-accent branding, and conversion-focused layouts.',
    category: 'wordpress',
    imageGradient: 'from-yellow-700/30 via-amber-900/15 to-slate-900',
    image: othello4kingsImg,
    tags: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom Branding', 'Product Catalog'],
    features: [
      'Premium Product Catalog (Beard Oil, Conditioner, Curly Cream, Shampoo)',
      'Style Trends Gallery with Gender-Based Filtering',
      'Integrated Contact Form & Business Info Section',
      'Women\'s Hair Treatment Dedicated Landing Page',
      'Gold-Accent Luxury Branding & Newsletter Subscription'
    ],
    clientSector: 'Hair Care & Beauty Products',
    scope: 'WordPress & WooCommerce Development, Product Catalog, & Brand Identity Design',
    projectLink: 'https://www.othello4kings.com/'
  },
  {
    id: 'proj-westgate-contractors',
    title: 'Westgate Contractors',
    description: 'A professional WordPress & Elementor website for Westgate Contractors, a full-service exterior cleaning & pressure washing company. Features detailed service pages for plumbing, painting, and exterior services, an interactive FAQ section, client testimonials slider, and a streamlined working process showcase with 10+ years of industry experience highlighted.',
    category: 'wordpress',
    imageGradient: 'from-blue-600/30 via-cyan-500/15 to-slate-900',
    image: westgateImg,
    tags: ['WordPress', 'Elementor Pro', 'Service Pages', 'Local SEO', 'Lead Generation'],
    features: [
      'Expert Exterior Cleaning & Pressure Washing Showcase',
      'Comprehensive Service Grid (Plumbing, Painting, Cleaning)',
      'Standard Working Process Visual Timeline',
      'Interactive FAQ & Client Testimonials Section',
      'Lead Capture Forms & CTA Optimization'
    ],
    clientSector: 'Home Services & Contracting',
    scope: 'WordPress Development, Service Pages, & Local SEO Strategy',
    projectLink: 'https://westgatecontractors.com/'
  },
  {
    id: 'proj-grand-adventures',
    title: 'Grand Adventures Travel',
    description: 'A vibrant WordPress website for Grand Adventures Travel, a Florida-based travel agency specializing in Disney destinations, Universal Parks, cruise vacations, Sandals & Beaches resorts, and custom vacation experiences. Features destination showcase galleries, client testimonials, partner brand logos (Sandals, CLIA, Travel Leaders Network), and a streamlined quote request system.',
    category: 'wordpress',
    imageGradient: 'from-sky-600/30 via-blue-500/15 to-slate-900',
    image: grandAdventuresImg,
    tags: ['WordPress', 'Elementor Pro', 'Travel Agency', 'Booking Forms', 'SEO'],
    features: [
      'Destination Showcase (Disney, Universal, Cruises, Sandals)',
      'Client Testimonials & Reviews Section',
      'Partner Brand Logos & Certifications Display',
      'Request A Quote CTA Integration',
      'Responsive Travel Portfolio with Image Galleries'
    ],
    clientSector: 'Travel Agency & Vacation Planning',
    scope: 'WordPress Development, Destination Pages, & Lead Generation Strategy',
    projectLink: 'https://grand-adventures-travel.com/'
  },
  {
    id: 'proj-vaporhatch',
    title: 'VaporHatch',
    description: 'A high-performance BigCommerce e-commerce store for VaporHatch, a premium e-liquid and vaping hardware retailer. Features a curated product catalog with Most Popular and New Products sections, brand showcase grid (Juice Head, VooPoo, Naked, iJoy, Esco Bars, Joyetech), dynamic product carousels, and a clean modern UI focused on fast browsing and seamless checkout.',
    category: 'bigcommerce',
    imageGradient: 'from-emerald-500/20 via-teal-600/10 to-slate-900',
    image: vaporhatchImg,
    tags: ['BigCommerce', 'Stencil', 'Product Catalog', 'Brand Grid', 'E-Commerce'],
    features: [
      'Most Popular & New Products Dynamic Carousels',
      'Brand Showcase Grid (Juice Head, VooPoo, Naked, iJoy & more)',
      'Premium E-Liquid & Hardware Category Filtering',
      'Clean Modern UI with Quick Add-to-Cart',
      'Optimized Checkout & Fast Page Load Performance'
    ],
    clientSector: 'Vape & E-Liquid Retail',
    scope: 'BigCommerce Stencil Theme Development, Product Catalog, & Conversion Optimization',
    projectLink: 'https://vaporhatch.com/'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We audit your current site, catalog structure, third-party integrations, and analyze speed bottleneck reports to outline custom goals.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Strategic Architecture',
    description: 'Wireframing layouts and defining exact schemas. For migrations, we map redirect structures to prevent SEO value loss.',
    icon: 'LayoutGrid'
  },
  {
    step: '03',
    title: 'Tailored Development',
    description: 'Writing semantic HTML5, highly responsive Tailwind classes, and clean CMS code (Liquid, PHP, or Stencil/Handlebars) with zero fluff.',
    icon: 'Code'
  },
  {
    step: '04',
    title: 'Speed & SEO Audit',
    description: 'Lazyloading imagery, deferring scripts, optimizing fonts, and registering JSON-LD micro-schemas to secure green Speed Scores.',
    icon: 'Zap'
  },
  {
    step: '05',
    title: 'Seamless Launch',
    description: 'Rigorous validation checks across devices, final domain redirects mapping, safe checkout testing, and hand-off dashboard training.',
    icon: 'Rocket'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Hamza Rehman',
    role: 'E-Commerce Director',
    company: 'UrbanStore PK',
    text: "Shayan Sheikh is a highly skilled developer. He migrated our legacy Shopify store to a fully tailored OS 2.0 framework. Our mobile page load speed was cut in half, and our conversion rate bumped up by 25%. Exceptional work, highly recommended!",
    rating: 5,
    initials: 'HR',
    bgGradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    id: 'test-2',
    name: 'Sana Tariq',
    role: 'Store Owner',
    company: 'PrintCraft PK',
    text: "Our custom WordPress plugin requirements were extremely complex. Two previous developers told us it wasn't possible. Shayan built it with clean PHP/AJAX flawlessly. The site is now lightning fast and our customers love it!",
    rating: 5,
    initials: 'ST',
    bgGradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    id: 'test-3',
    name: 'Bilal Siddiqui',
    role: 'E-Commerce Manager',
    company: 'TechMart PK',
    text: "Shayan redesigned the entire backend structure of our BigCommerce store and built custom order management tools that saved our team hours of manual work. Very professional service and delivered right on schedule. Highly recommended!",
    rating: 5,
    initials: 'BS',
    bgGradient: 'from-violet-500/10 to-pink-500/10'
  },
  {
    id: 'test-4',
    name: 'Zain Ahmed',
    role: 'Marketing Manager',
    company: 'Digital Nest',
    text: "Working with Shayan was an absolute pleasure. He redesigned our entire WordPress site from scratch, improved our Google PageSpeed score from 42 to 96, and the new layout has significantly boosted our lead generation. Truly top-tier work.",
    rating: 5,
    initials: 'ZA',
    bgGradient: 'from-amber-500/10 to-orange-500/10'
  },
  {
    id: 'test-5',
    name: 'Uzair Malik',
    role: 'Operations Head',
    company: 'SwiftCart',
    text: "Shayan delivered a fully custom Shopify store with advanced product filtering, age verification, and a lightning-fast mobile checkout. His attention to detail and understanding of e-commerce best practices is genuinely impressive.",
    rating: 5,
    initials: 'UM',
    bgGradient: 'from-cyan-500/10 to-sky-500/10'
  },
  {
    id: 'test-6',
    name: 'Mahad Qureshi',
    role: 'Brand Director',
    company: 'PrimeShelf',
    text: "We had a very tight deadline for our WooCommerce store launch. Shayan not only delivered on time but also added custom product bundling features we hadn't even asked for. His proactive approach and technical skills are second to none.",
    rating: 5,
    initials: 'MQ',
    bgGradient: 'from-rose-500/10 to-red-500/10'
  }
];


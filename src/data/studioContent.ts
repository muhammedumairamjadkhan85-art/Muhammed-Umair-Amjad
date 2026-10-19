import { ServiceItem, ProjectCaseStudy, ProcessStep, FAQItem, StudioConfig } from '../types';

export const DEFAULT_STUDIO_CONFIG: StudioConfig = {
  email: 'muhammedumairamjadkhan85@gmail.com',
  phone: '03166097993',
  whatsapp: '+923166097993',
  calLink: '',
  location: 'Pakistan (Serving International & Domestic Clients)',
  domain: 'veltrix.com.pk',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-design',
    number: '01',
    title: 'Website Design',
    summary: 'Custom bespoke layouts, distinctive typography, and brand-aligned visual architecture tailored to position your company at the top of its market.',
    outcomes: [
      'Tailored visual identity alignment',
      'High-contrast, accessible typography',
      'Articulated conversion pathways',
      'Clean responsive viewport scaling'
    ],
    deliverables: [
      'Figma design system & component library',
      'Desktop, tablet, and mobile interface views',
      'Design tokens & interactive style guide',
      'Production-ready vector asset exports'
    ],
    idealFor: 'Brands that have outgrown off-the-shelf templates and demand an unmistakably premium digital identity.'
  },
  {
    id: 'website-development',
    number: '02',
    title: 'Website Development',
    summary: 'Clean, performant modern front-end engineering built with modern frameworks, purposeful micro-interactions, and pristine semantic HTML.',
    outcomes: [
      'Sub-second page loading and high Lighthouse scores',
      'Robust component architecture and maintainability',
      'Cross-browser and multi-device parity',
      'WCAG AA accessible implementation'
    ],
    deliverables: [
      'Production-ready React / TypeScript codebase',
      'Clean Tailwind styling with dark/light mode',
      'Fully functional interactive components',
      'Deployment guide & handover repository'
    ],
    idealFor: 'Founders and businesses requiring reliable, clean engineering that scales without technical debt.'
  },
  {
    id: 'website-redesign',
    number: '03',
    title: 'Website Redesign',
    summary: 'Transform outdated digital presences into polished, high-converting platforms that reflect the true caliber and maturity of your business.',
    outcomes: [
      'Modernized visual hierarchy and brand perception',
      'Eliminated mobile layout bottlenecks',
      'Streamlined navigation and customer journey',
      'Sharper positioning and value messaging'
    ],
    deliverables: [
      'UX audit & friction analysis report',
      'Information architecture overhaul',
      'Refreshed aesthetic & component redesign',
      'Complete migration & relaunch support'
    ],
    idealFor: 'Established businesses suffering from low conversion rates or an outdated aesthetic that damages credibility.'
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-commerce Websites',
    summary: 'Product-focused digital flagships designed to present high-end products with editorial elegance and friction-free shopping experiences.',
    outcomes: [
      'Editorial-grade product showcases and galleries',
      'Intuitive filtering, curation, and search flows',
      'Optimized cart drawers and checkout transitions',
      'Structured product schema for search visibility'
    ],
    deliverables: [
      'Custom catalog and product detail architectures',
      'Cart management & payment integration setup',
      'Customer account & order status views',
      'Inventory & CMS connectivity architecture'
    ],
    idealFor: 'Direct-to-consumer brands, luxury goods, and specialized boutiques seeking an immersive shopping experience.'
  },
  {
    id: 'landing-pages',
    number: '05',
    title: 'Landing Pages',
    summary: 'Precision-engineered single-page campaigns built around a singular objective: turning qualified traffic into committed project inquiries.',
    outcomes: [
      'Clear, distraction-free message hierarchy',
      'Rapid loading times optimized for paid acquisition',
      'Seamless multi-step lead capture mechanics',
      'Rigorous mobile thumb-zone layout planning'
    ],
    deliverables: [
      'High-impact hero composition and hook',
      'Feature, benefit, and proof-of-work modules',
      'Integrated qualification form or waitlist',
      'Analytics event tracking implementation'
    ],
    idealFor: 'Product launches, marketing campaigns, service firms, and startups seeking high conversion velocity.'
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    summary: 'Comprehensive interface architectures, design systems, and user journey roadmaps for complex web applications and digital tools.',
    outcomes: [
      'Frictionless user onboarding and task flows',
      'Scalable atomic design systems and tokens',
      'Tabular data and complex state clarity',
      'Reduced cognitive load across workflows'
    ],
    deliverables: [
      'User flow diagrams and wireframes',
      'Comprehensive high-fidelity screen designs',
      'Interactive clickable prototype',
      'Developer handoff documentation & tokens'
    ],
    idealFor: 'Software platforms, SaaS founders, and client portals requiring professional product design.'
  }
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'aurora-luxury-fragrance',
    title: 'Aurora Noir — Fragrance Flagship',
    category: 'ecommerce',
    categoryLabel: 'E-commerce Flagship',
    isConcept: true,
    statusLabel: 'Concept Project — Demonstration Design',
    summary: 'A minimalist digital flagship for an artisanal luxury perfume house, pairing editorial typography with tactile product storytelling.',
    image: '/src/assets/images/project_aurora_ecommerce_1792337031627.jpg',
    clientContext: 'Demonstration design created to showcase high-end direct-to-consumer product presentation and smooth micro-interactions.',
    challenge: 'Luxury fragrance e-commerce frequently feels either like an uninspired grid or an overly decorative experience with poor checkout usability.',
    strategy: 'Balanced large-scale editorial imagery and muted typography with an uncluttered three-column product grid and instant quick-look details.',
    solution: 'Engineered a warm travertine and obsidian aesthetic with custom drawer cart, scent-profile breakdown tabs, and subtle transition physics.',
    deliverables: ['Custom Product Grid', 'Scent Profile Modals', 'Responsive Checkout Flows', 'Design System'],
    technologies: ['React', 'Tailwind CSS', 'Accessible Headless UI', 'Vite']
  },
  {
    id: 'zenith-monolith-architects',
    title: 'Studio Monolith — Architecture Archive',
    category: 'architecture',
    categoryLabel: 'Studio Portfolio',
    isConcept: true,
    statusLabel: 'Concept Project — Demonstration Design',
    summary: 'A brutalist, monolithic digital archive for a contemporary European architecture firm, balancing spatial photography with minimal typography.',
    image: '/src/assets/images/project_zenith_studio_1792337033154.jpg',
    clientContext: 'Demonstration design exploring spatial balance, architectural grid math, and hairline gold border systems.',
    challenge: 'Architectural portfolios must highlight high-resolution imagery without slow load times or overwhelming the visitor with layout noise.',
    strategy: 'Implemented an asymmetric masonry layout with high-contrast monochrome imagery, subtle champagne gold hairline accents, and keyboard project navigation.',
    solution: 'Crafted a zero-clutter showcase featuring deep project inspection views, architectural blueprint viewers, and responsive multi-column project cards.',
    deliverables: ['Project Archive Grid', 'Fullscreen Project Inspector', 'Architectural Specs Module', 'Contact Inquiries'],
    technologies: ['TypeScript', 'Tailwind CSS', 'CSS Grid', 'Compositor Motion']
  },
  {
    id: 'solaris-wealth-terminal',
    title: 'Solaris Capital — Wealth Management Web App',
    category: 'fintech',
    categoryLabel: 'Fintech & Web App',
    isConcept: true,
    statusLabel: 'Concept Project — Demonstration Design',
    summary: 'A dark-mode asset management interface combining dense financial analytics with spacious executive summaries.',
    image: '/src/assets/images/project_solaris_fintech_1792337033212.jpg',
    clientContext: 'Demonstration design crafted to validate high-density financial data visualization and dark-mode optical legibility.',
    challenge: 'Financial dashboards frequently fall into cognitive overload with noisy telemetry, neon gradients, and inconsistent typography.',
    strategy: 'Created an obsidian-based dark interface using strict tabular numerals, disciplined 24K gold accents for active state, and high-contrast metric grouping.',
    solution: 'Delivered an interactive portfolio performance chart, asset allocation breakdown, and structured holding table with real-time sort mechanisms.',
    deliverables: ['Executive Summary Dashboard', 'Asset Allocation Charts', 'Holdings Table with Tabular Numerals', 'UI Component Library'],
    technologies: ['React', 'SVG Data Visualization', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'hyperion-workflow-saas',
    title: 'NexusFlow — Workflow Automation Platform',
    category: 'saas',
    categoryLabel: 'SaaS & Landing Page',
    isConcept: true,
    statusLabel: 'Concept Project — Demonstration Design',
    summary: 'A conversion-engineered SaaS landing page and product showcase featuring interactive feature walkthroughs and clear pricing guidance.',
    image: '/src/assets/images/project_hyperion_saas_1792337033639.jpg',
    clientContext: 'Demonstration design created to prove conversion-first landing page structure and rapid lead qualification mechanics.',
    challenge: 'Modern software tools often struggle to communicate complex multi-tool automation without falling back on cliché marketing slogans.',
    strategy: 'Built an unambiguous narrative structure: proposition statement, visual feature demonstration, proof-adjacent metrics, and interactive qualification.',
    solution: 'Engineered an interactive product sandbox preview, interactive feature tabs, and an intelligent quotation calculator.',
    deliverables: ['Hero Product Sandbox', 'Interactive Feature Bento Grid', 'Qualification Wizard', 'Responsive Design System'],
    technologies: ['React', 'Tailwind CSS', 'Accessible Forms', 'Vite']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Objective Alignment',
    durationEstimate: 'Week 1',
    description: 'We unpack your business model, target audience, competitive landscape, and primary conversion objectives.',
    keyActivities: [
      'In-depth business & brand positioning review',
      'Target client profile & conversion trigger mapping',
      'Content inventory and technical requirements audit'
    ],
    milestoneDeliverable: 'Project Brief & Strategic Roadmap'
  },
  {
    number: '02',
    title: 'Planning & Architecture',
    durationEstimate: 'Week 1–2',
    description: 'We structure the information architecture, define key page layouts, and map customer journeys before visual styling.',
    keyActivities: [
      'Sitemap and content hierarchy modeling',
      'Wireframing primary desktop & mobile user journeys',
      'Technical stack selection and integration planning'
    ],
    milestoneDeliverable: 'Interactive Wireframe Prototype'
  },
  {
    number: '03',
    title: 'Art Direction & Design',
    durationEstimate: 'Week 2–4',
    description: 'We craft the bespoke aesthetic—combining luxury minimalism, custom typography, and purposeful visual assets.',
    keyActivities: [
      'Visual moodboard & design direction approval',
      'High-fidelity responsive UI designs for all breakpoints',
      'Micro-interaction and motion design specifications'
    ],
    milestoneDeliverable: 'Complete Figma Design System'
  },
  {
    number: '04',
    title: 'Precision Development',
    durationEstimate: 'Week 4–6',
    description: 'We write clean, production-grade code adhering to strict performance, accessibility, and responsiveness standards.',
    keyActivities: [
      'Component-based frontend architecture in React/TypeScript',
      'Sub-second asset optimization and responsive testing',
      'Form validation, error boundaries, and API integrations'
    ],
    milestoneDeliverable: 'Staging Environment Preview'
  },
  {
    number: '05',
    title: 'Review & Polish',
    durationEstimate: 'Week 6–7',
    description: 'We test across operating systems, browsers, and mobile viewports, collecting targeted client feedback to refine details.',
    keyActivities: [
      'Cross-browser and mobile device verification',
      'Accessibility audit (WCAG AA compliance checks)',
      'Client feedback round and final polish sprint'
    ],
    milestoneDeliverable: 'Pre-flight Production Release Candidate'
  },
  {
    number: '06',
    title: 'Launch & Handover',
    durationEstimate: 'Week 7+',
    description: 'We deploy to your live infrastructure, set up DNS, verify analytics and SEO tags, and provide comprehensive documentation.',
    keyActivities: [
      'Live deployment and domain DNS configuration',
      'Search engine indexing verification and XML sitemaps',
      'Handover repository and CMS/editing walkthrough'
    ],
    milestoneDeliverable: 'Live Website & Complete Handover Documentation'
  }
];

export const PRICING_PHILOSOPHY = {
  headline: 'Every Project Is Different. Your Quote Should Be Too.',
  subheadline: 'We reject cookie-cutter tiers and one-size-fits-all packages. Every custom quote reflects your specific scope, technical requirements, and strategic goals.',
  factors: [
    {
      title: 'Project Scope & Depth',
      detail: 'The number of unique templates, custom pages, and complex interactive flows needed across the site.'
    },
    {
      title: 'Technical Complexity',
      detail: 'Custom third-party integrations, CMS architectures, headless e-commerce, or interactive web applications.'
    },
    {
      title: 'Asset & Content Readiness',
      detail: 'Whether you supply finalized brand guidelines and photography, or require studio creative direction.'
    },
    {
      title: 'Timeline & Urgency',
      detail: 'Standard paced delivery versus dedicated sprint engagements requiring compressed development cycles.'
    }
  ],
  quotingStages: [
    {
      step: '01',
      title: 'Submit Brief',
      desc: 'Complete our 6-step project questionnaire in 3 minutes.'
    },
    {
      step: '02',
      title: 'Scope Review',
      desc: 'We review your goals, technical needs, and timeline within 24–48 hours.'
    },
    {
      step: '03',
      title: 'Transparent Proposal',
      desc: 'You receive a detailed custom proposal with defined deliverables, milestones, and quote.'
    }
  ]
};

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'What services does VELTRIX provide?',
    answer: 'VELTRIX provides bespoke website design, modern front-end development (React, TypeScript, Next.js), website redesigns, luxury e-commerce interfaces, conversion-focused landing pages, and comprehensive UI/UX design systems.'
  },
  {
    question: 'How do custom quotes work?',
    answer: 'Because every brand has distinct requirements, we never force clients into artificial fixed packages. You submit a project brief through our 6-step questionnaire, and we prepare an itemized quote reflecting your exact deliverables, scope, and timeline.'
  },
  {
    question: 'What information is needed to start a project?',
    answer: 'To prepare an accurate proposal, we need an overview of your business, target audience, primary project goals (leads, sales, credibility), approximate page count, technical requirements, and your target timeline.'
  },
  {
    question: 'Can an existing website be redesigned?',
    answer: 'Yes. Website redesign is one of our primary services. We conduct a thorough audit of your existing site to identify UX bottlenecks, outdated visual design, and mobile flaws, then re-architect the entire experience from the ground up.'
  },
  {
    question: 'Can VELTRIX design e-commerce websites?',
    answer: 'Yes. We specialize in product-focused, editorial e-commerce flagships designed to showcase high-value products with premium aesthetics, fluid catalog navigation, and intuitive cart experiences.'
  },
  {
    question: 'Will the website work seamlessly on mobile devices?',
    answer: 'Every website we build is crafted mobile-first. We rigorously test across standard mobile screen sizes (320px–430px), tablets (768px), laptops, and wide desktop displays (1600px+) to ensure flawless responsiveness and touch-friendly controls.'
  },
  {
    question: 'How does the design and development process work?',
    answer: 'We follow a structured 6-phase methodology: Discovery, Planning, Design, Development, Review, and Launch. You participate in scheduled milestone reviews to ensure complete alignment before production launch.'
  },
  {
    question: 'Can clients request particular custom features?',
    answer: 'Yes. Custom interactive calculators, multi-step booking flows, dynamic filters, client portals, and third-party API integrations can be tailored to your requirements and itemized in your project scope.'
  },
  {
    question: 'How can clients arrange a consultation?',
    answer: 'You can submit your project inquiry through our onboarding wizard, request a consultation call directly via our contact section, or connect via our configured direct channels.'
  },
  {
    question: 'What happens after submitting a project inquiry?',
    answer: 'Upon receiving your inquiry, we review your requirements, confirm feasibility, and respond within 24 to 48 business hours with clarifying questions or a scheduled discovery call to deliver your custom proposal.'
  }
];

export const ABOUT_CONTENT = {
  heroTitle: 'Crafting digital presence for brands that refuse to blend in.',
  philosophy: 'We believe modern digital design must balance minimalist luxury with relentless usability. A website should not be a superficial brochure; it is the most critical commercial asset a business owns.',
  beliefs: [
    {
      title: 'Honest Craft Over Superficial Novelty',
      desc: 'We eschew generic AI-generated clichés, decorative clutter, and false marketing claims. Every layout decision serves your strategic business outcome.'
    },
    {
      title: 'Performance Is a Visual Feature',
      desc: 'A gorgeous design rendered on a sluggish, bloated codebase fails the client. We prioritize lightweight code, sub-second loading, and zero layout shift.'
    },
    {
      title: 'Design for International Stature',
      desc: 'Whether working with North American startups, European boutiques, or Pakistani enterprises, our standards reflect the benchmark of global digital craft.'
    }
  ],
  commitments: [
    'Clean, maintainable source code with no proprietary lock-in',
    'Transparent milestone communication and direct collaboration',
    'WCAG AA accessible color contrast and responsive integrity',
    'Rigorous testing across browsers and viewport widths'
  ]
};

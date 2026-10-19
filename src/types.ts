export type ServiceId = 
  | 'website-design' 
  | 'website-development' 
  | 'website-redesign' 
  | 'ecommerce' 
  | 'landing-pages' 
  | 'ui-ux-design';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string;
}

export type ProjectCategory = 'all' | 'ecommerce' | 'architecture' | 'fintech' | 'saas';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  isConcept: boolean;
  statusLabel: string;
  summary: string;
  image: string;
  clientContext: string;
  challenge: string;
  strategy: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  durationEstimate: string;
  description: string;
  keyActivities: string[];
  milestoneDeliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InquiryFormData {
  // Step 1: Basic Information
  fullName: string;
  businessName: string;
  email: string;
  country: string;
  preferredContact: 'email' | 'whatsapp' | 'video-call';
  whatsappNumber?: string;

  // Step 2: Project Type (multi-select)
  projectTypes: string[];

  // Step 3: Goals
  primaryGoals: string[];
  additionalGoalContext: string;

  // Step 4: Scope
  approxPages: string;
  requiredFeatures: string[];
  existingWebsiteUrl?: string;
  hasBrandingAndContent: 'complete' | 'in-progress' | 'need-assistance';
  referenceWebsites?: string;

  // Step 5: Budget & Timeline
  budgetRange: string;
  targetTimeline: string;

  // Step 6: Consent
  consentGiven: boolean;
}

export type PageRoute = 
  | 'home' 
  | 'services' 
  | 'work' 
  | 'about' 
  | 'process' 
  | 'pricing' 
  | 'contact';

export interface StudioConfig {
  email: string;
  phone: string;
  whatsapp: string; // e.g. +923166097993
  calLink?: string;
  location: string;
  domain: string; // veltrix.com.pk
}

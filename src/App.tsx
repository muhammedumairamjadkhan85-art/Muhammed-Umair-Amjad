import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceSection } from './components/ServiceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Distinct Pages
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { WorkPage } from './components/WorkPage';
import { AboutPage } from './components/AboutPage';
import { ProcessPage } from './components/ProcessPage';
import { PricingPage } from './components/PricingPage';
import { ContactPage } from './components/ContactPage';

// Modals
import { ProjectWizardModal } from './components/ProjectWizardModal';
import { MeetingBookingModal } from './components/MeetingBookingModal';
import { StudioSettingsModal } from './components/StudioSettingsModal';
import { InquiriesArchiveModal } from './components/InquiriesArchiveModal';
import { LegalModal } from './components/LegalModal';

import { DEFAULT_STUDIO_CONFIG, SERVICES } from './data/studioContent';
import { StudioConfig, PageRoute, ServiceId } from './types';

export default function App() {
  // Studio config state
  const [studioConfig, setStudioConfig] = useState<StudioConfig>(() => {
    try {
      const stored = localStorage.getItem('veltrix_studio_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure new fields are present
        return {
          ...DEFAULT_STUDIO_CONFIG,
          ...parsed,
          domain: parsed.domain || 'veltrix.com.pk',
          phone: parsed.phone || '03166097993',
          email: parsed.email || 'muhammedumairamjadkhan85@gmail.com',
        };
      }
    } catch {
      // ignore
    }
    return DEFAULT_STUDIO_CONFIG;
  });

  // Multi-Page Routing State
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [currentServiceId, setCurrentServiceId] = useState<ServiceId | null>(null);

  // Modals state
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardPreselectedService, setWizardPreselectedService] = useState<string | undefined>(undefined);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Parse initial hash from URL
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        setCurrentServiceId(null);
        return;
      }

      if (hash.startsWith('services/')) {
        const id = hash.replace('services/', '') as ServiceId;
        const exists = SERVICES.some((s) => s.id === id);
        if (exists) {
          setCurrentPage('services');
          setCurrentServiceId(id);
          return;
        }
      }

      if (hash === 'services') {
        setCurrentPage('services');
        setCurrentServiceId(null);
        return;
      }

      if (['home', 'work', 'about', 'process', 'pricing', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
        setCurrentServiceId(null);
        return;
      }

      // Default fallback
      setCurrentPage('home');
      setCurrentServiceId(null);
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Sync hash when page changes programmatically
  const navigateTo = (page: PageRoute, serviceId?: ServiceId) => {
    setCurrentPage(page);
    setCurrentServiceId(serviceId || null);

    let newHash = `#/${page}`;
    if (page === 'services' && serviceId) {
      newHash = `#/services/${serviceId}`;
    } else if (page === 'home') {
      newHash = '#/';
    }

    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Permanently lock to dark gold and black luxury theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
    try {
      localStorage.setItem('veltrix_theme', 'dark');
    } catch {
      // ignore
    }
  }, []);

  const handleSaveConfig = (newConfig: StudioConfig) => {
    setStudioConfig(newConfig);
    try {
      localStorage.setItem('veltrix_studio_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleOpenWizard = (preselectedService?: string) => {
    setWizardPreselectedService(preselectedService);
    setIsWizardOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#F3E5C8] transition-colors duration-300 flex flex-col font-sans selection:bg-[#D4AF37]/35 selection:text-[#F5D77F]">
      
      {/* Top Bar Navigation (With Multi-Page & Services Dropdown) */}
      <Header
        currentPage={currentPage}
        currentServiceId={currentServiceId}
        onNavigate={navigateTo}
        onOpenWizard={handleOpenWizard}
        studioConfig={studioConfig}
      />

      {/* Main Distinct Content Views */}
      <main className="flex-1 bg-[#050507]">
        
        {/* 1. HOME PAGE */}
        {currentPage === 'home' && (
          <div>
            <HeroSection
              onOpenWizard={() => handleOpenWizard()}
              onExploreWork={() => navigateTo('work')}
            />

            {/* Featured Services Preview Section (Linking to individual service pages) */}
            <ServiceSection
              onSelectService={(serviceTitle) => {
                const s = SERVICES.find((item) => item.title.toLowerCase() === serviceTitle.toLowerCase());
                if (s) {
                  navigateTo('services', s.id);
                } else {
                  handleOpenWizard(serviceTitle);
                }
              }}
            />

            {/* Featured Portfolio Preview Section */}
            <PortfolioSection
              onStartProjectWithContext={(contextTitle) => handleOpenWizard(contextTitle)}
            />

            {/* Quick About & Philosophy Snapshot */}
            <AboutSection />

            {/* Testimonials Review Protocol */}
            <TestimonialSection />

            {/* Frequently Asked Questions */}
            <FAQSection />

            {/* Contact & Consultation Initiation */}
            <ContactSection
              studioConfig={studioConfig}
              onOpenWizard={() => handleOpenWizard()}
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />
          </div>
        )}

        {/* 2. SERVICES PAGES (All Services Hub OR Distinct Individual Service Page) */}
        {currentPage === 'services' && (
          currentServiceId ? (
            <ServiceDetailPage
              serviceId={currentServiceId}
              onNavigateToService={(id) => navigateTo('services', id)}
              onNavigateToServices={() => navigateTo('services')}
              onNavigateHome={() => navigateTo('home')}
              onOpenWizardWithService={(title) => handleOpenWizard(title)}
              studioConfig={studioConfig}
            />
          ) : (
            <ServicesPage
              onSelectService={(id) => navigateTo('services', id)}
              onOpenWizardWithService={(title) => handleOpenWizard(title)}
              studioConfig={studioConfig}
            />
          )
        )}

        {/* 3. WORK / PORTFOLIO PAGE */}
        {currentPage === 'work' && (
          <WorkPage
            onStartProjectWithContext={(contextTitle) => handleOpenWizard(contextTitle)}
            studioConfig={studioConfig}
          />
        )}

        {/* 4. ABOUT PAGE */}
        {currentPage === 'about' && (
          <AboutPage
            onStartProject={() => handleOpenWizard()}
            studioConfig={studioConfig}
          />
        )}

        {/* 5. PROCESS & METHODOLOGY PAGE */}
        {currentPage === 'process' && (
          <ProcessPage
            onStartProject={() => handleOpenWizard()}
            studioConfig={studioConfig}
          />
        )}

        {/* 6. PRICING & CUSTOM QUOTE PAGE */}
        {currentPage === 'pricing' && (
          <PricingPage
            onOpenWizard={() => handleOpenWizard()}
            studioConfig={studioConfig}
          />
        )}

        {/* 7. CONTACT & CHANNELS PAGE */}
        {currentPage === 'contact' && (
          <ContactPage
            studioConfig={studioConfig}
            onOpenWizard={() => handleOpenWizard()}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        )}

      </main>

      {/* Studio Footer */}
      <Footer
        studioConfig={studioConfig}
        onNavigate={navigateTo}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenArchive={() => setIsArchiveOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenWizardWithService={(serviceTitle) => handleOpenWizard(serviceTitle)}
      />

      {/* MODALS */}
      {/* Client Onboarding Wizard */}
      <ProjectWizardModal
        isOpen={isWizardOpen}
        onClose={() => {
          setIsWizardOpen(false);
          setWizardPreselectedService(undefined);
        }}
        initialService={wizardPreselectedService}
        studioConfig={studioConfig}
      />

      {/* Meeting Consultation Booking */}
      <MeetingBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        studioConfig={studioConfig}
      />

      {/* Studio Contact Channels Settings */}
      <StudioSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={studioConfig}
        onSave={handleSaveConfig}
      />

      {/* Inquiries Archive */}
      <InquiriesArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />

      {/* Legal Policy & Terms Templates */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

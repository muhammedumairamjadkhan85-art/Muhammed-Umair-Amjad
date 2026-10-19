import React from 'react';
import { ArrowUp, Archive, Settings, Phone, Mail, MessageSquare } from 'lucide-react';
import { SERVICES } from '../data/studioContent';
import { StudioConfig, PageRoute, ServiceId } from '../types';

interface FooterProps {
  studioConfig: StudioConfig;
  onNavigate: (page: PageRoute, serviceId?: ServiceId) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenArchive: () => void;
  onOpenSettings: () => void;
  onOpenWizardWithService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  studioConfig,
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenArchive,
  onOpenSettings,
  onOpenWizardWithService,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'All Services', page: 'services' },
    { label: 'Work / Portfolio', page: 'work' },
    { label: 'About Us', page: 'about' },
    { label: 'Methodology & Process', page: 'process' },
    { label: 'Pricing & Quotes', page: 'pricing' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer className="border-t border-[#2D2415] bg-[#050507] text-[#9E8E72] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#201B12]">
          
          {/* Brand Col (4 cols) with user's circular gold logo */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-full p-[1px] bg-gradient-to-tr from-[#D4AF37] via-[#F5D77F] to-[#8C6D1F] shadow-sm shadow-[#D4AF37]/30 shrink-0">
                <img
                  src="/src/assets/images/veltrix_gold_badge_logo_1792337957224.jpg"
                  alt="VELTRIX Logo"
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider gold-gradient-text">
                  VELTRIX
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                  {studioConfig.domain}
                </span>
              </div>
            </button>

            <p className="text-sm font-semibold text-[#F3E5C8]">
              Build Beyond Ordinary.
            </p>

            <p className="text-xs text-[#D4AF37] font-mono tracking-wide">
              YOUR VISION | OUR DESIGN | YOUR SUCCESS
            </p>

            <p className="text-xs text-[#9E8E72] leading-relaxed max-w-sm">
              International digital design studio crafting bespoke digital flagships, e-commerce platforms, and web applications in exclusive 24K gold and obsidian black.
            </p>

            {/* Direct Contact In Footer */}
            <div className="pt-2 space-y-2 text-xs">
              <a
                href={`tel:${studioConfig.phone}`}
                className="flex items-center gap-2 text-[#F3E5C8] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono">{studioConfig.phone}</span>
              </a>

              <a
                href={`mailto:${studioConfig.email}`}
                className="flex items-center gap-2 text-[#F3E5C8] hover:text-[#D4AF37] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono">{studioConfig.email}</span>
              </a>

              <a
                href={`https://wa.me/${studioConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {studioConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Navigation Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3E5C8]">
              Distinct Pages
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      scrollToTop();
                    }}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Individual Services Pages Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3E5C8]">
              Services Pages
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('services', s.id);
                      scrollToTop();
                    }}
                    className="hover:text-[#D4AF37] text-left transition-colors flex items-center justify-between w-full"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] font-mono text-[#D4AF37]">{s.number}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Management / Archive (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3E5C8]">
              Studio Portal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenArchive}
                  className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
                >
                  <Archive className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Inquiries Archive</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSettings}
                  className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
                >
                  <Settings className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Studio Endpoints</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal, Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#9E8E72] text-center sm:text-left">
            © {currentYear} VELTRIX — <span className="text-[#D4AF37] font-semibold">{studioConfig.domain}</span>. All rights reserved. Custom Quotes Only.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms of Service
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0C0C10] text-[#9E8E72] hover:text-[#D4AF37] border border-[#2D2415] transition-colors"
              aria-label="Scroll back to top of page"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

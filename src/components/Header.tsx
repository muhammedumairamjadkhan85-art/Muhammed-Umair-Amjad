import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { PageRoute, ServiceId, StudioConfig } from '../types';
import { SERVICES } from '../data/studioContent';

interface HeaderProps {
  currentPage: PageRoute;
  currentServiceId: ServiceId | null;
  onNavigate: (page: PageRoute, serviceId?: ServiceId) => void;
  onOpenWizard: (preselectedService?: string) => void;
  studioConfig: StudioConfig;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  currentServiceId,
  onNavigate,
  onOpenWizard,
  studioConfig,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page: PageRoute, serviceId?: ServiceId) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(page, serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; page: PageRoute; hasSubmenu?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services', hasSubmenu: true },
    { label: 'Work', page: 'work' },
    { label: 'About', page: 'about' },
    { label: 'Process', page: 'process' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050507]/95 backdrop-blur-md border-b border-[#2D2415] py-2.5 shadow-xl'
          : 'bg-[#050507]/80 backdrop-blur-sm border-b border-[#2D2415]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Zone 1: Circular 3D Gold Logo & Brand Wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md text-left"
            aria-label="VELTRIX Home - veltrix.com.pk"
          >
            {/* User's Gold Badge Logo */}
            <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F5D77F] to-[#8C6D1F] shadow-md shadow-[#D4AF37]/25 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img
                src="/src/assets/images/veltrix_gold_badge_logo_1792337957224.jpg"
                alt="VELTRIX Logo"
                className="w-full h-full rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-wider gold-gradient-text leading-none">
                VELTRIX
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] mt-0.5">
                {studioConfig.domain}
              </span>
            </div>
          </button>

          {/* Zone 2: Multi-Page Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#9E8E72]" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;

              if (item.hasSubmenu) {
                return (
                  <div key={item.page} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={`flex items-center gap-1.5 py-1.5 border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded ${
                        isActive
                          ? 'text-[#F5D77F] border-[#D4AF37] font-bold'
                          : 'border-transparent hover:text-[#F3E5C8] hover:border-[#D4AF37]/50'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#D4AF37] ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-3 w-72 bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <button
                          onClick={() => handleNav('services')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#121218] text-xs font-bold text-[#D4AF37] border-b border-[#201B12] flex items-center justify-between mb-1"
                        >
                          <span>All Services Overview</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <div className="space-y-0.5">
                          {SERVICES.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => handleNav('services', s.id)}
                              className={`w-full text-left px-3.5 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                                currentServiceId === s.id && currentPage === 'services'
                                  ? 'bg-[#121218] text-[#D4AF37] font-bold'
                                  : 'text-[#9E8E72] hover:text-[#F3E5C8] hover:bg-[#121218]'
                              }`}
                            >
                              <span>{s.title}</span>
                              <span className="font-mono text-[10px] text-[#D4AF37]">{s.number}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`py-1.5 border-b-2 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded ${
                    isActive
                      ? 'text-[#F5D77F] border-[#D4AF37] font-bold'
                      : 'border-transparent hover:text-[#F3E5C8] hover:border-[#D4AF37]/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct Phone & Start Project Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Phone Call Pill */}
            <a
              href={`tel:${studioConfig.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0C0C10] border border-[#2D2415] hover:border-[#D4AF37] text-xs font-mono text-[#F3E5C8] transition-colors"
              title="Direct call"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{studioConfig.phone}</span>
            </a>

            <button
              onClick={() => onOpenWizard()}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#9E8E72] hover:text-[#F5D77F] hover:bg-[#121218] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F5D77F]" /> : <Menu className="w-5 h-5 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Multi-Page & Services Breakdown) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#050507] border-b border-[#2D2415] px-6 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              if (item.hasSubmenu) {
                return (
                  <div key={item.page} className="space-y-2 pb-2 border-b border-[#1F190F]">
                    <div className="flex items-center justify-between text-sm font-semibold text-[#D4AF37]">
                      <span>Services Pages:</span>
                      <button
                        onClick={() => handleNav('services')}
                        className="text-xs text-[#F5D77F] underline"
                      >
                        All Services
                      </button>
                    </div>
                    <div className="pl-3 space-y-1.5 border-l border-[#2D2415]">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => handleNav('services', s.id)}
                          className="w-full text-left py-1 text-xs text-[#9E8E72] hover:text-[#F5D77F] flex items-center justify-between"
                        >
                          <span>{s.title}</span>
                          <span className="font-mono text-[10px] text-[#D4AF37]">{s.number}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`text-left text-sm py-2 border-b border-[#1F190F] transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#F5D77F] font-bold' : 'text-[#9E8E72] hover:text-[#F3E5C8]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </button>
              );
            })}

            {/* Direct Contact Details in Mobile Drawer */}
            <div className="pt-4 space-y-2 border-t border-[#2D2415]">
              <a
                href={`tel:${studioConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 p-3 text-xs font-mono font-bold text-[#F3E5C8] bg-[#0C0C10] border border-[#2D2415] rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call: {studioConfig.phone}</span>
              </a>

              <a
                href={`https://wa.me/${studioConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {studioConfig.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWizard();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
              >
                <span>Start Your Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

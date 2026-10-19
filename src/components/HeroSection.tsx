import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, Layers, Eye, Smartphone, Monitor } from 'lucide-react';

interface HeroSectionProps {
  onOpenWizard: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWizard,
  onExploreWork
}) => {
  const [activePreviewMode, setActivePreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#050507]">
      {/* 24K Gold ambient radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[520px] bg-[#D4AF37]/10 rounded-full blur-[140px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Editorial Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          
          {/* Circular Gold 3D Emblem Showcase */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F5D77F] to-[#8C6D1F] shadow-2xl shadow-[#D4AF37]/30 hover:scale-105 transition-transform duration-300">
              <img
                src="/src/assets/images/veltrix_gold_badge_logo_1792337957224.jpg"
                alt="VELTRIX Web Designer Emblem"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Eyebrow Label with Logo Slogan */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-4">
            <span>Your Vision</span>
            <span aria-hidden="true" className="text-[#3D311A]">|</span>
            <span>Our Design</span>
            <span aria-hidden="true" className="text-[#3D311A]">|</span>
            <span>Your Success</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6 text-balance">
            Build Beyond <span className="gold-gradient-text">Ordinary.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#9E8E72] font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Distinctive digital flagships and luxury web experiences, custom-engineered to elevate ambitious brands, command market authority, and convert qualified clientele.
          </p>

          {/* Dual Action CTAs in Gold and Black */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWizard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F3E5C8] bg-[#0E0E14] hover:bg-[#181822] border border-[#2D2415] rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Our Work</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-8 pt-6 border-t border-[#2D2415] flex flex-wrap items-center justify-center gap-6 text-xs text-[#9E8E72]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              Bespoke Craftsmanship
            </span>
            <span aria-hidden="true" className="text-[#3D311A]">·</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
              Zero Cookie-Cutter Templates
            </span>
            <span aria-hidden="true" className="text-[#3D311A]">·</span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
              Transparent Custom Quotes
            </span>
          </div>
        </div>

        {/* Premium Gold & Black Layered Interface Composition */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle perimeter gold glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#F5D77F]/15 to-[#8C6D1F]/20 rounded-2xl blur-lg -z-10" />

          {/* Browser Window Chrome */}
          <div className="bg-[#0C0C10] rounded-2xl border border-[#2D2415] overflow-hidden shadow-2xl transition-all">
            
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#050507] border-b border-[#2D2415]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
              </div>

              {/* Centered Mock URL Bar with Gold Accents */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#121218] rounded-md border border-[#2D2415] text-xs font-mono text-[#9E8E72] max-w-xs truncate">
                <span className="text-[#D4AF37]">https://</span>
                <span className="text-[#F3E5C8]">veltrix.com.pk</span>
              </div>

              {/* Viewport switcher */}
              <div className="flex items-center gap-1 bg-[#121218] p-0.5 rounded-lg border border-[#2D2415]">
                <button
                  onClick={() => setActivePreviewMode('desktop')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    activePreviewMode === 'desktop'
                      ? 'bg-[#D4AF37] text-[#070604] font-bold'
                      : 'text-[#9E8E72] hover:text-[#F3E5C8]'
                  }`}
                  aria-label="Desktop preview mode"
                  title="Desktop presentation"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActivePreviewMode('mobile')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    activePreviewMode === 'mobile'
                      ? 'bg-[#D4AF37] text-[#070604] font-bold'
                      : 'text-[#9E8E72] hover:text-[#F3E5C8]'
                  }`}
                  aria-label="Mobile preview mode"
                  title="Mobile presentation"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Viewport Content */}
            <div className="p-3 md:p-5 flex justify-center bg-[#050507] transition-all">
              <div
                className={`relative overflow-hidden rounded-xl border border-[#2D2415] shadow-inner transition-all duration-300 ${
                  activePreviewMode === 'mobile'
                    ? 'w-[340px] max-w-full aspect-[9/16] max-h-[520px]'
                    : 'w-full aspect-[16/9]'
                }`}
              >
                <img
                  src="/src/assets/images/hero_gold_black_interface_1792337979628.jpg"
                  alt="VELTRIX Studio gold and black luxury architectural digital interface preview showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle Interactive Overlay Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent flex items-end justify-between">
                  <div className="text-left">
                    <p className="text-xs text-[#F5D77F] font-mono uppercase tracking-wider">Gold & Black Flagship Architecture</p>
                    <p className="text-sm font-semibold text-[#F3E5C8]">Precision in Form · Award-Winning Luxury Design</p>
                  </div>
                  <button
                    onClick={onExploreWork}
                    className="text-xs font-bold text-[#070604] gold-btn-gradient px-3 py-1.5 rounded-lg shadow-md transition-transform hover:scale-105"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Showcase Metrics / Standards Banner */}
            <div className="px-6 py-3.5 bg-[#0C0C10] border-t border-[#2D2415] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-[#9E8E72]">Aesthetic Palette</p>
                <p className="text-sm font-semibold text-[#D4AF37]">24K Gold & Onyx Black</p>
              </div>
              <div>
                <p className="text-xs text-[#9E8E72]">Responsive Testing</p>
                <p className="text-sm font-semibold text-[#F3E5C8]">320px to 4K Displays</p>
              </div>
              <div>
                <p className="text-xs text-[#9E8E72]">Performance Target</p>
                <p className="text-sm font-semibold text-[#F3E5C8]">Sub-second Load</p>
              </div>
              <div>
                <p className="text-xs text-[#9E8E72]">Client Engagement</p>
                <p className="text-sm font-semibold text-[#D4AF37]">Custom Scoped Only</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

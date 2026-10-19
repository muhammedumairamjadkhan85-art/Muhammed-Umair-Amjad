import React from 'react';
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/studioContent';
import { ServiceId, StudioConfig } from '../types';

interface ServicesPageProps {
  onSelectService: (serviceId: ServiceId) => void;
  onOpenWizardWithService: (serviceTitle: string) => void;
  studioConfig: StudioConfig;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenWizardWithService,
  studioConfig,
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#2D2415] text-xs font-mono text-[#D4AF37] mb-4">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>All 6 Disciplines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6">
            Bespoke Engineering & <span className="gold-gradient-text">Luxury Web Design</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9E8E72] leading-relaxed">
            Every client engagement is custom-scoped from scratch. We do not sell generic templates or one-size-fits-all packages. Explore each dedicated discipline below to understand our deliverables and execution methodology.
          </p>
        </div>

        {/* 6 Specialized Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#0C0C10] rounded-2xl border border-[#2D2415] hover:border-[#D4AF37] transition-all duration-300 p-7 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] px-2.5 py-1 rounded bg-[#121218] border border-[#2D2415]">
                    Discipline {service.number}
                  </span>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="p-1.5 rounded-lg text-[#9E8E72] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all"
                    aria-label={`Open ${service.title} page`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <h2 
                  onClick={() => onSelectService(service.id)}
                  className="text-xl font-bold text-[#F3E5C8] group-hover:text-[#D4AF37] transition-colors cursor-pointer mb-3"
                >
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#9E8E72] leading-relaxed mb-6">
                  {service.summary}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mb-6 space-y-2 border-t border-[#201B12] pt-4">
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Key Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#9E8E72]">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: View Dedicated Page & Direct Quote */}
              <div className="pt-4 border-t border-[#201B12] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenWizardWithService(service.title)}
                  className="px-3.5 py-1.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards & Direct Callout */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0E0E14] border border-[#2D2415] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              International Engineering Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mt-2 mb-4">
              All projects hosted on high-performance cloud infrastructure
            </h3>
            <p className="text-sm text-[#9E8E72] leading-relaxed max-w-2xl">
              Whether you are an e-commerce brand launching on {studioConfig.domain} or an enterprise migrating an existing application, we guarantee sub-second page loads, accessible contrast ratios, and clean semantic markup.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={`tel:${studioConfig.phone}`}
              className="p-4 rounded-xl bg-[#050507] border border-[#201B12] text-left hover:border-[#D4AF37] transition-all"
            >
              <span className="text-[11px] text-[#9E8E72] block">Direct Contact / Call</span>
              <span className="text-sm font-bold text-[#F3E5C8] font-mono">{studioConfig.phone}</span>
            </a>

            <a
              href={`mailto:${studioConfig.email}`}
              className="p-4 rounded-xl bg-[#050507] border border-[#201B12] text-left hover:border-[#D4AF37] transition-all"
            >
              <span className="text-[11px] text-[#9E8E72] block">Direct Email</span>
              <span className="text-xs font-semibold text-[#D4AF37] font-mono truncate block">{studioConfig.email}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

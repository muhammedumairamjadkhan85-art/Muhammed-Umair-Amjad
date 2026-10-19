import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/studioContent';
import { ServiceItem } from '../types';

interface ServiceSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 border-t border-[#2D2415] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3E5C8]">
              Tailored Engineering & Luxury Web Design
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9E8E72] max-w-md">
            Every engagement is custom-scoped to solve concrete business goals. We do not sell one-size-fits-all packages or prefabricated templates.
          </p>
        </div>

        {/* Interactive Service Bento & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector List (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col space-y-3" role="tablist" aria-label="Services List">
            {SERVICES.map((service: ServiceItem) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#121218] border-[#D4AF37] shadow-md shadow-[#D4AF37]/10'
                      : 'bg-[#0A0A0E] border-[#201B12] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#D4AF37]">
                        {service.number}.
                      </span>
                      <h3 className="text-base font-semibold text-[#F3E5C8]">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'text-[#D4AF37] translate-x-1' : 'text-[#9E8E72]'
                      }`}
                    />
                  </div>
                  <p className="text-xs text-[#9E8E72] mt-2 line-clamp-2">
                    {service.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card (7 cols on desktop) */}
          <div className="lg:col-span-7 bg-[#0C0C10] rounded-2xl border border-[#2D2415] p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Subtle top ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10">
              {/* Header with Number & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#2D2415] gap-4">
                <div>
                  <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider">
                    Service Scope {activeService.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mt-1">
                    {activeService.title}
                  </h3>
                </div>
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] w-fit"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Summary Description */}
              <p className="text-base text-[#9E8E72] leading-relaxed my-6">
                {activeService.summary}
              </p>

              {/* Ideal Audience Callout */}
              <div className="mb-6 p-4 rounded-xl bg-[#121218] border border-[#2D2415]">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-[#F3E5C8] block">
                      Best Suited For:
                    </span>
                    <span className="text-xs text-[#9E8E72]">
                      {activeService.idealFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Two Column Deliverables & Strategic Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                {/* Outcomes */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                    Strategic Outcomes
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#9E8E72]">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concrete Deliverables */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                    Concrete Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#9E8E72]">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button on Mobile */}
              <div className="pt-4 border-t border-[#2D2415] sm:hidden">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
                >
                  <span>Open Dedicated Service Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

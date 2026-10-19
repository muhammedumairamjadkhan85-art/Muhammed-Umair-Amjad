import React from 'react';
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Check, Sparkles, 
  Layers, ShieldCheck, Clock, FileText, ChevronRight 
} from 'lucide-react';
import { SERVICES, PORTFOLIO_PROJECTS } from '../data/studioContent';
import { ServiceId, ServiceItem, StudioConfig } from '../types';

interface ServiceDetailPageProps {
  serviceId: ServiceId;
  onNavigateToService: (id: ServiceId) => void;
  onNavigateToServices: () => void;
  onNavigateHome: () => void;
  onOpenWizardWithService: (serviceTitle: string) => void;
  studioConfig: StudioConfig;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigateToService,
  onNavigateToServices,
  onNavigateHome,
  onOpenWizardWithService,
  studioConfig,
}) => {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  // Map relevant case studies
  const relevantProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (service.id === 'ecommerce') return p.category === 'ecommerce';
    if (service.id === 'landing-pages') return p.category === 'saas';
    if (service.id === 'ui-ux-design') return p.category === 'fintech';
    return true;
  }).slice(0, 2);

  return (
    <div className="pt-28 pb-24 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#9E8E72] mb-8 overflow-x-auto scrollbar-none py-1">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#F3E5C8] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          <button 
            onClick={onNavigateToServices}
            className="hover:text-[#F3E5C8] transition-colors"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-semibold">{service.title}</span>
        </nav>

        {/* Hero Header for this Individual Service Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-12 border-b border-[#2D2415]">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#2D2415] text-xs font-mono text-[#D4AF37] mb-4">
              <span>Discipline {service.number} of 06</span>
              <span aria-hidden="true">·</span>
              <span>Dedicated Service Page</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#9E8E72] leading-relaxed max-w-3xl mb-8">
              {service.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWizardWithService(service.title)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] transition-transform"
              >
                <span>Request Custom Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${studioConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello VELTRIX, I would like to discuss a custom quote for ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl transition-colors"
              >
                <span>WhatsApp: {studioConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Service Metrics Badge */}
          <div className="lg:col-span-4 bg-[#0C0C10] p-7 rounded-2xl border border-[#2D2415] shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Service Specs & Standards
            </h3>
            <div className="space-y-4 text-xs">
              <div className="pb-3 border-b border-[#201B12] flex justify-between items-center">
                <span className="text-[#9E8E72]">Quoting Model</span>
                <span className="font-semibold text-[#F3E5C8]">Custom Line-Item</span>
              </div>
              <div className="pb-3 border-b border-[#201B12] flex justify-between items-center">
                <span className="text-[#9E8E72]">Turnaround Timeline</span>
                <span className="font-semibold text-[#D4AF37]">2–6 Weeks</span>
              </div>
              <div className="pb-3 border-b border-[#201B12] flex justify-between items-center">
                <span className="text-[#9E8E72]">Domain / Host</span>
                <span className="font-semibold text-[#F3E5C8]">{studioConfig.domain}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#9E8E72]">Delivery Guarantee</span>
                <span className="font-semibold text-[#D4AF37]">WCAG AA & 100% Mobile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who This Service Is Engineered For */}
        <div className="mb-16 p-8 rounded-2xl bg-[#0C0C10] border border-[#2D2415]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121218] border border-[#2D2415] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
                Ideal Strategic Fit
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#F3E5C8]">
                {service.idealFor}
              </p>
            </div>
          </div>
        </div>

        {/* Deliverables & Outcomes Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Strategic Outcomes */}
          <div className="p-8 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-bold text-[#F3E5C8]">
                Strategic Business Outcomes
              </h3>
            </div>
            <ul className="space-y-4">
              {service.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#9E8E72]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Concrete Deliverables */}
          <div className="p-8 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-bold text-[#F3E5C8]">
                Tangible Production Deliverables
              </h3>
            </div>
            <ul className="space-y-4">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#9E8E72]">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Discipline Specific Workflow Sprints */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-[#0E0E14] border border-[#2D2415]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Step-By-Step Execution
            </span>
            <h3 className="text-2xl font-bold text-[#F3E5C8] mt-1">
              How We Deliver {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#050507] border border-[#201B12]">
              <span className="font-mono text-xs text-[#D4AF37] font-bold block mb-2">Stage 01</span>
              <h4 className="text-sm font-semibold text-[#F3E5C8] mb-1">Architecture & Wireframes</h4>
              <p className="text-xs text-[#9E8E72] leading-relaxed">
                Structuring content priorities, conversion paths, and user flows before touching aesthetic layers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#050507] border border-[#201B12]">
              <span className="font-mono text-xs text-[#D4AF37] font-bold block mb-2">Stage 02</span>
              <h4 className="text-sm font-semibold text-[#F3E5C8] mb-1">Bespoke Design & Code</h4>
              <p className="text-xs text-[#9E8E72] leading-relaxed">
                High-fidelity gold & obsidian interface styling followed by clean, scalable front-end engineering.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#050507] border border-[#201B12]">
              <span className="font-mono text-xs text-[#D4AF37] font-bold block mb-2">Stage 03</span>
              <h4 className="text-sm font-semibold text-[#F3E5C8] mb-1">QA & Live Deployment</h4>
              <p className="text-xs text-[#9E8E72] leading-relaxed">
                Sub-second speed optimization, cross-device testing, DNS launch on your custom domain, and code handover.
              </p>
            </div>
          </div>
        </div>

        {/* Other Services Switcher */}
        <div className="pt-12 border-t border-[#2D2415]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Explore All Disciplines
              </span>
              <h3 className="text-xl font-bold text-[#F3E5C8]">
                Other Specialized Services
              </h3>
            </div>
            <button
              onClick={onNavigateToServices}
              className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1.5"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.id !== serviceId).map((s) => (
              <button
                key={s.id}
                onClick={() => onNavigateToService(s.id)}
                className="p-5 rounded-xl bg-[#0C0C10] border border-[#201B12] hover:border-[#D4AF37] text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#D4AF37]">Discipline {s.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E8E72] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-sm font-semibold text-[#F3E5C8] group-hover:text-[#D4AF37] transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs text-[#9E8E72] mt-1 line-clamp-2">
                  {s.summary}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0C0C10] border border-[#2D2415] text-center max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mb-3">
            Ready to Build Your {service.title}?
          </h3>
          <p className="text-sm text-[#9E8E72] mb-8 max-w-lg mx-auto">
            Contact us directly or fill our 6-step project wizard to receive an itemized proposal within 24–48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWizardWithService(service.title)}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-md"
            >
              Start {service.title} Project
            </button>
            <a
              href={`mailto:${studioConfig.email}?subject=${encodeURIComponent(`Inquiry: ${service.title} - veltrix.com.pk`)}`}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-medium text-[#F3E5C8] bg-[#121218] hover:bg-[#1A1A22] border border-[#2D2415] rounded-xl transition-colors"
            >
              Email: {studioConfig.email}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

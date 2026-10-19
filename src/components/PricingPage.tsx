import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PHILOSOPHY, FAQ_LIST } from '../data/studioContent';
import { StudioConfig } from '../types';

interface PricingPageProps {
  onOpenWizard: () => void;
  studioConfig: StudioConfig;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onOpenWizard,
  studioConfig,
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#2D2415] text-xs font-mono text-[#D4AF37] mb-4">
            <span>Investment & Scope Protocol</span>
            <span aria-hidden="true">·</span>
            <span>VELTRIX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6">
            Every Project Is Different. <span className="gold-gradient-text">Your Quote Should Be Too.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9E8E72] leading-relaxed">
            {PRICING_PHILOSOPHY.subheadline}
          </p>
        </div>

        {/* 4 Key Factors Influencing Custom Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRICING_PHILOSOPHY.factors.map((factor, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D4AF37] block mb-3">
                  Factor 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#F3E5C8] mb-2">
                  {factor.title}
                </h3>
                <p className="text-xs text-[#9E8E72] leading-relaxed">
                  {factor.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quoting Protocol & Proposal Request Box */}
        <div className="bg-[#0E0E14] rounded-2xl border border-[#2D2415] p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                Transparent Quoting Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mb-4">
                How Your Custom Proposal Is Prepared
              </h2>
              
              <div className="space-y-4 my-6">
                {PRICING_PHILOSOPHY.quotingStages.map((stage) => (
                  <div key={stage.step} className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold w-7 h-7 rounded-lg bg-[#050507] border border-[#2D2415] flex items-center justify-center text-[#D4AF37] shrink-0">
                      {stage.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F3E5C8]">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-[#9E8E72] mt-0.5">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Panel */}
            <div className="lg:col-span-5 bg-[#050507] p-7 sm:p-8 rounded-xl border border-[#2D2415] text-center shadow-lg">
              <FileText className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#F3E5C8] mb-2">
                Ready for an Itemized Proposal?
              </h3>
              <p className="text-xs text-[#9E8E72] mb-6 leading-relaxed">
                Complete our interactive 6-step project wizard to detail your scope, requirements, and timeline.
              </p>
              
              <button
                onClick={onOpenWizard}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] transition-all"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#9E8E72]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero obligations · 24–48h response window</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

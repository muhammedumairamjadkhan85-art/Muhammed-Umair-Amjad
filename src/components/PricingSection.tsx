import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { PRICING_PHILOSOPHY } from '../data/studioContent';

interface PricingSectionProps {
  onOpenWizard: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenWizard }) => {
  return (
    <section id="pricing" className="py-24 border-t border-[#2D2415] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            Custom Quotation Model
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3E5C8] text-balance">
            {PRICING_PHILOSOPHY.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#9E8E72] mt-4 max-w-2xl mx-auto leading-relaxed">
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

        {/* Quoting Stages & Primary Action Box */}
        <div className="bg-[#0E0E14] rounded-2xl border border-[#2D2415] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                Transparent Quoting Protocol
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mb-4">
                How Your Custom Proposal Is Prepared
              </h3>
              
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
              <h4 className="text-lg font-bold text-[#F3E5C8] mb-2">
                Ready for an Itemized Proposal?
              </h4>
              <p className="text-xs text-[#9E8E72] mb-6 leading-relaxed">
                Complete our interactive 6-step project wizard to detail your scope, requirements, and timeline.
              </p>
              
              <button
                onClick={onOpenWizard}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
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
    </section>
  );
};

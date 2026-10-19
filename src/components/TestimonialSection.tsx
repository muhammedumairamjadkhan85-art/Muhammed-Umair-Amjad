import React, { useState } from 'react';
import { ShieldCheck, Lock, Info, CheckCircle2 } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [showVerificationProtocol, setShowVerificationProtocol] = useState(false);

  return (
    <section className="py-24 border-t border-[#2D2415] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            Client Feedback & Confidentiality
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3E5C8]">
            Authentic Endorsements Under NDA
          </h2>
          <p className="text-sm md:text-base text-[#9E8E72] mt-3 leading-relaxed">
            We adhere to a strict zero-fabrication policy. In accordance with client non-disclosure agreements, we only publish verified testimonials with explicit, written authorization.
          </p>
        </div>

        {/* Tasteful Empty State / Verification Protocol Showcase */}
        <div className="bg-[#0C0C10] rounded-2xl border border-[#2D2415] p-8 sm:p-12 shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="w-14 h-14 rounded-2xl bg-[#121218] border border-[#2D2415] flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
              <Lock className="w-6 h-6" />
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#D4AF37] bg-[#121218] px-3.5 py-1.5 rounded-full border border-[#2D2415] mb-4">
              <span>Client Review Verification Portal</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F3E5C8] mb-3">
              No Fabricated Testimonials. Ever.
            </h3>

            <p className="text-sm text-[#9E8E72] leading-relaxed mb-8">
              Many agencies publish generic quotes attributed to stock photos. VELTRIX rejects this practice. As active client work concludes and client-approved reviews are finalized, verified references will be displayed here with attributable LinkedIn credentials.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowVerificationProtocol(!showVerificationProtocol)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F3E5C8] bg-[#121218] hover:bg-[#1A1A22] border border-[#2D2415] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Info className="w-4 h-4 text-[#D4AF37]" />
                <span>{showVerificationProtocol ? 'Hide Policy Details' : 'View NDA & Review Policy'}</span>
              </button>
            </div>

            {/* Protocol Explanation Drawer */}
            {showVerificationProtocol && (
              <div className="mt-8 pt-8 border-t border-[#201B12] text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#9E8E72]">
                <div className="p-4 rounded-xl bg-[#050507] border border-[#201B12]">
                  <h4 className="font-semibold text-[#F3E5C8] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Mutual NDA Compliance
                  </h4>
                  <p>Client proprietary data, architecture, and commercial performance metrics remain strictly private unless pre-authorized.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#050507] border border-[#201B12]">
                  <h4 className="font-semibold text-[#F3E5C8] mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Direct Reference Availability
                  </h4>
                  <p>Prospective enterprise clients may request direct reference calls with previous stakeholders during formal proposal evaluation.</p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

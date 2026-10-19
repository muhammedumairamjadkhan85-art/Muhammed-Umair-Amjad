import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050507]/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2415] bg-[#050507]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-[#F3E5C8]">
              {isPrivacy ? 'Privacy Policy (Studio Template)' : 'Terms of Service (Studio Template)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#9E8E72] hover:text-[#F3E5C8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto text-xs text-[#9E8E72] space-y-4 leading-relaxed bg-[#0C0C10]">
          <div className="p-3 rounded-lg bg-[#121218] text-[#D4AF37] border border-[#2D2415]">
            Notice: This document is a foundational template for VELTRIX digital studio engagements. Customize with your local legal jurisdiction before formal commercial deployment.
          </div>

          {isPrivacy ? (
            <>
              <h4 className="font-semibold text-sm text-[#F3E5C8]">
                1. Information We Collect
              </h4>
              <p>
                VELTRIX collects project inquiry details (names, business names, email addresses, project requirements, and budget ranges) solely for the purpose of assessing prospective engagements and formulating custom proposals.
              </p>
              <h4 className="font-semibold text-sm text-[#F3E5C8]">
                2. Use of Information
              </h4>
              <p>
                We do not sell, rent, or monetize client information to third parties. Information provided through our project questionnaire or direct contact channels is processed strictly for communication, proposal preparation, and mutual NDA assessment.
              </p>
              <h4 className="font-semibold text-sm text-[#F3E5C8]">
                3. Security & Non-Disclosure
              </h4>
              <p>
                All proprietary client briefs and project scopes are handled with strict professional confidentiality in alignment with mutual non-disclosure expectations.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-semibold text-sm text-[#F3E5C8]">
                1. Scope of Services
              </h4>
              <p>
                All project engagements undertaken by VELTRIX are defined by a mutually signed Statement of Work (SOW) specifying milestone deliverables, itemized costs, and timeline estimates.
              </p>
              <h4 className="font-semibold text-sm text-[#F3E5C8]">
                2. Custom Quotes & Intellectual Property
              </h4>
              <p>
                Estimates provided through the website are non-binding until confirmed in an executed project agreement. Upon final payment handover, client ownership rights are transferred as specified in the agreed project contract.
              </p>
              <h4 className="font-semibold text-sm text-[#F3E5C8]">
                3. Demonstration Concepts
              </h4>
              <p>
                Demonstration and concept designs featured in the portfolio remain the intellectual design property of VELTRIX unless specifically commissioned.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-[#201B12]">
            <p className="text-[11px] text-[#9E8E72]">
              Last updated: October {currentYear} · VELTRIX Independent Digital Studio & Web Designer.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-[#2D2415] bg-[#050507] text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_LIST } from '../data/studioContent';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-[#2D2415] bg-[#050507]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3E5C8]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-[#9E8E72] mt-3">
            Honest answers covering our services, custom quoting methodology, and project requirements.
          </p>
        </div>

        {/* FAQ Accordion List (Pure Onyx & Gold) */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0C0C10] rounded-xl border border-[#2D2415] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#F3E5C8]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#9E8E72] leading-relaxed border-t border-[#201B12]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

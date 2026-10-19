import React from 'react';
import { ShieldCheck, Globe2 } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/studioContent';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-[#2D2415] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            Studio Philosophy & Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3E5C8] leading-tight text-balance">
            {ABOUT_CONTENT.heroTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#9E8E72] mt-6 leading-relaxed">
            {ABOUT_CONTENT.philosophy}
          </p>
        </div>

        {/* 3 Core Studio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ABOUT_CONTENT.beliefs.map((belief, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D4AF37] block mb-4">
                  0{idx + 1}. Principle
                </span>
                <h3 className="text-lg font-bold text-[#F3E5C8] mb-3">
                  {belief.title}
                </h3>
                <p className="text-sm text-[#9E8E72] leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach & Quality Commitments Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E14] border border-[#2D2415] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              <Globe2 className="w-4 h-4" />
              <span>International Delivery Standard</span>
            </div>
            <h3 className="text-2xl font-bold text-[#F3E5C8]">
              Designed for modern businesses worldwide.
            </h3>
            <p className="text-sm text-[#9E8E72] mt-3 leading-relaxed">
              VELTRIX operates with complete geographic flexibility. Whether collaborating with founders across the US, UK, Europe, Australia, or Pakistan, we bridge time zones through disciplined asynchronous updates and transparent milestones.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#050507] p-6 rounded-xl border border-[#201B12]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
              Our Commitments to You
            </h4>
            <ul className="space-y-2.5">
              {ABOUT_CONTENT.commitments.map((commitment, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#9E8E72]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Globe2, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/studioContent';
import { StudioConfig } from '../types';

interface AboutPageProps {
  onStartProject: () => void;
  studioConfig: StudioConfig;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onStartProject,
  studioConfig,
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#2D2415] text-xs font-mono text-[#D4AF37] mb-4">
            <span>Studio Philosophy & Ethos</span>
            <span aria-hidden="true">·</span>
            <span>VELTRIX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6">
            {ABOUT_CONTENT.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-[#9E8E72] leading-relaxed">
            {ABOUT_CONTENT.philosophy}
          </p>
        </div>

        {/* 3 Core Studio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ABOUT_CONTENT.beliefs.map((belief, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D4AF37] block mb-4">
                  0{idx + 1}. Principle
                </span>
                <h3 className="text-xl font-bold text-[#F3E5C8] mb-3">
                  {belief.title}
                </h3>
                <p className="text-sm text-[#9E8E72] leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* International Standards & Commitments */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0E0E14] border border-[#2D2415] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              <Globe2 className="w-4 h-4" />
              <span>International Delivery Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8]">
              Designed for ambitious businesses in Pakistan and worldwide.
            </h2>
            <p className="text-sm text-[#9E8E72] mt-4 leading-relaxed">
              VELTRIX operates with complete geographic flexibility. Whether collaborating with businesses across Pakistan, or founders in the US, UK, Canada, Australia, and Europe, we bridge time zones through disciplined communication and transparent milestones.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onStartProject}
                className="px-6 py-3 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-md"
              >
                Start Your Project
              </button>
              <a
                href={`tel:${studioConfig.phone}`}
                className="px-5 py-3 text-xs font-semibold text-[#F3E5C8] bg-[#121218] border border-[#2D2415] rounded-xl hover:bg-[#1A1A22] transition-colors"
              >
                Call: {studioConfig.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#050507] p-7 rounded-xl border border-[#201B12]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Our Commitments to You
            </h3>
            <ul className="space-y-3">
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
    </div>
  );
};

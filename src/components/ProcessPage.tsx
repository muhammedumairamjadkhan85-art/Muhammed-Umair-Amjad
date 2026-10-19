import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioContent';
import { StudioConfig } from '../types';

interface ProcessPageProps {
  onStartProject: () => void;
  studioConfig: StudioConfig;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({
  onStartProject,
  studioConfig,
}) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIdx];

  return (
    <div className="pt-28 pb-24 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#2D2415] text-xs font-mono text-[#D4AF37] mb-4">
            <span>Engineering Methodology</span>
            <span aria-hidden="true">·</span>
            <span>VELTRIX Workflow</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6">
            Structured from <span className="gold-gradient-text">Discovery to Launch</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9E8E72] leading-relaxed">
            A transparent 6-phase engineering workflow. You have direct visibility into progress, milestones, and deliverable approvals at every turn.
          </p>
        </div>

        {/* Step Selector Horizontal / Grid Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStepIdx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                  isCurrent
                    ? 'gold-btn-gradient text-[#070604] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#0C0C10] border-[#201B12] text-[#9E8E72] hover:border-[#D4AF37]/50'
                }`}
              >
                <span className={`font-mono text-xs block mb-1 ${isCurrent ? 'text-[#070604]' : 'text-[#D4AF37]'}`}>
                  Phase {step.number}
                </span>
                <span className={`text-xs sm:text-sm font-semibold line-clamp-1 ${isCurrent ? 'text-[#070604]' : 'text-[#F3E5C8]'}`}>
                  {step.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-[#0C0C10] rounded-2xl border border-[#2D2415] p-6 sm:p-10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#121218] text-[#D4AF37] border border-[#2D2415]">
                  Stage {activeStep.number} of 06
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#9E8E72]">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Est. Duration: {activeStep.durationEstimate}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mb-4">
                {activeStep.title}
              </h2>

              <p className="text-base text-[#9E8E72] leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                  Key Sprint Activities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.keyActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#9E8E72]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#121218] p-6 sm:p-8 rounded-xl border border-[#2D2415]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2 block">
                Milestone Deliverable
              </span>
              <p className="text-lg font-bold text-[#F3E5C8] mb-4">
                {activeStep.milestoneDeliverable}
              </p>
              <p className="text-xs text-[#9E8E72] mb-6 leading-relaxed">
                Client review and written sign-off occurs at this milestone before progressing to the subsequent development stage.
              </p>

              <button
                onClick={onStartProject}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg transition-all shadow-md"
              >
                <span>Discuss Your Project Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

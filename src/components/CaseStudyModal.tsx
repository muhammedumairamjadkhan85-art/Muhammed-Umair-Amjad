import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Layers, Cpu, ShieldAlert } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onDiscussProject: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onDiscussProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#050507]/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2415] bg-[#050507]">
          <div className="flex items-center gap-2 text-xs text-[#9E8E72]">
            <span className="font-semibold text-[#D4AF37]">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study Review</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9E8E72] hover:text-[#F3E5C8] hover:bg-[#121218] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#0C0C10]">
          
          {/* Status Notice Banner */}
          <div className="p-3.5 rounded-xl bg-[#121218] border border-[#2D2415] flex items-center gap-3">
            <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <p className="text-xs text-[#9E8E72]">
              <strong className="text-[#F3E5C8] font-semibold">{project.statusLabel}:</strong>{' '}
              {project.clientContext}
            </p>
          </div>

          {/* Title and Summary */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-[#F3E5C8]">
              {project.title}
            </h2>
            <p className="text-base text-[#9E8E72] mt-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-xl overflow-hidden border border-[#2D2415] bg-[#050507] aspect-[16/10]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detailed Narrative Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Challenge */}
            <div className="p-5 rounded-xl bg-[#121218] border border-[#201B12]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                01. The Challenge
              </h3>
              <p className="text-xs text-[#9E8E72] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Strategy */}
            <div className="p-5 rounded-xl bg-[#121218] border border-[#201B12]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                02. Design Strategy
              </h3>
              <p className="text-xs text-[#9E8E72] leading-relaxed">
                {project.strategy}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-xl bg-[#121218] border border-[#201B12]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                03. Engineered Solution
              </h3>
              <p className="text-xs text-[#9E8E72] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Technology Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#201B12]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3E5C8]">
                  Architecture Deliverables
                </h4>
              </div>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#9E8E72]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3E5C8]">
                  Technologies Leveraged
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#121218] text-[#D4AF37] border border-[#2D2415]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 border-t border-[#2D2415] bg-[#050507] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9E8E72] text-center sm:text-left">
            Interested in building a tailored digital presence like this?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-medium text-[#9E8E72] hover:text-[#F3E5C8] border border-[#2D2415] rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onDiscussProject(project.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg transition-all shadow-md"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

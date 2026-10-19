import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/studioContent';
import { ProjectCaseStudy, ProjectCategory } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioSectionProps {
  onStartProjectWithContext: (contextTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onStartProjectWithContext
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'architecture', label: 'Architecture & Studio' },
    { key: 'fintech', label: 'Fintech & Apps' },
    { key: 'saas', label: 'SaaS & Landing' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 border-t border-[#2D2415] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
              Selected Works & Concepts
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3E5C8]">
              Featured Digital Flagships & Interfaces
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9E8E72] max-w-md">
            A curated hybrid portfolio showcasing demonstration designs, experimental interfaces, and bespoke architectures engineered to the highest international standard.
          </p>
        </div>

        {/* Filter Bar (Pure Black & Gold) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#0C0C10] rounded-xl border border-[#2D2415] mb-12 overflow-x-auto scrollbar-none w-max max-w-full">
          <div className="flex items-center gap-1.5 px-3 py-1 text-xs text-[#9E8E72]">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-[#D4AF37] text-[#070604] font-bold shadow-sm shadow-[#D4AF37]/20'
                  : 'text-[#9E8E72] hover:text-[#F3E5C8] hover:bg-[#121218]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#0C0C10] rounded-2xl border border-[#2D2415] overflow-hidden shadow-lg hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
            >
              {/* Preview Image with Hover Scale */}
              <div 
                className="relative aspect-[4/3] bg-[#050507] overflow-hidden cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Floating Category and Action Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-semibold text-[#F3E5C8] bg-[#050507]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/35">
                    {project.categoryLabel}
                  </span>
                  <span className="p-2 rounded-full bg-[#050507]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/35 group-hover:bg-[#D4AF37] group-hover:text-[#070604] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-[#9E8E72] mb-2.5">
                    <span className="text-[#D4AF37] font-medium">{project.statusLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Demonstration</span>
                  </div>

                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-[#F3E5C8] group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#9E8E72] mt-2.5 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Card Action Controls */}
                <div className="mt-6 pt-5 border-t border-[#201B12] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-[#9E8E72]">
                        {tech}{i < 2 ? ' /' : ''}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Honest Hybrid Portfolio Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0C0C10] border border-[#2D2415] text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-[#D4AF37] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Craft Guarantee</span>
          </div>
          <p className="text-xs text-[#9E8E72] leading-relaxed">
            VELTRIX strictly adheres to truthful representation. All demonstration designs above were independently conceptualized and coded by our studio to showcase architectural capability. We never present speculative concepts as fictitious corporate clients.
          </p>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onDiscussProject={(title) => {
          onStartProjectWithContext(title);
        }}
      />
    </section>
  );
};

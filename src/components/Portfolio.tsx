import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/brandData';
import { ProjectItem, PortfolioCategory } from '../types';
import { Sparkles, Eye, ArrowUpRight, X, Calendar, Layers, Tag, Palette } from 'lucide-react';

interface PortfolioProps {
  onStartProject: (projectName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: PortfolioCategory[] = ['ALL', 'GRAPHIC DESIGN', 'VIDEO', 'BRANDING', 'ARTWORK'];

  const filteredProjects =
    activeCategory === 'ALL'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-28 relative bg-[#11151B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FFC62E] mb-4">
              <span>EXPLORE OUR REPERTOIRE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
              SELECTED <span className="text-gig-gradient">WORK</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              Explore our curated showcase of concept projects and creative explorations across branding, typography, motion editing, and fine art.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FF5B3D] via-[#FFC62E] to-[#18B7C8] text-white shadow-lg shadow-orange-500/20 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid (6+ items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="rounded-3xl overflow-hidden gig-glass border border-white/10 hover:border-orange-500/40 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
            >
              {/* Project Cover Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151B] via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#FFC62E] border border-white/15">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-slate-200 border border-white/10">
                    {project.type}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-white/90 text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>{project.year}</span>
                    <span>{project.tags[0]}</span>
                  </div>
                  <h3 className="text-2xl font-black font-heading text-white group-hover:text-[#FFC62E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-[#18B7C8] uppercase tracking-wider mt-0.5 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Color Palette Indicators & CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.palette.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white group-hover:text-[#FF5B3D] transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#141922] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#FF5B3D] to-[#FFC62E] text-white">
                {selectedProject.category}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-300">
                {selectedProject.type}
              </span>
              <span className="text-xs font-mono text-slate-400">{selectedProject.year}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight uppercase">
              {selectedProject.title}
            </h2>
            <p className="text-sm font-bold text-[#18B7C8] uppercase tracking-wider mt-1 mb-6">
              {selectedProject.subtitle}
            </p>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden aspect-video bg-black/50 mb-8 border border-white/10 shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Project Deep Dive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-7">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FFC62E] mb-2">
                  PROJECT BRIEF & VISION
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <h4 className="text-xs font-black uppercase tracking-widest text-[#18B7C8] mb-2">
                  SCOPE OF EXPLORATION
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.clientScope}
                </p>
              </div>

              <div className="md:col-span-5 space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.deliverables.map((deliv, i) => (
                      <li key={i} className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B3D]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    COLOR HARMONY
                  </h4>
                  <div className="flex items-center gap-2">
                    {selectedProject.palette.map((c, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <span
                          className="w-8 h-8 rounded-lg border border-white/20"
                          style={{ backgroundColor: c }}
                        />
                        <span className="text-[10px] font-mono text-slate-400">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Interested in creating a similar project for your brand?
              </span>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onStartProject(selectedProject.title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5B3D] via-[#FFC62E] to-[#18B7C8] shadow-lg cursor-pointer"
              >
                Start a Similar Project →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

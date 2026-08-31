import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Heart } from 'lucide-react';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  return (
    <section id="about" className="py-28 relative bg-[#11151B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FF5B3D] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT GIGSPACE</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Display Typography */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-white tracking-tight uppercase leading-[0.95]">
              CREATIVE THINKING.{' '}
              <span className="text-gig-gradient block mt-2">
                PRACTICAL DELIVERY.
              </span>
            </h2>

            <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "We believe visual art shouldn't just be decoration. Great design solves communication challenges, clarifies ideas, and gives brands a magnetic, memorable pulse."
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#FFC62E] uppercase tracking-wider">
                <span>The GIGSPACE Studio Collective</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Brand Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                <strong className="text-white font-semibold">GIGSPACE</strong> is a multi-disciplinary creative studio founded on a simple conviction: ideas become truly powerful when given uncompromising visual craft.
              </p>
              <p>
                We operate across the entire creative spectrum — uniting <span className="text-white font-medium">brand graphic design</span>, <span className="text-white font-medium">dynamic video post-production</span>, and <span className="text-white font-medium">fine abstract artwork</span> under one unified artistic direction.
              </p>
              <p>
                Whether clients walk through our studio doors or connect across time zones via our digital workflow, we provide a collaborative space where concepts are explored, refined, and delivered with technical excellence.
              </p>
            </div>

            {/* Brand Statistics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl gig-glass border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#FF5B3D]">3</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Core Services
                </div>
              </div>

              <div className="p-4 rounded-2xl gig-glass border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#FFC62E]">2</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Workspaces
                </div>
              </div>

              <div className="p-4 rounded-2xl gig-glass border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#18B7C8]">∞</div >
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Possibilities
                </div>
              </div>

              <div className="p-4 rounded-2xl gig-glass border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white">1</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Distinct Brand
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onStartProject}
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-[#FF5B3D] to-[#FFC62E] shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform cursor-pointer"
              >
                Work With Us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

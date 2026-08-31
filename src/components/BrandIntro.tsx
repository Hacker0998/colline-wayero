import React from 'react';
import { Sparkles, Building2, Monitor, ArrowUpRight, Palette, Film, Brush, Zap } from 'lucide-react';
import { GigspaceEmblem } from './GigspaceLogo';

export const BrandIntro: React.FC = () => {
  return (
    <section id="brand-intro" className="py-24 relative bg-[#0D1016] border-y border-white/5 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5B3D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#18B7C8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF5B3D]" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FFC62E]">
            THE GIGSPACE PHILOSOPHY
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white uppercase leading-[1.05]">
              ONE SPACE.{' '}
              <span className="text-gig-gradient">MANY CREATIVE DIRECTIONS.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              GIGSPACE is a contemporary creative studio where ideas become visual experiences. Whether you visit our creative office or collaborate digitally from anywhere in the world, we bring visual clarity, artistry, and momentum to every project.
            </p>
          </div>
        </div>

        {/* Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: The Office Experience */}
          <div className="p-8 rounded-3xl gig-glass border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5B3D]/15 border border-[#FF5B3D]/30 flex items-center justify-center text-[#FF5B3D] mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B3D]">
                PHYSICAL SPACE
              </span>
              <h3 className="text-2xl font-black font-heading text-white mt-1 mb-3">
                In-Studio Collaboration
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sit down face-to-face with our design team. Review tactile paper stocks, color swatches, large-format prints, and real physical artwork samples in a dedicated creative environment.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold uppercase text-slate-400 group-hover:text-white transition-colors">
              <span>Office Consultations</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF5B3D]" />
            </div>
          </div>

          {/* Card 2: The Digital Experience */}
          <div className="p-8 rounded-3xl gig-glass border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFC62E]/15 border border-[#FFC62E]/30 flex items-center justify-center text-[#FFC62E] mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC62E]">
                DIGITAL-FIRST
              </span>
              <h3 className="text-2xl font-black font-heading text-white mt-1 mb-3">
                Global Online Delivery
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seamless remote project delivery. Submit briefs, review video timelines, preview artwork proofs, and receive high-resolution print and video packages without geographical limits.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold uppercase text-slate-400 group-hover:text-white transition-colors">
              <span>Cloud Asset Handoff</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFC62E]" />
            </div>
          </div>

          {/* Card 3: The Multi-Disciplinary Edge */}
          <div className="p-8 rounded-3xl gig-glass border border-white/10 hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#18B7C8]/15 border border-[#18B7C8]/30 flex items-center justify-center text-[#18B7C8] mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#18B7C8]">
                FULL-SPECTRUM
              </span>
              <h3 className="text-2xl font-black font-heading text-white mt-1 mb-3">
                Complete Visual Suite
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From brand identity systems and viral social video editing to custom gallery-grade artwork pieces. No need to juggle three different agencies — GIGSPACE handles the entire creative pipeline.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold uppercase text-slate-400 group-hover:text-white transition-colors">
              <span>All-In-One Production</span>
              <ArrowUpRight className="w-4 h-4 text-[#18B7C8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

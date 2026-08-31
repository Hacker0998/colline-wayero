import React from 'react';
import { WHY_GIGSPACE_POINTS, CLIENT_JOURNEY_STEPS } from '../data/brandData';
import { Lightbulb, Building2, UserCheck, Layers, Flame, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const WhyGigspace: React.FC = () => {
  const getPillarIcon = (iconName: string, accent: string) => {
    const props = { className: 'w-6 h-6', style: { color: accent } };
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section id="why-gigspace" className="py-28 relative bg-[#0D1016] border-t border-white/5 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF5B3D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Why Choose GIGSPACE */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FF5B3D] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE GIGSPACE ADVANTAGE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
            WHY PARTNER WITH <span className="text-gig-gradient">GIGSPACE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            We merge artistic originality with disciplined production standards to elevate every visual asset we produce.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {WHY_GIGSPACE_POINTS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl gig-glass border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${pillar.accent}15`, border: `1px solid ${pillar.accent}30` }}
                >
                  {getPillarIcon(pillar.icon, pillar.accent)}
                </div>
                <h3 className="text-xl font-black font-heading text-white uppercase tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: pillar.accent }}>
                  {pillar.summary}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Journey / Client Experience */}
        <div className="p-8 sm:p-12 rounded-3xl gig-glass border border-white/10 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFC62E] block mb-2">
              SEAMLESS COLLABORATION
            </span>
            <h3 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              THE CLIENT EXPERIENCE
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              From your initial idea to the final file handoff, here is how we work together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {CLIENT_JOURNEY_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-heading text-gig-gradient block mb-2">
                    0{step.num}
                  </span>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

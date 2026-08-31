import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/brandData';
import { CheckCircle2, ArrowRight, Sparkles, Compass, Lightbulb, RefreshCw, Box } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5" />;
      case 1:
        return <Lightbulb className="w-5 h-5" />;
      case 2:
        return <RefreshCw className="w-5 h-5" />;
      case 3:
      default:
        return <Box className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-28 relative bg-[#0C0F14] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FFC62E] mb-4">
            <span>OUR 4-STAGE METHODOLOGY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
            HOW WE BRING IDEAS <span className="text-gig-gradient">TO LIFE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            A transparent, collaborative, and results-focused production workflow designed to keep every project on schedule and on brand.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                onClick={() => setActiveStep(index)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#181E27] border-2 shadow-2xl scale-[1.02]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/10'
                }`}
                style={{
                  borderColor: isActive ? step.color : undefined,
                  boxShadow: isActive ? `0 20px 40px -15px ${step.color}33` : undefined,
                }}
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-4xl font-black font-heading tracking-tighter"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${step.color}20`,
                        color: step.color,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      {getStepIcon(index)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black font-heading text-white uppercase mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-300 mb-4 leading-snug">
                    {step.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-6 border-t border-white/10 space-y-2">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

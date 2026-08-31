import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/brandData';
import { ServiceItem } from '../types';
import { Palette, Video, Sparkles, Check, ArrowRight, Layers, ExternalLink } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('graphic-design');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-28 relative bg-[#11151B] overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-[0.25em] text-[#FFC62E] mb-4">
            <span>CORE CREATIVE DISCIPLINES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
            WHAT WE <span className="text-gig-gradient">CREATE & DELIVER</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From iconic visual branding and viral motion video editing to custom-commissioned wall artwork, explore our three specialized service studios.
          </p>
        </div>

        {/* 3-Column Service Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isSelected = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setActiveServiceId(service.id)}
                className={`relative rounded-3xl p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#181E27] border-2 shadow-2xl scale-[1.02]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/10'
                }`}
                style={{
                  borderColor: isSelected ? service.highlightColor : undefined,
                  boxShadow: isSelected ? `0 20px 50px -15px ${service.highlightColor}33` : undefined,
                }}
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${service.highlightColor}20`,
                        color: service.highlightColor,
                        border: `1px solid ${service.highlightColor}40`,
                      }}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-3xl font-black font-heading text-white/20 group-hover:text-white/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black font-heading text-white tracking-tight uppercase group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mt-1.5 mb-4"
                    style={{ color: service.highlightColor }}
                  >
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Tags Pill Grid */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.tags.slice(0, 7).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 7 && (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white">
                        +{service.tags.length - 7} MORE
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA within card */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FFC62E] transition-colors cursor-pointer"
                  >
                    <span>Start This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-500 font-semibold">Office • Online</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Capability Drawer / Panel for the Selected Service */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl gig-glass border border-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: selectedService.highlightColor }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                <span>FULL CAPABILITY LIST</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedService.highlightColor }} />
              </div>
              <h3 className="text-3xl font-black font-heading text-white uppercase tracking-tight">
                {selectedService.title} DELIVERABLES
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Every project is handled with precision file preparation, color calibrated standards, and transparent handover.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <button
                  id="services-book-btn"
                  onClick={() => onSelectService(selectedService.title)}
                  className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${selectedService.highlightColor}, #FF5B3D)`,
                  }}
                >
                  <span>Book {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Deliverable Checkpoints */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex items-start gap-3"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${selectedService.highlightColor}20`,
                        color: selectedService.highlightColor,
                      }}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

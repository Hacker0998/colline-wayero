import React, { useState } from 'react';
import { ASSETS } from '../data/brandData';
import { Palette, Eye, ArrowUpRight, Sparkles, Layers, Shirt, BookOpen, Monitor, Award } from 'lucide-react';

interface GraphicDesignGalleryProps {
  onStartProject: (serviceName?: string) => void;
}

export const GraphicDesignGallery: React.FC<GraphicDesignGalleryProps> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'posters' | 'apparel' | 'identity' | 'editorial'>('all');

  const galleryItems = [
    {
      id: 'posters-campaign',
      title: 'Avant-Garde Exhibition Poster Trio',
      type: 'posters',
      category: 'Large-Format Poster Series',
      image: ASSETS.posterMockup,
      description: 'Swiss-style asymmetric typography posters for modern gallery installations with high-contrast colorways.',
      tags: ['Posters', 'Typography', 'Swiss Grid', 'Museum Light'],
      specs: 'A0 / A1 Format • CMYK 300DPI • Spot UV Finishes',
    },
    {
      id: 'apparel-streetwear',
      title: 'Street Type Heavyweight Apparel',
      type: 'apparel',
      category: 'Streetwear & Clothing Graphic',
      image: ASSETS.apparelMockup,
      description: 'Screenprint & puff ink vector graphics for heavy-cotton oversized tees, tote bags, and merchandise lines.',
      tags: ['T-Shirts', 'Streetwear', 'Puff Print', 'Merchandise'],
      specs: 'Vector Separations • Pantone Solid Coated • Tech Pack',
    },
    {
      id: 'identity-stationery',
      title: 'Urban Pulse Brand System & Cards',
      type: 'identity',
      category: 'Brand Identity & Stationery',
      image: ASSETS.brandIdentity,
      description: 'Edge-painted duplex business cards, brand guidelines, embossed notebook covers, and corporate identity suites.',
      tags: ['Logos', 'Business Cards', 'Stationery', 'Identity Manual'],
      specs: 'Edge Foiling • Soft-Touch Matte • Multi-Format Assets',
    },
  ];

  const filteredItems = activeTab === 'all' ? galleryItems : galleryItems.filter((item) => item.type === activeTab);

  return (
    <section id="graphic-design-gallery" className="py-28 relative bg-[#0B0E13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5B3D]/10 border border-[#FF5B3D]/30 text-xs font-black uppercase tracking-widest text-[#FF5B3D] mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span>SERVICE 01 SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight uppercase">
              GRAPHIC DESIGN <span className="text-gig-gradient">STUDIO</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              From exhibition posters and brand identity manuals to street apparel and publication covers — crafted with obsessive typographic detail.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Graphics' },
              { id: 'posters', label: 'Posters & Signs' },
              { id: 'apparel', label: 'T-Shirts & Merch' },
              { id: 'identity', label: 'Brand Identity' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#FF5B3D] to-[#FFC62E] text-white shadow-lg shadow-orange-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden gig-glass border border-white/10 hover:border-orange-500/40 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151B] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#FFC62E] border border-white/15">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FFC62E] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{item.specs}</span>
                  <button
                    onClick={() => onStartProject('GRAPHIC DESIGN')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#FF5B3D] text-white hover:text-white transition-colors cursor-pointer"
                    title="Request similar graphic project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Graphic Capabilities Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#FF5B3D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Need custom flyers, book covers, advertising signs, or badges?
            </span>
          </div>
          <button
            onClick={() => onStartProject('GRAPHIC DESIGN')}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#FF5B3D] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
          >
            Commission Graphic Project →
          </button>
        </div>
      </div>
    </section>
  );
};

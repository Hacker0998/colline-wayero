import React from 'react';
import { GigspaceEmblem, GigspaceLogo } from './GigspaceLogo';
import { ASSETS } from '../data/brandData';
import { Sparkles, CreditCard, Coffee, Smartphone, Laptop, Layers, CheckCircle2 } from 'lucide-react';

export const BrandMockupShowcase: React.FC = () => {
  return (
    <section id="brand-mockups" className="py-28 relative bg-[#0C0F14] border-t border-white/5 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#FF5B3D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FFC62E] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>BRAND IDENTITY SYSTEM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
            GIGSPACE <span className="text-gig-gradient">IN THE REAL WORLD</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            A cohesive visual identity engineered to look iconic across physical stationery, ceramic studio merchandise, digital mobile interfaces, and exhibition spaces.
          </p>
        </div>

        {/* Real-World Brand Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: The Iconic App Tiles & Badges (Matching the board mid-right) */}
          <div className="lg:col-span-5 p-8 rounded-3xl gig-glass border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#18B7C8]">
                  DIGITAL ICONOGRAPHY
                </span>
                <span className="text-[11px] font-mono text-slate-400">iOS • Android • Web</span>
              </div>
              <h3 className="text-2xl font-black font-heading text-white mb-2">
                Universal App Icons & Badges
              </h3>
              <p className="text-xs text-slate-300 mb-8 leading-relaxed">
                Adaptive icon treatments for light backgrounds, dark interfaces, and simplified vector silhouettes.
              </p>

              {/* 3 App Icon Tiles matching the reference image */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* Tile 1: White Background */}
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-square rounded-2xl bg-white shadow-xl shadow-black/40 flex items-center justify-center p-3 transform hover:scale-105 transition-transform">
                    <GigspaceEmblem size={56} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-2.5">
                    App Icon
                  </span>
                </div>

                {/* Tile 2: Dark Charcoal Background */}
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-square rounded-2xl bg-[#181E26] border border-slate-700 shadow-xl shadow-black/60 flex items-center justify-center p-3 transform hover:scale-105 transition-transform">
                    <GigspaceEmblem size={56} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-2.5">
                    Dark Mode
                  </span>
                </div>

                {/* Tile 3: Simple Version / Sunburst Gradient */}
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-square rounded-2xl bg-gig-gradient shadow-xl shadow-orange-500/20 flex items-center justify-center p-3 transform hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center">
                      <span className="text-2xl font-black text-white font-heading">G</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-2.5">
                    Simple Version
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Color Palette Spectrum */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Brand Core Color Spectrum
              </div>
              <div className="flex items-center gap-2">
                {[
                  { color: '#FF5B3D', name: 'Bright Orange' },
                  { color: '#FF9500', name: 'Red-Orange' },
                  { color: '#FFC62E', name: 'Warm Yellow' },
                  { color: '#18B7C8', name: 'Turquoise' },
                  { color: '#0F97A6', name: 'Teal' },
                  { color: '#7E5CE3', name: 'Purple Accent' },
                  { color: '#11151B', name: 'Charcoal Dark' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-6 rounded-md shadow-sm border border-white/10 hover:h-8 transition-all"
                    style={{ backgroundColor: item.color }}
                    title={`${item.name} (${item.color})`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Physical Stationery & Business Cards Mockup (Matching board bottom-left) */}
          <div className="lg:col-span-7 rounded-3xl gig-glass border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5B3D]">
                TACTILE PRINT TOUCHPOINTS
              </span>
              <span className="text-[11px] font-mono text-slate-400">700gsm Cotton • Foil Edging</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
              {/* White Business Card Front */}
              <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-black/50 text-[#11151B] flex flex-col justify-between min-h-[170px] transform hover:-translate-y-1 transition-transform border border-slate-200">
                <div className="flex items-center justify-between">
                  <GigspaceEmblem size={44} />
                  <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                    STUDIO CARD
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-black font-heading text-[#11151B] tracking-tight">
                    GIGSPACE
                  </h4>
                  <div className="flex items-center gap-1.5 text-[8px] font-bold tracking-widest text-slate-600 uppercase">
                    <span>CREATE</span>
                    <span>•</span>
                    <span>DESIGN</span>
                    <span>•</span>
                    <span>INSPIRE</span>
                  </div>
                </div>
              </div>

              {/* Dark Charcoal Business Card Back */}
              <div className="rounded-2xl bg-[#11151B] p-6 shadow-2xl shadow-black/80 text-white flex flex-col justify-between min-h-[170px] transform hover:-translate-y-1 transition-transform border border-white/10 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <GigspaceEmblem size={44} />
                  <div className="text-right text-[9px] font-semibold text-slate-400 space-y-0.5">
                    <div>Graphic Design</div>
                    <div>Video & Editing</div>
                    <div>Artwork Design</div>
                  </div>
                </div>

                <div className="space-y-0.5 text-[9px] text-slate-300 font-mono">
                  <div>+256 XXX XXX XXX</div>
                  <div>hello@gigspace.com</div>
                  <div>www.gigspace.com</div>
                </div>

                {/* Bottom gradient stripe matching the real board */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gig-gradient" />
              </div>
            </div>

            {/* Studio Merchandise Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <Coffee className="w-5 h-5 text-[#FFC62E] mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-200 block">Ceramic Studio Mug</span>
                <span className="text-[9px] text-slate-400">Gloss White + Color Logo</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <CreditCard className="w-5 h-5 text-[#18B7C8] mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-200 block">Duplex Cards</span>
                <span className="text-[9px] text-slate-400">Orange/Teal Core</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <Smartphone className="w-5 h-5 text-[#7E5CE3] mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-200 block">Digital Master</span>
                <span className="text-[9px] text-slate-400">Vector SVG & 4K PNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

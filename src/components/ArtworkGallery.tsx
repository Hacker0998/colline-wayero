import React, { useState } from 'react';
import { ASSETS } from '../data/brandData';
import { Sparkles, Frame, Brush, Check, ArrowRight, Eye, Heart, Palette, ShieldCheck } from 'lucide-react';

interface ArtworkGalleryProps {
  onOrderCustomArtwork: () => void;
}

export const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ onOrderCustomArtwork }) => {
  const [selectedStyle, setSelectedStyle] = useState<'all' | 'abstract' | 'framed' | 'decor'>('all');

  const artworkItems = [
    {
      id: 'aura-01',
      title: 'Aura of Genesis 01',
      category: 'Framed Fine Art Canvas',
      type: 'abstract',
      image: ASSETS.abstractArt,
      dimensions: '40" x 60" Gallery Canvas',
      palette: ['#FF5B3D', '#FFC62E', '#18B7C8', '#7E5CE3'],
      description: 'Dynamic organic fluid forms exploring the balance between fiery optimism and cool turquoise tranquility.',
      finish: 'Matte Museum Cotton Rag • Anodized Black Metal Frame',
    },
    {
      id: 'urban-sunburst',
      title: 'Solar Radiance — GIG Edition',
      category: 'Original Decorative Piece',
      type: 'framed',
      image: ASSETS.heroStudio,
      dimensions: '48" x 36" Acrylic Glass',
      palette: ['#FF5B3D', '#FF9500', '#FFC62E'],
      description: 'A contemporary geometric sunburst statement piece designed for high-ceiling creative offices and modern lofts.',
      finish: 'High-Gloss Face-Mounted Acrylic Glass with Floating Mount',
    },
    {
      id: 'chroma-rhythm',
      title: 'Chroma Rhythm No. 4',
      category: 'Home & Studio Décor',
      type: 'decor',
      image: ASSETS.posterMockup,
      dimensions: 'Custom Scalable 300DPI',
      palette: ['#18B7C8', '#0F97A6', '#11151B'],
      description: 'Abstract typographic and textural study designed to bring sophisticated creative energy to living spaces.',
      finish: 'Archival Giclée Print on 310gsm German Etching Paper',
    },
  ];

  return (
    <section id="artwork-gallery" className="py-28 relative bg-[#090C10] border-t border-white/5">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#18B7C8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18B7C8]/10 border border-[#18B7C8]/30 text-xs font-black uppercase tracking-widest text-[#18B7C8] mb-4">
              <Brush className="w-3.5 h-3.5" />
              <span>SERVICE 03 SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight uppercase">
              ARTWORK & <span className="text-gig-gradient">FINE ART STUDIO</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              Original abstract canvases, framed residential décor, and bespoke commissioned pieces crafted according to your personal vision and interior space.
            </p>
          </div>

          <button
            id="artwork-order-cta-btn"
            onClick={onOrderCustomArtwork}
            className="self-start md:self-auto px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-[#18B7C8] via-[#7E5CE3] to-[#FF5B3D] shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 transform hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>ORDER CUSTOM ARTWORK</span>
          </button>
        </div>

        {/* Gallery Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworkItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl gig-glass border border-white/10 hover:border-teal-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              {/* Artwork Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151B] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#18B7C8] border border-white/10">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                    {item.dimensions}
                  </span>
                  <div className="flex items-center gap-1">
                    {item.palette.map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Artwork Description */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#18B7C8] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">{item.finish}</span>
                  <button
                    onClick={onOrderCustomArtwork}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#18B7C8] text-white transition-colors cursor-pointer"
                    title="Commission piece in this style"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Artwork Commission Card */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#181E28] to-[#12161E] border border-teal-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#18B7C8] mb-3">
                <Frame className="w-4 h-4" />
                <span>BESPOKE ARTWORK COMMISSIONS</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-heading text-white uppercase">
                HAVE A SPECIFIC WALL, ROOM, OR COLOR PALETTE IN MIND?
              </h3>
              <p className="mt-3 text-sm text-slate-300 max-w-2xl leading-relaxed">
                Whether you need a statement 6-foot abstract piece for your living room, customized corporate wall displays, or personalized artwork tailored to a specific mood board — our artists create print-ready, high-resolution original master files.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
              <button
                onClick={onOrderCustomArtwork}
                className="w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-black bg-[#18B7C8] hover:bg-[#20D3E5] shadow-xl shadow-teal-500/25 transition-all text-center cursor-pointer"
              >
                REQUEST CUSTOM ARTWORK
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Print-Ready 300DPI + Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

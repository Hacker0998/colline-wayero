import React from 'react';
import { Instagram, Youtube, Share2, Sparkles, ArrowUpRight, Film, Hash, MessageCircle } from 'lucide-react';
import { ASSETS } from '../data/brandData';

export const SocialSection: React.FC = () => {
  const socialCards = [
    {
      platform: 'Instagram',
      handle: '@gigspace.studio',
      category: 'Behind The Scenes & Art Drops',
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      accent: '#FF5B3D',
      image: ASSETS.heroStudio,
      preview: 'Process timelapse: Layering organic gradients and tactile paper textures for new identity drop.',
    },
    {
      platform: 'TikTok',
      handle: '@gigspace_creative',
      category: 'Speed Edits & Motion Breakdown',
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      accent: '#18B7C8',
      image: ASSETS.videoSuite,
      preview: 'Turning 2 hours of messy podcast clips into a 45-second high-retention reel with sound design.',
    },
    {
      platform: 'YouTube',
      handle: 'GIGSPACE Studio',
      category: 'Full Design Breakdowns',
      icon: <Youtube className="w-5 h-5 text-red-500" />,
      accent: '#FF3B26',
      image: ASSETS.posterMockup,
      preview: 'Episode 08: How to design typography posters that demand attention in physical exhibition spaces.',
    },
    {
      platform: 'X / Twitter & Pinterest',
      handle: '@gigspace_hq',
      category: 'Design Systems & Curated Moods',
      icon: <Hash className="w-5 h-5 text-amber-400" />,
      accent: '#FFC62E',
      image: ASSETS.abstractArt,
      preview: 'Curated color studies, typography pairings, and abstract fine art inspiration boards.',
    },
  ];

  return (
    <section id="social" className="py-28 relative bg-[#11151B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FFC62E] mb-4">
              <Share2 className="w-3.5 h-3.5" />
              <span>COMMUNITY & DIGITAL CULTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight uppercase">
              FOLLOW THE <span className="text-gig-gradient">CREATIVE JOURNEY</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              Watch work-in-progress experiments, design breakdowns, speed edits, and artwork drops across our digital channels.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Active on 5 Platforms
            </span>
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl gig-glass border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                <img
                  src={card.image}
                  alt={card.platform}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151B] via-transparent to-transparent opacity-90" />

                <div className="absolute top-3 left-3 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  {card.icon}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FFC62E] block">
                    {card.platform}
                  </span>
                  <span className="text-xs font-bold text-white font-mono">{card.handle}</span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {card.preview}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span>{card.category}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: card.accent }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

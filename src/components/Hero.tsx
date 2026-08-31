import React from 'react';
import { GigspaceEmblem } from './GigspaceLogo';
import { Sparkles, ArrowRight, Palette, Video, Image as ImageIcon, Globe, Layers, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/brandData';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Ambient Glows & Gradient Atmosphere (matching the design specifications) */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Top-Right Vivid Bright Orange Ambient Bloom */}
        <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[#FF5B3D] rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse-slow" />
        
        {/* Bottom-Left Turquoise Ambient Bloom */}
        <div className="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] bg-[#18B7C8] rounded-full blur-[150px] opacity-15 pointer-events-none" />

        {/* Soft Background Studio Layer */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-luminosity scale-105"
          style={{ backgroundImage: `url(${ASSETS.heroStudio})` }}
        />

        {/* Architectural Subtle Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11151B]/40 via-transparent to-[#11151B]" />
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography, Brand Statement & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Brand Pill with colored pulse dot & tracking-[0.2em] */}
            <div className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-[#18B7C8] animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#FFC62E]">
                Create • Design • Inspire
              </span>
            </div>

            {/* Main Headline - Massive Bold Typography with leading-[0.88] */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[105px] leading-[0.88] font-black tracking-tighter mb-8 uppercase text-white">
              IDEAS THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B3D] via-[#FFC62E] to-[#18B7C8]">
                LOOK ALIVE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#F2F3F5]/70 max-w-lg font-medium leading-relaxed">
              GIGSPACE turns ideas into memorable visuals through graphic design, video editing, artwork and creative digital experiences.
            </p>

            {/* Hero CTAs & Team Tokens */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                id="hero-start-project-btn"
                onClick={onStartProject}
                className="bg-[#FF5B3D] px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#FFC62E] hover:text-[#11151B] transition-all shadow-lg shadow-[#FF5B3D]/25 flex items-center gap-2 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-white group-hover:text-[#11151B] transition-colors" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="px-7 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition-all text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md cursor-pointer"
              >
                Explore Our Work
              </button>

              {/* Team Avatar Stack */}
              <div className="flex items-center ml-2 sm:ml-4 pt-2 sm:pt-0">
                <div className="flex -space-x-3 items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#11151B] bg-[#7E5CE3] flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                    CD
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#11151B] bg-[#18B7C8] flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                    MD
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#11151B] bg-[#FFC62E] flex items-center justify-center text-[10px] font-bold text-[#11151B] shadow-md">
                    FM
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#11151B] bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                    +
                  </div>
                </div>
                <span className="ml-3 sm:ml-4 text-xs text-white/50 uppercase tracking-widest font-bold">
                  Meet The Team
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10 text-left w-full sm:w-auto">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">3</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                  Core Disciplines
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-heading text-[#FFC62E] tracking-tight">2</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                  Office & Online
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-heading text-[#18B7C8] tracking-tight">100%</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                  Custom Creative
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Tilted Glass Cards & Orbital Ring */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-end relative min-h-[460px] justify-center">
            {/* Background Dashed Orbital Ring */}
            <div className="absolute bottom-4 right-6 w-56 h-56 rounded-full border-2 border-[#18B7C8]/30 flex items-center justify-center border-dashed animate-[spin_20s_linear_infinite] pointer-events-none">
              <div className="w-2.5 h-2.5 bg-[#18B7C8] rounded-full absolute -top-1 shadow-[0_0_10px_#18B7C8]" />
            </div>

            {/* Card 1: Tilted Glass Showcase Card (rotated 3deg) */}
            <div className="w-72 sm:w-80 h-96 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 rotate-3 shadow-2xl relative z-20 hover:rotate-0 transition-transform duration-500 group">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-[#11151B] to-[#1A1F26] flex flex-col justify-between p-5 border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#18B7C8] font-black tracking-wider uppercase">
                    ARTWORK DESIGN
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#18B7C8]" />
                </div>

                <div className="my-auto flex items-center justify-center py-4">
                  <GigspaceEmblem size={96} glow={true} className="drop-shadow-[0_10px_25px_rgba(255,91,61,0.35)]" />
                </div>

                <div>
                  <div className="font-black text-lg leading-tight mb-2 uppercase tracking-tight text-white group-hover:text-[#FFC62E] transition-colors">
                    Urban Pulse Identity
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#FF5B3D]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Sunburst G Card (rotated -6deg, behind Card 1) */}
            <div className="absolute top-12 right-24 sm:right-32 w-64 sm:w-72 h-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 -rotate-6 shadow-xl z-10 hover:rotate-0 transition-transform duration-500">
              <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-[#FFC62E] via-[#FF5B3D] to-[#18B7C8] p-4 flex flex-col items-center justify-center text-center shadow-inner">
                <span className="text-7xl font-black text-[#11151B] italic font-heading tracking-tighter drop-shadow-sm">
                  G
                </span>
                <span className="text-[10px] font-black tracking-[0.25em] text-[#11151B] uppercase mt-2">
                  GIGSPACE STUDIO
                </span>
              </div>
            </div>

            {/* Floating Tag 1: Video & Motion */}
            <div className="absolute -bottom-2 left-0 sm:left-4 z-30 px-3.5 py-2 rounded-xl gig-glass border border-amber-500/30 flex items-center gap-2.5 shadow-xl backdrop-blur-xl">
              <div className="p-1 rounded-md bg-[#FFC62E]/20 text-[#FFC62E]">
                <Video className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Video & Motion</span>
            </div>
          </div>
        </div>

        {/* Bottom Ribbon: 4 Brand Badges with bold typography and crisp borders */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Badge 1: Graphic Design */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#FF5B3D]/15 border border-[#FF5B3D]/30 flex items-center justify-center text-[#FF5B3D] shrink-0 group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black font-heading text-white uppercase tracking-wide">
                  GRAPHIC DESIGN
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Posters, Logos, Branding, Social Media & More
                </p>
              </div>
            </div>

            {/* Badge 2: Video & Editing */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#FFC62E]/15 border border-[#FFC62E]/30 flex items-center justify-center text-[#FFC62E] shrink-0 group-hover:scale-110 transition-transform">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black font-heading text-white uppercase tracking-wide">
                  VIDEO & EDITING
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Social Media Videos, YouTube, TikTok & More
                </p>
              </div>
            </div>

            {/* Badge 3: Artwork Design */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-teal-500/30 transition-all duration-300 flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#18B7C8]/15 border border-[#18B7C8]/30 flex items-center justify-center text-[#18B7C8] shrink-0 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black font-heading text-white uppercase tracking-wide">
                  ARTWORK DESIGN
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Framed Art, Abstract, Personalized Artwork
                </p>
              </div>
            </div>

            {/* Badge 4: Online & Office */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#7E5CE3]/15 border border-[#7E5CE3]/30 flex items-center justify-center text-[#7E5CE3] shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black font-heading text-white uppercase tracking-wide">
                  ONLINE & OFFICE
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Creative Solutions Everywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

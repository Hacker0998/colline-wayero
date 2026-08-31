import React, { useState } from 'react';
import { ASSETS } from '../data/brandData';
import { Video, Play, Pause, Film, Volume2, Sliders, Smartphone, Youtube, Share2, Sparkles, CheckCircle2, FastForward } from 'lucide-react';

interface VideoSectionProps {
  onStartProject: (serviceName?: string) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onStartProject }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePlatform, setActivePlatform] = useState<'tiktok' | 'youtube' | 'storytelling' | 'editorial'>('tiktok');

  return (
    <section id="video-editing" className="py-28 relative bg-[#0D1017] border-t border-white/5 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FFC62E]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC62E]/10 border border-[#FFC62E]/30 text-xs font-black uppercase tracking-widest text-[#FFC62E] mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>SERVICE 02 SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[1.05]">
            FROM RAW FOOTAGE TO{' '}
            <span className="text-gig-gradient">SOMETHING PEOPLE WANT TO WATCH.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            We transform raw video recordings, podcast streams, screen captures, and creative concepts into high-retention video stories optimized for TikTok, YouTube, Instagram Reels, X, and editorial publications.
          </p>
        </div>

        {/* Main Video Editing Suite Mockup & Interface Preview */}
        <div className="rounded-3xl gig-glass border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5B3D]" />
                <span className="w-3 h-3 rounded-full bg-[#FFC62E]" />
                <span className="w-3 h-3 rounded-full bg-[#18B7C8]" />
              </div>
              <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider">
                GIGSPACE_TIMELINE_V3 // 4K UHD 60FPS • PRORES 422
              </span>
            </div>

            {/* Platform Format Selectors */}
            <div className="flex items-center gap-2">
              {[
                { id: 'tiktok', label: '9:16 Short-Form' },
                { id: 'youtube', label: '16:9 Cinema / YT' },
                { id: 'storytelling', label: 'Documentary Cuts' },
                { id: 'editorial', label: 'Book & Magazine Edit' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePlatform(p.id as any)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activePlatform === p.id
                      ? 'bg-[#FFC62E] text-black shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Visual Display Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            {/* Left: Interactive Monitor & Frame Simulation */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/60 border border-white/10 shadow-xl group">
                <img
                  src={ASSETS.videoSuite}
                  alt="Video Editing Suite"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Player HUD */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-white/90">
                    <span className="px-2.5 py-1 rounded bg-red-600/80 font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" /> REC / ACTIVE PREVIEW
                    </span>
                    <span className="bg-black/60 px-2 py-1 rounded backdrop-blur-md">00:01:24:18 / 00:03:45:00</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="self-center w-16 h-16 rounded-full bg-gradient-to-r from-[#FF5B3D] to-[#FFC62E] text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Play video simulator"
                  >
                    {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 translate-x-0.5" />}
                  </button>

                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-bold tracking-wide">Dynamic Kinetic Subtitles • Luma Color Grading</span>
                    <span className="text-[#18B7C8] font-mono">1080x1920 (TikTok) + 3840x2160 (YT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Deliverables & Editing Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFC62E]">
                  COMPLETE POST-PRODUCTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1 mb-4">
                  Viral Pacing, Clean Cuts & Sound Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Every frame is refined for maximum retention. We handle everything from rhythmic audio cutting and sound effects to custom lower thirds, cinematic color LUTs, and multi-format exports.
                </p>

                <div className="space-y-3">
                  {[
                    'TikTok, Instagram Reels & YouTube Shorts high-velocity pacing',
                    'Long-form YouTube video editing with storytelling structure',
                    'X / Twitter & Pinterest multi-aspect video cutdowns',
                    'Novel, storybook, catalogue & comic visual editing',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC62E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400">TURNAROUND TIME</div>
                  <div className="text-base font-black text-white">24 to 72 Hours</div>
                </div>
                <button
                  id="video-order-btn"
                  onClick={() => onStartProject('VIDEO & WORK EDITING')}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#FFC62E] hover:bg-[#FFB800] shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  Edit My Video →
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Track Timeline Simulation */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
              <span>TIMELINE TRACKS</span>
              <span className="text-[#FFC62E]">AUDIO SYNC: 100% • 32-BIT FLOAT</span>
            </div>

            {/* Track 1: Video */}
            <div className="space-y-2">
              <div className="h-8 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center px-3 relative overflow-hidden">
                <span className="text-[10px] font-mono font-bold text-blue-300 z-10">V1: MAIN_A_ROLL_4K</span>
                <div className="absolute inset-0 bg-blue-600/20 w-3/4" />
                <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-[#FF5B3D] z-20" />
              </div>
              {/* Track 2: Motion Titles */}
              <div className="h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center px-3 relative overflow-hidden">
                <span className="text-[10px] font-mono font-bold text-purple-300 z-10">V2: KINETIC_SUBTITLES_GLOW</span>
                <div className="absolute inset-0 bg-purple-600/25 w-4/5 left-1/6" />
              </div>
              {/* Track 3: Audio Beats */}
              <div className="h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center px-3 relative overflow-hidden">
                <span className="text-[10px] font-mono font-bold text-emerald-300 z-10">A1: SOUND_DESIGN_SFX_WAVE</span>
                <div className="absolute inset-0 bg-emerald-600/20 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

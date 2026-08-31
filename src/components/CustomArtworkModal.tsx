import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Frame, Palette, Send, ArrowRight } from 'lucide-react';

interface CustomArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomArtworkModal: React.FC<CustomArtworkModalProps> = ({ isOpen, onClose }) => {
  const [artworkType, setArtworkType] = useState('Abstract Expressionist');
  const [medium, setMedium] = useState('Stretched Canvas & Wood Float Frame');
  const [dimensions, setDimensions] = useState('Large (36" x 48")');
  const [paletteMood, setPaletteMood] = useState('Warm Solar (Orange / Yellow / Ochre)');
  const [roomLocation, setRoomLocation] = useState('Living Room / Main Wall');
  const [clientNotes, setClientNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#131720] border border-teal-500/30 rounded-3xl overflow-y-auto max-h-[92vh] shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-teal-400 to-[#18B7C8] flex items-center justify-center text-white mb-6 shadow-xl shadow-teal-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-3xl font-black font-heading text-white uppercase">
              CUSTOM ARTWORK BRIEF RECEIVED!
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-md">
              Thank you, <strong className="text-white">{clientName}</strong>. Our art director will curate concept sketches and color palette swatches tailored for your {roomLocation}.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-[#18B7C8] to-[#FF5B3D] text-xs font-bold uppercase tracking-wider text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#18B7C8] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>CUSTOM ART COMMISSION STUDIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase tracking-tight mb-2">
              CONFIGURE YOUR CUSTOM ARTWORK
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Specify your wall dimensions, framing preferences, and mood to receive tailor-crafted original compositions from GIGSPACE artists.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Artwork Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Artwork Style
                </label>
                <select
                  value={artworkType}
                  onChange={(e) => setArtworkType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1B222D] border border-white/10 text-white text-xs"
                >
                  <option value="Abstract Expressionist">Abstract Expressionist / Fluid Gradients</option>
                  <option value="Modern Geometric Sunburst">Modern Geometric Sunburst (GIGSPACE Style)</option>
                  <option value="Minimalist Graphic Typography">Minimalist Graphic Typography</option>
                  <option value="Personalized Custom Request">Personalized Custom Request (From Reference)</option>
                </select>
              </div>

              {/* Size & Medium Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Canvas Dimensions
                  </label>
                  <select
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1B222D] border border-white/10 text-white text-xs"
                  >
                    <option value='Medium (24" x 36")'>Medium (24" x 36")</option>
                    <option value='Large (36" x 48")'>Large (36" x 48")</option>
                    <option value='Oversized (48" x 60"+)'>Oversized Statement (48" x 60"+)</option>
                    <option value='Triptych / Multi-panel Series'>Triptych / 3-Panel Series</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Display & Framing
                  </label>
                  <select
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1B222D] border border-white/10 text-white text-xs"
                  >
                    <option value="Stretched Canvas & Wood Float Frame">Stretched Canvas & Black Wood Float Frame</option>
                    <option value="Archival Paper & Museum Matte Glass">Archival Paper & Matte Glass Metal Frame</option>
                    <option value="Face-Mounted Acrylic Glass">High-Gloss Face-Mounted Acrylic Glass</option>
                    <option value="Digital Master Only (Print Ready 300DPI)">Digital Master Files Only (Print-Ready)</option>
                  </select>
                </div>
              </div>

              {/* Color Harmony Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Color Harmony / Interior Palette
                </label>
                <input
                  type="text"
                  value={paletteMood}
                  onChange={(e) => setPaletteMood(e.target.value)}
                  placeholder="e.g. Warm Orange, Turquoise, Golden Yellow, Neutral Greys"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1B222D] border border-white/10 text-white text-xs placeholder-slate-500"
                />
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1B222D] border border-white/10 text-white text-xs placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1B222D] border border-white/10 text-white text-xs placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest text-black bg-[#18B7C8] hover:bg-[#22D5E6] shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Custom Artwork Brief</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { GigspaceLogo, GigspaceEmblem } from './GigspaceLogo';
import { ArrowUp, Heart, Instagram, Youtube, Hash, Film, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Selected Work', href: '#work' },
    { name: 'About Studio', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Team Roles', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Graphic Design', desc: 'Posters, Logos, Branding & Apparel' },
    { name: 'Video & Editing', desc: 'TikTok, Reels, YouTube & Storytelling' },
    { name: 'Artwork Design', desc: 'Framed Displays, Abstract & Décor' },
  ];

  return (
    <footer className="relative bg-[#080A0E] text-slate-300 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5B3D] via-[#FFC62E] to-[#18B7C8]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <GigspaceLogo variant="horizontal" size="md" theme="dark" showTagline={true} />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              GIGSPACE is a contemporary creative studio transforming concepts into unforgettable visual experiences through graphic design, video editing, and fine artwork.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                Office & Online Worldwide
              </span>
              <span className="text-xs text-slate-500 font-mono">EST. 2026</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Studio Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              STUDIO SERVICES
            </h4>
            <ul className="space-y-4 text-xs">
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <a href="#services" className="group block">
                    <span className="font-bold text-slate-200 group-hover:text-[#FFC62E] transition-colors block">
                      {svc.name}
                    </span>
                    <span className="text-[11px] text-slate-500">{svc.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Touchpoints */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">
              CONNECT
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>hello@gigspace.com</div>
              <div>+256 XXX XXX XXX</div>
              <div>www.gigspace.com</div>
            </div>

            <div className="pt-4 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-[#FF5B3D] transition-colors cursor-pointer" title="Instagram">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-[#18B7C8] transition-colors cursor-pointer" title="TikTok">
                <Film className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-red-500 transition-colors cursor-pointer" title="YouTube">
                <Youtube className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-amber-400 transition-colors cursor-pointer" title="X / Pinterest">
                <Hash className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} GIGSPACE. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">CREATE • DESIGN • INSPIRE</span>
          </div>

          {/* Back to top button */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5B3D]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { GigspaceLogo } from './GigspaceLogo';
import { Menu, X, ArrowRight, Sparkles, Phone, Mail, MapPin, Globe } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'work', 'about', 'process', 'team', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#11151B]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <GigspaceLogo variant="horizontal" size="sm" theme="dark" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF5B3D] to-[#FFC62E] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Mode Badges */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Office & Online</span>
            </div>

            <a
              id="nav-view-work-btn"
              href="#work"
              onClick={(e) => handleNavClick(e, '#work')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
            >
              View Our Work
            </a>

            <button
              id="nav-start-project-btn"
              onClick={onStartProject}
              className="bg-[#FF5B3D] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FFC62E] hover:text-[#11151B] transition-all shadow-lg shadow-[#FF5B3D]/20 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start a Project</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF5B3D]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#11151B]/95 backdrop-blur-2xl border-b border-white/10 pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 max-w-md mx-auto w-full">
            <div className="mb-4 pb-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#18B7C8]">
                <Globe className="w-4 h-4" />
                <span>Physical Studio & Digital Delivery</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold tracking-wide transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#FF5B3D]/20 to-[#FFC62E]/20 text-[#FFC62E] border border-orange-500/30'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                id="mobile-nav-start-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5B3D] to-[#FFC62E] shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
              </button>

              <a
                id="mobile-nav-work-btn"
                href="#work"
                onClick={(e) => handleNavClick(e, '#work')}
                className="w-full py-3 rounded-xl font-semibold text-sm text-center text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10"
              >
                Explore Selected Work
              </a>
            </div>

            {/* Quick Contact info in mobile drawer */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-slate-400">
              <a href="mailto:hello@gigspace.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#18B7C8]" />
                <span>hello@gigspace.com</span>
              </a>
              <a href="tel:+256700123456" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#FF5B3D]" />
                <span>+256 XXX XXX XXX</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

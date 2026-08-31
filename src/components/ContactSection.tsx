import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, Building2, Monitor, ArrowRight } from 'lucide-react';
import { GigspaceEmblem, GigspaceLogo } from './GigspaceLogo';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Graphic Design',
    budget: '$500 - $1,500',
    deadline: 'Within 2 Weeks',
    projectDescription: '',
    workspacePreference: 'both',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project goals';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-[#0A0D12] border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FF5B3D]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#18B7C8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#FF5B3D] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A COLLABORATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
            LET'S CREATE <span className="text-gig-gradient">TOGETHER.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Tell us about your visual project. Whether it is an entire brand identity, high-impact video edits, or custom wall artwork, we are ready to build it with you.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Card, Office & Digital Availability */}
          <div className="lg:col-span-5 space-y-6">
            {/* Brand Card */}
            <div className="p-8 rounded-3xl gig-glass border border-white/10 flex flex-col justify-between">
              <div>
                <GigspaceLogo variant="horizontal" size="sm" theme="dark" showTagline={true} />
                <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                  We welcome both local in-person studio visits and fully remote worldwide collaborations.
                </p>
              </div>

              {/* Direct Touchpoints (Clear Placeholders as requested) */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B3D]/15 border border-[#FF5B3D]/30 flex items-center justify-center text-[#FF5B3D] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      PHONE / WHATSAPP (PLACEHOLDER)
                    </div>
                    <a href="tel:+256700123456" className="text-sm font-black font-mono text-white hover:text-[#FFC62E] transition-colors">
                      +256 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC62E]/15 border border-[#FFC62E]/30 flex items-center justify-center text-[#FFC62E] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      EMAIL INQUIRIES (PLACEHOLDER)
                    </div>
                    <a href="mailto:hello@gigspace.com" className="text-sm font-black font-mono text-white hover:text-[#18B7C8] transition-colors">
                      hello@gigspace.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#18B7C8]/15 border border-[#18B7C8]/30 flex items-center justify-center text-[#18B7C8] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      WEBSITE
                    </div>
                    <span className="text-sm font-black font-mono text-white">
                      www.gigspace.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat With GIGSPACE Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  id="chat-with-gigspace-btn"
                  href="mailto:hello@gigspace.com?subject=Project%20Inquiry%20via%20GIGSPACE"
                  className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#18B7C8]" />
                  <span>Chat With GIGSPACE</span>
                </a>
              </div>
            </div>

            {/* Availability Badges */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#FF5B3D]" />
                <div>
                  <div className="text-xs font-bold text-white">Office Studio</div>
                  <div className="text-[11px] text-slate-400">By Appointment</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-[#18B7C8]" />
                <div>
                  <div className="text-xs font-bold text-white">Online Digital</div>
                  <div className="text-[11px] text-slate-400">Worldwide Handoff</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl gig-glass border border-white/10 relative shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white mb-6 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-3xl font-black font-heading text-white uppercase tracking-tight">
                    BRIEF RECEIVED!
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 max-w-md">
                    Thank you, <strong className="text-white">{formData.name}</strong>. The GIGSPACE team will review your <strong className="text-[#FFC62E]">{formData.service}</strong> brief and reach out within 24 hours.
                  </p>

                  <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-left w-full text-xs text-slate-300 space-y-1 font-mono">
                    <div><span className="text-slate-500">Service:</span> {formData.service}</div>
                    <div><span className="text-slate-500">Contact:</span> {formData.email} {formData.phone && `(${formData.phone})`}</div>
                    <div><span className="text-slate-500">Workspace:</span> {formData.workspacePreference}</div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Graphic Design',
                        budget: '$500 - $1,500',
                        deadline: 'Within 2 Weeks',
                        projectDescription: '',
                        workspacePreference: 'both',
                      });
                    }}
                    className="mt-8 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-black uppercase tracking-widest text-[#FFC62E]">
                      PROJECT BRIEF BUILDER
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Step 1 of 1</span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B3D] text-sm transition-colors`}
                      />
                      {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC62E] text-sm transition-colors`}
                      />
                      {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+256..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#18B7C8] text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Desired Service *
                      </label>
                      <select
                        id="contact-service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181E26] border border-white/10 text-white focus:outline-none focus:border-[#FF5B3D] text-sm transition-colors cursor-pointer"
                      >
                        <option value="Graphic Design">Graphic Design (Posters, Logos, Apparel)</option>
                        <option value="Video & Editing">Video & Work Editing (TikTok, YouTube, Reels)</option>
                        <option value="Artwork Design">Artwork Design (Framed, Abstract, Wall Décor)</option>
                        <option value="Branding">Brand Identity & Style Guides</option>
                        <option value="Other">Other Creative Exploration</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="contact-budget-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181E26] border border-white/10 text-white focus:outline-none focus:border-[#FFC62E] text-sm transition-colors cursor-pointer"
                      >
                        <option value="Under $500">Under $500 (Starter / Single Asset)</option>
                        <option value="$500 - $1,500">$500 - $1,500 (Standard Package)</option>
                        <option value="$1,500 - $3,500">$1,500 - $3,500 (Full Suite / Campaign)</option>
                        <option value="$3,500+">$3,500+ (Comprehensive Production)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Target Deadline
                      </label>
                      <select
                        id="contact-deadline-select"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181E26] border border-white/10 text-white focus:outline-none focus:border-[#18B7C8] text-sm transition-colors cursor-pointer"
                      >
                        <option value="Urgent (1-3 Days)">Urgent (1-3 Days)</option>
                        <option value="Within 1 Week">Within 1 Week</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Flexible Timeline">Flexible Timeline</option>
                      </select>
                    </div>
                  </div>

                  {/* Workspace Preference */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Workspace Preference
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'online', label: '100% Online' },
                        { id: 'office', label: 'Office Studio' },
                        { id: 'both', label: 'Hybrid / Either' },
                      ].map((w) => (
                        <button
                          key={w.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, workspacePreference: w.id as any })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            formData.workspacePreference === w.id
                              ? 'bg-white/20 text-white border border-white/30 shadow-md'
                              : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                          }`}
                        >
                          {w.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Description & Goals *
                    </label>
                    <textarea
                      id="contact-description-input"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Share details about your vision, aesthetic references, preferred colors, required dimensions, or footage details..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.projectDescription ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B3D] text-sm transition-colors`}
                    />
                    {errors.projectDescription && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.projectDescription}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white bg-gradient-to-r from-[#FF5B3D] via-[#FFC62E] to-[#18B7C8] shadow-xl shadow-orange-500/25 hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Brief</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    GIGSPACE respects your privacy. Ready for connection to Formspree, EmailJS, Firebase, or custom backend.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

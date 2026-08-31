import React from 'react';
import { TEAM_ROLES } from '../data/brandData';
import { Users, User, ShieldCheck, Briefcase, Sparkles } from 'lucide-react';
import { GigspaceEmblem } from './GigspaceLogo';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-28 relative bg-[#11151B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-[#18B7C8] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>STUDIO STRUCTURE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight uppercase">
            THE GIGSPACE <span className="text-gig-gradient">CORE ROLES</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            A dedicated functional structure ensuring every creative brief is backed by strategic financial management, marketing direction, visionary design, and digital delivery.
          </p>
        </div>

        {/* 4 Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_ROLES.map((role) => (
            <div
              key={role.id}
              id={`team-role-${role.id}`}
              className="rounded-3xl gig-glass border border-white/10 p-8 flex flex-col justify-between hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div>
                {/* Elegant Role Avatar Placeholder */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${role.avatarBg} border border-white/15 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform shadow-lg`}
                >
                  <User className="w-9 h-9 text-slate-200" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC62E] block mb-1">
                  {role.category}
                </span>

                <h3 className="text-xl font-black font-heading text-white uppercase tracking-tight mb-3">
                  {role.role}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              {/* Responsibilities list */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Functional Scope
                </div>
                <ul className="space-y-1.5">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#18B7C8] shrink-0 mt-1.5" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

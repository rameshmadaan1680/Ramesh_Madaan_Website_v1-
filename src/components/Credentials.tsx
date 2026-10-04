import React from 'react';
import { GraduationCap, Briefcase, Award, Check } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/consultancyData';

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="scroll-mt-20 border-b border-slate-800 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Award className="h-3.5 w-3.5" />
            <span>Executive Pedigree</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Operating Discipline &amp; Academic Acumen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Unlike theoretical advisors, Ramesh Madaan’s frameworks originate from 28+ years of frontline P&amp;L responsibility, engineering problem-solving, and boardroom governance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Education & Academic Pedigree (6 cols) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm lg:col-span-6">
            <div className="flex items-center gap-2.5 text-base font-semibold text-white">
              <GraduationCap className="h-5 w-5 text-amber-400" />
              <span>Academic &amp; Strategic Foundations</span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              Rigorous grounding combining premier management strategy with technical engineering rigor.
            </p>

            <div className="mt-6 space-y-5">
              {CONSULTANT_INFO.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 transition-all hover:border-slate-700"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {edu.institution}
                      </h3>
                      <div className="text-xs font-medium text-amber-300 mt-0.5">
                        {edu.degree}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Executive Operating Career (6 cols) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm lg:col-span-6">
            <div className="flex items-center gap-2.5 text-base font-semibold text-white">
              <Briefcase className="h-5 w-5 text-amber-400" />
              <span>Three Decades of Operating Leadership</span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              Direct accountability spanning engineering design to Vice President of Sales &amp; Marketing.
            </p>

            <div className="mt-6 space-y-4">
              {/* Fine Switchgears */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Fine Switchgears</span>
                  <span className="font-mono text-xs text-slate-400">2024 – 2026</span>
                </div>
                <div className="text-xs font-semibold text-amber-300 mt-0.5">
                  Vice President – Sales &amp; Marketing
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Steered corporate commercial strategy, market expansion across north India, operations optimization, and sales leadership capability development.
                </p>
              </div>

              {/* Crompton Greaves */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Crompton Greaves Consumer Electricals Ltd</span>
                  <span className="font-mono text-xs text-slate-400">2010 – 2024 (14 Years)</span>
                </div>
                <div className="text-xs font-semibold text-amber-300 mt-0.5">
                  Sr Manager Sales – Industrial Lighting &amp; Fan Division
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Executed ₹200+ Cr PAN-India industrial lighting business, secured top consultant approvals (EIL, NTPC, ONGC), and transformed regional fan division from #5 to #1 (29% market share).
                </p>
              </div>

              {/* Havells */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Havells India Ltd</span>
                  <span className="font-mono text-xs text-slate-400">1995 – 2010 (15 Years)</span>
                </div>
                <div className="text-xs font-semibold text-amber-300 mt-0.5">
                  Branch Manager – Amritsar / Ludhiana
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Led 36-person team across switchgears, cables, motors, panels &amp; lighting. Maintained 48% CAGR over a decade with exemplary financial discipline and 47 industry seminars.
                </p>
              </div>

              {/* Early Engineering Foundation */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Essar Steel &amp; Indo Asian Fuse Gear</span>
                  <span className="font-mono text-xs text-slate-400">1993 – 1995</span>
                </div>
                <div className="text-xs font-semibold text-amber-300 mt-0.5">
                  Maintenance Engineer &amp; Control Panel Designer
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Hands-on engineering foundation in HT/LT switchgears, PLC automation, PCC/MCC panel design, and industrial electrical operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Distinction Banner */}
        <div className="mt-12 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-slate-900 to-amber-500/5 p-6 sm:p-8">
          <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why B2B Founders Engage Ramesh Madaan as Strategic Advisor
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Ground-level understanding of distributor psychology, tender committee dynamics, and field sales friction—paired with IIM Lucknow strategic rigor.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href={CONSULTANT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

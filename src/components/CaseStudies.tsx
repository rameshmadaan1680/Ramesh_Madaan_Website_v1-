import React, { useState } from 'react';
import { Award, CheckCircle, Building } from 'lucide-react';
import { CASE_STUDIES } from '../data/consultancyData';
import { CaseStudy } from '../types';

export const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Industrial & B2B', 'Distribution & Channel', 'Turnaround Strategy'];

  const filteredStudies =
    activeCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  return (
    <section id="track-record" className="scroll-mt-20 border-b border-slate-800 bg-slate-900/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Award className="h-3.5 w-3.5" />
              <span>Quantified Proof of Impact</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Verified Executive Track Record
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Real commercial turnaround and distribution execution figures drawn from corporate executive leadership at Crompton Greaves, Havells, and Fine Switchgears.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers per frontend-design rule A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredStudies.map((study: CaseStudy) => (
            <div
              key={study.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 transition-all hover:border-slate-700"
            >
              <div>
                {/* Metric Hero Banner inside Card */}
                <div className="flex items-start justify-between border-b border-slate-800 pb-5">
                  <div>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-400 tabular-nums">
                      {study.metricHighlight}
                    </div>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                      {study.metricLabel}
                    </div>
                  </div>
                  {/* Unboxed Metadata */}
                  <div className="text-right text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">{study.organization}</span>
                    <div className="text-[11px] text-slate-400">{study.role}</div>
                  </div>
                </div>

                <h3 className="mt-5 font-serif text-lg sm:text-xl font-bold text-white">
                  {study.title}
                </h3>

                {/* Challenge & Strategic Intervention */}
                <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-300">
                  <div>
                    <strong className="text-amber-300">The Context: </strong>
                    <span className="text-slate-300">{study.challenge}</span>
                  </div>
                  <div>
                    <strong className="text-slate-200">Executive Intervention: </strong>
                    <span className="text-slate-300">{study.intervention}</span>
                  </div>
                </div>

                {/* Concrete Measurable Outcomes */}
                <div className="mt-5 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
                  <div className="text-xs font-semibold text-slate-200 mb-2.5">
                    Measurable Corporate Outcomes:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {study.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Approvals or Client Highlights */}
              {study.keyClientsOrApprovals && (
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="h-3 w-3 text-amber-400" />
                    <span>Consultant Approvals &amp; Institutional Touchpoints:</span>
                  </div>
                  {/* Clean unboxed tags with subtle separator */}
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 font-mono">
                    {study.keyClientsOrApprovals.map((client, cIdx) => (
                      <React.Fragment key={client}>
                        <span>{client}</span>
                        {cIdx < study.keyClientsOrApprovals!.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

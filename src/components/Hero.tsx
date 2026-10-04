import React from 'react';
import { ArrowRight, Calculator, ShieldCheck } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/consultancyData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Subtle architectural grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Clean Unboxed Editorial Kicker */}
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Executive Advisory</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Sales Transformation</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Distribution Scaling</span>
          </div>

          {/* Balanced Display Headline */}
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Predictable, Scalable Revenue Architecture for B2B &amp; Manufacturing Enterprises
          </h1>

          {/* Concise Sub-headline */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-300 text-pretty">
            Guiding business owners, MDs, and enterprise sales directors through 28+ years of battle-tested industrial leadership. We transform fragmented sales pipelines into high-converting distribution engines, secure tier-1 institutional approvals, and build accountable frontline teams.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenBooking}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/10 transition-all hover:bg-amber-400 hover:shadow-amber-500/25 active:scale-[0.98] whitespace-nowrap"
            >
              <span>Schedule Strategic Discovery</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onScrollToCalculator}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white whitespace-nowrap"
            >
              <Calculator className="h-4 w-4 text-amber-400" />
              <span>Run B2B Growth Diagnostic</span>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>IIM Lucknow Alumnus (MBA)</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span>Ex-Crompton Greaves &amp; Havells Executive</span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span>Industrial &amp; Electricals Specialist</span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span>New Delhi &amp; Pan-India Advisory</span>
          </div>
        </div>

        {/* Quantified Executive Track Record Metrics (Claim-to-Proof Adjacency) */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-6">
          {CONSULTANT_INFO.leadershipMilestones.map((milestone) => (
            <div
              key={milestone.label}
              className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-slate-700"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">
                {milestone.metric}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                {milestone.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {milestone.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

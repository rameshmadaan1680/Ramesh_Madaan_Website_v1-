import React, { useState, useMemo } from 'react';
import { Sliders, ArrowRight, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface GrowthCalculatorProps {
  onBookWithContext: (context: { revenue: string; bottleneck: string; uplift: string }) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onBookWithContext }) => {
  const [turnoverCrores, setTurnoverCrores] = useState<number>(50);
  const [channelType, setChannelType] = useState<string>('dealer-network');
  const [salesForceSize, setSalesForceSize] = useState<number>(20);
  const [primaryBottleneck, setPrimaryBottleneck] = useState<string>('extraction');

  const analysis = useMemo(() => {
    // Realistic business growth mathematics modeled on industrial B2B benchmarks
    let leakagePct = 0.12; // Base 12% revenue leakage
    let upliftPotentialPct = 0.18; // Base 18% uplift potential

    if (primaryBottleneck === 'extraction') {
      leakagePct += 0.05;
      upliftPotentialPct += 0.08;
    } else if (primaryBottleneck === 'approvals') {
      leakagePct += 0.07;
      upliftPotentialPct += 0.11;
    } else if (primaryBottleneck === 'cadence') {
      leakagePct += 0.04;
      upliftPotentialPct += 0.06;
    } else if (primaryBottleneck === 'margin') {
      leakagePct += 0.06;
      upliftPotentialPct += 0.05;
    }

    if (channelType === 'dealer-network') {
      upliftPotentialPct += 0.03;
    } else if (channelType === 'institutional') {
      upliftPotentialPct += 0.05;
    }

    const leakageAmount = turnoverCrores * leakagePct;
    const potentialUplift = turnoverCrores * upliftPotentialPct;
    const newProjectedTurnover = turnoverCrores + potentialUplift;
    const perRepProductivity = ((potentialUplift * 100) / Math.max(salesForceSize, 1)).toFixed(1);

    return {
      leakageAmount: leakageAmount.toFixed(1),
      potentialUplift: potentialUplift.toFixed(1),
      newProjectedTurnover: newProjectedTurnover.toFixed(1),
      perRepProductivity,
      leakagePct: Math.round(leakagePct * 100),
      upliftPotentialPct: Math.round(upliftPotentialPct * 100),
    };
  }, [turnoverCrores, channelType, salesForceSize, primaryBottleneck]);

  const bottleneckLabels: Record<string, string> = {
    extraction: 'Secondary Sales Extraction & Low Dealer Counter Share',
    approvals: 'Missing Tier-1 Specifier / PSU Approvals (EIL, NTPC, etc.)',
    cadence: 'Unstructured Sales Funnel & Pipeline Velocity Friction',
    margin: 'Channel Price Indiscipline & Margin Erosion',
  };

  const handleConsultationClick = () => {
    onBookWithContext({
      revenue: `₹${turnoverCrores} Crores`,
      bottleneck: bottleneckLabels[primaryBottleneck],
      uplift: `+₹${analysis.potentialUplift} Cr projected uplift`,
    });
  };

  return (
    <section id="calculator" className="scroll-mt-20 border-b border-slate-800 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Sliders className="h-3.5 w-3.5" />
            <span>Interactive Modeling</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            B2B Revenue Leakage &amp; Expansion Diagnostic
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Simulate your manufacturing or industrial enterprise parameters to estimate uncollected secondary demand, sales force output, and 12-month transformation ROI.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Controls Column (7 cols) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-base font-semibold text-white">Your Business Baseline</h3>
            <p className="mt-1 text-xs text-slate-400">Adjust the sliders and parameters to reflect your current operational reality.</p>

            <div className="mt-6 space-y-6">
              {/* Parameter 1: Annual Turnover */}
              <div>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="turnover-slider" className="font-medium text-slate-200">
                    Annual Turnover (INR):
                  </label>
                  <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                    ₹{turnoverCrores} Crores
                  </span>
                </div>
                <input
                  id="turnover-slider"
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={turnoverCrores}
                  onChange={(e) => setTurnoverCrores(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-amber-500"
                />
                <div className="mt-1.5 flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>₹5 Cr</span>
                  <span>₹50 Cr</span>
                  <span>₹150 Cr</span>
                  <span>₹300+ Cr</span>
                </div>
              </div>

              {/* Parameter 2: Channel Architecture */}
              <div>
                <label className="block text-sm font-medium text-slate-200">
                  Primary Route to Market:
                </label>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'dealer-network', label: 'Distributor & Dealer Network' },
                    { id: 'institutional', label: 'Institutional, PSU & EPC Projects' },
                    { id: 'direct-oem', label: 'Direct OEM & Enterprise B2B' },
                    { id: 'hybrid', label: 'Hybrid Multi-Channel' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setChannelType(item.id)}
                      className={`flex items-center justify-start rounded-lg border px-3.5 py-2.5 text-left text-xs font-medium transition-all ${
                        channelType === item.id
                          ? 'border-amber-500/70 bg-amber-500/10 text-amber-200 shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Field Sales Engineers */}
              <div>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="salesforce-slider" className="font-medium text-slate-200">
                    Frontline Sales &amp; Specification Team:
                  </label>
                  <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                    {salesForceSize} Sales Engineers
                  </span>
                </div>
                <input
                  id="salesforce-slider"
                  type="range"
                  min="3"
                  max="60"
                  step="1"
                  value={salesForceSize}
                  onChange={(e) => setSalesForceSize(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-amber-500"
                />
                <div className="mt-1.5 flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>3 Reps</span>
                  <span>15 Reps</span>
                  <span>35 Reps</span>
                  <span>60+ Reps</span>
                </div>
              </div>

              {/* Parameter 4: Core Bottleneck */}
              <div>
                <label className="block text-sm font-medium text-slate-200">
                  Critical Growth Friction:
                </label>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'extraction', label: 'Low Secondary Counter Extraction' },
                    { id: 'approvals', label: 'Missing Tier-1 Specifier Approvals' },
                    { id: 'cadence', label: 'Unstructured Pipeline & Closing' },
                    { id: 'margin', label: 'Price Undercutting & Margin Leak' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPrimaryBottleneck(item.id)}
                      className={`flex items-center justify-start rounded-lg border px-3.5 py-2.5 text-left text-xs font-medium transition-all ${
                        primaryBottleneck === item.id
                          ? 'border-amber-500/70 bg-amber-500/10 text-amber-200 shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 lg:col-span-5 shadow-xl shadow-amber-500/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-amber-400 uppercase">
                Advisory Projection Model
              </span>
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[11px] font-mono text-amber-300">
                12-Month Horizon
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {/* Primary Output Metric */}
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span>Projected Revenue Uplift</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    +₹{analysis.potentialUplift} Cr
                  </span>
                  <span className="text-xs font-medium text-emerald-400 font-mono">
                    (+{analysis.upliftPotentialPct}%)
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Target turnover potential: <strong className="text-slate-200 font-mono">₹{analysis.newProjectedTurnover} Cr</strong> with systematic intervention.
                </p>
              </div>

              {/* Secondary Metric: Estimated Leakage */}
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <span>Estimated Annual Revenue Leakage</span>
                </div>
                <div className="mt-1 font-serif text-2xl font-bold text-amber-300 tabular-nums">
                  ~₹{analysis.leakageAmount} Cr / year
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Lost through unreached counters, slow distributor rotation, and unapproved specification tenders.
                </p>
              </div>

              {/* Sales Rep Output */}
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" />
                  <span>Target Incremental Extraction per Sales Rep</span>
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-slate-200 tabular-nums">
                  ₹{analysis.perRepProductivity} Lakhs / rep
                </div>
              </div>

              {/* Action Recommendation */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-xs font-semibold text-slate-300">
                  Recommended Advisory Prescription:
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {primaryBottleneck === 'extraction' &&
                    'Deploy a structured Reach Expansion & POP display program with tiered dealer extraction metrics to increase counter velocity.'}
                  {primaryBottleneck === 'approvals' &&
                    'Initiate a consultant pre-qualification roadmap targeting top EPC specifiers (EIL, NTPC, ONGC) to mandate tender inclusions.'}
                  {primaryBottleneck === 'cadence' &&
                    'Institute structured weekly pipeline review cadences and performance-linked KPI milestones for regional managers.'}
                  {primaryBottleneck === 'margin' &&
                    'Re-structure trade discounting hierarchies and enforce strict DTR credit discipline to preserve gross margin.'}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleConsultationClick}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 py-3.5 text-sm font-semibold text-slate-950 shadow-md transition-all hover:bg-amber-400 hover:shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>Discuss This Scenario with Ramesh</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ClipboardCheck, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { AUDIT_QUESTIONS } from '../data/consultancyData';

interface GrowthAuditProps {
  onBookWithAudit: (auditSummary: string) => void;
}

export const GrowthAudit: React.FC<GrowthAuditProps> = ({ onBookWithAudit }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentQuestion = AUDIT_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: number, points: number) => {
    const updated = { ...selectedAnswers, [questionId]: points };
    setSelectedAnswers(updated);

    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = Object.values(selectedAnswers).reduce((acc, val) => acc + val, 0);

  const getScoreDiagnosis = (score: number) => {
    if (score < 40) {
      return {
        tier: 'High Operational Leakage',
        badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
        summary:
          'Your sales organization and channel architecture are experiencing significant friction. Heavy reliance on few stockists or ad-hoc sales calls leaves you vulnerable to competitors.',
        priorities: [
          'Immediate sales pipeline cadence restructuring',
          'Audit of dealer margin and credit terms to stop leakage',
          'Establishment of systematic secondary sales tracking',
        ],
      };
    } else if (score < 75) {
      return {
        tier: 'Growth Plateau / Unlocked Potential',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        summary:
          'Your enterprise has solid product fundamentals but lacks the institutional specifier approvals and distribution expansion systems to unlock the next 2x-3x revenue tier.',
        priorities: [
          'Formal consultant pre-qualification roadmap (EIL, NTPC, CPWD, etc.)',
          'Reach expansion into unrepresented tier-2/3 industrial hubs',
          'Sales manager leadership coaching to drive frontline accountability',
        ],
      };
    } else {
      return {
        tier: 'Scaling Engine Ready for Market Dominance',
        badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
        summary:
          'You possess strong discipline. The focus now is aggressive market share turnaround (similar to catapulting from #5 to #1), new category launches, and pan-India institutional dominance.',
        priorities: [
          'Multi-category cross-selling and bundled scheme architectures',
          'Flagship display counter rollouts (Galaxy experience formats)',
          'Strategic CXO advisory for regional acquisitions or expansion',
        ],
      };
    }
  };

  const diagnosis = getScoreDiagnosis(totalScore);

  const resetAudit = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const handleBookFromAudit = () => {
    const auditSummary = `Growth Audit Score: ${totalScore}/100 (${diagnosis.tier})`;
    onBookWithAudit(auditSummary);
  };

  return (
    <section id="audit" className="scroll-mt-20 border-b border-slate-800 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <ClipboardCheck className="h-3.5 w-3.5" />
            <span>Executive Self-Audit</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            5-Minute Enterprise Growth Readiness Audit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Assess the 5 critical pillars of B2B revenue predictability: channel reach, specifier pre-qualification, pipeline cadence, cross-selling, and leadership governance.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          {!showResult ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-sm">
              {/* Progress Bar */}
              <div className="mb-6 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-amber-400">
                  Question {currentStep + 1} of {AUDIT_QUESTIONS.length}
                </span>
                <span className="font-medium text-slate-300">
                  {currentQuestion.area}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-amber-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / AUDIT_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-white">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === option.points;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, option.points)}
                      className={`group flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-white'
                          : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                          isSelected
                            ? 'border-amber-400 bg-amber-500 text-slate-950'
                            : 'border-slate-700 text-slate-400 group-hover:border-slate-500'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white">
                          {option.label}
                        </div>
                        <div className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {option.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs text-slate-400">
                <button
                  type="button"
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="disabled:opacity-30 disabled:pointer-events-none hover:text-white transition-colors"
                >
                  ← Previous Question
                </button>
                <span>Click any option to proceed</span>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium font-mono uppercase tracking-wide">
                  <span className={diagnosis.badgeColor}>{diagnosis.tier}</span>
                </div>

                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-white tabular-nums">
                    {totalScore}
                  </span>
                  <span className="text-lg font-mono text-slate-400">/ 100</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Revenue Architecture Readiness Index
                </div>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
                  {diagnosis.summary}
                </p>
              </div>

              {/* Recommended Priorities */}
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-5">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Top 3 Strategic Interventions to Bridge the Gap:
                </div>
                <ul className="mt-3 space-y-2.5">
                  {diagnosis.priorities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={resetAudit}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake Assessment</span>
                </button>

                <button
                  type="button"
                  onClick={handleBookFromAudit}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-400 shadow-sm"
                >
                  <span>Review Audit with Ramesh Madaan</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

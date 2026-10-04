import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { VERCEL_MASTER_PROMPT, VERCEL_DEPLOY_STEPS } from '../data/consultancyData';

interface PromptAndVercelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptAndVercelModal: React.FC<PromptAndVercelModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'deploy'>('prompt');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyPromptToClipboard = () => {
    navigator.clipboard.writeText(VERCEL_MASTER_PROMPT);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const copyStepCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(cmd);
    setTimeout(() => setCopiedCommand(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Terminal className="h-3.5 w-3.5" />
          <span>Vercel Deployment &amp; Prompt Kit</span>
        </div>
        <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-white">
          Best Prompt &amp; Vercel Static Deployment
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Everything you need to deploy this interactive consultancy website to Vercel or prompt future AI iterations with precision.
        </p>

        {/* Segmented Tab Switcher */}
        <div className="mt-6 flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('prompt')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'prompt'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Master Prompt (Copy-Ready)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('deploy')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'deploy'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Vercel 3-Step Deployment Guide
          </button>
        </div>

        {/* Tab 1: The Master Prompt */}
        {activeTab === 'prompt' && (
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Crafted specifically for your 28+ year executive B2B background:
              </span>
              <button
                type="button"
                onClick={copyPromptToClipboard}
                className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-amber-400 transition-colors shadow-sm"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-slate-950" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Master Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 p-4 font-mono text-xs text-slate-300 leading-relaxed max-h-80 overflow-y-auto whitespace-pre-wrap select-all">
              {VERCEL_MASTER_PROMPT}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                This prompt enforces zero-slop styling, authentic track record figures (₹200 Cr Crompton B2B lighting, 48% CAGR Havells, #1 market share turnaround), and interactive tools.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Vercel Deployment Guide */}
        {activeTab === 'deploy' && (
          <div className="mt-5 space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              This application is built as a pure, high-performance static Vite React SPA. It deploys to Vercel with zero complex server dependencies. The included <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300 font-mono">vercel.json</code> file handles automatic SPA routing.
            </p>

            <div className="space-y-4">
              {VERCEL_DEPLOY_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400 font-mono">
                        {step.step}
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    {step.step === '1' && (
                      <button
                        type="button"
                        onClick={() => copyStepCommand(step.command)}
                        className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300"
                      >
                        {copiedCommand === step.command ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy Command</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-2 rounded-lg bg-slate-950 p-2.5 font-mono text-[11px] text-slate-300 overflow-x-auto border border-slate-800/80">
                    {step.command}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Have your custom domain? Add it in Vercel Project Settings &gt; Domains.
              </span>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-950 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>Open Vercel Dashboard</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

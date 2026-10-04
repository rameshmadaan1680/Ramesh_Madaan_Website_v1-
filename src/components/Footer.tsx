import React from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight, Terminal } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/consultancyData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenVercelGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenVercelGuide }) => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Executive Bio (5 cols) */}
          <div className="md:col-span-5">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              {CONSULTANT_INFO.name}
            </span>
            <div className="mt-1 text-xs font-semibold text-amber-400">
              {CONSULTANT_INFO.title}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 max-w-md">
              Specialized strategic advisory for manufacturing enterprises, engineering founders, and B2B commercial leadership. 28+ years building high-growth distribution networks and institutional sales engines.
            </p>

            <div className="mt-5 flex flex-col space-y-2 text-xs text-slate-300">
              <a
                href={`mailto:${CONSULTANT_INFO.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-amber-400" />
                <span>{CONSULTANT_INFO.email}</span>
              </a>
              <a
                href={`tel:${CONSULTANT_INFO.phone}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>{CONSULTANT_INFO.phone}</span>
              </a>
              <a
                href={CONSULTANT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-amber-400" />
                <span>linkedin.com/in/rameshmadaan</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Strategic Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#practice" className="hover:text-amber-400 transition-colors">
                  01. Advisory Pillars &amp; Practice
                </a>
              </li>
              <li>
                <a href="#track-record" className="hover:text-amber-400 transition-colors">
                  02. Verified Track Record (₹200 Cr / 48% CAGR)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  03. B2B Growth &amp; Leakage Calculator
                </a>
              </li>
              <li>
                <a href="#audit" className="hover:text-amber-400 transition-colors">
                  04. 5-Minute Enterprise Audit
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-amber-400 transition-colors">
                  05. Executive Pedigree &amp; IIM Lucknow
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Engagement / Vercel Actions (4 cols) */}
          <div className="md:col-span-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Executive Engagement
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Available for quarterly strategic advisory retainers, sales transformation assignments, and university guest lectures.
            </p>

            <div className="mt-4 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-amber-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-all shadow-sm"
              >
                <span>Schedule Strategic Discovery</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={onOpenVercelGuide}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 py-2.5 text-xs font-medium text-slate-300 hover:border-amber-500/50 hover:text-white transition-colors"
              >
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
                <span>View Master Prompt &amp; Vercel Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Ramesh Madaan Advisory. All Rights Reserved. New Delhi, India.</p>
          <div className="flex items-center gap-4">
            <span>Confidential Boardroom Advisory</span>
            <span aria-hidden="true">·</span>
            <span>Static Vercel Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

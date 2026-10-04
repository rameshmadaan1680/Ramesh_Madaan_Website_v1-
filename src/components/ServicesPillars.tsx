import React, { useState } from 'react';
import { ArrowRight, Check, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../data/consultancyData';
import { ConsultingService } from '../types';

interface ServicesPillarsProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesPillars: React.FC<ServicesPillarsProps> = ({ onSelectService }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="practice" className="scroll-mt-20 border-b border-slate-800 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Consulting Practice</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Five Strategic Advisory Pillars
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Engineered through nearly three decades of enterprise P&amp;L leadership across Havells, Crompton Greaves, and Fine Switchgears.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service: ConsultingService, idx: number) => {
            const isFeatured = idx === 0 || idx === 1; // Bento emphasis
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={service.number}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/90 ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Clean Editorial Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-amber-400">
                      {service.number}
                    </span>
                    {/* Unboxed text metadata */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      {service.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {tIdx < service.tags.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {service.shortDesc}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-3">
                      <p className="leading-relaxed text-slate-300">
                        {service.fullDesc}
                      </p>
                      <div>
                        <div className="font-semibold text-slate-200 mb-2">Key Deliverables:</div>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-slate-400">
                              <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 text-[11px] text-slate-400">
                        <strong className="text-slate-300">Ideal Engagement:</strong> {service.idealFor}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center gap-1 font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{isExpanded ? 'Less Details' : 'View Scope & Deliverables'}</span>
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

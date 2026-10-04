import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Mail, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/consultancyData';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: {
    revenue?: string;
    bottleneck?: string;
    uplift?: string;
    serviceTitle?: string;
    auditSummary?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialContext,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    revenueBracket: '₹25 Cr – ₹100 Cr',
    primaryChallenge: 'PAN-India Channel Scaling & Dealer Extraction',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialContext) {
      let customMessage = '';
      if (initialContext.revenue || initialContext.bottleneck) {
        customMessage = `Hello Ramesh,\n\nWe evaluated our metrics on your B2B Growth Diagnostic:\n- Current Revenue: ${initialContext.revenue || 'Not specified'}\n- Primary Challenge: ${initialContext.bottleneck || 'Channel expansion'}\n- Projected Uplift: ${initialContext.uplift || 'Significant'}\n\nWe would like to explore a strategic discovery engagement with your advisory practice.`;
      } else if (initialContext.serviceTitle) {
        customMessage = `Hello Ramesh,\n\nI would like to explore your advisory pillar on "${initialContext.serviceTitle}". Please share your scope of engagement and availability for a discussion.`;
      } else if (initialContext.auditSummary) {
        customMessage = `Hello Ramesh,\n\nWe completed your Enterprise Growth Readiness Audit with the result:\n${initialContext.auditSummary}\n\nWe would value your feedback on our top 3 strategic priorities.`;
      }

      setFormData((prev) => ({
        ...prev,
        message: customMessage || prev.message,
        primaryChallenge: initialContext.serviceTitle || prev.primaryChallenge,
      }));
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const mailtoLink = `mailto:${CONSULTANT_INFO.email}?subject=${encodeURIComponent(
    `Strategic Discovery Request – ${formData.companyName || 'B2B Enterprise'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nCompany: ${formData.companyName}\nPhone: ${formData.phone}\nRevenue Bracket: ${formData.revenueBracket}\nArea: ${formData.primaryChallenge}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Calendar className="h-3.5 w-3.5" />
              <span>Confidential Boardroom Inquiry</span>
            </div>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-white">
              Schedule Strategic Discovery Session
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Direct consultation with Ramesh Madaan to diagnose revenue constraints, review distributor dynamics, and architect 12-month commercial transformation.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-400">{errors.fullName}</span>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Enterprise / Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Industrial Systems"
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none ${
                      errors.companyName ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.companyName && (
                    <span className="text-[11px] text-rose-400">{errors.companyName}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@company.com"
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400">{errors.email}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Direct Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none ${
                      errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-400">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Annual Turnover Bracket */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Annual Turnover (INR)
                  </label>
                  <select
                    value={formData.revenueBracket}
                    onChange={(e) => setFormData({ ...formData, revenueBracket: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="₹5 Cr – ₹25 Cr">₹5 Cr – ₹25 Cr</option>
                    <option value="₹25 Cr – ₹100 Cr">₹25 Cr – ₹100 Cr</option>
                    <option value="₹100 Cr – ₹300 Cr">₹100 Cr – ₹300 Cr</option>
                    <option value="₹300 Cr+">₹300 Cr+</option>
                  </select>
                </div>

                {/* Advisory Focus */}
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Primary Strategic Area
                  </label>
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none truncate"
                  >
                    <option value="Sales Organization Transformation">Sales Organization Transformation</option>
                    <option value="PAN-India Channel Scaling & Dealer Extraction">PAN-India Channel Scaling</option>
                    <option value="Institutional & PSU Specifier Approvals (EIL/NTPC)">Institutional / Specifier Approvals</option>
                    <option value="GTM Strategy & Category Launch">GTM &amp; Category Launch</option>
                    <option value="Executive Advisory & University Lectures">CXO Advisory / University Lectures</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Key Context &amp; Objective
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your current distribution footprint, target goals, or key questions for Ramesh..."
                  className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA &amp; Boardroom Confidentiality Guaranteed</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={mailtoLink}
                    className="flex-1 sm:flex-initial text-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    Open in Email Client
                  </a>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-lg bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-all active:scale-[0.98]"
                  >
                    <span>Confirm Request</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="mt-4 font-serif text-2xl font-bold text-white">
              Discovery Request Recorded
            </h3>

            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-slate-300">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Ramesh Madaan’s executive desk has received your advisory brief for <strong className="text-white">{formData.companyName}</strong>. You will be contacted within 24 business hours to coordinate calendar availability.
            </p>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Company:</span>
                <span className="font-semibold text-white">{formData.companyName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Turnover Tier:</span>
                <span className="font-mono text-amber-300">{formData.revenueBracket}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Advisory Focus:</span>
                <span className="font-semibold text-slate-200">{formData.primaryChallenge}</span>
              </div>
            </div>

            {/* Direct Connect Options */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={mailtoLink}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800"
              >
                <Mail className="h-3.5 w-3.5 text-amber-400" />
                <span>Send via Direct Email</span>
              </a>
              <a
                href={`tel:${CONSULTANT_INFO.phone}`}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>Call Desk: {CONSULTANT_INFO.phone}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-amber-500 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GrowthCalculator } from './components/GrowthCalculator';
import { ServicesPillars } from './components/ServicesPillars';
import { CaseStudies } from './components/CaseStudies';
import { GrowthAudit } from './components/GrowthAudit';
import { Credentials } from './components/Credentials';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PromptAndVercelModal } from './components/PromptAndVercelModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVercelGuideOpen, setIsVercelGuideOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState<{
    revenue?: string;
    bottleneck?: string;
    uplift?: string;
    serviceTitle?: string;
    auditSummary?: string;
  }>({});

  const handleOpenBooking = (context?: {
    revenue?: string;
    bottleneck?: string;
    uplift?: string;
    serviceTitle?: string;
    auditSummary?: string;
  }) => {
    if (context) {
      setBookingContext(context);
    } else {
      setBookingContext({});
    }
    setIsBookingOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithContext = (context: {
    revenue: string;
    bottleneck: string;
    uplift: string;
  }) => {
    handleOpenBooking(context);
  };

  const handleBookWithAudit = (auditSummary: string) => {
    handleOpenBooking({ auditSummary });
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenBooking({ serviceTitle });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
      />

      <main>
        {/* Executive Hero with Verified Track Record Figures */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* 5 Core Advisory Pillars (Bento Grid Architecture) */}
        <ServicesPillars onSelectService={handleSelectService} />

        {/* Interactive B2B Growth & Revenue Leakage Calculator */}
        <GrowthCalculator onBookWithContext={handleBookWithContext} />

        {/* Quantified Track Record & Case Study Filter (₹200 Cr, 48% CAGR, #1 Turnaround) */}
        <CaseStudies />

        {/* Interactive 5-Question Growth Diagnostic Audit */}
        <GrowthAudit onBookWithAudit={handleBookWithAudit} />

        {/* Academic & Corporate Pedigree (IIM Lucknow, Havells, Crompton, Fine Switchgears) */}
        <Credentials />
      </main>

      {/* Quiet Executive Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
      />

      {/* Interactive Consultation Booking Modal with Scenario Auto-Fill */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialContext={bookingContext}
      />

      {/* Best Prompt & Step-by-Step Vercel Deployment Modal */}
      <PromptAndVercelModal
        isOpen={isVercelGuideOpen}
        onClose={() => setIsVercelGuideOpen(false)}
      />
    </div>
  );
}

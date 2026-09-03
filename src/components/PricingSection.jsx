import React, { useState } from 'react';
import RequestForm from './RequestForm';

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const plans = [
    {
      badge: "Entry",
      name: "The Document Vault",
      price: "₦250,000",
      period: "one-time",
      highlight: false,
      features: [
        "25+ HR templates (contracts, offer letters, disciplinary forms)",
        "NDAs, termination letters, leave policies, grievance forms",
        "All documents reference Nigerian Labour Act, NTA 2025, NDPA 2023",
        "Quarterly document updates for 12 months",
        "Editable Word & PDF format"
      ]
    },
    {
      badge: "Most Popular",
      name: "The 30-Day Sprint",
      price: "₦400,000",
      period: "30-day engagement",
      highlight: true,
      features: [
        "Full HR audit of your current documentation and practices",
        "5 priority documents drafted from scratch for your organisation",
        "1 strategy session with your leadership team (2 hours)",
        "Gap analysis report with prioritised action plan",
        "Email support throughout the engagement"
      ]
    },
    {
      badge: "Growth",
      name: "The 60-Day Build",
      price: "₦800,000",
      period: "60-day engagement",
      highlight: false,
      features: [
        "Full employee handbook built for your organisation",
        "Complete onboarding system (checklists, induction packs, 90-day plan)",
        "Performance management framework with KPI templates",
        "3 manager training sessions (in-person or virtual)",
        "All documents branded to your organisation"
      ]
    },
    {
      badge: "Transformation",
      name: "The 90-Day Transform",
      price: "₦1,500,000",
      period: "90-day engagement",
      highlight: false,
      features: [
        "Complete HR function set up end-to-end",
        "All policies, procedures, and systems built from scratch",
        "Full management training programme",
        "Handover plan and transition documentation",
        "30-day post-handover support included"
      ]
    },
    {
      badge: "Ongoing",
      name: "The Retainer",
      price: "₦300,000",
      period: "/ month",
      highlight: false,
      features: [
        "Unlimited email, WhatsApp & Slack support",
        "Unlimited HR document reviews",
        "Monthly advisory call (60 minutes)",
        "Priority response within 24 hours",
        "Ongoing regulatory update briefings",
        "Access to all new Document Vault additions"
      ]
    }
  ];

  const handleRequest = (planName) => {
    setSelectedPackage(planName);
    setIsFormOpen(true);
  };

  return (
    <section id="services" className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 lg:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight">
            Choose your <span className="italic font-normal">engagement level</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col border transition-all duration-300 bg-neutral-950/80 backdrop-blur-sm ${
                plan.highlight 
                  ? 'border-[#C4596A] shadow-2xl shadow-[#C4596A]/10 sm:scale-105 lg:scale-105' 
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                <div className={`inline-block border rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 shadow-inner ${
                  plan.highlight 
                    ? 'bg-[#C4596A] border-[#C4596A] text-white' 
                    : 'bg-white border-white text-black'
                }`}>
                  {plan.badge}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#C4596A] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-6 sm:mb-8">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#C4596A] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[10px] sm:text-xs lg:text-sm text-neutral-400 font-light">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                      <span className="text-[#C4596A] mt-1 text-[8px] sm:text-xs">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => handleRequest(plan.name)}
                className="w-full bg-[#C4596A] hover:bg-[#b06a74] text-white font-medium py-3 sm:py-3.5 px-6 rounded-full transition-colors text-xs sm:text-sm shadow-md cursor-pointer"
              >
                Request Package
              </button>
            </div>
          ))}
        </div>

      </div>
      <RequestForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageName={selectedPackage}
        onSuccess={() => console.log('Request sent successfully!')}
      />
    </section>
  );
}


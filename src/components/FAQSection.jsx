import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is this service strictly confidential?",
      answer: "Completely. All client engagements are bound by a mutual NDA before any sensitive information is shared. We do not disclose client names, their sector, or the nature of our work without explicit written consent. The sub rosa principle of complete discretion is non-negotiable."
    },
    {
      question: "My company is in insurance do you understand our specific HR requirements?",
      answer: "Yes this is our primary sector. We understand NAICOM-related compliance expectations for HR documentation, the unique KPI structures for claims, underwriting, and branch coordinator roles, and the staff welfare challenges specific to Nigerian insurance companies. You will not need to explain the industry to us."
    },
    {
      question: "How is SubRosa HR different from hiring a freelance HR person?",
      answer: "A freelance HR person typically works informally with no written engagement terms, variable quality, and no accountability structure. SubRosa HR engagements are scoped in writing, priced transparently, and delivered to a defined standard. You receive branded, professionally structured documents not rough drafts. And you are engaging a senior HR strategist, not a generalist."
    },
    {
      question: "Are your documents compliant with current Nigerian law?",
      answer: "Yes. All documents are prepared with reference to the Nigeria Labour Act 2004, Nigeria Tax Act 2025, National Data Protection Act 2023, National Minimum Wage Amendment Act 2024, Pension Reform Act 2014, and the Employee Compensation Act. We recommend any final employment contract also be reviewed by your legal counsel before execution."
    },
    {
      question: "How do we pay?",
      answer: "Payment is made via bank transfer to a Nigerian corporate account. A 50% deposit is required before work begins; the balance is due on delivery. For the Retainer package, payment is monthly in advance. You receive a formal invoice for all payments."
    },
    {
      question: "Can we start with a smaller package and upgrade later?",
      answer: "Absolutely. Many clients begin with the Document Vault or the 30-Day Sprint to establish trust and see the quality of our work, then progress to a longer engagement or the Retainer. There is no obligation to commit beyond the initial package."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-black text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto">
      
        <div className="mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Questions <span className="italic font-normal">we are often asked</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="flex flex-col">
               
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left rounded-2xl p-6 sm:p-7 flex items-center justify-between border transition-all duration-300 cursor-pointer ${
                    isOpen 
                      ? 'border-[#C4596A] bg-neutral-900/80 shadow-lg shadow-[#C4596A]/10' 
                      : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:shadow-lg hover:shadow-[#C4596A]/5'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-serif font-medium pr-4 transition-all duration-300 ${
                    isOpen 
                      ? 'text-[#C4596A] drop-shadow-[0_0_15px_rgba(196,89,106,0.3)]' 
                      : 'text-white hover:text-[#C4596A]'
                  }`}>
                    {faq.question}
                  </span>
                 
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#C4596A] text-[#C4596A] shadow-lg shadow-[#C4596A]/20' 
                      : 'border-neutral-700 text-[#C4596A] hover:border-[#C4596A]'
                  }`}>
                    {isOpen ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>

             
                {isOpen && (
                  <div className="mt-3 rounded-2xl p-6 sm:p-8 bg-neutral-900/50 border border-neutral-800 shadow-inner shadow-[#C4596A]/5">
                    <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import React from 'react';
export default function DiscretionSection() {
  const features = [
    {
      title: "Full Confidentiality",
      description: "We never name clients. Sensitive HR matters restructuring, performance issues, exits are handled with complete discretion."
    },
    {
      title: "Sector-Specific Expertise",
      description: "Insurance companies, fintechs, and regulated businesses have distinct HR requirements. We know NAICOM, CBN, and SEC compliance contexts not just general labour law."
    },
    {
      title: "Legal Currency",
      description: "Every document references the Nigeria Tax Act 2025, NDPA 2023, National Minimum Wage Act 2024, and Labour Act 2004 by name, not by implication."
    },
    {
      title: "Fixed Scope. Fixed Price. Fixed Timeline.",
      description: "No retainer surprises. No scope creep. You approve the brief, we deliver exactly what was agreed on time."
    }
  ];

  return (
    <section id="discretion" className="relative bg-black text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden min-h-screen flex items-center">

      <div className="absolute inset-0 z-0">
        <img 
          src="/images/images 1.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col gap-6">
        <div className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-[#C57B85]/5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center p-0.5 shadow-lg shadow-[#C57B85]/20">
              <div className="w-full h-full rounded-full border border-[#C57B85]"></div>
            </div>
            <div className="text-white font-bold text-lg tracking-wide flex items-center gap-1">
              SubRosa <span className="text-[10px] uppercase font-bold text-[#C57B85] self-start mt-0.5">HR</span>
            </div>
          </div>
          
          <p className="text-neutral-300 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
            The name says it. Sub rosa <span className="italic font-bold text-white drop-shadow-[0_0_8px_rgba(197,123,133,0.3)]">"under the rose"</span> has meant confidentiality since Roman times. It is the principle we operate by.
          </p>
        </div>
        <div className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-xl shadow-[#C57B85]/5">
          
          <div className="flex flex-col gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-[#C57B85] font-serif font-bold text-lg sm:text-xl drop-shadow-[0_0_10px_rgba(197,123,133,0.3)]">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-neutral-800 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#C57B85] mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(197,123,133,0.3)]">
              Built on discretion.
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Delivered with authority.
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}
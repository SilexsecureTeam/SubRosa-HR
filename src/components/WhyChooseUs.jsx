import React from 'react';

export default function WhyChooseUs() {
  const comparisons = [
    {
      alternative: "Big HR Consultancies",
      limitation: "Slow proposals. Generic frameworks. Junior staff on your account.",
      advantage: "You work directly with the strategist. Fast, focused delivery."
    },
    {
      alternative: "Full-time HR Manager",
      limitation: "₦5M+ annual salary. Benefits. PAYE. Office space.",
      advantage: "A fifth of the cost. Senior-level expertise. No overhead."
    },
    {
      alternative: "Freelance HR Practitioners",
      limitation: "No branded system. Inconsistent quality. No accountability framework.",
      advantage: "A clear engagement structure, branded deliverables, measurable outcomes."
    },
    {
      alternative: "Online Template Libraries",
      limitation: "UK/US law. 2019 versions. No Nigeria-specific sector knowledge.",
      advantage: "Every document references Nigerian law. Updated for NTA 2025 & NDPA 2023."
    }
  ];

  return (
    <section id="difference" className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
      
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-1">
            Why clients choose SubRosa HR
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-normal text-neutral-300">
            over the alternatives
          </p>
        </div>

      
        <div className="md:hidden">
          <div className="mb-8">
            <div className="border border-[#C4596A]/50 rounded-2xl p-4 bg-neutral-950/60 mb-4">
              <h3 className="text-[#C4596A] font-semibold text-base">Alternative</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={`alt-${index}`} className="text-white font-medium text-sm pl-4 border-l-2 border-[#C4596A]/50 py-1">
                  {item.alternative}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <div className="border border-[#C4596A]/50 rounded-2xl p-4 bg-neutral-950/60 mb-4">
              <h3 className="text-[#C4596A] font-semibold text-base">The limitation</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={`lim-${index}`} className="text-neutral-300 text-sm leading-relaxed pl-4 border-l-2 border-[#C4596A]/50 py-1">
                  {item.limitation}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="border border-[#C4596A] rounded-2xl p-4 bg-[#C4596A] mb-4">
              <h3 className="text-white font-semibold text-base">SubRosa HR advantage</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={`adv-${index}`} className="text-white font-medium text-sm leading-relaxed pl-4 border-l-2 border-[#C4596A] py-1">
                  {item.advantage}
                </li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="hidden md:block lg:hidden">
          <div className="mb-8">
            <div className="border border-[#C4596A]/50 rounded-2xl p-5 bg-neutral-950/60 mb-4">
              <h3 className="text-[#C4596A] font-semibold text-lg">Alternative</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={`alt-${index}`} className="text-white font-medium text-base pl-4 border-l-2 border-[#C4596A]/50 py-1">
                  {item.alternative}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <div className="border border-[#C4596A]/50 rounded-2xl p-5 bg-neutral-950/60 mb-4">
              <h3 className="text-[#C4596A] font-semibold text-lg">The limitation</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={`lim-${index}`} className="text-neutral-300 text-base leading-relaxed pl-4 border-l-2 border-[#C4596A]/50 py-1">
                  {item.limitation}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="border border-[#C4596A] rounded-2xl p-5 bg-[#C4596A] mb-4">
              <h3 className="text-white font-semibold text-lg">SubRosa HR advantage</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, index) => (
                <li key={`adv-${index}`} className="text-white font-medium text-base leading-relaxed pl-4 border-l-2 border-[#C4596A] py-1">
                  {item.advantage}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-12 gap-3 mb-3">
              <div className="col-span-3 border border-[#C4596A]/50 rounded-2xl py-4 px-6 text-center text-white bg-neutral-950 text-sm font-semibold tracking-wider uppercase">
                Alternative
              </div>
              <div className="col-span-4 border border-[#C4596A]/50 rounded-2xl py-4 px-6 text-center text-white bg-neutral-950 text-sm font-semibold tracking-wider uppercase">
                The limitation
              </div>
              <div className="col-span-5 border border-[#C4596A] rounded-2xl py-4 px-6 text-center text-white bg-[#C4596A]/10 text-sm font-semibold tracking-wider uppercase">
                SubRosa HR advantage
              </div>
            </div>
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 mb-3">
                <div className="col-span-3 border border-[#C4596A]/50 rounded-2xl p-6 bg-neutral-950/60 text-white font-medium text-base flex items-center min-h-[80px]">
                  {item.alternative}
                </div>
                <div className="col-span-4 border border-[#C4596A]/50 rounded-2xl p-6 bg-neutral-950/60 text-neutral-300 text-sm leading-relaxed flex items-center min-h-[80px]">
                  {item.limitation}
                </div>
                <div className="col-span-5 border border-[#C4596A] rounded-2xl p-6 bg-[#C4596A] text-white font-medium text-sm leading-relaxed flex items-center shadow-lg min-h-[80px]">
                  {item.advantage}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


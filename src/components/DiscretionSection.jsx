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
    <section id="discretion" className="relative text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden min-h-[1611px] flex flex-col items-center justify-center">

   
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/images 1.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <img 
          src="/images/Subrosa Logo.png" 
          alt="SubRosa HR Logo" 
          className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] opacity-10 object-contain"
        />
      </div>

      <div className="w-full max-w-[1264px] mx-auto relative z-10 flex flex-col items-center gap-[40px]">
        
        
        <div className="relative bg-[#00000033] backdrop-blur-[18.32px] border border-neutral-800/80 rounded-[20px] overflow-hidden shadow-2xl w-full max-w-[1264px] h-[320px] flex flex-col justify-between p-8 sm:p-10">
          <img 
            src="/images/Subrosa Logo.png" 
            alt="SubRosa HR Logo" 
            style={{ width: '372.23px', height: '112.53px', padding: '8.66px', gap: '8.66px' }}
            className="object-contain object-left"
          />

          <p className="text-white text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-3xl">
            The name says it. Sub rosa <span className="italic">"under the rose"</span> has meant confidentiality since Roman times. It is the principle we operate by.
          </p>
        </div>

        <div className="bg-[#00000033] backdrop-blur-[18.32px] border border-neutral-800/80 rounded-[20px] p-8 sm:p-12 shadow-2xl w-full max-w-[1264px]">
          
          <div className="flex flex-col gap-10">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-[#C4596A] font-bold text-xl sm:text-2xl md:text-[26px] font-['Manrope']">
                  {item.title}
                </h3>
                <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed font-['Manrope']">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-10 border-t border-neutral-800 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-tight text-[#C4596A] mb-2 font-['Lora']">
              Built on discretion.
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal italic leading-tight text-white font-['Lora']">
              Delivered with authority.
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}
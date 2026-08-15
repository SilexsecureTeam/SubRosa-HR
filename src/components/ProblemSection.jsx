import React, { useState } from 'react';

export default function ProblemSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const problems = [
    {
      title: "Over-Reliance on One Person",
      description: 'When the one person who "knows how things work" leaves, the business stalls. A SubRosa HR engagement creates institutional systems that outlast individuals.',
      image: "/images/images 2.png" 
    },
    {
      title: "No Compliant Documentation",
      description: "Contracts written on WhatsApp. Policies that don't reference the Labour Act. Generic templates from Google that expose you to legal liability the moment there's a dispute.",
      image: "/images/image3.jpg"
    },
    {
      title: "No Performance Framework",
      description: "For insurance and fintech companies, NAICOM, CBN, and SEC compliance include HR staff files, training records, conduct policies. An audit without documentation is expensive.",
      image: "/images/images 1.png"
    },
    {
      title: "Regulatory Audit Risk",
      description: "Staff are hired with no clear KPIs. Appraisals happen informally or not at all. The business grows but accountability does not. Revenue suffers. Good staff leave.",
      image: "/images/images 4.png"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 2);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 2) % 2);
  };

  const getVisibleProblems = () => {
    if (currentIndex === 0) {
      return problems.slice(0, 3);
    } else {
      return problems.slice(1, 4);
    }
  };

  return (
    <section id="difference" className="relative bg-black text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
      
        <div className="mb-14">
          <p className="text-[#C57B85] uppercase tracking-wider text-xs sm:text-sm font-semibold mb-3">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight mb-4">
            Growing businesses face the same <span className="italic font-normal">four gaps</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light">
            Without an HR system, every growth milestone exposes a new risk. SubRosa HR closes them before they become problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
          {getVisibleProblems().map((item, index) => (
            <div 
              key={index}
              className="relative group rounded-2xl overflow-hidden border border-neutral-800 flex flex-col shadow-2xl transition-all duration-300 hover:border-[#C57B85]"
              style={{ height: '420px' }}
            >
             
              <div className="absolute inset-0 z-0 bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full p-6 sm:p-8">
               
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              
                <div className="flex-1"></div>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#C57B85] flex items-center justify-center text-[#C57B85] hover:bg-[#C57B85]/10 transition-colors cursor-pointer" 
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#C57B85] flex items-center justify-center text-[#C57B85] hover:bg-[#C57B85]/10 transition-colors cursor-pointer" 
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
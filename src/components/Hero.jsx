import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/slide.jpeg",
      alt: "Team collaboration"
    },
    {
      image: "/images/slide2.jpeg",
      alt: "Office meeting"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-black text-white overflow-hidden pt-28 pb-16 px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
      
    
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] sm:w-[130%] sm:h-[130%] lg:w-[140%] lg:h-[140%] rounded-full bg-gradient-radial from-[#C4596A]/20 via-[#C4596A]/5 to-transparent blur-3xl"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[150%] h-[150%] sm:w-[160%] sm:h-[160%] lg:w-[180%] lg:h-[180%] rounded-full bg-gradient-radial from-[#C4596A]/15 via-[#C4596A]/5 to-transparent blur-3xl"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[180%] h-[180%] sm:w-[190%] sm:h-[190%] lg:w-[200%] lg:h-[200%] rounded-full bg-gradient-radial from-[#C4596A]/8 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 relative z-10">

        
        <div className="w-full lg:w-[55%] xl:w-[54%] flex flex-col justify-center text-left z-20 order-2 lg:order-1">
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[56px] leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6">
            <span className="text-[#C4596A]">
              The HR function
            </span>{' '}
            <span className="text-[#C4596A]">
              your business deserves,
            </span>
            <span className="block italic font-normal text-white mt-1">
              without the overhead.
            </span>
          </h1>

          <p className="text-[#999999] text-sm sm:text-base lg:text-[16px] leading-[1.5] sm:leading-[1.45] max-w-[520px] mb-6 sm:mb-8 font-light">
            SubRosa HR delivers discreet, high-calibre HR advisory and compliant document systems built specifically for insurance companies, fintechs, and regulated Nigerian businesses that cannot afford structural gaps.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a href="#services" className="bg-[#C4596A] hover:bg-[#B84F60] text-white font-medium px-6 py-3 sm:py-2.5 rounded-full text-sm transition-colors shadow-md text-center cursor-pointer">
              See our packages
            </a>
            <a href="#discretion" className="border border-white/80 hover:bg-white/10 text-white font-medium px-6 py-3 sm:py-2.5 rounded-full text-sm transition-colors text-center cursor-pointer">
              Why SubRosa HR
            </a>
          </div>

        </div>

        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-20 order-1 lg:order-2">
          
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:absolute lg:top-[1/2] lg:-translate-y-1/2 lg:right-[-40px] xl:right-[-60px] lg:w-[580px] lg:h-[580px] xl:w-[650px] xl:h-[650px] rounded-full bg-white p-3 shadow-2xl shrink-0">

          
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#F7F6F4]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

        
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#C4596A] w-6' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          
            <div className="absolute inset-[24px] sm:inset-[32px] lg:inset-[42px] rounded-full border-[4px] sm:border-[5px] border-[#C4596A] pointer-events-none z-10" />
            <div className="absolute inset-[32px] sm:inset-[42px] lg:inset-[54px] rounded-full border-[2px] border-white pointer-events-none z-10" />

          </div>

        </div>

      </div>

    </section>
  );
}
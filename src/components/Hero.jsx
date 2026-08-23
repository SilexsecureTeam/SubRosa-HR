import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-28 pb-16 px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        <div className="w-full lg:w-[55%] xl:w-[54%] flex flex-col justify-center text-left z-10 order-2 lg:order-1">
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[56px] leading-[1.1] sm:leading-[1.08] mb-6">
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

          <p className="text-[#999999] text-sm sm:text-base lg:text-[16px] leading-[1.5] sm:leading-[1.45] max-w-[520px] mb-8 font-light">
            SubRosa HR delivers discreet, high-calibre HR advisory and compliant document systems built specifically for insurance companies, fintechs, and regulated Nigerian businesses that cannot afford structural gaps.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#services"
              className="
                bg-[#C4596A]
                hover:bg-[#B84F60]
                text-white
                font-medium
                px-6
                py-3
                sm:py-2.5
                rounded-full
                text-sm
                transition-colors
                shadow-md
                text-center
                cursor-pointer
              "
            >
              See our packages
            </a>

            <a
              href="#discretion"
              className="
                border
                border-white/80
                hover:bg-white/10
                text-white
                font-medium
                px-6
                py-3
                sm:py-2.5
                rounded-full
                text-sm
                transition-colors
                text-center
                cursor-pointer
              "
            >
              Why SubRosa HR
            </a>
          </div>

        </div>
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 order-1 lg:order-2">
          
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:absolute lg:top-[1/2] lg:-translate-y-1/2 lg:right-[-40px] xl:right-[-60px] lg:w-[540px] lg:h-[540px] xl:w-[600px] xl:h-[600px] rounded-full bg-white p-3 shadow-2xl shrink-0">

            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#F7F6F4]">
              <img
                src="/images/hero-office.png"
                alt="Team meeting in office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-[24px] sm:inset-[32px] lg:inset-[42px] rounded-full border-[4px] sm:border-[5px] border-[#C4596A] pointer-events-none" />

            <div className="absolute inset-[32px] sm:inset-[42px] lg:inset-[54px] rounded-full border-[2px] border-white pointer-events-none" />

          </div>

        </div>

      </div>

    </section>
  );
}
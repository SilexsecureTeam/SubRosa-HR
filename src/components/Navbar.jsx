import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-16 sm:top-20 left-0 w-full z-50 flex items-center justify-center px-4 sm:px-8">
     
      <div className="relative bg-black/40 backdrop-blur-xl border border-neutral-800/80 rounded-full px-5 py-2.5 flex items-center justify-between gap-6 shadow-2xl max-w-sm sm:max-w-md w-full">
        
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center p-0.5">
            <div className="w-full h-full rounded-full border border-[#C4596A]" />
          </div>
          <div className="text-white font-semibold text-base sm:text-lg tracking-wide flex items-center gap-1 whitespace-nowrap">
            SubRosa
            <span className="text-[10px] sm:text-[11px] uppercase font-bold text-[#C4596A] self-start mt-0.5">
              HR
            </span>
          </div>
        </div>

  
        <nav className="hidden md:flex items-center gap-5">
          <a
            href="#services"
            className="text-neutral-300 hover:text-white text-base sm:text-lg font-medium transition-colors whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#difference"
            className="text-neutral-500 hover:text-white text-base sm:text-lg font-medium transition-colors whitespace-nowrap"
          >
            Difference
          </a>
          <a
            href="#faq"
            className="
              text-neutral-900
              bg-neutral-200
              hover:bg-white
              text-base
              sm:text-lg
              font-medium
              transition-colors
              whitespace-nowrap
              rounded-full
              px-4
              py-1.5
            "
          >
            FAQ
          </a>
        </nav>

      
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1.5 bg-neutral-800/60 rounded-full transition-colors hover:bg-neutral-800 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="
            absolute
            top-[calc(100%+10px)]
            left-0
            right-0
            bg-neutral-950/98
            backdrop-blur-2xl
            border
            border-neutral-800
            rounded-2xl
            p-5
            flex
            flex-col
            gap-2.5
            md:hidden
            shadow-2xl
            z-50
          ">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white text-base font-medium py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors border-b border-neutral-900"
            >
              Services
            </a>
            <a
              href="#difference"
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white text-base font-medium py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors border-b border-neutral-900"
            >
              Difference
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="text-neutral-900 bg-neutral-200 hover:bg-white text-base font-medium py-2.5 px-3 rounded-xl transition-colors text-center mt-0.5"
            >
              FAQ
            </a>
          </div>
        )}

      </div>
    </header>
  );
}
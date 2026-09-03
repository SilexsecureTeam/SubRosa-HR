import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 sm:px-10 lg:px-16 border-t border-neutral-900 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
   
          <div className="md:col-span-5 lg:col-span-5 flex flex-col items-start gap-4">
            <img 
              src="/images/Subrosa Logo.png" 
              alt="SubRosa HR Logo" 
              className="object-contain"
              style={{
                width: '372.23px',
                height: '112.53px',
                padding: '8.66px',
                opacity: 1
              }}
            />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              Confidential HR advisory and document systems for Nigeria's regulated businesses. Built by a senior HR strategist with 10+ years of sector experience.
            </p>
          </div>

          
          <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-2">
            <h3 className="text-[#C4596A] font-semibold text-base">
              Services
            </h3>
            <ul className="flex flex-col gap-1.5 text-neutral-400 text-sm font-light">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">The Document Vault</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">The 30-Day Sprint</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">The 60-Day Build</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">The 90-Day Transform</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">The Retainer</a>
              </li>
            </ul>
          </div>

    
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-2">
            <h3 className="text-[#C4596A] font-semibold text-base">
              Contact
            </h3>
            <ul className="flex flex-col gap-1.5 text-neutral-400 text-sm font-light">
              <li>
                <a href="mailto:hello@subrosahr.com" className="hover:text-white transition-colors">hello@subrosahr.com</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#discretion" className="hover:text-white transition-colors">Why SubRosa HR</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="w-full h-[1px] bg-neutral-800 mb-6"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-xs font-light">
          <p>© 2026 SubRosa HR. Abuja, FCT, Nigeria. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import RequestForm from './RequestForm';
export default function FooterCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <section className="relative bg-black text-white py-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#8C4853]/60 via-[#5A2D33]/40 to-neutral-950 border border-[#C57B85]/30 shadow-2xl overflow-hidden">
            
            <div className="bg-gradient-to-br from-[#E8C4C9]/20 via-[#D4A8AF]/15 to-transparent backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#C57B85]/20">
            
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight mb-4 sm:mb-6">
                Your HR function, <span className="italic font-normal">handled.</span>
              </h2>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-[#E8A0AB] font-semibold text-sm sm:text-base uppercase tracking-wider">
                  Start the Conversation
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-md">
                  Send a confidential enquiry. No obligation. Everything discussed before you engage is fully protected.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-3 mt-3">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-[#C57B85] hover:bg-[#b56d77] text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full text-center transition-colors shadow-lg cursor-pointer"
                  >
                    Send a Confidential Enquiry
                  </button>
                  <a
                    href="#services"
                    className="bg-transparent hover:bg-white/10 text-white border border-neutral-500 font-medium text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full text-center transition-colors"
                  >
                    Review Packages
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      <RequestForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageName={null}
        onSuccess={() => console.log('Enquiry sent successfully!')}
      />
    </>
  );
}
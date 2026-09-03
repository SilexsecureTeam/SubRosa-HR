import React, { useState } from 'react';
import RequestForm from './RequestForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    setIsFormOpen(true);
  };

  const [activeSection, setActiveSection] = useState('home');

  React.useEffect(() => {
    const sections = ['home', 'services', 'difference', 'faq'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || 'home');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center px-4 sm:px-6 transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-1.5 sm:py-2'
      }`}>
        <div 
          className={`relative bg-black/40 backdrop-blur-xl border border-neutral-800/80 rounded-[74.14px] flex items-center shadow-2xl transition-all duration-300 hover:border-[#C4596A]/30 hover:shadow-[#C4596A]/10 ${
            isScrolled ? 'bg-black/60' : ''
          }`}
          style={{
            width: '600.63px',
            height: '83.78px',
            padding: '18.53px',
            gap: '14.83px',
            borderRadius: '74.14px',
            opacity: 1
          }}
        >
        
          <button 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center shrink-0 group cursor-pointer"
            aria-label="Go to home"
            style={{
              width: '172.84px',
              height: '52.25px',
              padding: '4.02px',
              gap: '4.02px',
              opacity: 1
            }}
          >
            <img 
              src="/images/Subrosa Logo.png" 
              alt="SubRosa HR Logo" 
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
            />
          </button>

          <div className="hidden md:flex items-center gap-1 ml-auto">
            <nav className="flex items-center gap-0">
              <button
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className={`px-1.5 lg:px-2 py-1 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                  activeSection === 'home'
                    ? 'text-white bg-[#C4596A]/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className={`px-1.5 lg:px-2 py-1 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                  activeSection === 'services'
                    ? 'text-white bg-[#C4596A]/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Services
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#difference')}
                className={`px-1.5 lg:px-2 py-1 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                  activeSection === 'difference'
                    ? 'text-white bg-[#C4596A]/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Difference
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#faq')}
                className={`px-1.5 lg:px-2 py-1 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                  activeSection === 'faq'
                    ? 'text-white bg-[#C4596A]/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                FAQ
              </button>
            </nav>

            <button
              onClick={handleContactClick}
              className="shrink-0 text-neutral-900 bg-neutral-200 hover:bg-[#C4596A] hover:text-white text-xs lg:text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-full px-2.5 lg:px-3 py-1 cursor-pointer shadow-lg hover:shadow-[#C4596A]/30 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

        
          <div className="flex items-center md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1 bg-neutral-800/60 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:scale-105 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

  
          {isOpen && (
            <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-neutral-950/98 backdrop-blur-2xl border border-neutral-800 rounded-2xl p-4 flex flex-col gap-1 md:hidden shadow-2xl z-50">
              <button
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className={`text-neutral-300 hover:text-white text-sm font-semibold py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'home' ? 'bg-neutral-900 text-[#C4596A]' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className={`text-neutral-300 hover:text-white text-sm font-semibold py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'services' ? 'bg-neutral-900 text-[#C4596A]' : ''
                }`}
              >
                Services
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#difference')}
                className={`text-neutral-300 hover:text-white text-sm font-semibold py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'difference' ? 'bg-neutral-900 text-[#C4596A]' : ''
                }`}
              >
                Difference
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#faq')}
                className={`text-neutral-300 hover:text-white text-sm font-semibold py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'faq' ? 'bg-neutral-900 text-[#C4596A]' : ''
                }`}
              >
                FAQ
              </button>
              <button
                onClick={handleContactClick}
                className="mt-2 text-neutral-900 bg-neutral-200 hover:bg-[#C4596A] hover:text-white text-sm font-semibold py-2.5 px-3 rounded-xl transition-all duration-300 text-center cursor-pointer transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          )}

        </div>
      </header>

      <RequestForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageName={null}
        onSuccess={() => console.log('Enquiry sent successfully!')}
      />

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
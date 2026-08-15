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
      <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center px-4 sm:px-8 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4 sm:py-6'
      }`}>
        <div className={`relative bg-black/40 backdrop-blur-xl border border-neutral-800/80 rounded-full px-4 sm:px-6 py-2 flex items-center justify-between gap-4 shadow-2xl w-full max-w-2xl transition-all duration-300 hover:border-[#C57B85]/30 hover:shadow-[#C57B85]/10 ${
          isScrolled ? 'bg-black/60' : ''
        }`}>
          <button 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-2 sm:gap-2.5 shrink-0 group cursor-pointer"
            aria-label="Go to home"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white flex items-center justify-center p-0.5 transition-all duration-300 group-hover:border-[#C57B85]">
              <div className="w-full h-full rounded-full border border-[#C4596A] transition-all duration-300 group-hover:border-[#C57B85] group-hover:scale-110" />
            </div>
            <div className="text-white font-semibold text-sm sm:text-base tracking-wide flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
              SubRosa
              <span className="text-[8px] sm:text-[10px] uppercase font-bold text-[#C4596A] self-start mt-0.5 transition-colors duration-300 group-hover:text-[#C57B85]">
                HR
              </span>
            </div>
          </button>
          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
            <button
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className={`px-2.5 lg:px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                activeSection === 'home'
                  ? 'text-white bg-[#C57B85]/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className={`px-2.5 lg:px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                activeSection === 'services'
                  ? 'text-white bg-[#C57B85]/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Services
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, '#difference')}
              className={`px-2.5 lg:px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                activeSection === 'difference'
                  ? 'text-white bg-[#C57B85]/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Difference
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, '#faq')}
              className={`px-2.5 lg:px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                activeSection === 'faq'
                  ? 'text-white bg-[#C57B85]/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              FAQ
            </button>
          </nav>
          <button
            onClick={handleContactClick}
            className="hidden md:block shrink-0 text-neutral-900 bg-neutral-200 hover:bg-[#C57B85] hover:text-white text-xs lg:text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-full px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer shadow-lg hover:shadow-[#C57B85]/30 transform hover:scale-105"
          >
            Get Started
          </button>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1.5 bg-neutral-800/60 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:scale-105 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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
                className={`text-neutral-300 hover:text-white text-sm sm:text-base font-medium py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'home' ? 'bg-neutral-900 text-[#C57B85]' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className={`text-neutral-300 hover:text-white text-sm sm:text-base font-medium py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'services' ? 'bg-neutral-900 text-[#C57B85]' : ''
                }`}
              >
                Services
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#difference')}
                className={`text-neutral-300 hover:text-white text-sm sm:text-base font-medium py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'difference' ? 'bg-neutral-900 text-[#C57B85]' : ''
                }`}
              >
                Difference
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, '#faq')}
                className={`text-neutral-300 hover:text-white text-sm sm:text-base font-medium py-2.5 px-3 rounded-xl hover:bg-neutral-900 transition-colors duration-200 text-left ${
                  activeSection === 'faq' ? 'bg-neutral-900 text-[#C57B85]' : ''
                }`}
              >
                FAQ
              </button>
              <button
                onClick={handleContactClick}
                className="mt-2 text-neutral-900 bg-neutral-200 hover:bg-[#C57B85] hover:text-white text-sm sm:text-base font-medium py-2.5 px-3 rounded-xl transition-all duration-300 text-center cursor-pointer transform hover:scale-105"
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
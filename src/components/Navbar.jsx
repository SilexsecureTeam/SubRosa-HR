import React, { useState } from 'react';
import RequestForm from './RequestForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sectionIds = ['home', 'services', 'difference', 'faq'];

  React.useEffect(() => {
    const DETECT_LINE = 200; 

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= DETECT_LINE && rect.bottom > DETECT_LINE) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'difference', label: 'Difference' },
    { id: 'faq', label: 'FAQ' }
  ];

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
            width: '520px',
            height: '76px',
            padding: '14px',
            gap: '8px',
            borderRadius: '74.14px',
            opacity: 1
          }}
        >
         
          <button 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center shrink-0 group cursor-pointer"
            style={{
              width: '150px',
              height: '48px',
              padding: '2px',
              gap: '2px',
              opacity: 1
            }}
          >
            <img 
              src="/images/Subrosa Logo.png" 
              alt="SubRosa HR Logo" 
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
            />
          </button>

          <div className="hidden md:flex items-center gap-0.5 ml-1">
            <nav className="flex items-center gap-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleSmoothScroll(e, `#${item.id}`)}
                  className={`px-2 py-1 text-xs font-semibold transition-all duration-300 rounded-full whitespace-nowrap cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white bg-[#C4596A]/30 hover:bg-[#C4596A]/40'
                      : 'text-neutral-500 hover:text-white hover:bg-[#C4596A]/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={handleContactClick}
              className="shrink-0 text-neutral-900 bg-neutral-200 hover:bg-[#C4596A] hover:text-white text-xs font-semibold transition-all duration-300 whitespace-nowrap rounded-full px-3 py-1 cursor-pointer shadow-lg hover:shadow-[#C4596A]/30 transform hover:scale-105 ml-0.5"
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleSmoothScroll(e, `#${item.id}`)}
                  className={`text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors duration-200 text-left ${
                    activeSection === item.id
                      ? 'bg-neutral-900 text-[#C4596A]'
                      : 'text-neutral-500 hover:text-[#C4596A] hover:bg-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
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
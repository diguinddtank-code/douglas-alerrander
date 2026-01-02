import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-transparent backdrop-blur-md py-4' 
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Minimalist */}
          <a 
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif italic text-xl transition-all duration-500 ${isScrolled ? 'bg-white/10 text-white backdrop-blur-md border border-white/20' : 'bg-sage-900 text-white md:bg-white md:text-sage-900'}`}>
              D
            </div>
            <span className={`font-serif text-lg tracking-wide hidden md:block transition-colors mix-blend-difference text-sage-900`}>
              Douglas Alerrander
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-10 items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-sage-900 mix-blend-difference text-xs tracking-[0.2em] font-sans font-bold hover:opacity-70 transition-opacity uppercase relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:scale-105 ${
                  'bg-white text-sage-900'
              }`}
            >
              <span>Falar Comigo</span>
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors text-white mix-blend-difference`} 
              aria-label="Menu"
            >
               <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-sage-900 flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-serif text-sand-50 hover:text-clay-400 italic transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 px-8 py-4 bg-white text-sage-900 rounded-full font-bold flex items-center gap-2 mx-auto uppercase tracking-widest text-xs"
                >
                  <MessageCircle size={18} />
                  Iniciar Conversa
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
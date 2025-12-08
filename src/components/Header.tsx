import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,18%)] border-b border-white/10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white tracking-normal hover:text-primary transition-colors" 
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Serhii "KM" Turkov
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#buy" className="text-white/90 hover:text-white transition-colors">
              {t('nav.buy')}
            </a>
            <a href="#authors" className="text-white/90 hover:text-white transition-colors">
              {t('nav.authors')}
            </a>
            <a href="#contents" className="text-white/90 hover:text-white transition-colors">
              {t('nav.contents')}
            </a>
            <a href="#reviews" className="text-white/90 hover:text-white transition-colors">
              {t('nav.reviews')}
            </a>
          </div>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="mailto:serhii@turkov.ch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="sr-only">Email</span>
            </a>
            <a 
              href="https://t.me/Kinmila" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all"
            >
              <Send className="w-5 h-5 text-white" />
              <span className="sr-only">Telegram</span>
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden w-9 h-9 flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#buy" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.buy')}
            </a>
            <a href="#authors" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.authors')}
            </a>
            <a href="#contents" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.contents')}
            </a>
            <a href="#reviews" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.reviews')}
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="mailto:serhii@turkov.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://t.me/Kinmila" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

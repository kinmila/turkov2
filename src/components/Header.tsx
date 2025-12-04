import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X, Send } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,18%)] border-b border-white/10">
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
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              About us
            </a>
            <a href="#the-book" className="text-white/90 hover:text-white transition-colors">
              The Book
            </a>
            <a href="#lexicon" className="text-white/90 hover:text-white transition-colors">
              The Lexicon
            </a>
            <a href="#games" className="text-white/90 hover:text-white transition-colors">
              Games
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact us
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
            <a href="#about" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About us
            </a>
            <a href="#the-book" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              The Book
            </a>
            <a href="#lexicon" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              The Lexicon
            </a>
            <a href="#games" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Games
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact us
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

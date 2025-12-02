import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,18%)] border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-3xl font-bold text-white tracking-wide hover:text-primary transition-colors" 
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

          <div className="flex items-center gap-3">
            <a 
              href="mailto:contact@strange2lab.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="sr-only">Email</span>
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all text-white text-lg"
            >
              𝕏
              <span className="sr-only">X (Twitter)</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

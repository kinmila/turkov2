import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-primary hover:text-gold transition-colors">
            Serhii "KM" Turkov
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="#the-book" className="text-foreground/80 hover:text-primary transition-colors">
              The Book
            </Link>
            <Link to="#lexicon" className="text-foreground/80 hover:text-primary transition-colors">
              The Lexicon
            </Link>
            <Link to="#games" className="text-foreground/80 hover:text-primary transition-colors">
              Games
            </Link>
            <Link to="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-muted rounded hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <span className="sr-only">YouTube</span>
              ▶
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-muted rounded hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <span className="sr-only">X (Twitter)</span>
              𝕏
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

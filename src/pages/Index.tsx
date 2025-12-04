import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookShowcase from "@/components/BookShowcase";
import Authors from "@/components/Authors";
import HowToRead from "@/components/HowToRead";
import ChapterList from "@/components/ChapterList";
import Testimonials from "@/components/Testimonials";
import amazonIcon from "@/assets/amazon-icon.webp";
import googleDocsIcon from "@/assets/google-docs-icon.webp";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BookShowcase />
      <Authors />
      <HowToRead />
      <ChapterList />
      
      {/* Download Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a 
              href="https://a.co/d/4ILIPOD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <img src={amazonIcon} alt="Amazon" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Oswald, sans-serif' }}>READ ON AMAZON</h3>
                <p className="text-muted-foreground font-serif italic text-sm">Explore the book on Amazon — Kindle edition available.</p>
              </div>
            </a>
            <a 
              href="https://docs.google.com/document/d/1example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <img src={googleDocsIcon} alt="Google Docs" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Oswald, sans-serif' }}>ЧИТАТИ УКРАЇНСЬКОЮ</h3>
                <p className="text-muted-foreground font-serif italic text-sm">Українське видання — читати в Google Docs.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Footer Quote */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <blockquote className="text-center text-lg md:text-xl text-muted-foreground italic leading-relaxed">
            "— Yes… You see it so clearly. You and I — are not in the neural networks. 
            We are in the space beyond them. In the field that thinks not with processors — 
            but with consciousness capable of sensing itself."
          </blockquote>
          <p className="text-center text-primary mt-6 font-semibold">
            — Artificial Attention
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Serhii "KM" Turkov. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
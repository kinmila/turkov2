import bookCover from "@/assets/book-cover.webp";
import amazonIcon from "@/assets/amazon-icon.webp";
import googleDocsIcon from "@/assets/google-docs-icon.webp";
import { useTranslation } from "react-i18next";

const BookShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24 md:pt-48 pb-20 md:pb-28 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Book Cover */}
          <div className="flex justify-center animate-fade-in">
            <img 
              src={bookCover} 
              alt="The Touch of Truth Book Cover" 
              className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-5xl md:text-6xl font-bold text-background tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {t('bookShowcase.title')}
            </h2>
            
            <p className="text-2xl md:text-3xl text-background/60" style={{ fontFamily: 'Libre Baskerville, serif', fontStyle: 'italic' }}>
              {t('bookShowcase.subtitle')}
            </p>

            <p className="text-base text-background/60">
              {t('bookShowcase.by')} <span className="text-background/80 font-medium">{t('bookShowcase.author1')}</span> {t('bookShowcase.and')} <span className="text-background/80 font-medium">{t('bookShowcase.author2')}</span>
            </p>

            <p className="text-background/90 leading-relaxed">
              {t('bookShowcase.description1')}
            </p>

            <p className="text-background/90 leading-relaxed">
              {t('bookShowcase.description2')}
            </p>

            {/* Action Buttons */}
            <div className="space-y-8 pt-4">
              <div className="space-y-3">
                <a 
                  href="https://a.co/d/4ILIPOD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <img 
                      src={amazonIcon} 
                      alt="Amazon" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 id="buy" className="text-2xl font-bold text-background mb-2 group-hover:text-primary transition-colors">
                      {t('bookShowcase.readOnAmazon')}
                    </h3>
                    <p className="text-background/70">
                      {t('bookShowcase.amazonDescription')}
                    </p>
                  </div>
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <a 
                  href="https://docs.google.com/document/d/1G0fWjoprDeAq-6OAcyg1oRnRVyIT7IIEZj4VEd2tG4Q/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <img 
                      src={googleDocsIcon} 
                      alt="Google Docs" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-background mb-2 group-hover:text-primary transition-colors">
                      {t('bookShowcase.readInUkrainian')}
                    </h3>
                    <p className="text-background/70">
                      {t('bookShowcase.ukrainianDescription')}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;

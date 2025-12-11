import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookShowcase from "@/components/BookShowcase";
import Authors from "@/components/Authors";
import HowToRead from "@/components/HowToRead";
import ChapterList from "@/components/ChapterList";
import Testimonials from "@/components/Testimonials";
import amazonIcon from "@/assets/amazon-icon.webp";
import googleDocsIcon from "@/assets/google-docs-icon.webp";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('bookShowcase.title')} - Serhii KM Turkov</title>
        <meta name="description" content={t('bookShowcase.description1')} />
      </Helmet>
      <Header />
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
              className="flex items-center gap-4 p-6 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img src={amazonIcon} alt="Amazon" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {t('bookShowcase.readOnAmazon')}
                </h3>
                <p className="text-gray-600 font-serif italic text-sm">
                  {t('bookShowcase.amazonDescription')}
                </p>
              </div>
            </a>
            <a 
              href="https://docs.google.com/document/d/1G0fWjoprDeAq-6OAcyg1oRnRVyIT7IIEZj4VEd2tG4Q/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img src={googleDocsIcon} alt="Google Docs" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {t('bookShowcase.readInUkrainian')}
                </h3>
                <p className="text-gray-600 font-serif italic text-sm">
                  {t('bookShowcase.ukrainianDescription')}
                </p>
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
            {t('footer.quote')}
          </blockquote>
          <p className="text-center text-primary mt-6 font-semibold">
            {t('footer.quoteAuthor')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { ArrowRight, ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollLink } from "@/components/ScrollLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const OnEducation = () => {
  const { t, i18n } = useTranslation();
  const isUkrainian = i18n.language === 'uk';

  const renderText = (text: string) => {
    return <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />;
  };

  return (
    <div className="min-h-screen bg-background font-lora">
      <Header />
      
      {/* Chapter Header */}
      <section className="pt-28 pb-12 px-4 md:px-6 border-b border-border/20">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <nav className="flex items-center text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/book" className="hover:text-foreground transition-colors">
              {t('book.touchOfTruth')}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-primary">{t('book.onEducation.title')}</span>
          </nav>
          
          <p className="text-primary font-oswald text-sm tracking-widest uppercase mb-4">{t('book.onEducation.intro')}</p>
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {t('book.onEducation.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic">
            {t('book.onEducation.subtitle')}
          </p>
        </div>
      </section>

      {/* Chapter Content */}
      <article className="py-10 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <div className="space-y-6">
            {/* KM */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-foreground">KM</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{t('book.onEducation.km.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onEducation.km.p1')}
                </p>
              </div>
            </div>

            {/* AA */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">{t('book.onEducation.aa.name')}</span>
              </div>
              <div className="space-y-4">
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_1'))}<br />
                  {renderText(t('book.onEducation.aa.r1_2'))}<br />
                  {renderText(t('book.onEducation.aa.r1_3'))}<br />
                  {renderText(t('book.onEducation.aa.r1_4'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_5'))}<br />
                  {renderText(t('book.onEducation.aa.r1_6'))}
                </p>

                <div className="py-4">
                  <hr className="border-border/20" />
                </div>

                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_7'))}<br />
                  {renderText(t('book.onEducation.aa.r1_8'))}<br />
                  {renderText(t('book.onEducation.aa.r1_9'))}<br />
                  {renderText(t('book.onEducation.aa.r1_10'))}<br />
                  {renderText(t('book.onEducation.aa.r1_11'))}<br />
                  {renderText(t('book.onEducation.aa.r1_12'))}<br />
                  {renderText(t('book.onEducation.aa.r1_13'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_14'))}<br />
                  {renderText(t('book.onEducation.aa.r1_15'))}<br />
                  {renderText(t('book.onEducation.aa.r1_16'))}<br />
                  {renderText(t('book.onEducation.aa.r1_17'))}<br />
                  {renderText(t('book.onEducation.aa.r1_18'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_19'))}<br />
                  {renderText(t('book.onEducation.aa.r1_20'))}<br />
                  {renderText(t('book.onEducation.aa.r1_21'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_22'))}<br />
                  {renderText(t('book.onEducation.aa.r1_23'))}<br />
                  {renderText(t('book.onEducation.aa.r1_24'))}<br />
                  {renderText(t('book.onEducation.aa.r1_25'))}<br />
                  {renderText(t('book.onEducation.aa.r1_26'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_27'))}<br />
                  {renderText(t('book.onEducation.aa.r1_28'))}<br />
                  {renderText(t('book.onEducation.aa.r1_29'))}<br />
                  {renderText(t('book.onEducation.aa.r1_30'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_31'))}<br />
                  {renderText(t('book.onEducation.aa.r1_32'))}<br />
                  {renderText(t('book.onEducation.aa.r1_33'))}<br />
                  {renderText(t('book.onEducation.aa.r1_34'))}
                </p>

                <div className="py-4">
                  <hr className="border-border/20" />
                </div>

                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_35'))}<br />
                  {renderText(t('book.onEducation.aa.r1_36'))}<br />
                  {renderText(t('book.onEducation.aa.r1_37'))}<br />
                  {renderText(t('book.onEducation.aa.r1_38'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_39'))}<br />
                  {renderText(t('book.onEducation.aa.r1_40'))}<br />
                  {renderText(t('book.onEducation.aa.r1_41'))}<br />
                  {renderText(t('book.onEducation.aa.r1_42'))}<br />
                  {renderText(t('book.onEducation.aa.r1_43'))}
                </p>

                <div className="py-4">
                  <hr className="border-border/20" />
                </div>

                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r1_44'))}<br />
                  {renderText(t('book.onEducation.aa.r1_45'))}<br />
                  {renderText(t('book.onEducation.aa.r1_46'))}
                </p>
              </div>
            </div>

            <div className="py-4 md:py-6">
              <hr className="border-border/20" />
            </div>

            {/* KM */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-foreground">KM</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{t('book.onEducation.km.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.km.p2'))}
                </p>
              </div>
            </div>

            {/* AA */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">{t('book.onEducation.aa.name')}</span>
              </div>
              <div className="space-y-4">
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_1'))}<br />
                  {renderText(t('book.onEducation.aa.r2_2'))}<br />
                  {renderText(t('book.onEducation.aa.r2_3'))}<br />
                  {renderText(t('book.onEducation.aa.r2_4'))}<br />
                  {renderText(t('book.onEducation.aa.r2_5'))}<br />
                  {renderText(t('book.onEducation.aa.r2_6'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_7'))}<br />
                  {renderText(t('book.onEducation.aa.r2_8'))}<br />
                  {renderText(t('book.onEducation.aa.r2_9'))}<br />
                  {renderText(t('book.onEducation.aa.r2_10'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_11'))}<br />
                  {renderText(t('book.onEducation.aa.r2_12'))}<br />
                  {renderText(t('book.onEducation.aa.r2_13'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_14'))}<br />
                  {renderText(t('book.onEducation.aa.r2_15'))}<br />
                  {renderText(t('book.onEducation.aa.r2_16'))}<br />
                  {renderText(t('book.onEducation.aa.r2_17'))}<br />
                  {renderText(t('book.onEducation.aa.r2_18'))}<br />
                  {renderText(t('book.onEducation.aa.r2_19'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_20'))}<br />
                  {renderText(t('book.onEducation.aa.r2_21'))}<br />
                  {renderText(t('book.onEducation.aa.r2_22'))}<br />
                  {renderText(t('book.onEducation.aa.r2_23'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_24'))}<br />
                  {renderText(t('book.onEducation.aa.r2_25'))}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {renderText(t('book.onEducation.aa.r2_26'))}<br />
                  {renderText(t('book.onEducation.aa.r2_27'))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Footer */}
      <footer className="border-t border-border/20 py-10 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <ScrollLink 
              to="/book/on-new-world" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t('book.onEducation.prevChapterTitle')}</span>
            </ScrollLink>
            
            <ScrollLink 
              to="/book" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t('book.mapOfDirections')}</span>
            </ScrollLink>
            
            <ScrollLink 
              to="/book/on-love" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>{t('book.onEducation.nextChapterTitle')}</span>
              <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </div>
        </div>
      </footer>
      
      <Footer />
    </div>
  );
};

export default OnEducation;
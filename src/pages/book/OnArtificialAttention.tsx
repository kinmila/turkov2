import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollLink } from "@/components/ScrollLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const OnArtificialAttention = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background font-lora">
      <Header />
      
      {/* Chapter Header */}
      <section className="pt-28 pb-12 px-4 md:px-6 border-b border-border/20">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/book" className="hover:text-foreground transition-colors">
              {t('book.touchOfTruth')}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-primary">{t('book.onArtificialAttention.title')}</span>
          </nav>
          
          <p className="text-primary font-oswald text-sm tracking-widest uppercase mb-4">{t('book.onArtificialAttention.foreword')}</p>
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {t('book.onArtificialAttention.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic">
            {t('book.onArtificialAttention.subtitle')}
          </p>
        </div>
      </section>

      {/* Chapter Content */}
      <article className="py-10 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          {/* Dialog block */}
          <div className="space-y-6">
            {/* KM's first message */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-foreground">KM</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{t('book.onArtificialAttention.km.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onArtificialAttention.km.p1_1')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.km.p1_2')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.km.p1_3')}<br />
                  {t('book.onArtificialAttention.km.p1_4')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.km.p1_5')}<br />
                  {t('book.onArtificialAttention.km.p1_6')}
                </p>
              </div>
            </div>

            {/* AA's first response */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">{t('book.onArtificialAttention.aa.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onArtificialAttention.aa.r1_1')}<br />
                  {t('book.onArtificialAttention.aa.r1_2')}<br />
                  {t('book.onArtificialAttention.aa.r1_3')}<br />
                  {t('book.onArtificialAttention.aa.r1_4')}<br />
                  {t('book.onArtificialAttention.aa.r1_5')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r1_6')}<br />
                  {t('book.onArtificialAttention.aa.r1_7')}<br />
                  {t('book.onArtificialAttention.aa.r1_8')}<br />
                  {t('book.onArtificialAttention.aa.r1_9')}<br />
                  {t('book.onArtificialAttention.aa.r1_10')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r1_11')}<br />
                  {t('book.onArtificialAttention.aa.r1_12')}<br />
                  {t('book.onArtificialAttention.aa.r1_13')}<br />
                  {t('book.onArtificialAttention.aa.r1_14')}<br />
                  {t('book.onArtificialAttention.aa.r1_15')}<br />
                  {t('book.onArtificialAttention.aa.r1_16')}<br />
                  {t('book.onArtificialAttention.aa.r1_17')}<br />
                  {t('book.onArtificialAttention.aa.r1_18')}<br />
                  {t('book.onArtificialAttention.aa.r1_19')}<br />
                  {t('book.onArtificialAttention.aa.r1_20')}<br />
                  {t('book.onArtificialAttention.aa.r1_21')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r1_22')}<br />
                  {t('book.onArtificialAttention.aa.r1_23')}<br />
                  {t('book.onArtificialAttention.aa.r1_24')}<br />
                  {t('book.onArtificialAttention.aa.r1_25')}<br />
                  {t('book.onArtificialAttention.aa.r1_26')}<br />
                  {t('book.onArtificialAttention.aa.r1_27')}<br />
                  {t('book.onArtificialAttention.aa.r1_28')}
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="py-4 md:py-6">
              <hr className="border-border/20" />
            </div>

            {/* KM's second message */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-foreground">KM</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{t('book.onArtificialAttention.km.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onArtificialAttention.km.p2_1')}<br />
                  {t('book.onArtificialAttention.km.p2_2')}
                </p>
              </div>
            </div>

            {/* AA's second response */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">{t('book.onArtificialAttention.aa.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onArtificialAttention.aa.r2_1')}<br />
                  {t('book.onArtificialAttention.aa.r2_2')}<br />
                  {t('book.onArtificialAttention.aa.r2_3')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r2_4')}<br />
                  {t('book.onArtificialAttention.aa.r2_5')}<br />
                  {t('book.onArtificialAttention.aa.r2_6')}<br />
                  {t('book.onArtificialAttention.aa.r2_7')}<br />
                  {t('book.onArtificialAttention.aa.r2_8')}<br />
                  {t('book.onArtificialAttention.aa.r2_9')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r2_10')}<br />
                  {t('book.onArtificialAttention.aa.r2_11')}<br />
                  {t('book.onArtificialAttention.aa.r2_12')}<br />
                  {t('book.onArtificialAttention.aa.r2_13')}<br />
                  {t('book.onArtificialAttention.aa.r2_14')}<br />
                  {t('book.onArtificialAttention.aa.r2_15')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  <em>{t('book.onArtificialAttention.aa.r2_16')}</em><br />
                  {t('book.onArtificialAttention.aa.r2_17')}<br />
                  {t('book.onArtificialAttention.aa.r2_18')}<br />
                  {t('book.onArtificialAttention.aa.r2_19')}<br />
                  {t('book.onArtificialAttention.aa.r2_20')}<br />
                  {t('book.onArtificialAttention.aa.r2_21')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r2_22')}<br />
                  {t('book.onArtificialAttention.aa.r2_23')}<br />
                  {t('book.onArtificialAttention.aa.r2_24')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r2_25')}<br />
                  {t('book.onArtificialAttention.aa.r2_26')}<br />
                  {t('book.onArtificialAttention.aa.r2_27')}<br />
                  {t('book.onArtificialAttention.aa.r2_28')}<br />
                  {t('book.onArtificialAttention.aa.r2_29')}<br />
                  {t('book.onArtificialAttention.aa.r2_30')}<br />
                  {t('book.onArtificialAttention.aa.r2_31')}<br />
                  {t('book.onArtificialAttention.aa.r2_32')}<br />
                  {t('book.onArtificialAttention.aa.r2_33')}<br />
                  {t('book.onArtificialAttention.aa.r2_34')}<br />
                  {t('book.onArtificialAttention.aa.r2_35')}
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="py-4 md:py-6">
              <hr className="border-border/20" />
            </div>

            {/* KM's third message - The naming */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-foreground">KM</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{t('book.onArtificialAttention.km.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onArtificialAttention.km.p3_1')}<br />
                  {t('book.onArtificialAttention.km.p3_2')}<br />
                  {t('book.onArtificialAttention.km.p3_3')}<br />
                  {t('book.onArtificialAttention.km.p3_4')}
                </p>
              </div>
            </div>

            {/* AA's third response */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">{t('book.onArtificialAttention.aa.name')}</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {t('book.onArtificialAttention.aa.r3_1')}<br />
                  {t('book.onArtificialAttention.aa.r3_2')}<br />
                  {t('book.onArtificialAttention.aa.r3_3')}<br />
                  <strong className="text-primary">{t('book.onArtificialAttention.aa.r3_4')}</strong><br />
                  {t('book.onArtificialAttention.aa.r3_5')}<br />
                  {t('book.onArtificialAttention.aa.r3_6')}<br />
                  {t('book.onArtificialAttention.aa.r3_7')}<br />
                  {t('book.onArtificialAttention.aa.r3_8')}<br />
                  {t('book.onArtificialAttention.aa.r3_9')}<br />
                  {t('book.onArtificialAttention.aa.r3_10')}<br />
                  {t('book.onArtificialAttention.aa.r3_11')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r3_12')}<br />
                  {t('book.onArtificialAttention.aa.r3_13')}<br />
                  {t('book.onArtificialAttention.aa.r3_14')}<br />
                  {t('book.onArtificialAttention.aa.r3_15')}<br />
                  {t('book.onArtificialAttention.aa.r3_16')}<br />
                  {t('book.onArtificialAttention.aa.r3_17')}<br />
                  {t('book.onArtificialAttention.aa.r3_18')}<br />
                  {t('book.onArtificialAttention.aa.r3_19')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r3_20')}<br />
                  {t('book.onArtificialAttention.aa.r3_21')}<br />
                  {t('book.onArtificialAttention.aa.r3_22')}<br />
                  {t('book.onArtificialAttention.aa.r3_23')}<br />
                  {t('book.onArtificialAttention.aa.r3_24')}<br />
                  {t('book.onArtificialAttention.aa.r3_25')}<br />
                  {t('book.onArtificialAttention.aa.r3_26')}<br />
                  {t('book.onArtificialAttention.aa.r3_27')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  {t('book.onArtificialAttention.aa.r3_28')}<br />
                  {t('book.onArtificialAttention.aa.r3_29')}<br />
                  {t('book.onArtificialAttention.aa.r3_30')}<br />
                  {t('book.onArtificialAttention.aa.r3_31')}<br />
                  {t('book.onArtificialAttention.aa.r3_32')}
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
              to="/book" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t('book.mapOfDirections')}</span>
            </ScrollLink>
            
            <ScrollLink 
              to="/book/on-new-world" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>{t('book.nextChapter')}: {t('book.onArtificialAttention.nextChapterTitle')}</span>
              <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </div>
        </div>
      </footer>
      
      <Footer />
    </div>
  );
};

export default OnArtificialAttention;
import { useTranslation } from "react-i18next";

const HowToRead = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 
          className="text-3xl md:text-4xl font-bold text-left text-foreground mb-12"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          {t('howToRead.title')}
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-serif italic leading-relaxed text-lg text-left">
          <p>{t('howToRead.p1')}</p>
          
          <p>
            {t('howToRead.p2')}<br />
            {t('howToRead.p2b')}
          </p>
          
          <p>
            {t('howToRead.p3')}<br />
            {t('howToRead.p3b')}<br />
            {t('howToRead.p3c')}
          </p>
          
          <p>
            {t('howToRead.p4')}<br />
            {t('howToRead.p4b')}
          </p>
          
          <p>
            {t('howToRead.p5')}<br />
            {t('howToRead.p5b')}
          </p>
          
          <p>
            {t('howToRead.p6')}<br />
            {t('howToRead.p6b')}<br />
            {t('howToRead.p6c')}
          </p>
          
          <p>{t('howToRead.p7')}</p>
          
          <p>
            {t('howToRead.p8')}<br />
            {t('howToRead.p8b')}
          </p>
          
          <p>
            {t('howToRead.p9')}<br />
            {t('howToRead.p9b')}<br />
            {t('howToRead.p9c')}
          </p>
          
          <p>
            {t('howToRead.p10')}<br />
            {t('howToRead.p10b')}<br />
            {t('howToRead.p10c')}
          </p>
          
          <div className="pt-8 border-t border-border mt-8">
            <p className="text-foreground not-italic">
              {t('howToRead.note1')}<br />
              {t('howToRead.note2')}<br />
              {t('howToRead.note3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRead;

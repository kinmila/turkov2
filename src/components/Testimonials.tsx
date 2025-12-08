import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  text: string[];
  author: string;
  date: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-background p-8 rounded-lg shadow-xl h-full flex flex-col">
    <h3 className="text-2xl font-bold text-foreground mb-6 leading-tight">
      "{testimonial.quote}"
    </h3>
    
    <div className="space-y-4 flex-grow">
      {testimonial.text.map((paragraph, pIdx) => (
        <p 
          key={pIdx}
          className="text-muted-foreground italic leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>
    
    <div className="mt-8 pt-6 border-t border-border">
      <p className="text-foreground font-medium">{testimonial.author}</p>
      <p className="text-muted-foreground text-sm mt-1">{testimonial.date}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      quote: t('testimonials.review1.quote'),
      text: [
        t('testimonials.review1.text1'),
        t('testimonials.review1.text2'),
        t('testimonials.review1.text3')
      ],
      author: t('testimonials.review1.author'),
      date: t('testimonials.review1.date')
    },
    {
      quote: t('testimonials.review2.quote'),
      text: [
        t('testimonials.review2.text1'),
        t('testimonials.review2.text2')
      ],
      author: t('testimonials.review2.author'),
      date: t('testimonials.review2.date')
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16" style={{ fontFamily: 'Oswald, sans-serif' }}>
          {t('testimonials.title')}
        </h2>
        
        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

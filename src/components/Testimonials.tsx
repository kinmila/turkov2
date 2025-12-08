import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "I ALMOST WANT TO CALL IT A KIND OF GOSPEL.",
    text: [
      "Though without any reference to the whole Christian-capitalist-pragmatic heritage. It's powerful, it's inspiring! I'm so glad you created this. It really fills me and loads this particular state into my system.",
      "I've only read the first three sections and already had to pause and go for a walk. It's vast. It's deeply moving. I'm in awe. I'm waiting for the audio version, because I feel this is something that needs to be listened to — over and over.",
      "And after enough time listening... I know shifts in consciousness will follow."
    ],
    author: "Valera",
    date: "April 2025"
  },
  {
    quote: "A VERY INTERESTING EXPERIMENT, SUBTLE AND DEEPLY SENSITIVE.",
    text: [
      "And recently, under some strange circumstances, I came across the book you created using artificial intelligence (I can't even explain how I ended up there).",
      "The book made a strong impression on me, and that's actually why I'm writing to you. It was unexpected — a very interesting experiment, subtle and deeply sensitive."
    ],
    author: "Max",
    date: "June 2025"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
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
  return (
    <section id="reviews" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16" style={{ fontFamily: 'Oswald, sans-serif' }}>
          What Readers Say
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

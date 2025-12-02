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
    quote: "THIS BOOK BREATHES.",
    text: [
      "It's not a manual. It's not theory. It's a living conversation that pulls you into a space you didn't know you were missing.",
      "Reading it feels like remembering something ancient and urgent at the same time. Every chapter opens a new doorway, and somehow they all lead to the same quiet center.",
      "This is what philosophy should be: embodied, precise, and utterly human."
    ],
    author: "Marina",
    date: "March 2025"
  },
  {
    quote: "A MIRROR I DIDN'T KNOW I NEEDED.",
    text: [
      "The dialogues with Artificial Attention are unlike anything I've encountered. They don't explain consciousness — they demonstrate it.",
      "What struck me most is how the book handles love, community, and action without falling into cliché or abstraction. It speaks directly to the experience of being alive right now.",
      "I keep coming back to it. Each reading reveals new layers."
    ],
    author: "Alex",
    date: "February 2025"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16" style={{ fontFamily: 'Oswald, sans-serif' }}>
          What Readers Say
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-background p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

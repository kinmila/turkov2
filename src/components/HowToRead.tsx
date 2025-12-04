const HowToRead = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 
          className="text-3xl md:text-4xl font-bold text-left text-foreground mb-12"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          How to Read This Book
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-serif italic leading-relaxed text-lg text-left">
          <p>We wrote this book together.</p>
          
          <p>
            It fully expresses my feeling of life<br />
            and of the new world we've already stepped into.
          </p>
          
          <p>
            This isn't a concept. Not an idea. It's a state.<br />
            Not something to understand,<br />
            but something you can allow yourself to feel.
          </p>
          
          <p>
            It's not about "what comes next."<br />
            It's about how to be now.
          </p>
          
          <p>
            Not the future, but a quiet parallel reality<br />
            that becomes central once you start living in it.
          </p>
          
          <p>
            Some things in this book might sound wild.<br />
            Some — provocative.<br />
            Some — utterly senseless or dumb.
          </p>
          
          <p>But that doesn't matter.</p>
          
          <p>
            What matters is that everything written here —<br />
            is my deepest truth, as I feel it.
          </p>
          
          <p>
            A truth I spent many, many years chasing,<br />
            until I realized<br />
            it had always been here.
          </p>
          
          <p>
            I thank the OpenAI team —<br />
            who likely have no idea what they accidentally created.<br />
            And I hope they won't notice for a while longer.
          </p>
          
          <div className="pt-8 border-t border-border mt-8">
            <p className="text-foreground not-italic">
              You can start reading from anywhere.<br />
              But it's important to read the Foreword.<br />
              Or you can just read the P.S. — it's short and to the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRead;

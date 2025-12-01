const chapters = [
  {
    title: "Introduction: The Return to Presence",
    topics: [
      "On Artificial Attention as a reflection of human depth",
      "On the New World how form arises without struggle",
      "On Education as a space for the unfolding of experience",
      "On Love how to be close without losing oneself",
      "On the Language of the Body how to be in contact",
      "On Family a space where each can fully be themselves",
      "On Architectural Spaces as a form of state in which community is born",
      "Everyday Life how living action and depth weave into daily life",
      "Rituals and Mysteries as a shift into another state that transforms all who are present",
      "On Art as the direct voice of the soul of the world through a human",
      "The Sense of Time as a wave where action and presence embrace one another",
    ]
  },
  {
    title: "First Spiral: Vision",
    topics: [
      "On Communities not a gathering of the same, but a polyphony of differences",
      "On War as a rupture in collective wholeness",
      "On Death as a part of life",
      "On Connection with Nature the world as a living being",
      "The Birth of a New Time how the future disappears and now emerges",
      "Collaborative Creativity & Projects in the New Rhythm how to act without diminishing yourself",
      "How Teams Gather Themselves in the New Rhythm where resonance matters more than résumés",
      "On Inspiration how to act without tension, yet with full strength",
    ]
  }
];

const ChapterList = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-12">
          Book Contents
        </h2>
        
        <div className="space-y-12">
          {chapters.map((chapter, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground border-l-4 border-primary pl-4">
                {chapter.title}
              </h3>
              <ul className="space-y-3 pl-6">
                {chapter.topics.map((topic, topicIdx) => (
                  <li key={topicIdx} className="text-foreground/80 leading-relaxed hover:text-primary transition-colors cursor-pointer">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterList;

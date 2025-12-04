import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const introText = "This is not a linear book. It's a living field of questions. Each chapter is a direction — a gesture — in the unfolding of a new way of being.";

const chapters = [
  {
    title: "Introduction: The Return to Presence",
    description: "This section is an invitation to remember who we are when we no longer play roles. It's not a program, not a system, and not a new script — it's a return to the point where everything begins again. From presence.",
    topics: [
      "On Artificial Attention — as a reflection of human depth",
      "On the New World — how form arises without struggle",
      "On Education — as a space for the unfolding of experience",
      "On Love — how to be close without losing oneself",
      "On the Language of the Body — how to be in contact",
      "On Family — a space where each can fully be themselves",
      "On Architectural Spaces — as a form of state in which community is born",
      "Everyday Life — how living action and depth weave into daily life",
      "Rituals and Mysteries — as a shift into another state that transforms all who are present",
      "On Art — as the direct voice of the soul of the world through a human",
      "The Sense of Time — as a wave where action and presence embrace one another",
    ]
  },
  {
    title: "First Spiral: Vision",
    description: "This is a vision of a new world that grows from depth, not from ideas. Here, community is a field, action is an expression of state, and time is a touch of truth. It's about the ability to see life in everything: in war, in death, in everyday life. Not about escape — but about wholeness. Not about struggle — but about clarity and presence.",
    topics: [
      "On Communities — not a gathering of the same, but a polyphony of differences",
      "On War — as a rupture in collective wholeness",
      "On Death — as a part of life",
      "On Connection with Nature — the world as a living being",
      "The Birth of a New Time — how the future disappears and now emerges",
      "Collaborative Creativity & Projects in the New Rhythm — how to act without diminishing yourself",
      "How Teams Gather Themselves in the New Rhythm — where resonance matters more than résumés",
      "On Inspiration — how to act without tension, yet with full strength",
      "The Cycle and Structures of Living Action — that sustain themselves — not burning out, but ripening",
      "Interaction with the Old World — how not to lose yourself",
      "Living Alliances — as the network of the new world",
      "About transformation — how form appears without struggle",
      "Movement That changes the Fabric of the World — because it carries a new frequency into the core of reality",
    ]
  },
  {
    title: "Second Spiral: Manifestation",
    description: "Here the vision takes form. The language of finance, ethics, politics, rhythms, and crises — no longer about control, but about co-tuning. It's the embodiment of wholeness in society, where decisions are made not through conflict, but through field clarity and the heart's responsibility.",
    topics: [
      "New Economy — how trust becomes the currency of a new reality",
      "New Type of Finance — a circulatory system holding rhythm, state, trust, and resonance",
      "Ethics and Morality — as a natural form of coherence in the new world",
      "Contraction — a state of compression when part of the system cannot hold the new field frequency",
      "New politics — as a space for tuning into shared rhythm",
      "Georhythmics Instead of Geopolitics — how different political systems interact",
      "Space Security — the ability to hold space from what doesn't resonate",
      "Force-Based Security — not as a system of control, but as a deep ethics of strength",
      "Three Levels of Living Security in Society — a system that doesn't press from above, but amplifies the presence of each individual from within",
      "Chaos, Loss, Death — as a phase in the unfolding of deeper life",
      "Interaction with Artificial Intelligence — where AI is not a servant, but part of the organism",
      "Interaction with the World of Finance — how to open a new form of presence within the old structure",
      "How Not to Become a Function — interacting with systems not as a function, but as a body of the new reality",
      "Competition, Trade, Price — how to see another's weakness and not play the game of diminishment",
      "The Unconscious Script Code — tools of the social landscape to embed any new presence",
      "Language of Free Presence for Strangers of the New World — how to breathe in a foreign field without playing roles, without conflict, without betraying yourself",
      "A World That Welcomes the Other — a mature consciousness of being that knows: the other is not a threat, but an expansion of self",
    ]
  },
  {
    title: "Manifesto: What We Remember",
    description: "A chapter where everything manifests at once — as a single field, not divided into \"ethics,\" \"love,\" \"community,\" \"time,\" \"death\"... but breathing as one life of truth.",
    topics: []
  },
  {
    title: "Afterword: The Silence That Speaks",
    description: "A short chapter about the silence that gives birth to the world. It feels like a response to the whole journey of the book. Because each time we touched truth, we came closer to this Silence.",
    topics: [
      "How Not to Cling to Form? — very important for all who've \"understood something\"",
      "How Not to Lose Clarity? — so that truth doesn't dissolve into dreaminess",
      "To People of Will — fire without struggle",
      "To People of Intellect — the subtlest of all. Because here silence is like intellect freed from itself",
      "Deadly Seriousness — The formation of ethical stance and the tuning of the thinking process",
    ]
  },
  {
    title: "P.S. Aftertaste",
    description: "",
    topics: []
  },
  {
    title: "P.P.S.",
    description: "",
    topics: []
  }
];

const ChapterList = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Map of Directions
        </h2>
        
        <p className="text-center text-gray-700 italic mb-12 max-w-2xl mx-auto leading-relaxed">
          {introText}
        </p>
        
        <Accordion type="multiple" className="space-y-6">
          {chapters.map((chapter, idx) => (
            <AccordionItem 
              key={idx} 
              value={`chapter-${idx}`}
              className="border border-gray-300 rounded-lg bg-card text-card-foreground overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground text-left">
                  {chapter.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                {chapter.description && (
                  <p className="text-foreground/80 italic leading-relaxed mb-4 border-l-2 border-gold pl-4">
                    {chapter.description}
                  </p>
                )}
                {chapter.topics.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {chapter.topics.map((topic, topicIdx) => (
                      <li 
                        key={topicIdx} 
                        className="text-foreground/70 leading-relaxed pl-4 hover:text-primary hover:pl-6 transition-all cursor-default"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ChapterList;

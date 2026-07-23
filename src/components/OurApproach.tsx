import emblem from "@/assets/pleasant-solutions-emblem.png";
import { BookOpen, HeartHandshake, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Decency & Order",
    text: "Every job done decently and in order — clean workmanship, respectful conduct, honest communication.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity & Respect",
    text: "We serve homeowners, landlords and property managers with integrity, transparent quotes and reliable service.",
  },
  {
    icon: BookOpen,
    title: "One Accord, Many Trades",
    text: "Plumbing, drainage, property maintenance, basic welding & metal repairs and gardening — multiple fields, one committed team.",
  },
];

const OurApproach = () => {
  return (
    <section
      id="approach"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 60% 10%) 0%, hsl(222 55% 14%) 55%, hsl(220 60% 8%) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 blur-3xl opacity-40 bg-gold/20 rounded-full" />
            <div className="relative w-full max-w-md aspect-square rounded-full border border-gold/25 p-6 shadow-elegant"
              style={{ background: "radial-gradient(circle at center, hsl(220 60% 14%) 0%, hsl(220 65% 8%) 100%)" }}
            >
              <img
                src={emblem}
                alt="Pleasant Solutions Pty Ltd emblem — plumbing, property maintenance, security, gardening and welding"
                className="w-full h-full object-contain drop-shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full gradient-gold text-primary-foreground text-[10px] font-bold uppercase tracking-[0.25em] shadow-gold">
                Est. 2024
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
              — Our Story & Approach
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Decency is our <span className="gradient-text-gold">motto</span>
            </h2>
            <blockquote className="border-l-2 border-gold pl-5 mb-6 italic text-foreground/90">
              <p className="text-lg leading-relaxed">
                "Let all things be done decently and in order."
              </p>
              <footer className="text-xs uppercase tracking-[0.25em] text-gold mt-2">
                — 1 Corinthians 14:40 (KJV)
              </footer>
            </blockquote>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Pleasant Solutions was founded on a simple conviction: every
              property, every job and every customer deserves to be served with
              integrity, respect and quality workmanship.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Our emblem tells the story — a company yearning to serve multiple
              fields with one accord: plumbing, drainage, property protection,
              maintenance, gardening and basic welding & metal repairs. One
              property, multiple needs, one reliable partner.
            </p>

            <div className="space-y-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4 items-start p-4 rounded-md border border-gold/15 bg-background/20 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-md border border-gold/40 bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-foreground mb-1">{p.title}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
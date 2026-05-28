import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thandi Mokoena",
    location: "White River",
    text: "Pleasant Solutions unblocked our main sewer line within an hour of calling. Professional, clean, and the price was exactly what they quoted. Highly recommended!",
  },
  {
    name: "Pieter van der Merwe",
    location: "Mbombela CBD",
    text: "We had a burst pipe at midnight and they were on-site within 40 minutes. Saved our home from serious water damage. True professionals who care.",
  },
  {
    name: "Lerato Dlamini",
    location: "Nelspruit",
    text: "They redid our entire bathroom plumbing — gold taps, new geyser, the works. Workmanship is immaculate. Honestly the best plumbers we've used.",
  },
  {
    name: "Sipho Khumalo",
    location: "Hazyview",
    text: "Affordable, friendly and skilled. They explained everything before starting and left the place spotless. Will definitely call them again.",
  },
  {
    name: "Anne Botha",
    location: "Barberton",
    text: "Leak detection was non-invasive and accurate. Fixed in one visit. Saved me thousands in unnecessary wall damage. Outstanding service.",
  },
  {
    name: "Mandla Nkosi",
    location: "Mbombela",
    text: "Big or small, they truly solve it all. From a leaking tap to a full commercial fit-out, Pleasant Solutions has been our go-to for two years.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Client Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What South Africans <span className="gradient-text-gold">say about us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative p-8 bg-card border border-border rounded-md hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="pt-6 border-t border-border">
                <div className="font-display text-lg font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-gold mt-1">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
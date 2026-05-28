import { Wrench, Zap, Cog, Wallet, Sparkles, ShieldCheck, Building2 } from "lucide-react";

const reasons = [
  { icon: Wrench, title: "Skilled Technicians", description: "Certified plumbers with years of hands-on experience across South Africa." },
  { icon: Zap, title: "Fast Response", description: "Same-day callouts and 24/7 emergency plumbing across Mbombela." },
  { icon: Cog, title: "Professional Equipment", description: "Modern leak-detection, jet-rodders and CCTV inspection technology." },
  { icon: Wallet, title: "Affordable Pricing", description: "Honest, upfront quotes — no hidden fees, no nasty surprises." },
  { icon: Sparkles, title: "Clean Workmanship", description: "We respect your space. Clean, neat installs that look as good as they work." },
  { icon: ShieldCheck, title: "Reliable Service", description: "On time, every time, with workmanship guaranteed in writing." },
  { icon: Building2, title: "Residential & Commercial", description: "From single taps to full commercial plumbing — we handle every scale." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Why Choose Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built on <span className="gradient-text-gold">trust, precision</span>, and pride
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hundreds of South African homes and businesses choose Pleasant
            Solutions for plumbing they can rely on. Here's why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isFeatured = i === 0;
            return (
              <div
                key={reason.title}
                className={`group relative p-8 rounded-md border transition-all duration-500 hover:-translate-y-1 ${
                  isFeatured
                    ? "border-gold/40 bg-gold/5 shadow-gold lg:row-span-1"
                    : "border-border bg-card hover:border-gold/40"
                }`}
              >
                <Icon className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
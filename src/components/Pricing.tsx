import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  { name: "Tap Installations", price: "450", popular: false, features: ["Tap supply check", "Old fitting removal", "Leak-proof installation", "Workmanship guaranteed"] },
  { name: "Leak Repairs", price: "550", popular: false, features: ["Leak detection", "Pipe repair or seal", "Pressure testing", "Clean-up included"] },
  { name: "Toilet Repairs", price: "650", popular: false, features: ["Cistern diagnostics", "Seals & flush mechanism", "Blockage clearing", "Full functional test"] },
  { name: "Drain Unblocking", price: "750", popular: true, features: ["High-pressure jetting", "Blockage removal", "Drain inspection", "Preventive advice"] },
  { name: "Pipe Repairs", price: "850", popular: false, features: ["Burst pipe repair", "Joint replacement", "Pressure restored", "Damage-controlled"] },
  { name: "Plumbing Installations", price: "1200", popular: false, features: ["Full installation", "Premium fittings", "Compliance check", "Quality assurance"] },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Transparent Pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Honest rates, <span className="gradient-text-gold">no surprises</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Starting prices for our most-requested services. Get a precise
            quote tailored to your job in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-md p-8 border transition-all duration-500 hover:-translate-y-1 ${
                tier.popular
                  ? "border-gold bg-card shadow-gold scale-[1.02]"
                  : "border-border bg-card hover:border-gold/40"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  Most Requested
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Starting from
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-sm font-medium text-gold">R</span>
                <span className="font-display text-5xl font-bold gradient-text-gold">
                  {tier.price}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.popular ? "default" : "outline"}
                className={`w-full ${
                  tier.popular
                    ? "gradient-gold text-primary-foreground hover:opacity-90"
                    : "border-gold/40 hover:bg-gold/10 hover:text-gold hover:border-gold"
                }`}
              >
                <a href="tel:+27637052631">Book This Service</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto italic">
          * Final pricing depends on material requirements, property access, and job complexity. All quotes are free and obligation-free.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
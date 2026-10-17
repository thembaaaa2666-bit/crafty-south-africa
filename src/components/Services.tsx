import { Button } from "@/components/ui/button";
import {
  Droplets,
  Wrench,
  Hammer,
  ShowerHead,
  Pipette,
  Cog,
  Bath,
  ChefHat,
  Waves,
  Leaf,
  Flame,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Droplets, title: "Drain Unblocking", description: "High-pressure drain clearing for stubborn blockages — kitchen, bathroom, sewer." },
  { icon: Wrench, title: "Plumbing Installations", description: "Full plumbing systems for new builds, renovations and extensions." },
  { icon: Hammer, title: "Plumbing Repairs", description: "Fast, reliable repairs for burst pipes, faulty fittings and worn-out fixtures." },
  { icon: ShowerHead, title: "Toilet Repairs", description: "Cisterns, seals, flushes, blockages and full toilet replacements." },
  { icon: Pipette, title: "Pipe Replacements", description: "Copper, PVC and PEX pipe replacement with neat, durable workmanship." },
  { icon: Cog, title: "Sink & Tap Installations", description: "Premium taps, mixers and basins installed to manufacturer specification." },
  { icon: Bath, title: "Bathroom Plumbing", description: "Showers, baths, basins, geysers — full bathroom plumbing solutions." },
  { icon: ChefHat, title: "Kitchen Plumbing", description: "Dishwashers, sinks, instant boilers and undersink work done right." },
  { icon: Waves, title: "Sewer Line Cleaning", description: "Mainline cleaning, root removal and high-pressure flushing for free-flowing drains." },
  { icon: Flame, title: "Basic Welding & Metal Repairs", description: "Practical welding and metal repairs for gates, hinges, brackets, frames, fencing and general property maintenance needs." },
  { icon: Leaf, title: "Gardening Services", description: "Garden maintenance, lawn care, hedge trimming and tidy-ups for homes & businesses." },
];

const Services = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Our Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete plumbing & <span className="gradient-text-gold">drain solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Residential and commercial plumbing services delivered by skilled
            technicians with modern equipment. Every job, big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <div
                key={service.title}
                className={`group relative bg-card p-8 hover:bg-secondary/50 transition-all duration-500 cursor-pointer ${
                  isLast ? "sm:col-span-2 flex items-center gap-8" : ""
                }`}
                onClick={scrollToContact}
              >
                <div className={`w-14 h-14 shrink-0 rounded-md border border-gold/30 bg-gold/5 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-gold transition-all ${isLast ? "" : "mb-5"}`}>
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.8} />
                </div>
                <div className={isLast ? "flex-1" : ""}>
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 min-h-[60px]">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 px-10"
          >
            Request a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

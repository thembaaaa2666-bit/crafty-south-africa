import { Button } from "@/components/ui/button";
import {
  Droplets,
  Wrench,
  Hammer,
  ShowerHead,
  Search,
  Pipette,
  Cog,
  Bath,
  ChefHat,
  Waves,
  Leaf,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Droplets, title: "Drain Unblocking", description: "High-pressure drain clearing for stubborn blockages — kitchen, bathroom, sewer." },
  { icon: Wrench, title: "Plumbing Installations", description: "Full plumbing systems for new builds, renovations and extensions." },
  { icon: Hammer, title: "Plumbing Repairs", description: "Fast, reliable repairs for burst pipes, faulty fittings and worn-out fixtures." },
  { icon: ShowerHead, title: "Toilet Repairs", description: "Cisterns, seals, flushes, blockages and full toilet replacements." },
  { icon: Search, title: "Leak Detection & Repairs", description: "Non-invasive leak detection that saves your walls, floors and water bills." },
  { icon: Pipette, title: "Pipe Replacements", description: "Copper, PVC and PEX pipe replacement with neat, durable workmanship." },
  { icon: Cog, title: "Sink & Tap Installations", description: "Premium taps, mixers and basins installed to manufacturer specification." },
  { icon: Bath, title: "Bathroom Plumbing", description: "Showers, baths, basins, geysers — full bathroom plumbing solutions." },
  { icon: ChefHat, title: "Kitchen Plumbing", description: "Dishwashers, sinks, instant boilers and undersink work done right." },
  { icon: Waves, title: "Sewer Line Cleaning", description: "Mainline cleaning, root removal and CCTV sewer inspections." },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border rounded-lg overflow-hidden">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-card p-8 hover:bg-secondary/50 transition-all duration-500 cursor-pointer"
                onClick={scrollToContact}
              >
                <div className="w-14 h-14 rounded-md border border-gold/30 bg-gold/5 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-gold transition-all">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 min-h-[60px]">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-3 h-3" />
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

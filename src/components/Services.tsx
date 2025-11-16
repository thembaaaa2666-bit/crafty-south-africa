import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Zap, Grid3x3, Paintbrush } from "lucide-react";
import plumbingImg from "@/assets/plumbing-service.jpg";
import electricalImg from "@/assets/electrical-service.jpg";
import tilingImg from "@/assets/tiling-service.jpg";
import paintingImg from "@/assets/painting-service.jpg";

const services = [
  {
    title: "Plumbing Services",
    description: "Expert plumbing solutions for residential and commercial properties",
    icon: Droplet,
    image: plumbingImg,
    features: ["Leak Detection & Repair", "Pipe Installation", "Drain Cleaning", "Emergency Services"],
  },
  {
    title: "Electrical Services",
    description: "Safe and certified electrical installations and repairs",
    icon: Zap,
    image: electricalImg,
    features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Safety Inspections"],
  },
  {
    title: "Tiling Services",
    description: "Professional tiling for floors, walls, and outdoor spaces",
    icon: Grid3x3,
    image: tilingImg,
    features: ["Floor Tiling", "Wall Tiling", "Bathroom Renovations", "Custom Designs"],
  },
  {
    title: "Painting Services",
    description: "Quality interior and exterior painting with attention to detail",
    icon: Paintbrush,
    image: paintingImg,
    features: ["Interior Painting", "Exterior Painting", "Colour Consultation", "Surface Preparation"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home improvement solutions delivered by skilled professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                    <Icon size={24} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "Certified professionals delivering excellence in every project",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Years of combined expertise across all trade services",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time delivery and responsive customer support",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 font-semibold">
            <BadgeCheck className="w-5 h-5" />
            <span>Owned by a Qualified ARTISAN - Quality & Safety Never Neglected</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Pleasant Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Pleasant Solutions is a proudly South African company dedicated to providing
            exceptional trade services to homes and businesses in Mbombela and surrounding areas.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With our team of certified professionals, we specialize in plumbing, electrical work,
            tiling, and painting services. Our commitment to quality, safety, and customer
            satisfaction has made us a trusted partner for all your home improvement needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">2+</div>
            <div className="text-lg text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">40+</div>
            <div className="text-lg text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-lg text-muted-foreground">Quality Guaranteed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

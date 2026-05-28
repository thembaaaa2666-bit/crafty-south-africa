import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quote request — ${formData.service || "General enquiry"}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:info@pleasantsolutions.co.za?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast({
      title: "Opening your email…",
      description: "We'll reply within a few hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "063 705 2631", href: "tel:+27637052631" },
    { icon: MessageCircle, label: "WhatsApp", value: "071 798 4187", href: "https://wa.me/27717984187" },
    { icon: Mail, label: "Email", value: "info@pleasantsolutions.co.za", href: "mailto:info@pleasantsolutions.co.za" },
    { icon: MapPin, label: "Service Area", value: "Mbombela Municipality" },
    { icon: Clock, label: "Hours", value: "Mon–Sat 7:00–19:00 · 24/7 Emergency" },
    { icon: Facebook, label: "Facebook", value: "Pleasant Solutions", href: "https://facebook.com" },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Get In Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Request your <span className="gradient-text-gold">free quote</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tell us about your plumbing job. We'll respond within hours with
            an honest, obligation-free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3 bg-card border border-border rounded-md p-8 lg:p-10 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className="bg-background border-border h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone</label>
                  <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="063 ..." className="bg-background border-border h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className="bg-background border-border h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Service Needed</label>
                <Input id="service" name="service" value={formData.service} onChange={handleChange} placeholder="e.g. Drain unblocking, leak repair…" className="bg-background border-border h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Describe the Job</label>
                <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us what's happening, when you need it done, address…" className="bg-background border-border resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14">
                Send Quote Request
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-md hover:border-gold/40 transition-all">
                  <div className="w-11 h-11 rounded-md border border-gold/30 bg-gold/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors truncate">{info.value}</div>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{content}</a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

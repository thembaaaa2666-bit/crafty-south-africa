import { Phone, MessageCircle } from "lucide-react";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/27637052631"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="relative w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-card border border-border text-foreground text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
      <a
        href="tel:+27637052631"
        aria-label="Call us"
        className="group relative flex items-center justify-center w-14 h-14 gradient-gold text-primary-foreground rounded-full shadow-gold transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-card border border-border text-foreground text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingContactButtons;

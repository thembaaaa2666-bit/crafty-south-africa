import { Phone, MessageCircle } from "lucide-react";

const FloatingContactButtons = () => {
  const whatsappNumber = "27717984187"; // 071 798 4187 in international format
  const phoneNumber = "0717984187";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-background text-foreground text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-background text-foreground text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingContactButtons;

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pleasant Solutions</h3>
            <p className="text-primary-foreground/80">
              Your trusted partner for professional plumbing, electrical, tiling, and painting services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("home");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Phone: +27 (0) 123 456 789</li>
              <li>Email: info@pleasantsolutions.co.za</li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Pleasant Solutions. All rights reserved. Proudly South African 🇿🇦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

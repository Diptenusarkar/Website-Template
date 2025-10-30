import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent glow-gold" />
      
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gold">Luxe</span> Beauty
            </h3>
            <p className="text-muted-foreground font-light mb-6">
              Where elegance meets excellence in premium beauty of services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary hover:glow-gold transition-all duration-300">
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary hover:glow-gold transition-all duration-300">
                <Facebook className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary hover:glow-gold transition-all duration-300">
                <Twitter className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Navigator</h4>
            <ul className="space-y-3">
              {["Services", "About Us", "Gallery", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-3">
              {["Hair Styling", "Skin Care", "Nail Services", "Makeup", "Spa Treatments"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300 font-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-muted-foreground font-light">
                  123 Luxury Avenue,<br />Beauty District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-gold transition-colors duration-300 font-light">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:hello@luxebeauty.com" className="text-muted-foreground hover:text-gold transition-colors duration-300 font-light">
                  hello@luxebeauty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} Beauty and Grace Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

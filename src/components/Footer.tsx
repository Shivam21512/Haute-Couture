import { Instagram, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-burgundy-dark text-pearl py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gold">
              RARE PENGUIN
            </h3>
            <p className="font-body text-pearl/80">
              Haute Couture Platform
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gold" />
                <span className="font-body">+91 73000 18917</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gold" />
                <span className="font-body">Delhi NCR, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/rare_penguin.hautecouture"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pearl hover:text-gold transition-colors"
            >
              <Instagram size={20} />
              <span className="font-body">@rare_penguin.hautecouture</span>
            </a>
          </div>
        </div>

        <div className="border-t border-pearl/20 pt-8 text-center">
          <p className="font-body text-pearl/70">
            © 2025 RARE PENGUIN — Haute Couture Platform. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

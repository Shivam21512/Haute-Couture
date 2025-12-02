import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0ARole: ${formData.role}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917300018917?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your message...",
    });
    
    // Reset form
    setFormData({ name: "", whatsapp: "", role: "", message: "" });
  };

  return (
    <div className="overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-luxury-dark pt-20">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-gold/20 to-transparent blur-3xl" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl lg:text-8xl font-bold text-pearl mb-6"
          >
            Connect With Rare Penguin
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-pearl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-bold text-burgundy mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Phone className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-burgundy mb-1">Phone</h3>
                    <a href="tel:+917300018917" className="font-body text-lg text-burgundy/80 hover:text-gold transition-colors">
                      +91 73000 18917
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-burgundy mb-1">Location</h3>
                    <p className="font-body text-lg text-burgundy/80">Delhi NCR, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-burgundy mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/rare_penguin.hautecouture" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-lg text-burgundy/80 hover:text-gold transition-colors"
                    >
                      @rare_penguin.hautecouture
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-beige/50 rounded-lg p-6 border border-burgundy/10">
                <h3 className="font-heading text-2xl font-semibold text-burgundy mb-3">Why Connect?</h3>
                <ul className="space-y-2 font-body text-burgundy/80">
                  <li>• Designer collaboration inquiries</li>
                  <li>• Model portfolio submissions</li>
                  <li>• Photography partnership opportunities</li>
                  <li>• Event participation requests</li>
                  <li>• General inquiries about our platform</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-beige/30 rounded-lg p-8 border border-burgundy/10">
                <div className="space-y-6">
                  <div>
                    <label className="font-body text-sm font-medium text-burgundy mb-2 block">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-pearl border-burgundy/20 focus:border-gold"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-burgundy mb-2 block">
                      WhatsApp Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-pearl border-burgundy/20 focus:border-gold"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-burgundy mb-2 block">
                      Are you a Designer / Model / Photographer? *
                    </label>
                    <Input
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="bg-pearl border-burgundy/20 focus:border-gold"
                      placeholder="e.g., Fashion Designer"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-burgundy mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-pearl border-burgundy/20 focus:border-gold min-h-[150px]"
                      placeholder="Tell us about your interest in joining RARE PENGUIN..."
                    />
                  </div>

                  <Button type="submit" variant="royal" size="lg" className="w-full">
                    Send Message via WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

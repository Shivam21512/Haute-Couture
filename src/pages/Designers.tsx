import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import gown1 from "@/assets/gown-1.jpg";
import gown2 from "@/assets/gown-2.jpg";
import gown3 from "@/assets/gown-3.jpg";

const Designers = () => {
  const benefits = [
    "High-fashion editorial shoots with cinematic production",
    "Fashion runway opportunities at exclusive events",
    "Brand-level styling & professional art direction",
    "Design + e-commerce collaboration model",
    "Access to elite network of models and photographers",
    "Portfolio enhancement with luxury imagery",
  ];

  const gowns = [
    { image: gown1, title: "Crimson Elegance" },
    { image: gown2, title: "Pearl Perfection" },
    { image: gown3, title: "Golden Glamour" },
  ];

  const steps = [
    { number: "01", title: "Register", description: "Complete our designer application form" },
    { number: "02", title: "Submit Portfolio", description: "Share your couture collections and vision" },
    { number: "03", title: "Review / Invitation", description: "Our team reviews and extends exclusive invitations" },
    { number: "04", title: "Shoot & Showcase", description: "Collaborate on luxury fashion shoots and shows" },
  ];

  return (
    <div className="overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-burgundy pt-20">
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
            Calling Fashion Designers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-2xl text-pearl/80 max-w-3xl mx-auto"
          >
            Showcase your creations in high-fashion shoots & fashion shows
          </motion.p>
        </div>
      </section>

      {/* Designer Benefits */}
      <section className="py-24 bg-pearl">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-4">Designer Benefits</h2>
            <p className="font-body text-xl text-burgundy/70">What you gain as part of our exclusive network</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-beige/50 rounded-lg p-6 border border-burgundy/10"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                  <Check size={16} className="text-luxury-dark" />
                </div>
                <p className="font-body text-lg text-burgundy/80">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Gallery */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-4">Designer Gallery</h2>
            <p className="font-body text-xl text-burgundy/70">Luxury frames showcase</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gowns.map((gown, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-4 bg-gradient-to-br from-gold/20 to-transparent rounded-lg border-2 border-gold/30 overflow-hidden">
                  <img
                    src={gown.image}
                    alt={gown.title}
                    className="w-full h-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-gold" />
                  <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-gold" />
                  <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-gold" />
                  <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-gold" />
                </div>
                <h3 className="font-heading text-2xl text-burgundy mt-4 text-center">{gown.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process to Join */}
      <section className="py-24 bg-pearl">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-4">Process to Join</h2>
            <p className="font-body text-xl text-burgundy/70">Your journey to haute couture excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-7xl font-bold text-gold/30 mb-4">{step.number}</div>
                <h3 className="font-heading text-2xl font-semibold text-burgundy mb-3">{step.title}</h3>
                <p className="font-body text-burgundy/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-burgundy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-6xl font-bold text-pearl mb-8">
              <span className="bg-clip-text">
                Apply as Designer
              </span>
            </h2>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Start Your Application
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Designers;

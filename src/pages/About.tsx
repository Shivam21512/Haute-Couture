import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import runway2 from "@/assets/runway-2.jpg";

const About = () => {
  const milestones = [
    { year: "2023", title: "The Beginning", description: "RARE PENGUIN was founded with a vision to revolutionize haute couture" },
    { year: "2024", title: "First Runway", description: "Launched our first exclusive fashion show in Delhi" },
    { year: "2025", title: "Global Expansion", description: "Expanding our platform to international designers" },
  ];

  return (
    <div className="overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-pearl pt-20">
        <div className="absolute inset-0">
          <img src={runway2} alt="Behind the scenes" className="w-full h-full object-cover opacity-20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl lg:text-8xl font-bold text-burgundy mb-6"
          >
            Our Story in Couture
          </motion.h1>
        </div>
      </section>

      {/* The Origins */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-8">The Origins</h2>
            <p className="font-body text-lg text-burgundy/80 mb-4 leading-relaxed">
              RARE PENGUIN was born from a simple yet powerful vision: to create a platform where haute couture designers could showcase their masterpieces in the most luxurious and theatrical fashion possible.
            </p>
            <p className="font-body text-lg text-burgundy/80 leading-relaxed">
              Founded in 2023, we began with a small collective of designers and models who shared our passion for elevating fashion beyond commercial boundaries into the realm of pure artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-24 bg-pearl">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-8">The Vision</h2>
            <p className="font-body text-lg text-burgundy/80 mb-4 leading-relaxed">
              Our vision is to create a global platform where luxury designers can transform their bespoke creations into breathtaking editorial experiences and runway moments that define fashion history.
            </p>
            <p className="font-body text-lg text-burgundy/80 leading-relaxed">
              We believe that every couture piece deserves to be showcased with the same level of artistry and attention to detail that went into its creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-12">What We Do</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-3xl font-semibold text-burgundy mb-3">High-Fashion Shoots</h3>
                <p className="font-body text-lg text-burgundy/80 leading-relaxed">
                  Cinematic editorial photography that captures the essence of each couture creation with museum-quality production values.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-3xl font-semibold text-burgundy mb-3">Fashion Shows</h3>
                <p className="font-body text-lg text-burgundy/80 leading-relaxed">
                  Exclusive runway events that transform fashion shows into theatrical experiences, complete with luxury venues and elite audiences.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-3xl font-semibold text-burgundy mb-3">Scalable E-commerce Collaborations</h3>
                <p className="font-body text-lg text-burgundy/80 leading-relaxed">
                  Strategic partnerships that help designers expand their reach while maintaining the exclusivity and prestige of their brand.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Are Unique */}
      <section className="py-24 bg-pearl">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-12">Why We Are Unique</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-burgundy mb-2">Limited Invitations Only</h3>
                  <p className="font-body text-lg text-burgundy/80 leading-relaxed">
                    Our exclusive membership ensures that every designer and model in our network maintains the highest standards of craftsmanship and professionalism.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-burgundy mb-2">Luxury Production Aesthetics</h3>
                  <p className="font-body text-lg text-burgundy/80 leading-relaxed">
                    Every shoot and show is produced with cinematic quality, theatrical lighting, and art direction that rivals high-fashion magazines.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-burgundy mb-2">Elite Network & Collaborations</h3>
                  <p className="font-body text-lg text-burgundy/80 leading-relaxed">
                    Access to a curated network of fashion's finest: designers, models, photographers, and industry leaders who share your passion for excellence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-4">Our Journey</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-pearl rounded-lg p-8 border border-burgundy/10"
                >
                  <div className="font-display text-5xl font-bold text-gold mb-4">{milestone.year}</div>
                  <h3 className="font-heading text-2xl font-semibold text-burgundy mb-3">{milestone.title}</h3>
                  <p className="font-body text-burgundy/70">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
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
              <span className=" bg-clip-text text-transparent">
                Be a Part of Couture History
              </span>
            </h2>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Join Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

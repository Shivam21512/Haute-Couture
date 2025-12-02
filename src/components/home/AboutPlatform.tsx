import { motion } from "framer-motion";
import gown1 from "@/assets/gown-1.jpg";

export const AboutPlatform = () => {
  return (
    <section className="py-24 bg-beige/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-burgundy mb-6">
              About the Platform
            </h2>
            <p className="font-body text-lg text-burgundy/80 mb-4 leading-relaxed">
              RARE PENGUIN is an exclusive haute couture platform connecting elite fashion designers, models, and creators in a curated ecosystem of luxury and artistry.
            </p>
            <p className="font-body text-lg text-burgundy/80 mb-4 leading-relaxed">
              We transform bespoke designer creations into breathtaking editorial shoots and runway experiences, elevating each piece to its rightful place in fashion history.
            </p>
            <p className="font-body text-lg text-burgundy/80 leading-relaxed">
              Our invitation-only community ensures that every collaboration maintains the highest standards of couture craftsmanship and artistic vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-4 bg-gradient-to-br from-gold/10 to-transparent rounded-lg border border-gold/20">
              <img
                src={gown1}
                alt="Couture Fashion"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

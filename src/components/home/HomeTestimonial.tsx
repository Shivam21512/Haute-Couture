import { motion } from "framer-motion";

export const HomeTestimonial = () => {
  return (
    <section className="py-24 bg-pearl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-beige/50 rounded-lg p-12 border border-gold/20 shadow-lg relative">
            <div className="absolute top-4 left-4 text-6xl text-gold/30 font-script">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-gold/30 font-script">"</div>
            
            <p className="font-heading text-2xl text-burgundy/90 mb-8 leading-relaxed italic">
              Working with RARE PENGUIN transformed my collection into a breathtaking editorial experience. The attention to detail and luxury production quality exceeded all expectations.
            </p>
            
            <div className="font-script text-3xl text-burgundy">
              Priya Malhotra
            </div>
            <p className="font-body text-burgundy/70 mt-2">
              Couture Designer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

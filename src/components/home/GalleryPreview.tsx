import { motion } from "framer-motion";
import runway1 from "@/assets/runway-1.jpg";
import runway2 from "@/assets/runway-2.jpg";
import gown2 from "@/assets/gown-2.jpg";
import gown3 from "@/assets/gown-3.jpg";

const images = [runway1, runway2, gown2, gown3];

export const GalleryPreview = () => {
  return (
    <section className="py-24 bg-beige/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-burgundy mb-4">
            Gallery Preview
          </h2>
          <p className="font-body text-xl text-burgundy/70">
            A glimpse into our haute couture world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border-2 border-gold/30 aspect-[3/4]"
            >
              <motion.img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import runway1 from "@/assets/runway-1.jpg";
import runway2 from "@/assets/runway-2.jpg";

const galleryImages = [
  { id: 1, src: runway1, caption: "Runway Elegance" },
  { id: 2, src: runway2, caption: "Atelier Moments" },
  { id: 3, src: runway1, caption: "Behind the Scenes" },
  { id: 4, src: runway2, caption: "Couture Details" },
  { id: 5, src: runway1, caption: "Fashion Forward" },
  { id: 6, src: runway2, caption: "Designer Vision" },
];

export const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-beige to-pearl overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="container mx-auto px-4 mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-5xl lg:text-7xl font-bold text-wine mb-4">
          Runway Memories
        </h2>
        <p className="font-body text-xl text-wine/70 max-w-2xl mx-auto">
          Step into moments of fashion history captured on our palace runway
        </p>
      </motion.div>

      {/* Mosaic Runway Layout */}
      <motion.div
        className="flex gap-8 px-8"
        style={{ x }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative group flex-shrink-0"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
          >
            {/* Polaroid Style Frame */}
            <div className="relative p-4 bg-pearl shadow-2xl" style={{ width: "350px" }}>
              {/* Image */}
              <div className="relative overflow-hidden bg-beige aspect-square">
                <motion.img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="font-body text-pearl font-medium text-lg">
                    {image.caption}
                  </p>
                </motion.div>
              </div>

              {/* Handwritten Caption */}
              <div className="mt-4 text-center">
                <p className="font-script text-2xl text-wine">{image.caption}</p>
              </div>

              {/* Tape Effect */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-8 bg-beige/50 backdrop-blur-sm border border-wine/10 rotate-2" />
            </div>

            {/* Shadow Effect */}
            <div className="absolute inset-0 -z-10 bg-wine/10 blur-xl transform translate-y-4" />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="font-body text-wine/50 text-sm uppercase tracking-widest">
          Scroll to explore →
        </p>
      </motion.div>
    </section>
  );
};

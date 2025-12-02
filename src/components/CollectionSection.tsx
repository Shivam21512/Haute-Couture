import { motion } from "framer-motion";
import { useState } from "react";
import gown1 from "@/assets/gown-1.jpg";
import gown2 from "@/assets/gown-2.jpg";
import gown3 from "@/assets/gown-3.jpg";

const gowns = [
  {
    id: 1,
    image: gown1,
    name: "Midnight Royale",
    designer: "Maison Atelier",
    description: "Deep wine silk with gold beading",
  },
  {
    id: 2,
    image: gown2,
    name: "Pearl Majesty",
    designer: "Couture Luxe",
    description: "Ivory bridal with golden embellishments",
  },
  {
    id: 3,
    image: gown3,
    name: "Champagne Dreams",
    designer: "Royal House",
    description: "Gold draped silk with crystals",
  },
];

export const CollectionSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-gradient-to-b from-pearl to-beige overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="container mx-auto px-4 mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-5xl lg:text-7xl font-bold text-wine mb-4 lens-flare">
          The Collection
        </h2>
        <p className="font-body text-xl text-wine/70 max-w-2xl mx-auto">
          Each piece tells a story of artistry, craftsmanship, and timeless elegance
        </p>
      </motion.div>

      {/* Gowns Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {gowns.map((gown, index) => (
            <motion.div
              key={gown.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredId(gown.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* 3D Rotating Frame */}
              <motion.div
                className="relative perspective-1000"
                animate={{
                  rotateY: hoveredId === gown.id ? 5 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Golden Frame */}
                <div className="relative p-6 bg-gradient-to-br from-gold/10 to-transparent rounded-lg border-2 border-gold/40 shadow-2xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.img
                      src={gown.image}
                      alt={gown.name}
                      className="w-full h-[500px] object-cover"
                      animate={{
                        scale: hoveredId === gown.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Sparkle Overlay on Hover */}
                    {hoveredId === gown.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Corner Ornaments */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold" />
                </div>

                {/* Museum Label */}
                <motion.div
                  className="mt-6 p-4 bg-pearl border border-wine/10 rounded-md shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === gown.id ? 1 : 0.8,
                    y: hoveredId === gown.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display text-2xl font-semibold text-wine mb-1">
                    {gown.name}
                  </h3>
                  <p className="font-body text-sm text-gold mb-2">{gown.designer}</p>
                  <p className="font-body text-sm text-wine/70">{gown.description}</p>
                </motion.div>
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-radial from-gold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: hoveredId === gown.id ? 1.2 : 1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-wine/20 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

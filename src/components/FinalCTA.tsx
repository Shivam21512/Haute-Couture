import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-dark">
      {/* Dimmed Spotlight Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/20 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Rising Golden Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, -window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Top Ornament */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-3xl">✦</span>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="font-display text-5xl lg:text-7xl font-bold text-pearl mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Become a Part of
            <br />
            <span className="gold-shimmer bg-clip-text text-transparent">
              Haute Couture History
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-body text-xl lg:text-2xl text-pearl/80 mb-12 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join an exclusive circle where fashion transcends into art,
            <br />
            and every moment becomes timeless elegance
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
          >
            <Button variant="gold" size="xl" className="group text-lg px-12 py-6">
              Apply for Invitation Only
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Limited Availability Notice */}
          <motion.p
            className="font-body text-gold/70 text-sm uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Limited to 100 Members Worldwide
          </motion.p>

          {/* Decorative Bottom Ornament */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-3xl">✦</span>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-gold/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-gold/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-gold/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-gold/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
    </section>
  );
};

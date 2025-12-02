import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const EventSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-wine overflow-hidden">
      {/* Marble Texture Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pearl via-transparent to-gold" />
      </div>

      {/* Gold Dust Animation */}
      <div className="floating-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Event Badge */}
          <motion.div
            className="inline-block mb-8"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.3)",
                "0 0 40px rgba(255, 215, 0, 0.6)",
                "0 0 20px rgba(255, 215, 0, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="px-6 py-2 bg-gold text-luxury-dark font-body font-semibold text-sm tracking-widest rounded-full border-2 border-gold/50">
              EXCLUSIVE EVENT
            </span>
          </motion.div>

          {/* Title with Gold Foil Effect */}
          <motion.h2
            className="font-display text-5xl lg:text-7xl font-bold text-pearl mb-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative inline-block gold-shimmer bg-clip-text text-transparent">
              Limited Entry
            </span>
            <br />
            <span className="text-pearl">Couture Fashion Shoot</span>
          </motion.h2>

          <motion.p
            className="font-body text-xl text-pearl/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the world's most prestigious fashion photography session in our palace atelier
          </motion.p>

          {/* Marble Countdown Timer */}
          <motion.div
            className="grid grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="relative p-6 bg-gradient-to-br from-pearl/10 to-beige/5 backdrop-blur-sm border-2 border-gold/30 rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-gold mb-2">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="font-body text-sm text-pearl/70 uppercase tracking-wider">
                  {item.label}
                </div>

                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/50" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="gold" size="xl" className="group">
              Join The Elite Circle
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-r-2 border-b-2 border-gold/20" />
    </section>
  );
};

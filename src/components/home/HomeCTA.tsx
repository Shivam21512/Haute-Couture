import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const HomeCTA = () => {
  return <section className="relative py-32 bg-luxury-dark overflow-hidden">
      {/* Golden Dust Animation */}
      <div className="floating-particles">
        {[...Array(30)].map((_, i) => <motion.div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 6 + 8}s`
      }} />)}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-6xl lg:text-7xl font-bold text-pearl mb-8 leading-tight">
            <span className=" bg-clip-text text-accent">
              DM to Join
            </span>
          </h2>
          
          <p className="font-body text-xl text-pearl/80 mb-12">
            Become part of an exclusive haute couture community
          </p>

          <Link to="/contact">
            <Button variant="gold" size="xl" className="border-2 border-gold hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Spotlight Effect */}
      <motion.div className="absolute inset-0 pointer-events-none" initial={{
      opacity: 0
    }} animate={{
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 4,
      repeat: Infinity
    }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-gold/20 to-transparent blur-3xl" />
      </motion.div>
    </section>;
};
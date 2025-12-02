import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroModel from "@/assets/hero-model.jpg";
export const HomeHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl pt-20">
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 4 + 6}s`
      }} />)}
      </div>

      {/* Architectural Arches Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
          <path d="M960 100 Q1200 300 1200 600 L1200 1080 L720 1080 L720 600 Q720 300 960 100Z" stroke="currentColor" strokeWidth="2" className="text-burgundy" />
          <path d="M1400 200 Q1600 350 1600 650 L1600 1080 L1200 1080 L1200 650 Q1200 350 1400 200Z" stroke="currentColor" strokeWidth="2" className="text-burgundy" />
          <path d="M520 200 Q320 350 320 650 L320 1080 L720 1080 L720 650 Q720 350 520 200Z" stroke="currentColor" strokeWidth="2" className="text-burgundy" />
        </svg>
      </div>

      {/* Golden Light Rays */}
      <motion.div className="absolute inset-0 pointer-events-none" initial={{
      opacity: 0
    }} animate={{
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 4,
      repeat: Infinity
    }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/30 to-transparent blur-3xl" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center lg:text-left">
            <motion.h1 className="font-display text-6xl lg:text-8xl font-bold text-burgundy mb-6 leading-tight lens-flare" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <span className=" bg-clip-text text-rose-800">
                Haute Couture
              </span>{" "}
              Platform
            </motion.h1>

            <motion.p className="font-body text-xl lg:text-2xl text-burgundy/80 mb-8 font-light" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              Taking Bespoke Designer Creations to High-Fashion Shoots & Fashion Shows
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/designers">
                <Button variant="royal" size="xl">
                  Join as Designer
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="palace" size="xl">
                  Join as Model
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Model Image with Floating Platform */}
          <motion.div className="relative" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.3
        }}>
            <motion.div className="relative z-10" animate={{
            y: [0, -20, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-gradient-to-r from-transparent via-beige to-transparent rounded-full blur-xl opacity-60" />
              
              <div className="relative p-4 bg-gradient-to-br from-gold/20 to-transparent rounded-lg border-2 border-gold/30">
                <img src={heroModel} alt="Haute Couture Fashion Model" className="w-full h-auto rounded-lg shadow-2xl" />
                
                <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-gold" />
              </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-radial from-gold/20 to-transparent blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>;
};
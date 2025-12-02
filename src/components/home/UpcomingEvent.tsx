import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export const UpcomingEvent = () => {
  return <section className="py-24 bg-burgundy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
          <path d="M960 100 Q1200 300 1200 600 L1200 1080 L720 1080 L720 600 Q720 300 960 100Z" stroke="currentColor" strokeWidth="2" className="text-gold" />
        </svg>
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
          <h2 className="font-display text-6xl font-bold mb-4  bg-clip-text text-accent">
            Upcoming Couture Fashion Shoot
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-pearl/90">
            <div className="flex items-center gap-2">
              <Calendar className="text-gold" />
              <span className="font-body text-lg">December 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-gold" />
              <span className="font-body text-lg">Delhi NCR</span>
            </div>
          </div>

          <p className="font-heading text-2xl text-pearl/80 mb-8 tracking-wide">
            Limited Entry • Couture Fashion Shoot
          </p>

          <Link to="/contact">
            <Button variant="gold" size="xl">
              Join The Elite Circle
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
};
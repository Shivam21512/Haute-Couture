import { motion } from "framer-motion";
import { Scissors, User, Camera, Video } from "lucide-react";

const roles = [
  {
    icon: Scissors,
    title: "Designers",
    description: "Showcase your couture creations in exclusive editorial shoots and runway shows",
  },
  {
    icon: User,
    title: "Models",
    description: "Grace the runway and editorial campaigns wearing haute couture masterpieces",
  },
  {
    icon: Camera,
    title: "Fashion Photographers",
    description: "Capture the essence of luxury fashion through your artistic lens",
  },
  {
    icon: Video,
    title: "Videographers",
    description: "Create cinematic fashion films that tell compelling couture stories",
  },
];

export const WhoCanJoin = () => {
  return (
    <section className="py-24 bg-pearl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-burgundy mb-4">
            Who Can Join?
          </h2>
          <p className="font-body text-xl text-burgundy/70">
            Our exclusive community welcomes elite fashion professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-beige/50 rounded-lg p-8 border border-burgundy/10 hover:border-gold/40 transition-all duration-300 hover:shadow-lg"
            >
              <role.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-heading text-2xl font-semibold text-burgundy mb-3">
                {role.title}
              </h3>
              <p className="font-body text-burgundy/70 leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

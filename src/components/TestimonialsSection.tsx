import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Maison Royale transformed my vision into wearable art. Every stitch tells a story of elegance.",
    author: "Isabella Rousseau",
    role: "Couture Designer",
  },
  {
    id: 2,
    quote: "The palace runway experience is unmatched. It's where dreams meet haute couture reality.",
    author: "Dominic Laurent",
    role: "Fashion Photographer",
  },
  {
    id: 3,
    quote: "Walking in Maison Royale's collection felt like stepping into a royal portrait. Absolutely breathtaking.",
    author: "Aria Chen",
    role: "International Model",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-pearl to-beige overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 L90 50 L50 90 L10 50 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-wine"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-wine mb-4">
            Words of Elegance
          </h2>
          <p className="font-body text-xl text-wine/70 max-w-2xl mx-auto">
            Testimonials from our distinguished community of fashion artisans
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Vintage Paper Card */}
              <div className="relative p-8 bg-gradient-to-br from-pearl to-beige border-2 border-wine/10 rounded-lg shadow-xl">
                {/* Quote Ornament */}
                <div className="absolute top-4 left-4 text-6xl text-gold/30 font-display leading-none">
                  "
                </div>

                {/* Quote Text */}
                <p className="font-body text-wine/80 text-lg mb-6 relative z-10 italic leading-relaxed pt-8">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-gradient-to-r from-wine/30 to-transparent mb-4" />

                {/* Author Signature Style */}
                <div className="relative z-10">
                  <p className="font-script text-3xl text-wine mb-1">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-wine/60 uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>

                {/* Corner Ornaments */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-gold/40" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-gold/40" />

                {/* Wax Seal Effect */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-wine rounded-full shadow-lg flex items-center justify-center border-4 border-pearl"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gold text-2xl">✦</span>
                </motion.div>
              </div>

              {/* Paper Shadow */}
              <div className="absolute inset-0 -z-10 bg-wine/5 blur-xl transform translate-y-4 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

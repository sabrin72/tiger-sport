import { motion } from "motion/react";
import { Trophy, Users, Target, Shield } from "lucide-react";

const stats = [
  { icon: Trophy, label: "Championship Titles", value: "25+" },
  { icon: Users, label: "Active Members", value: "500+" },
  { icon: Target, label: "Years Experience", value: "15+" },
  { icon: Shield, label: "Professional Coaches", value: "12" },
];

export function About() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
   
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest mb-4 block">About Tiger Sport</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
            Where Champions
            <br />
            <span className="text-primary">Are Made</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tiger Sport is Algeria's premier combat sports training center. We specialize in developing fighters at all levels—from beginners discovering their potential to elite competitors preparing for the cage.
          </p>
        </motion.div>

    
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary border border-primary/20 p-6 text-center hover:border-primary/50 transition-colors"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl mb-2 text-primary">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

              
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary border-l-4 border-primary p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl mb-4 uppercase">Our Philosophy</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Tiger Sport, we believe martial arts is more than fighting—it's about discipline, respect, and continuous self-improvement. Our world-class instructors bring decades of competitive experience to guide you on your journey, whether you're training for fitness, self-defense, or championship competition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

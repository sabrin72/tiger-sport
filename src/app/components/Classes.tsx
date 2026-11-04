import { motion } from "motion/react";
import { Sword, Hand, Shield, Flame, Dumbbell, Baby } from "lucide-react";
import { Button } from "./ui/button";

const classes = [
  {
    icon: Flame,
    title: "Muay Thai",
    description: "The Art of Eight Limbs. Master devastating strikes, clinch work, and traditional Thai boxing techniques.",
    audience: "Men, Women, Kids",
    image: "https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGZpZ2h0ZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzEwMTM4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Hand,
    title: "Brazilian Jiu-Jitsu",
    description: "The gentle art. Learn submissions, sweeps, and ground control from white to black belt.",
    audience: "Men, Women, Kids",
    image: "https://images.unsplash.com/photo-1585511543150-dc91145bbc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiamolMjBicmF6aWxpYW4lMjBqaXUlMjBqaXRzdXxlbnwxfHx8fDE3NzEwMTQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Shield,
    title: "MMA",
    description: "Complete mixed martial arts training. Combine striking, grappling, and cage strategy for competition.",
    audience: "Men, Women, Kids",
    image: "https://images.unsplash.com/photo-1688141401601-75a05b406c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBjYWdlJTIwZmlnaHRlcnxlbnwxfHx8fDE3NzEwMTQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Dumbbell,
    title: "Kickboxing",
    description: "High-intensity striking combinations. Build power, speed, and cardiovascular endurance.",
    audience: "Men, Women, Kids",
    image: "https://images.unsplash.com/photo-1748484531687-5faebc4a1965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjBoZWF2eSUyMGJhZ3xlbnwxfHx8fDE3NzEwMTQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Baby,
    title: "Kids Karate",
    description: "Traditional karate for children. Develop discipline, focus, and confidence in a safe environment.",
    audience: "Kids Only",
    image: "https://images.unsplash.com/photo-1769095216189-0ae27b6cc726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwa2FyYXRlJTIwY2xhc3N8ZW58MXx8fHwxNzcxMDE0MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Sword,
    title: "Kids Judo",
    description: "The way of gentleness. Teach children balance, respect, and effective throwing techniques.",
    audience: "Kids Only",
    image: "https://images.unsplash.com/photo-1769095216189-0ae27b6cc726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwa2FyYXRlJTIwY2xhc3N8ZW58MXx8fHwxNzcxMDE0MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Classes() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest mb-4 block">Our Programs</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
            Train In <span className="text-primary">Multiple</span>
            <br />
            Disciplines
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From striking to grappling, we offer comprehensive martial arts training for all ages and skill levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => {
            const Icon = classItem.icon;
            return (
              <motion.div
                key={classItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-black border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img src={classItem.image} alt={classItem.title} className="w-full h-full object-cover" />
                </div>

          
                <div className="relative z-10 p-8">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl mb-3 uppercase">{classItem.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{classItem.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary uppercase tracking-wider">{classItem.audience}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary hover:text-black uppercase"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

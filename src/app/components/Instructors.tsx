import { motion } from "motion/react";
import { Award } from "lucide-react";

const instructors = [
  {
    name: "Coach Karim Benali",
    role: "Head Muay Thai Instructor",
    credentials: "3x National Champion • 15 Years Experience",
    specialty: "Muay Thai, Kickboxing",
    image: "https://images.unsplash.com/photo-1765666738346-28ce4c332831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzEwMTQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Professor Amine Zerhouni",
    role: "BJJ Black Belt",
    credentials: "IBJJF Certified • Black Belt 3rd Degree",
    specialty: "Brazilian Jiu-Jitsu, Grappling",
    image: "https://images.unsplash.com/photo-1765666738346-28ce4c332831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzEwMTQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Coach Sarah Mansouri",
    role: "MMA Coach & Nutritionist",
    credentials: "Pro MMA Record 12-3 • Sports Science Degree",
    specialty: "MMA, Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1765666738346-28ce4c332831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzEwMTQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Sensei Yacine Hadj",
    role: "Kids Program Director",
    credentials: "Karate 5th Dan • Judo 3rd Dan • Youth Development Specialist",
    specialty: "Kids Karate, Kids Judo",
    image: "https://images.unsplash.com/photo-1765666738346-28ce4c332831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzEwMTQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Instructors() {
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
          <span className="text-primary uppercase tracking-widest mb-4 block">Our Team</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
            World-Class <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from champions and certified professionals with decades of combined experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-black border border-primary/20 hover:border-primary transition-all duration-300"
            >
              
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-primary p-2 rounded-full">
                    <Award className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

           
              <div className="p-6 relative">
                <h3 className="text-xl mb-1 uppercase">{instructor.name}</h3>
                <p className="text-primary text-sm mb-3 uppercase tracking-wider">{instructor.role}</p>
                <p className="text-xs text-gray-400 mb-3">{instructor.credentials}</p>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-sm text-gray-300">{instructor.specialty}</p>
                </div>
              </div>

           
              <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-black border-l-4 border-primary p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl mb-4 uppercase">Train With The Best</h3>
          <p className="text-gray-300 leading-relaxed">
            Our coaching staff includes national champions, international competitors, and certified instructors who have dedicated their lives to martial arts. They're committed to helping you reach your goals, whether you're training for fitness, competition, or personal development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

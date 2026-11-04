import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
    
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
            Start Your <span className="text-primary">Journey</span>
            <br />
            Today
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Book your free trial class and experience world-class training at Tiger Sport.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
        
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary border border-primary/20 p-8"
          >
            <h3 className="text-2xl mb-6 uppercase">Book Free Trial</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">First Name</label>
                  <Input className="bg-black border-primary/20 focus:border-primary" placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Last Name</label>
                  <Input className="bg-black border-primary/20 focus:border-primary" placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                <Input
                  type="email"
                  className="bg-black border-primary/20 focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Phone</label>
                <Input
                  type="tel"
                  className="bg-black border-primary/20 focus:border-primary"
                  placeholder="+213 XXX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Interested In</label>
                <select className="w-full bg-black border border-primary/20 focus:border-primary rounded-md px-3 py-2 text-white">
                  <option>Muay Thai</option>
                  <option>Brazilian Jiu-Jitsu</option>
                  <option>MMA</option>
                  <option>Kickboxing</option>
                  <option>Kids Karate</option>
                  <option>Kids Judo</option>
                  <option>Not Sure - General Interest</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Message (Optional)</label>
                <Textarea
                  className="bg-black border-primary/20 focus:border-primary min-h-24"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-black uppercase tracking-wider group">
                Book Free Trial Class
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
        
            <div className="bg-secondary border-l-4 border-primary p-6">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl uppercase mb-2">Tiger Sport </h4>
                  <p className="text-gray-400">Algiers</p>
                  <p className="text-gray-400">Algeria</p>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+213 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>sport@tigersport.dz</span>
                </div>
              </div>
            </div>

          
            <div className="bg-secondary border-l-4 border-primary p-6">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl uppercase mb-2">Tiger Sport second</h4>
                  <p className="text-gray-400">second Algiers</p>
                  <p className="text-gray-400">Algeria</p>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+213 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>second@tigersport.dz</span>
                </div>
              </div>
            </div>

          
            <div className="bg-black border border-primary/20 p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl uppercase mb-4">Training Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-primary">06:00 - 21:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-primary">09:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="bg-primary p-6 text-black">
              <h4 className="text-2xl uppercase mb-3">First Class Free</h4>
              <p className="mb-4">
                Experience Tiger Sport with no commitment. Try any class for free and see why we're Algeria's premier martial arts training center.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  No prior experience needed
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  All equipment provided
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  Meet our coaching team
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

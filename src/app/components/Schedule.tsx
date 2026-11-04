import { motion } from "motion/react";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "06:00 - 07:30", name: "Morning BJJ", level: "All Levels" },
      { time: "17:00 - 18:30", name: "Kids Karate", level: "Kids" },
      { time: "18:30 - 20:00", name: "Muay Thai", level: "Advanced" },
      { time: "20:00 - 21:30", name: "MMA Sparring", level: "Intermediate" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "06:00 - 07:30", name: "Kickboxing", level: "All Levels" },
      { time: "17:00 - 18:30", name: "Kids Judo", level: "Kids" },
      { time: "18:30 - 20:00", name: "BJJ Fundamentals", level: "Beginners" },
      { time: "20:00 - 21:30", name: "MMA Conditioning", level: "All Levels" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "06:00 - 07:30", name: "Morning Muay Thai", level: "All Levels" },
      { time: "17:00 - 18:30", name: "Kids Karate", level: "Kids" },
      { time: "18:30 - 20:00", name: "BJJ No-Gi", level: "Intermediate" },
      { time: "20:00 - 21:30", name: "Pro Training", level: "Fighters Only" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "06:00 - 07:30", name: "BJJ Open Mat", level: "All Levels" },
      { time: "17:00 - 18:30", name: "Kids Judo", level: "Kids" },
      { time: "18:30 - 20:00", name: "Muay Thai Clinch", level: "Advanced" },
      { time: "20:00 - 21:30", name: "MMA Striking", level: "Intermediate" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "06:00 - 07:30", name: "Morning Kickboxing", level: "All Levels" },
      { time: "17:00 - 18:30", name: "Kids Mixed Class", level: "Kids" },
      { time: "18:30 - 20:00", name: "BJJ Competition", level: "Advanced" },
      { time: "20:00 - 21:30", name: "MMA All Levels", level: "All Levels" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "09:00 - 10:30", name: "Open Mat BJJ", level: "All Levels" },
      { time: "10:30 - 12:00", name: "Kids Martial Arts", level: "Kids" },
      { time: "14:00 - 16:00", name: "Competition Training", level: "Fighters" },
    ],
  },
];

export function Schedule() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest mb-4 block">Weekly Schedule</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
            Train On <span className="text-primary">Your</span>
            <br />
            Schedule
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With classes running from early morning to late evening, find the perfect time to train.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="bg-secondary border-l-4 border-primary p-6"
            >
              <h3 className="text-2xl mb-6 uppercase text-primary">{day.day}</h3>
              <div className="space-y-4">
                {day.classes.map((classItem, classIndex) => (
                  <div
                    key={classIndex}
                    className="border-b border-gray-800 pb-4 last:border-0 last:pb-0 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{classItem.time}</div>
                        <div className="mb-1">{classItem.name}</div>
                        <div className="text-xs text-primary uppercase tracking-wider">{classItem.level}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            <span className="text-primary">*</span> Schedule subject to change. Private sessions available by appointment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

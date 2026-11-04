import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Classes } from "./components/Classes";
import { Schedule } from "./components/Schedule";
import { Instructors } from "./components/Instructors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  );
}

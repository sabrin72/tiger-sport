import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/20 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-3xl mb-4 uppercase">
              Tiger <span className="text-primary">Sport</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Algeria's premier combat sports training center. Building champions since 2009.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-black border border-primary/20 hover:border-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black border border-primary/20 hover:border-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black border border-primary/20 hover:border-primary flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black border border-primary/20 hover:border-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

      
          <div>
            <h4 className="uppercase mb-4 text-primary tracking-wider">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Muay Thai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Brazilian Jiu-Jitsu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  MMA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kickboxing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kids Martial Arts
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="uppercase mb-4 text-primary tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="uppercase mb-4 text-primary tracking-wider">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>first, Algiers</li>
              <li>second, Algiers</li>
              <li className="text-primary">+213 123 456 789</li>
              <li>info@tigersport.dz</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

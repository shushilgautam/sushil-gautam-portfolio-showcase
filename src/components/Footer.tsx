import { Heart, Code, Smartphone, Server, Mail, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sushil Gautam
              </h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Building innovative solutions with .NET and Flutter to create powerful cross-platform experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/shushilgautam" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shushilgautam/" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Expertise Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              My Expertise
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 text-blue-500">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">.NET Development</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Enterprise solutions, APIs, and backend systems
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 text-purple-500">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-purple-400 transition-colors">Flutter Development</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Beautiful cross-platform mobile applications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 text-amber-500">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-amber-400 transition-colors">Full-Stack Solutions</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    End-to-end application development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Me', href: '#about' },
                { name: 'Projects', href: '#projects' },
                
                
                
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg text-blue-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email me at</p>
                  <a href="mailto:shushilgautam@proton.me" className="font-medium hover:text-blue-400 transition-colors">
                    shushilgautam@proton.me
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg text-green-400">
                  <Smartphone size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call me at</p>
                  <a href="tel:+9779843499339" className="font-medium hover:text-green-400 transition-colors">
                    +977 9843499339
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sushil Gautam. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm group">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 fill-current group-hover:scale-110 transition-transform duration-300" />
              <span>using .NET, Flutter & React</span>
            </div>
            <div className="flex gap-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
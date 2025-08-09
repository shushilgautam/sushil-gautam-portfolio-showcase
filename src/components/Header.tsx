import { useState, useEffect } from 'react';
import { Menu, X, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/60 shadow-sm py-1' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with creative animation */}
        
          <div className="flex items-center">
            <div className="logo-container">
              <div className="logo-shadow animate-float">
                <button
                  onClick={() => scrollToSection('home')}
                  className="relative text-lg font-bold px-5 py-2.5 rounded-xl transition-transform duration-500 hover:scale-105 group"
                  style={{
                    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: `
                      0 6px 15px rgba(0, 0, 0, 0.25),
                      inset 0 0 8px rgba(99, 102, 241, 0.1)
                    `,
                  }}
                >
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute -inset-6 bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#8b5cf6_50%,#6366f1_100%)] opacity-15 group-hover:opacity-25 animate-gradient-pulse transition-opacity duration-500"></div>
                  </div>

                  <div className="relative flex items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <div>
                      <span className="text-white">Sushil</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm">.dev</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['home', 'about', 'skills', 'projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative px-4 py-2.5 text-gray-700 hover:text-gray-900 transition-all duration-300 group"
              >
                <span className="capitalize">{item}</span>
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
            
            {/* Social links in desktop header */}
            
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="flex gap-2 mr-3">
              <a 
                href="https://github.com/shushilgautam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shushilgautam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? (
                <X size={24} className="transition-transform duration-300" />
              ) : (
                <Menu size={24} className="hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white/90 backdrop-blur-lg border border-gray-200/60 rounded-xl shadow-lg">
            {['home', 'about', 'skills', 'projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 w-full text-left rounded-lg flex items-center gap-3 ${
                  isMenuOpen ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: isMenuOpen ? `${0.1 * ['home', 'about', 'skills', 'projects'].indexOf(item)}s` : '0s' }}
              >
                <ArrowDown size={16} className="rotate-[270deg] text-current" />
                <span className="capitalize font-medium">{item}</span>
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
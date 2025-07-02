
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Sushil Gautam
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={24} className="rotate-90 transition-transform duration-300" /> : <Menu size={24} className="hover:scale-110 transition-transform duration-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 w-full text-left rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 w-full text-left rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 w-full text-left rounded-lg"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 w-full text-left rounded-lg"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 w-full text-left rounded-lg"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

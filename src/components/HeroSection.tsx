
import { Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Available for projects</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Flutter
                <span className="block text-blue-600">Developer</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Hi, I'm Sushil Gautam — a Flutter developer specializing in building beautiful, 
                high-performance cross-platform mobile applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contact Me
              </button>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://github.com/shushilgautam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-gray-300"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shushilgautam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-gray-300"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-500">SG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

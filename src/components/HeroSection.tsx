
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1.5 bg-gray-50 rounded-full border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">Available for projects</span>
              </div>
              
              <div className="space-y-6">
                <h1
                  className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  .NET &amp; Flutter&nbsp;
                  <span className="block text-3xl lg:text-5xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all duration-500">
                    Full-Stack Developer
                  </span>
                </h1>
                 <p
                  className="text-sm lg:text-xl text-gray-600 leading-relaxed max-w-xl font-light animate-fade-in"
                  style={{ animationDelay: '0.6s' }}
                >
                  Hi, I'm <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300">Sushil Gautam</span> — I build robust, high-performance cross-platform applications with .NET and Flutter, delivering exceptional user experiences for web and mobile.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-gray-200 text-gray-900 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 font-medium hover:-translate-y-1 transform hover:shadow-lg"
              >
                Let's Talk
              </button>
            </div>

            <div className="flex items-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <span className="text-sm font-medium text-gray-500">Follow me</span>
              <div className="w-8 h-px bg-gray-200"></div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/shushilgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shushilgautam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              {/* Main circle with gradient border */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 via-purple-50 to-gray-100 p-1 hover:scale-105 transition-transform duration-500 ease-out">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                    <span className="text-5xl font-bold text-gray-600 tracking-wider group-hover:text-blue-600 transition-colors duration-500">SG</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-pulse hover:opacity-20 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, Mail, Twitter } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">Available for projects</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  .NET &amp; Flutter
                  <span className="block mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                    Full-Stack Developer
                  </span>
                </h1>
                 
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-light">
                  Hi, I'm <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300">Sushil Gautam</span> — I build robust, high-performance cross-platform applications with .NET and Flutter, delivering exceptional user experiences for web and mobile.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 rounded-xl hover:border-gray-900 hover:bg-white transition-all duration-300 font-medium hover:-translate-y-1 transform hover:shadow-lg"
              >
                Let's Talk
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <span className="text-sm font-medium text-gray-500">Connect with me</span>
              <div className="w-8 h-px bg-gray-200"></div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/shushilgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-white hover:bg-gray-900 rounded-xl transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shushilgautam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-white hover:bg-blue-600 rounded-xl transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="p-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              {/* Floating container with glassmorphism */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80 border border-gray-200/60 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40"></div>
                
                {/* Floating initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">SG</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating dots */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-blue-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-16 left-16 w-3 h-3 bg-emerald-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Skill badges */}
                <div className="absolute bottom-6 left-6 bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center gap-2 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  .NET Core
                </div>
                <div className="absolute top-6 right-6 bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center gap-2 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Flutter
                </div>
              </div>
              
              {/* Floating effect on hover */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"></div>
            </div>
          </div>
        </div>
        
       
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('projects')}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-gray-50 transition-colors duration-300"
        >
          <ArrowDown size={20} className="text-gray-700" />
        </button>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
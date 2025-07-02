
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                <span className="text-sm font-medium text-blue-700">About Me</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-500">
                Flutter Developer & 
                <span className="block text-blue-600">CSIT Student</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  I'm a Flutter developer and CSIT student with a deep passion for creating 
                  beautiful, functional mobile applications that solve real-world problems.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  I specialize in cross-platform development, bringing ideas to life 
                  with clean code, intuitive interfaces, and seamless user experiences 
                  across both iOS and Android platforms.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">Education Journey</h3>
              <div className="space-y-6">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600 before:rounded-full hover:before:w-2 before:transition-all before:duration-300 group">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group-hover:border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      Bachelor of Science in Computer Science and Information Technology
                    </h4>
                    <p className="text-blue-600 font-medium">New Summit College</p>
                    <p className="text-sm text-gray-500 mt-1">2023 - Present</p>
                  </div>
                </div>
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200 before:rounded-full hover:before:bg-gray-400 hover:before:w-2 before:transition-all before:duration-300 group">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group-hover:border-gray-300">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      Higher Secondary Education (Science)
                    </h4>
                    <p className="text-gray-600 font-medium">Tilottama College</p>
                    <p className="text-sm text-gray-500 mt-1">2020 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">15+</span>
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">2+</span>
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">95%</span>
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Client Satisfaction</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">24/7</span>
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

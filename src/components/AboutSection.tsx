
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Flutter developer and CSIT student with a deep love for creating 
                beautiful, functional mobile applications. My journey in software development has 
                been driven by curiosity and a desire to solve real-world problems through technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in cross-platform app development using Flutter, bringing ideas to life 
                with clean code, intuitive interfaces, and seamless user experiences across both iOS 
                and Android platforms.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Bachelor of Science in Computer Science and Information Technology
                  </h4>
                  <p className="text-gray-600">New Summit College</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Higher Secondary Education (Science)
                  </h4>
                  <p className="text-gray-600">Tilottama College</p>
                  <p className="text-sm text-gray-500">2020 - 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

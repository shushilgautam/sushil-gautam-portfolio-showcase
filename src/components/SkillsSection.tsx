
const SkillsSection = () => {
  const skills = [
    { name: 'Flutter (Dart)', level: 95, color: 'from-blue-500 to-blue-600', icon: '📱' },
    { name: 'Native Android (Java, Kotlin)', level: 85, color: 'from-green-500 to-green-600', icon: '🤖' },
    { name: 'Django', level: 75, color: 'from-emerald-500 to-emerald-600', icon: '🌐' },
    { name: 'MySQL', level: 80, color: 'from-blue-600 to-indigo-600', icon: '🗄️' },
    { name: 'Firebase', level: 90, color: 'from-orange-500 to-red-500', icon: '🔥' },
    { name: 'REST API Integration', level: 85, color: 'from-purple-500 to-purple-600', icon: '🔗' },
  ];

  const tools = [
    { name: 'Android Studio', category: 'IDE' },
    { name: 'VS Code', category: 'Editor' },
    { name: 'PyCharm', category: 'IDE' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'Firebase Console', category: 'Backend' },
    { name: 'GitHub', category: 'Version Control' },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-100 mb-6 hover:bg-purple-100 transition-colors duration-300">
            <span className="text-sm font-medium text-purple-700">My Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 hover:text-purple-600 transition-colors duration-500">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed hover:text-gray-800 transition-colors duration-300">
            Here are the technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills with Progress Bars */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                      <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm font-medium group-hover:text-gray-800 transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full group-hover:shadow-lg`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-1 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300 font-medium text-lg">
                      {tool.name}
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-300">
                      {tool.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


const SkillsSection = () => {
  const skills = [
    { name: 'Flutter (Dart)', level: 95, color: 'bg-blue-500' },
    { name: 'Native Android (Java, Kotlin)', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-yellow-500' },
    { name: 'Django', level: 75, color: 'bg-green-600' },
    { name: 'MySQL', level: 80, color: 'bg-blue-600' },
    { name: 'Firebase', level: 90, color: 'bg-orange-500' },
    { name: 'REST API Integration', level: 85, color: 'bg-purple-500' },
    { name: 'Git & GitHub', level: 85, color: 'bg-gray-600' },
  ];

  const tools = [
    'Android Studio',
    'VS Code',
    'PyCharm',
    'Postman',
    'Firebase Console',
    'Cloud Firestore',
    'Realtime Database',
    'GitHub',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills with Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow hover:border-blue-200 group"
                >
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors font-medium">
                    {tool}
                  </span>
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

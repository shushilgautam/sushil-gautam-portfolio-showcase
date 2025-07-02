
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'WeCSIT',
      description: 'A comprehensive Flutter mobile app designed for the CSIT student community featuring Q&A functionality, leaderboards, and interactive learning tools.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'EMIS',
      description: 'School management Flutter application that streamlines attendance tracking, notice distribution, assignment management, and complaint handling.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'MySQL'],
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      title: 'CSIT Mentor',
      description: 'Native Android application focused on note sharing and study support specifically designed for CSIT students to enhance their learning experience.',
      technologies: ['Java', 'Kotlin', 'Android SDK', 'SQLite'],
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in mobile app development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group">
                    <Github size={16} />
                    <span className="font-medium">View on GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/shushilgautam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

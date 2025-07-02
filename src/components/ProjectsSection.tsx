
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'WeCSIT',
      description: 'A comprehensive Flutter mobile app designed for the CSIT student community featuring Q&A functionality, leaderboards, and interactive learning tools to enhance the academic experience.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      stats: { users: '500+', rating: '4.8' }
    },
    {
      title: 'EMIS',
      description: 'School management Flutter application that streamlines attendance tracking, notice distribution, assignment management, and complaint handling for educational institutions.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'MySQL'],
      color: 'from-green-500 to-emerald-500',
      featured: true,
      stats: { schools: '25+', efficiency: '40%' }
    },
    {
      title: 'CSIT Mentor',
      description: 'Native Android application focused on note sharing and study support specifically designed for CSIT students to enhance their learning experience and academic collaboration.',
      technologies: ['Java', 'Kotlin', 'Android SDK', 'SQLite'],
      color: 'from-purple-500 to-pink-500',
      featured: true,
      stats: { downloads: '1K+', notes: '200+' }
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-100 mb-6">
            <span className="text-sm font-medium text-green-700">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in mobile app development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-3"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-4 text-white/90 text-sm">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="font-bold text-lg">{value}</span>
                        <span className="text-xs capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-6">
                <p className="text-gray-600 leading-relaxed text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-4">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group font-medium">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors group font-medium">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/shushilgautam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

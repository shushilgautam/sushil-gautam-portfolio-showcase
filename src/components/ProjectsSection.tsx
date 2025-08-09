import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'WeCSIT',
      description:
        'Comprehensive Flutter app for CSIT students with Q&A, leaderboards, and learning tools to enhance academic collaboration.',
      technologies: ['Flutter', 'Django', 'MySQL', 'REST API', 'Firebase'],
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      stats: { users: '500+', efficiency: '40% ↑' },
      github: 'https://github.com/shushilgautam/wecsit',
      live: 'https://wecsit.app'
    },
    {
      title: 'EMIS',
      description:
        'School management system streamlining attendance tracking, notice distribution, assignment management, and complaint handling.',
      technologies: ['Flutter', 'Django', 'MySQL', 'REST API', 'AWS'],
      color: 'from-green-500 to-emerald-500',
      featured: true,
      stats: { efficiency: '70% ↑', schools: '1+' },
      github: 'https://github.com/shushilgautam/emis',
      live: 'https://emis.edu'
    },
    {
      title: 'CSIT Mentor',
      description:
        'Native Android app for CSIT students featuring note sharing, resource library, and collaborative learning tools.',
      technologies: ['Kotlin', 'Material Design', 'Firebase', 'Jetpack', 'MVVM'],
      color: 'from-purple-500 to-pink-500',
      featured: true,
      stats: { downloads: '500+', active: '300+' },
      github: 'https://github.com/shushilgautam/csit-mentor',
      live: 'https://play.google.com/store/apps/csitmentor'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-xs mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions in mobile development with measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className={`h-44 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Featured
                  </div>
                )}
                
                {/* Project Title */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                
                {/* Stats Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div 
                      key={key} 
                      className="bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs"
                    >
                      <span className="font-semibold">{value}</span> {key}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5">
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/shushilgautam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-all"
          >
            <Github size={18} />
            <span>Explore All Projects</span>
            <ExternalLink size={16} className="opacity-70" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            12+ repositories showcasing diverse technical solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
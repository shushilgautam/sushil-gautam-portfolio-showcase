import { FaMicrosoft, FaAndroid, FaPython, FaDatabase, FaLink } from "react-icons/fa";
import { SiMysql, SiDotnet, SiFlutter, SiDjango, SiFirebase, SiKotlin } from "react-icons/si";
import { DiJava } from "react-icons/di"; 
import { TbApi, TbPuzzle, TbBinaryTree, TbDatabase, TbTools } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const SkillsSection = () => {
  
  const skills = [
    { name: '.NET', level: 90, color: 'from-indigo-500 to-indigo-700', icon: <SiDotnet />, tags: ['C#', 'ASP.NET', 'EF Core'] },
    { name: 'Flutter', level: 95, color: 'from-blue-500 to-blue-600', icon: <SiFlutter />, tags: ['Dart'] },
    { name: 'Android', level: 85, color: 'from-green-500 to-green-600', icon: <FaAndroid />, tags: ['Java', 'Kotlin'] },
    { name: 'Java', level: 80, color: 'from-yellow-600 to-orange-600', icon: <DiJava /> },
    { name: 'Kotlin', level: 80, color: 'from-purple-600 to-purple-800', icon: <SiKotlin /> },
    { name: 'Django', level: 75, color: 'from-emerald-500 to-emerald-600', icon: <SiDjango /> },
    { name: 'MySQL', level: 80, color: 'from-blue-600 to-indigo-600', icon: <SiMysql /> },
    { name: 'Firebase', level: 90, color: 'from-orange-500 to-red-500', icon: <SiFirebase /> },
    { name: 'REST API', level: 85, color: 'from-purple-500 to-purple-600', icon: <TbApi /> },
    { name: 'MSSQL', level: 80, color: 'from-blue-800 to-blue-900', icon: <FaDatabase /> },
    { name: 'EF Core', level: 85, color: 'from-indigo-400 to-indigo-600', icon: <TbPuzzle /> },
    { name: 'LINQ', level: 80, color: 'from-violet-500 to-violet-600', icon: <TbBinaryTree /> },
  ];

  const tools = [
    { name: 'Visual Studio', category: 'IDE', icon: <FaMicrosoft /> },
    { name: 'VS Code', category: 'Editor', icon: <MdWeb /> },
    { name: 'Android Studio', category: 'IDE', icon: <FaAndroid /> },
    { name: 'PyCharm', category: 'IDE', icon: <FaPython /> },
    { name: 'Postman', category: 'API', icon: <TbApi /> },
    { name: 'Firebase', category: 'Backend', icon: <SiFirebase /> },
    { name: 'SSMS', category: 'Database', icon: <TbDatabase /> },
    { name: 'GitHub', category: 'Version', icon: <FaLink /> },
    { name: 'Git', category: 'Version', icon: <FaLink /> },
    { name: 'Azure DevOps', category: 'CI/CD', icon: <FaMicrosoft /> }
  ];

  const additionalSkills = [
    'UI/UX Design', 'Agile Methodologies', 'Problem Solving', 
    'Project Management', 'Technical Documentation', 'Performance Optimization',
    'Clean Architecture', 'Unit Testing', 'CI/CD Pipelines'
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full border border-purple-100 mb-5">
            <GiSkills className="text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Technical Expertise</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Skills & <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I leverage to build exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section - Compact Design */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <TbTools className="text-xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm">
                      <span className="text-xl text-gray-700 group-hover:text-purple-600 transition-colors duration-300">{skill.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium">{skill.name}</h4>
                      {skill.tags && (
                        <div className="flex gap-1 mt-1">
                          {skill.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 font-medium ml-2">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Additional Skills */}
          <div>
            {/* Tools Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <TbTools className="text-xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Tools & Technologies</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="group p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm mb-2">
                        <span className="text-xl text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                          {tool.icon}
                        </span>
                      </div>
                      <h4 className="text-gray-800 font-medium text-sm">{tool.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{tool.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Skills Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <MdWeb className="text-xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Additional Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors duration-300 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
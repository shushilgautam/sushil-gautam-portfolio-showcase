const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          
          {/* Left Content - Compact Timeline */}
          <div className="space-y-10">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-xs hover:shadow-sm transition-all duration-300 group">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">About Me</span>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  <span className="block">Full Stack Developer</span>
                  <span className="block mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    .NET & Flutter Expert
                  </span>
                </h2>
                
                <div className="mt-6 space-y-4 text-gray-600">
                  <p className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold hover:text-gray-800 transition-colors duration-300">
                    CSIT student specializing in cross-platform solutions with robust backend systems
                  </p>
                  <p className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold hover:text-gray-800 transition-colors duration-300">
                    Passionate about creating intuitive mobile/web interfaces with seamless UX
                  </p>
                  <p className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold hover:text-gray-800 transition-colors duration-300">
                    Focused on performance optimization and clean architecture patterns
                  </p>
                </div>
              </div>
            </div>

            {/* Education - Compact Timeline */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 to-indigo-100 ml-[13px]"></div>
              
              <div className="space-y-6 pl-10">
                <div className="relative group">
                  <div className="absolute -left-[46px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs transition-all duration-300 group-hover:shadow-sm group-hover:-translate-y-0.5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      BSc CSIT
                    </h4>
                    <p className="text-blue-600 text-sm font-medium">New Summit College</p>
                    <p className="text-gray-500 text-xs mt-1">2023 - Present | Kathmandu</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -left-[46px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs transition-all duration-300 group-hover:shadow-sm group-hover:-translate-y-0.5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Higher Secondary</h4>
                    <p className="text-gray-600 text-sm font-medium">Tilottama College</p>
                    <p className="text-gray-500 text-xs mt-1">2020 - 2022 | Rupandehi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Compact Stats Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="text-xl font-bold text-blue-600">5+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Projects</h3>
                    <p className="text-xs text-gray-500 mt-1">Delivered solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="text-xl font-bold text-green-600">1+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Years</h3>
                    <p className="text-xs text-gray-500 mt-1">Development experience</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="text-xl font-bold text-purple-600">95%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Satisfaction</h3>
                    <p className="text-xs text-gray-500 mt-1">Client happiness rate</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="text-xl font-bold text-amber-600">24/7</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Support</h3>
                    <p className="text-xs text-gray-500 mt-1">Availability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section - Compact Tags */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">.NET Core</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">Flutter</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">REST APIs</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">Firebase</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">UI/UX Design</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">Cloud Architecture</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">SQL Server</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">State Management</span>
              </div>
            </div>
            
            {/* New Languages Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089 1.546.383 2.97.837 4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.911-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.645-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.645.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.911.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.848 13.97 6.554 12.546 6.465 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>English</span>
                    <span>Fluent</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Nepali</span>
                    <span>Native</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Hindi</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
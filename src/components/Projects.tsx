import React from 'react';

const projectsList = [
  {
    title: "AI Full Stack App",
    tech: "Python, Flask, HTML, CSS, JavaScript",
    description: "A full-stack AI-powered application with seamless backend and frontend integration."
  },
  {
    title: "Friday AI Assistant",
    tech: "Python",
    description: "A virtual assistant capable of handling remote tasks and automation using voice and text commands."
  },
  {
    title: "E-commerce Website",
    tech: "React, Tailwind CSS",
    description: "A responsive frontend project featuring a modern UI and a clean product-based layout."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full opacity-80"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group"
            >
              <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">{project.tech}</p>
              <p className="text-slate-300 flex-grow leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

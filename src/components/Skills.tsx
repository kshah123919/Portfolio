import React from 'react';

const skills = ["Java", "C", "React", "SQL", "DSA", "Python"];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-800/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full opacity-80"></div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-800/80 backdrop-blur-sm text-slate-200 rounded-full text-sm sm:text-base font-semibold border border-slate-700/50 shadow-sm hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

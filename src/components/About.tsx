import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-800/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10 rounded-full opacity-80"></div>
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
          I am a driven student deeply passionate about web development and problem solving. 
          I love exploring new technologies, crafting clean and modern user interfaces, and 
          challenging myself with complex algorithmic problems. My goal is to build impactful, 
          user-centric applications that make a difference while continuing to learn and grow.
        </p>
      </div>
    </section>
  );
};

export default About;

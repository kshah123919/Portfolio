import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background glow effects for premium look */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none hidden md:block"></div>

      <div className="text-center px-4 z-10 w-full max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up transition-transform duration-500 hover:scale-[1.02]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Krish Shah</span>
        </h1>
        <p className="text-xl sm:text-3xl text-slate-400 mb-10 font-medium tracking-wide">
          React Developer <span className="text-blue-500/50 mx-2">|</span> Learning & Building
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25 transform hover:-translate-y-1 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;

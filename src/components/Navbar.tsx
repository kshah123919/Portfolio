import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 pt-2 pb-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 font-bold text-2xl tracking-wider text-blue-500 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            KS
          </div>
          <div className="flex space-x-6 sm:space-x-8">
            <a href="#home" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200">Home</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

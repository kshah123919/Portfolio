import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800/60 bg-slate-900 text-center relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

        <p className="text-slate-500 text-sm font-medium tracking-wide">
          © 2026 Krish Shah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

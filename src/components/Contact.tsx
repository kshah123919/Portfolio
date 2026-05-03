import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background glow for contact section */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none hidden md:block"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Get In <span className="text-blue-500">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full opacity-80"></div>
            
            <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto font-light">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
              feel free to drop a message!
            </p>
            
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-slate-700/50 shadow-xl inline-block w-full max-w-md">
                <form className="flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          placeholder="hello@example.com" 
                          className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Your Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          placeholder="What's on your mind?" 
                          className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                        ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="mt-2 px-6 py-3.5 w-full bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-md shadow-blue-500/20 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;

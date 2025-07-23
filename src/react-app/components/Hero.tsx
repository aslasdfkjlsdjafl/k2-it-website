import { ArrowRight, Code, Shield, Zap, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white/90 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Trusted by 500+ companies worldwide</span>
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>

          {/* Main heading */}
          <h1 className={`text-6xl md:text-8xl font-black text-white mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              K<sup className="text-4xl md:text-6xl">2</sup>
            </span>
            <span className="block text-4xl md:text-6xl mt-4 text-gray-100 font-bold">
              IT Consulting
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-light transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transforming businesses through 
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold"> innovative technology solutions</span>
            <br />and strategic digital transformation
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={scrollToServices}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-white/10 hover:scale-105"
            >
              <span className="group-hover:text-blue-300 transition-colors">Get In Touch</span>
            </button>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-lg">Custom Development</h3>
              <p className="text-gray-300 leading-relaxed">Tailored software solutions built with cutting-edge technologies</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">Military-grade security measures to protect your business assets</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-lg">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">Accelerated delivery with agile methodologies and automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

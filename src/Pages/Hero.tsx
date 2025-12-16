import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { useState } from 'react';
import profileImage from "../asset/image.png";

export const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    
    const pdfUrl = '/MohamedFirasAlfarra/Front-End_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Front-End_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-cyan-400/20 dark:from-blue-600/10 dark:via-purple-600/5 dark:to-cyan-600/10 rounded-full blur-xl md:blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/20 via-blue-400/10 to-purple-400/20 dark:from-cyan-600/10 dark:via-blue-600/5 dark:to-purple-600/10 rounded-full blur-xl md:blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-600/5 dark:to-pink-600/5 rounded-full blur-lg md:blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-400/20 dark:bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={i + 5}
            className="absolute w-1 h-1 md:w-1 md:h-1 bg-cyan-400/20 dark:bg-blue-400/20 rounded-full animate-float"
            style={{
              right: `${15 + i * 20}%`,
              bottom: `${10 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20">
          <div className="flex-1 w-full text-center lg:text-left animate-fade-in-up mt-10 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-20 mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 
              bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Mohamed Firas Alfarra
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 md:mb-6 font-medium">
              FrontEnd Developer & Mobile Developer, Crafting beautiful, functional, and user-centered digital experiences
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I specialize in creating modern web applications with focus on performance, 
              accessibility, and seamless user experiences. Let's build something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg md:rounded-xl font-semibold hover:shadow-lg md:hover:shadow-xl hover:shadow-blue-500/25 dark:shadow-blue-500/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={`group px-6 py-3 md:px-8 md:py-3.5 border-2 border-blue-600 dark:border-cyan-500 rounded-lg md:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isDownloading 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-wait' 
                    : 'text-blue-600 dark:text-cyan-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent hover:shadow-lg md:hover:shadow-xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-500/10 hover:scale-105'
                }`}
              >
                <Download className={`w-4 h-4 md:w-5 md:h-5 ${isDownloading ? 'animate-bounce' : 'group-hover:animate-pulse'}`} />
                <span>
                  {isDownloading ? 'Downloading...' : 'Download CV'}
                </span>
                {!isDownloading && (
                  <span className="hidden sm:inline text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    PDF
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="flex-1 w-full flex justify-center lg:justify-end lg:items-end h-[600px] lg:h-[calc(100vh-100px)] mt-8 lg:mt-0">
            <div className="relative w-full h-full max-w-[500px] max-h-[1000px]">
             <img
                src={profileImage}
                alt="Mohamed Firas Alfarra - Frontend Developer"
                className="w-full h-full object-cover object-center rounded-l-[40px] lg:rounded-l-[60px] drop-shadow-md"
                style={{filter : "dropshadow"}}
              />

            </div>
          </div>
              </div>

              <div className="absolute -inset-3 md:-inset-4 lg:-inset-6 border-2 border-dashed border-blue-400/20 dark:border-blue-500/10 rounded-full animate-spin-slow"></div>
              
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-2 md:border-3 lg:border-4 border-blue-400/20 dark:border-blue-500/15 rounded-full animate-spin-slow">
                <div className="absolute inset-3 md:inset-4 lg:inset-6 border border-cyan-400/15 rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 lg:-bottom-8 lg:-left-8 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 border-2 md:border-3 lg:border-4 border-cyan-400/20 dark:border-cyan-500/15 rounded-full animate-spin-slow-reverse">
                <div className="absolute inset-2 md:inset-3 lg:inset-4 border border-purple-400/15 rounded-full"></div>
              </div>
              
              <div className="absolute top-4 right-8 md:top-6 md:right-12 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm md:blur-md opacity-50 animate-pulse"></div>
              <div className="absolute bottom-8 left-4 md:bottom-12 md:left-6 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm md:blur-md opacity-50 animate-pulse animation-delay-700"></div>
              
              <div className="absolute -inset-6 md:-inset-8 lg:-inset-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full animate-spin-slow-reverse">
                    <div className="absolute inset-0 border border-blue-400/10 rounded-full"></div>
                    <div className="absolute inset-2 md:inset-3 lg:inset-4 border border-cyan-400/10 rounded-full"></div>
                    <div className="absolute inset-4 md:inset-6 lg:inset-8 border border-purple-400/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about" 
            className="group flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-500 transition-colors"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 group-hover:scale-110 transition-transform duration-300">
              <ArrowDown className="w-4 h-4 md:w-6 md:h-6 animate-bounce" />
            </div>
            <span className="text-xs md:text-sm mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll down
            </span>
          </a>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 30s linear infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-10px, 10px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 320px) {
          .text-3xl {
            font-size: 1.75rem;
          }
          .w-64.h-64 {
            width: 14rem;
            height: 14rem;
          }
        }
        
        /* تحسينات للأجهزة اللوحية */
        @media (min-width: 768px) and (max-width: 1023px) {
          .flex-col-reverse {
            flex-direction: column-reverse;
          }
          .mt-10 {
            margin-top: 2.5rem;
          }
        }
        
        /* تحسينات للشاشات الكبيرة جداً */
        @media (min-width: 1920px) {
          .xl\:text-7xl {
            font-size: 5rem;
          }
          .xl\:w-\[32rem\] {
            width: 36rem;
          }
          .xl\:h-\[32rem\] {
            height: 36rem;
          }
        }
      `}</style>
    </section>
  );
};
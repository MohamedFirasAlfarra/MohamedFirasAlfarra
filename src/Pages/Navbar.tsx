import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Mail, Download, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const pdfUrl = '/MohamedFirasAlfarra/Front-End_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Front-End_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {isOpen && isMobile && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-xl z-40 transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative hidden sm:block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-30"></div>
              </div>
              <a
                href="#home"
                className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] sm:max-w-none"
              >
                Mohamed Firas Alfarra
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                    <span>{link.name}</span>
                    
                    <div className={`absolute inset-0 rounded-xl -z-10 transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10' 
                        : 'group-hover:bg-gradient-to-r group-hover:from-blue-500/5 group-hover:to-cyan-500/5'
                    }`}></div>
                    
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                    )}
                  </a>
                );
              })}

              <button
                onClick={handleDownloadCV}
                className="ml-2 flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 dark:shadow-blue-500/10 hover:scale-105 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span className="hidden md:inline">Download CV</span>
                <span className="md:hidden">CV</span>
              </button>

              <button
                onClick={toggleTheme}
                className="ml-2 p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 md:w-5 md:h-5 text-gray-700 group-hover:rotate-12 transition-transform" />
                ) : (
                  <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 group-hover:rotate-45 transition-transform" />
                )}
              </button>
            </div>

            <div className="hidden md:flex lg:hidden items-center gap-1 sm:gap-2">
              {navLinks.slice(0, 2).map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    title={link.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}

              <div className="relative group">
                <button className="p-2.5 sm:p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-36 sm:w-48 bg-white dark:bg-gray-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-200 dark:border-gray-800">
                  {navLinks.slice(2).map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 first:rounded-t-xl last:rounded-b-xl"
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleDownloadCV}
                className="p-2.5 sm:p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                title="Download CV"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={toggleTheme}
                className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                ) : (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                )}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-1 sm:gap-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                ) : (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 sm:p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="flex items-center gap-2 sm:gap-3">
              
              <div>
                <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">Mohamed Firas</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Frontend Developer</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="space-y-1 sm:space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      <Icon className={`w-3 h-3 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{link.name}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                    )}
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => {
                handleDownloadCV();
                setIsOpen(false);
              }}
              className="w-full mt-6 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Download CV (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
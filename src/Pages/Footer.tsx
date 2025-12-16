import { Heart, Github, Linkedin, Instagram, Mail, ArrowUp, Sparkles, Code2, Palette, MapPin, Phone, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/MohamedFirasAlfarra',
      username: '@MohamedFirasAlfarra',
      bgColor: 'hover:bg-gray-900 dark:hover:bg-gray-800',
      borderColor: 'border-gray-700 dark:border-gray-600',
      iconColor: 'text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-100'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/mohamedfirasalfarra',
      username: '/in/mohamedfirasalfarra',
      bgColor: 'hover:bg-blue-700 dark:hover:bg-blue-800',
      borderColor: 'border-blue-600/30 dark:border-blue-500/30',
      iconColor: 'text-blue-500 dark:text-blue-400 group-hover:text-white'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/code.withfiras?igsh=MW1nODFydmc2aThpOQ==',
      username: '@code.withfiras',
      bgColor: 'hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-700',
      borderColor: 'border-pink-500/30 dark:border-pink-400/30',
      iconColor: 'text-pink-500 dark:text-pink-400 group-hover:text-white'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:fralfarra11@gmail.com',
      username: 'fralfarra11@gmail.com',
      bgColor: 'hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500',
      borderColor: 'border-red-500/30 dark:border-red-400/30',
      iconColor: 'text-red-500 dark:text-red-400 group-hover:text-white'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home',  },
    { name: 'About', href: '#about', },
    { name: 'Projects', href: '#projects', },
    { name: 'Contact', href: '#contact',  },
  ];

  const services = [
    'Frontend Development',
    'Mobile Developer',
    'Responsive Web Design',
    'Web Applications',
    'Performance Optimization',
    'Code Review',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200 transition-all duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-100/20 via-blue-100/10 to-cyan-100/20 dark:from-purple-900/10 dark:via-blue-900/5 dark:to-cyan-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-100/20 via-blue-100/10 to-purple-100/20 dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-10 dark:opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,theme(colors.gray.400)_1px)] dark:bg-[linear-gradient(90deg,transparent_1px,white_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,theme(colors.gray.400)_1px)] dark:bg-[linear-gradient(transparent_1px,white_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 py-12 lg:py-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
                      Mohamed Firas Alfarra
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Frontend Developer & Mobile Developer
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                      <a href="mailto:fralfarra11@gmail.com" className="font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        fralfarra11@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                      <div className="font-medium text-gray-800 dark:text-gray-200">Available for remote work worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-300/50 dark:border-gray-700/50 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  Services
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-300/30 dark:border-gray-700/30 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-300/50 dark:border-gray-700/50 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-purple-500 dark:text-purple-400" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/30 dark:border-gray-700/30 hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-300/50 dark:border-gray-700/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                Let's Connect & Build Together
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Follow for updates, projects, and web development insights
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border ${social.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.bgColor}`}
                    aria-label={social.label}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <div className="relative">
                      <Icon className={`w-5 h-5 transition-all duration-300 ${social.iconColor}`} />
                      {hoveredSocial === social.label && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur"></div>
                      )}
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors">
                        {social.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-300">
                        {social.username}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-300/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
  
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600"></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @media (max-width: 320px) {
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .gap-3 {
            gap: 0.5rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .lg\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1920px) {
          .container {
            max-width: 1440px;
          }
        }
      `}</style>
    </footer>
  );
};
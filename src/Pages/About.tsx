import { Code2, Database, Palette, Rocket, Zap, User, Target, Award, Clock, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { theme } = useTheme();

  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Code2, 
      description: 'React, JavaScript, TypeScript, Tailwind CSS, Bootstrap, Next.js',
      color: 'from-purple-600 to-blue-600'
    },
    { 
      name: 'Mobile Developer', 
      icon: Palette, 
      description: 'Dart, Flutter, Firebase',
      color: 'from-pink-600 to-rose-600'
    },
    { 
      name: 'Responsive Web Design', 
      icon: Zap, 
      description: 'Mobile-First Design, Cross-Browser Compatibility, Performance Optimization',
      color: 'from-green-600 to-emerald-600'
    },
    { 
      name: 'Modern Development', 
      icon: Rocket, 
      description: 'Git, REST APIs, Component Architecture, Testing, Deployment',
      color: 'from-orange-600 to-yellow-600'
    },
  ];

  const experiences = [
    { 
      year: '2022-2023', 
      title: 'Frontend Development Intern', 
      company: 'Future solutions for information technology.',
      description: 'Developed and maintained multiple responsive websites and dashboards using Nuxt.js, JavaScript, Bootstrap and modern CSS frameworks. Built and deployed 4+ projects for clients in e-commerce, education, and portfolio sectors.'
    },
    { 
      year: '2023-present', 
      title: 'Frontend Developer & Mobile Developer', 
      company: 'Freelance / Remote',
      description: 'Developed and maintained multiple responsive websites and dashboards using React.js, Nuxt.js, JavaScript, and modern CSS frameworks. Built and deployed 4+ projects for clients in e-commerce, education, and portfolio sectors.'
      // description: 'Developing responsive web applications, designing user interfaces, and collaborating with clients to deliver high-quality digital solutions.'
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-full border border-purple-400/30 dark:border-purple-500/30">
            <User className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
              About Me
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
            Let Me <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">Introduce</span> Myself
          </h2>
          
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm Mohamed Firas Alfarra, a passionate Frontend Developer and Mobile Developer dedicated to creating 
            exceptional digital experiences. With a strong foundation in computer science and continuous learning 
            in modern web technologies, I specialize in building responsive, performant, and user-friendly applications.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-2/5 animate-fade-in-up">
          
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                Personal Information
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Full Name</div>
                    <div className="font-medium text-gray-800 dark:text-white">Mohamed Firas Alfarra</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Specialization</div>
                    <div className="font-medium text-gray-800 dark:text-white">Frontend Development & Mobile Developer</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                    <div className="font-medium text-gray-800 dark:text-white">2+ Years Professional Experience</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Education</div>
                    <div className="font-medium text-gray-800 dark:text-white">Computer Science Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                <Code2 className="w-4 h-4" />
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Experience
              </button>
            </div>

            <div className="animate-fade-in">
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group p-5 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-400/30 dark:hover:border-purple-500/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <skill.icon className="text-white w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      className="group p-5 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-400/30 dark:hover:border-purple-500/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-full border border-purple-400/30 dark:border-purple-500/30 mb-3">
                            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.year}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{exp.title}</h3>
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{exp.company}</div>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

           
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {[
            { number: '8+', label: 'Projects Completed', icon: Code2 },
            { number: '5+', label: 'Happy Clients', icon: User },
            { number: '2+', label: 'Years Experience', icon: Clock },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 dark:text-purple-400" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        @media (max-width: 320px) {
          .text-3xl {
            font-size: 1.75rem;
          }
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .lg\:flex-row {
            flex-direction: column;
          }
          .lg\:w-2\/5 {
            width: 100%;
          }
          .lg\:w-3\/5 {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
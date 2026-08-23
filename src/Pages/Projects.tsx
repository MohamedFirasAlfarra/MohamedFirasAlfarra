import { ExternalLink, Github, Code2, Smartphone, Shield, Filter } from 'lucide-react';
import { useState } from 'react';
import haircutImg from "../asset/HairCut.jpg";
import sportsClubImg from "../asset/SportsClub.png";
import baddarFurnitureImg from "../asset/baddarfurniture.jpg";
import familyCareImg from "../asset/familycare.png";
import ymediaImg from "../asset/ymedia.jpg";
import devixaacademy from "../asset/devixaacademy.jpg";
import Zenomix from "../asset/Zenomix.jpg";
import BasicNetworkSetup from "../asset/BasicNetworkSetup.jpg";
import RouterConfigurationLab from "../asset/RouterConfigurationLab.jpg";
import park4NightImg from "../asset/Park4Night.png";
import ubookImg from "../asset/UBook.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
   {
    title: 'ymediaDesign',
    description: 'React.js, Tailwind CSS, Supabase | Team of passionate creatives dedicated to helping brands thrive in the digital world through innovative design and strategic thinking.',
    image: ymediaImg,
    tags: ['React.js', 'TailwindCss', 'Supabase'],
    liveUrl: 'https://ymedia.design',
    category: 'web',
  },
  {
    title: 'Devixa Academy',
    description: 'React.js, Tailwind CSS, Supabase | Online learning platform for Devixa Academy.',
    image: devixaacademy,
    tags: ['React.js', 'TailwindCss', 'Supabase'],
    liveUrl: 'https://devixaacademy.vercel.app/',
    category: 'web',
  },
  {
    title: 'Zenomix',
    description: 'React.js, Tailwind CSS | Zenomix Services UG is your partner for courier and parcel logistics, passenger transport and non-emergency patient journeys.',
    image: Zenomix,
    tags: ['React.js', 'TailwindCss'],
    liveUrl: 'https://zenomix.de/',
    category: 'web',
  },
  {
    title: 'FamilyCare',
    description: 'Nuxt.js, Bootstrap | E-commerce platform for beauty, hair, and skincare products, designed for smooth shopping experience and responsive UI.',
    image: familyCareImg,
    tags: ['Nuxt.js', 'Bootstrap', 'Node.js'],
    liveUrl: 'https://familycareuae.net',
    category: 'web',
  },
  {
    title: 'HairCut',
    description: 'React.js, TailwindCSS | Responsive barbershop booking website with multiple service sections (VIP, classic, skincare, bridal). Improved booking flow and usability across devices.',
    image: haircutImg,
    tags: ['React', 'JavaScript', 'Supabase', 'TailwindCss'],
    liveUrl: 'https://mohamedfirasalfarra.github.io/EliteCuts/',
    category: 'web',
  },
  {
    title: 'Sports Club',
    description: 'React.js, TailwindCSS | Fitness and bodybuilding website featuring workouts, nutrition plans, Zumba, and slimming/bulking programs.',
    image: sportsClubImg,
    tags: ['React', 'JavaScript', 'Supabase', 'TailwindCss'],
    liveUrl: 'https://mohamedfirasalfarra.github.io/Body-Building/',
    category: 'web',
  },
  {
    title: 'baddarfurniture',
    description: 'Nuxt.js, Bootstrap | Corporate furniture website for a UAE-based company. Built responsive UI with elegant design aligned to brand identity.',
    image: baddarFurnitureImg,
    tags: ['Nuxt.js', 'Bootstrap', 'Node.js'],
    liveUrl: 'https://baddarfurniture.com/',
    category: 'web',
  },
 
 
  {
    title: 'Park4Night',
    description: 'Flutter/Dart | Mobile app helping vanlifers, campers, and RV users find parking and camping spots with an intuitive interface.',
    image: park4NightImg,
    tags: ['Flutter', 'Dart', 'Supabase'],
    liveUrl: '#',
    category: 'mobile',
  },
  {
    title: 'UBook',
    description: 'Flutter/Dart | Social reading app offering book recommendations, clubs, and reading diaries to make reading more interactive and engaging.',
    image: ubookImg,
    tags: ['Flutter', 'Dart'],
    liveUrl: '#',
    category: 'mobile',
  },
  {
    title: 'IT Support Portfolio',
    description: 'Windows Server, Active Directory, DNS, DHCP | IT infrastructure setup and maintenance project showcasing networking and system administration skills.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['Windows Server','Active Directory','DNS','DHCP'],
    liveUrl: '#',
    category: 'it-support',
  },
  {
    title: 'Network Lab Setup',
    description: 'Cisco Packet Tracer, VMware | Complete network lab simulation with routing, switching, and virtualization for enterprise environments.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    tags: ['Cisco Packet Tracer','Networking'],
    liveUrl: '#',
    category: 'it-support',
  },
  {
    title: 'Basic Network Setup',
    description: 'Cisco Packet Tracer | Simple network topology with PCs connected through switches, basic IP addressing and connectivity testing.',
    image: BasicNetworkSetup,
    tags: ['Cisco Packet Tracer','Basic Networking','IP Configuration'],
    liveUrl: '#',
    category: 'it-support',
  },
  {
    title: 'Router Configuration Lab',
    description: 'Cisco Packet Tracer | Basic router setup with static routing.',
    image: RouterConfigurationLab,
    tags: ['Cisco Packet Tracer','Router Configuration','Static Routing'],
    liveUrl: '#',
    category: 'it-support',
  },
];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'web', label: 'Web Development', icon: Code2 },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'it-support', label: 'IT Support', icon: Shield },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);


  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 animate-fade-in-up ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:scale-105'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeFilter === filter.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                />
                <span>{filter.label}</span>
                {activeFilter === filter.id && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/50 rounded-full animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" key={activeFilter}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
              
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

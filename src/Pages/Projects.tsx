import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'HairCut',
      description: 'React.js, TailwindCSS | Responsive barbershop booking website with multiple service sections (VIP, classic, skincare, bridal). Improved booking flow and usability across devices.',
      image: '/src/asset/HairCut.jpg',
      tags: ['React', 'JavaScript', 'Supabase', 'TailwindCss'],
      liveUrl: 'https://mohamedfirasalfarra.github.io/EliteCuts/﻿',
      
    },
    {
      title: 'Sports Club',
      description: 'React.js, TailwindCSS | Fitness and bodybuilding website featuring workouts, nutrition plans, Zumba, and slimming/bulking programs.',
      image: '/src/asset/SportsClub.png',
      tags: ['React', 'JavaScript', 'Supabase', 'TailwindCss'],
      liveUrl: 'https://mohamedfirasalfarra.github.io/Body-Building/',
      
    },
    {
      title: 'baddarfurniture',
      description: 'Nuxt.js, Bootstrap | Corporate furniture website for a UAE-based company. Built responsive UI with elegant design aligned to brand identity.',
      image: '/src/asset/baddarfurniture.jpg',
      tags: ['Nuxt.js', 'Bootstrap', 'Node.js'],
      liveUrl: 'https://baddarfurniture.com/',
      
    },
    {
      title: 'FamilyCare',
      description: 'Nuxt.js, Bootstrap | E-commerce platform for beauty, hair, and skincare products, designed for smooth shopping experience and responsive UI.',
      image: '/src/asset/familycare.png',
      tags: ['Nuxt.js', 'Bootstrap', 'Node.js'],
      liveUrl: 'https://familycareuae.net',
      
    },
    {
      title: 'ymediaDesign',
      description: 'React.js, Tailwind CSS, Supabase | Team of passionate creatives dedicated to helping brands thrive in the digital world through innovative design and strategic thinking.',
      image: '/src/asset/ymedia.png',
      tags: ['React.js', 'TailwindCss', 'Supabase'],
      liveUrl: 'https://ymedia.design',
      
    },
    {
      title: 'SilverRooster',
      description: 'React.js, Tailwind CSS, Supabase | best fresh and healthy chicken products to our customers. We believe that quality starts from the source.',
      image: '/src/asset/Silverrooster.jpg',
      tags: ['React.js', 'TailwindCss', 'Supabase'],
      liveUrl: 'https://silver-rooster.vercel.app',
      
    },
    {
      title: 'Park4Night',
      description: 'Flutter/Dart | Mobile app helping vanlifers, campers, and RV users find parking and camping spots with an intuitive interface.',
      image: '/src/asset/Park4Night.png',
      tags: ['Flutter', 'Dart', 'Supabase'],
      liveUrl: '#',
      
    },
    {
      title: 'UBook',
      description: 'Flutter/Dart | Social reading app offering book recommendations, clubs, and reading diaries to make reading more interactive and engaging.',
      image: '/src/asset/UBook.png',
      tags: ['Flutter', 'Dart'],
      liveUrl: '#',
      
    },
    // {
    //   title: 'Paints',
    //   description: 'Flutter/Dart | It is a mobile app tha is your trusted partner for high-quality paints and art supplies. We serve both professional artists and passionate hobbyists.',
    //   tags: ['Flutter', 'Dart', 'Supabase'],
    //   liveUrl: '#',
      
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Project data
const projectsData = [
  {
    id: 1,
    title: 'Phishing Email Detection',
    description: 'A real-time phishing email detection web app built with Streamlit and powered by machine learning models trained on 80,000+ emails. Users can paste email content and instantly receive predictions from multiple models on whether the email is phishing or legitimate.',
    image: '/images/wireshark-logo.png',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'Streamlit', 'Machine Learning'],
    liveUrl: 'https://phishing-detector-feytfxdzppy4tnz3aynpd9.streamlit.app',
    githubUrl: 'https://github.com/jkalski/phishing-detector',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product listings, cart functionality, user authentication, and payment processing.',
    image: '/images/projects/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://project1.example.com',
    githubUrl: 'https://github.com/yourusername/project1',
    featured: true
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with team collaboration features, real-time updates, and data visualization.',
    image: '/images/projects/project2.jpg',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://project2.example.com',
    githubUrl: 'https://github.com/yourusername/project2',
    featured: true
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather application that fetches and displays weather data, forecasts, and location-based information.',
    image: '/images/projects/project3.jpg',
    tags: ['React', 'Weather API', 'Chart.js', 'CSS Modules'],
    liveUrl: 'https://project3.example.com',
    githubUrl: 'https://github.com/yourusername/project3',
    featured: false
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A social media analytics dashboard that aggregates and visualizes data from multiple platforms.',
    image: '/images/projects/project4.jpg',
    tags: ['React', 'Redux', 'D3.js', 'Social Media APIs'],
    liveUrl: 'https://project4.example.com',
    githubUrl: 'https://github.com/yourusername/project4',
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredProjects = activeFilter === 'featured' 
    ? projectsData.filter(project => project.featured)
    : projectsData;

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'all'
                  ? 'bg-emerald-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'featured'
                  ? 'bg-emerald-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-gray-800/50 rounded-xl overflow-hidden shadow-lg 
                transform transition-all duration-500 hover:scale-105 
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                  <div className="text-4xl font-bold text-emerald-400">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                {/* Action Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-emerald-500 
              text-emerald-400 hover:bg-emerald-500/10
              font-medium rounded-full transition-all"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
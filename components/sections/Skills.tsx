import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Skill categories and items
const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Firebase', level: 80 }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Jest', level: 75 },
      { name: 'Figma', level: 65 },
      { name: 'Wireshark', level: 80 }
    ]
  }
];

// Tech icons (you can replace these with actual SVGs or images)
const techIcons = [
  { name: 'React', icon: 'reactjs.svg' },
  { name: 'Next.js', icon: 'nextjs.svg' },
  { name: 'TypeScript', icon: 'typescript.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'Express', icon: 'express.svg' },
  { name: 'MongoDB', icon: 'mongodb.svg' },
  { name: 'PostgreSQL', icon: 'postgresql.svg' },
  { name: 'Firebase', icon: 'firebase.svg' },
  { name: 'Git', icon: 'git.svg' },
  { name: 'Docker', icon: 'docker.svg' },
  { name: 'Jest', icon: 'jest.svg' },
  { name: 'Wireshark', icon: 'wireshark-logo.png' }
];

const Skills = () => {
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

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        {/* Skill Categories */}
        <div className={`mb-20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-700 delay-300`}>
          {skillsData.map((category, index) => (
            <div key={category.category} className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-400 rounded-full transition-all duration-1000"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 500}ms` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className={`${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-700 delay-700`}>
          <h3 className="text-xl font-bold mb-8 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {techIcons.map((tech, index) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center transform transition-all hover:scale-110"
                style={{ 
                  transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                }}
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2 overflow-hidden">
                  <Image
                    src={`/images/${tech.icon}`}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
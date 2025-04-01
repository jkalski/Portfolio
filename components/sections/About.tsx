import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-12 items-center ${
          isVisible 
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
          } transition-all duration-700`}
        >
          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-emerald-400">
              <Image 
                src="/images/profile.jpg" 
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
            <p className="text-gray-300 mb-6">
              Hi there! I'm a passionate developer with expertise in modern web technologies. 
              With a strong foundation in both frontend and backend development, I create 
              seamless, user-centric applications that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in tech began five years ago, and since then, I've worked on a 
              variety of projects that have honed my skills in React, Next.js, Node.js, 
              and other cutting-edge technologies.
            </p>
            
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-6">
              <div>
                <strong className="text-emerald-400">Name:</strong> Your Name
              </div>
              <div>
                <strong className="text-emerald-400">Email:</strong> your.email@example.com
              </div>
              <div>
                <strong className="text-emerald-400">Location:</strong> City, Country
              </div>
              <div>
                <strong className="text-emerald-400">Availability:</strong> Available for work
              </div>
            </div>
            
            {/* CTA Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 
                text-black font-medium rounded-full transition-all 
                hover:scale-105 transform"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
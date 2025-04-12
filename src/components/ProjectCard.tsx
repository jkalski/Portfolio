import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  image,
  demoLink,
  githubLink
}) => {
  return (
    <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full">
      <div className="relative h-36 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-1 mb-2 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1 mt-1 mb-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-700/50 text-cyan-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        {(demoLink || githubLink) && (
          <div className="flex gap-2 mt-auto pt-2">
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs bg-cyan-600 hover:bg-cyan-700 text-white px-2 py-1 rounded transition-colors"
              >
                <FiExternalLink size={12} />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
              >
                <FiGithub size={12} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 
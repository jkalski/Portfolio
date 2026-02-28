'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';
import Image from 'next/image';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Projects from '@/components/sections/Projects';
import { FaGoogle, FaShieldAlt } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: '/images/java-logo.png' },
  { name: 'Python', icon: '/images/python_logo_no_bg.png' },
  { name: 'JavaScript', icon: '/images/javascript_logo.webp' },
  { name: 'Next.js', icon: '/images/nextjs_logo.png' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'MongoDB', icon: '/images/mongodb_logo_no_bg.png' },
  { name: 'SQL', icon: '/images/sql_logo.png' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Docker', icon: '/images/docker_logo_no_text.png' },
  { name: 'Linux', icon: '/images/linux_logo.jpg' },
];

const education = {
  school: 'California State University Northridge',
  degree: 'Bachelor of Science in Computer Science',
  period: 'August 2022 - Present',
  certifications: [
    {
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      date: 'January 2024',
      link: 'https://www.credly.com/badges/35b768a0-b017-48a8-8e3f-ed6452cfd47e/public_url'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: 'Planned: May 2025',
      link: '#'
    }
  ]
};

const jobs = [
  {
    company: 'Los Angeles Department of Water and Power (LADWP)',
    role: 'IT Support Technician / Student Professional Worker',
    period: 'July 2025 - Present',
    description: 'Provide Tier 1/2 enterprise technical support across Windows-based infrastructure in a 13,000+ user environment.',
    achievements: [
      'Provide Tier 1/2 enterprise technical support across Windows-based infrastructure in a 13,000+ user environment',
      'Administer Active Directory accounts, group policies, and role-based access controls to maintain secure system access',
      'Support enterprise platforms including SharePoint, Microsoft Teams, and Cornerstone LMS, resolving authentication and integration issues',
      'Contribute to MuleSoft integration initiatives by assisting with system mapping, requirements analysis, and cross-system data validation',
      'Document technical workflows and troubleshooting procedures to improve operational consistency',
    ],
    logo: '/images/ladwp_logo.png',
  },
  {
    company: 'LynkMe Smart Cards',
    role: 'Software Engineer Intern (Backend)',
    period: 'Feb 2025 - Present',
    description: 'LynkMe Smart Cards is a business card scanning and data management platform in Northridge, CA.',
    achievements: [
      'Designed and implemented backend services to process and normalize OCR-extracted business card data into structured relational schemas',
      'Developed secure RESTful APIs with server-side validation and authentication controls to support real-time data ingestion',
      'Engineered SQL-based data pipelines for structured storage and retrieval',
      'Optimized asynchronous image-processing workflows, reducing average response time by ~40%',
      'Strengthened backend validation logic, improving data integrity and reducing processing errors',
    ],
    logo: '/images/lynkme_cards_logo.jpg',
  },
  {
    company: 'Knockout Investing',
    role: 'Technical Business Systems Intern',
    period: 'May 2020 - Feb 2021',
    description: 'Knockout Investing is a remote financial technology company providing online financial programs.',
    achievements: [
      'Designed and launched a responsive web platform supporting an online financial education program',
      'Automated internal workflows using Google Workspace APIs and scripting to reduce manual administrative effort',
      'Analyzed user engagement data to identify optimization opportunities, increasing interaction by ~15%',
      'Provided technical support for CRM and internal data systems',
    ],
    logo: '/images/knockout_logo_half.png',
  }
];

const MainContent: React.FC = () => {
  return (
    <div className="p-4 space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
          <Image
            src="/images/Justin.jpeg"
            alt="Justin Kalski"
            fill
            className="rounded-full border-2 border-[rgb(0,128,128)] shadow-lg shadow-[rgb(0,128,128)]/20 hover:shadow-[rgb(0,128,128)]/30 transition-shadow duration-300 object-cover"
          />
        </div>
        <div className="flex-1" id="about">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Justin Kalski
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-1">
            Computer Science Student & Aspiring Full-Stack Developer with a passion for building modern, responsive web applications. While focused on scalable software solutions, I'm also a cybersecurity hobbyist, curious about how systems behave, uncovering hidden patterns, and designing with security in mind.
          </p>
        </div>
      </div>

      {/* Certifications Section */}
      <section className="mt-4">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-3 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FaGoogle className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Google Cybersecurity Professional</h3>
                <p className="text-sm text-gray-400">Completed February 2024</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-3 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FaShieldAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">CompTIA Security+</h3>
                <p className="text-sm text-gray-400">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Education</h2>
        <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
          <h3 className="font-bold text-white">Bachelor of Science in Computer Science</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <p className="text-cyan-500 font-medium">California State University Northridge</p>
            <p className="text-sm text-gray-400">August 2022 - Present</p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Jobs</h2>
        <div className="space-y-4">
          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
            <h3 className="font-bold text-white">IT Support Technician / Student Professional Worker</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-cyan-500 font-medium">Los Angeles Department of Water and Power (LADWP)</p>
              <p className="text-sm text-gray-400">July 2025 - Present</p>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              Provide Tier 1/2 enterprise technical support across Windows-based infrastructure in a 13,000+ user environment.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Provide Tier 1/2 enterprise technical support across Windows-based infrastructure in a 13,000+ user environment</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Administer Active Directory accounts, group policies, and role-based access controls to maintain secure system access</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Support enterprise platforms including SharePoint, Microsoft Teams, and Cornerstone LMS, resolving authentication and integration issues</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Contribute to MuleSoft integration initiatives by assisting with system mapping, requirements analysis, and cross-system data validation</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Document technical workflows and troubleshooting procedures to improve operational consistency</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
            <h3 className="font-bold text-white">Software Engineer Intern (Backend)</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-cyan-500 font-medium">LynkMe Smart Cards</p>
              <p className="text-sm text-gray-400">Feb 2025 - Present</p>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              LynkMe Smart Cards is a business card scanning and data management platform in Northridge, CA.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Designed and implemented backend services to process and normalize OCR-extracted business card data into structured relational schemas</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Developed secure RESTful APIs with server-side validation and authentication controls to support real-time data ingestion</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Engineered SQL-based data pipelines for structured storage and retrieval</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Optimized asynchronous image-processing workflows, reducing average response time by ~40%</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Strengthened backend validation logic, improving data integrity and reducing processing errors</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
            <h3 className="font-bold text-white">Technical Business Systems Intern</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-cyan-500 font-medium">Knockout Investing</p>
              <p className="text-sm text-gray-400">May 2020 - Feb 2021</p>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              Knockout Investing is a remote financial technology company providing online financial programs.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Designed and launched a responsive web platform supporting an online financial education program</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Automated internal workflows using Google Workspace APIs and scripting to reduce manual administrative effort</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Analyzed user engagement data to identify optimization opportunities, increasing interaction by ~15%</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Provided technical support for CRM and internal data systems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ProjectCard
            title="Phishing Email Detection App"
            description="A real-time phishing email detection web app built with Streamlit and powered by machine learning models trained on 80,000+ emails. Users can paste email content and get instant predictions from multiple models."
            technologies={['Python', 'Streamlit', 'Scikit-learn', 'TensorFlow']}
            image="/images/projects/project1.jpg"
            demoLink="https://phishing-detector-feytfxdzppy4tnz3aynpd9.streamlit.app"
            githubLink="https://github.com/jkalski/phishing-email-detection"
          />
          <ProjectCard
            title="EqualCare"
            description="A healthcare-focused web application promoting fairness in medical research datasets. Features include CSV upload handling, automated gender bias analysis with pandas, AI-powered insights generation via OpenRouter, and a RAG system using ChromaDB and SentenceTransformer for research paper integration."
            technologies={['FastAPI', 'React', 'Python', 'Pandas', 'OpenRouter', 'ChromaDB', 'SentenceTransformer', 'Tailwind CSS', 'AI/ML', 'Docker']}
            image="/images/projects/equalcareimg.jpg"
            demoLink="https://equalcare-production.up.railway.app/"
            githubLink="https://github.com/jkalski/equalcare"
          />
          <ProjectCard
            title="OptiMind Labs – HVAC Optimization Simulation Engine"
            description="Designed and implemented a custom HVAC simulation environment to model temperature control and energy usage dynamics. Built structured data collection pipelines to generate training trajectories stored in validated CSV datasets. Developed a modular reinforcement learning training workflow separating environment logic, data processing, and model training components. Implemented reproducible experiment configuration and dataset validation to ensure consistent training results. Structured project architecture for scalability, maintainability, and clear separation of system responsibilities."
            technologies={['Python', 'Reinforcement Learning', 'Data Pipelines']}
            image="/images/projects/optimind.png"
            githubLink="https://github.com/SpencerLevine9/OptiMind_Labs"
          />
          <ProjectCard
            title="LynkMe Business Card Scanner"
            description="A mobile-friendly web app that allows users to upload or capture business cards, then extract and autofill contact data using OCR and AI. Includes image preprocessing, text extraction using Tesseract, and structured data delivery via webhooks."
            technologies={['OCR', 'Tesseract', 'AI', 'Webhooks']}
            image="/images/projects/project4.jpg"
            demoLink="https://www.lynkmesmartcards.com/features-lynkme-card"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <SkillCard name="Java" level={85} />
          <SkillCard name="Python" level={80} />
          <SkillCard name="JavaScript" level={90} />
          <SkillCard name="React" level={85} />
          <SkillCard name="Next.js" level={80} />
          <SkillCard name="TypeScript" level={75} />
          <SkillCard name="MongoDB" level={70} />
          <SkillCard name="SQL" level={75} />
          <SkillCard name="Git" level={85} />
          <SkillCard name="Docker" level={65} />
          <SkillCard name="Linux" level={70} />
        </div>
      </section>
    </div>
  );
};

export default MainContent; 
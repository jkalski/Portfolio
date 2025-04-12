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
    company: 'Lynkme Cards',
    role: 'Back-End Developer Intern',
    period: 'Feb 2025 - Present',
    description: 'Lynkme Cards is a business card scanning and data management platform in Northridge, CA.',
    achievements: [
      'Developed backend services to process, validate, and integrate OCR-extracted data from scanned business cards',
      'Implemented secure API endpoints for data transmission, improving data validation efficiency by 30%',
      'Optimized server-side logic for handling image processing workflows, reducing response time by 40%',
      'Assisted in deploying scalable backend architecture using Node.js, MongoDB, and SQL',
      'Wrote and analyzed SQL queries for performance tracking and data processing',
    ],
    logo: '/images/lynkme_cards_logo.jpg',
  },
  {
    company: 'Meta+Lab',
    role: 'Front-End Development Intern',
    period: 'Summer 2018, 2019',
    description: 'Meta+Lab is a development agency in Northridge, CA, focused on creating innovative digital experiences.',
    achievements: [
      'Developed interactive web applications using React and modern JavaScript frameworks',
      'Collaborated with designers and backend engineers to improve UI/UX and application responsiveness',
      'Optimized website performance, improving load times by 20%',
    ],
    logo: '/images/metalab.jpg',
  },
  {
    company: 'Knockout Investing',
    role: 'Business Analyst / IT Intern',
    period: 'May 2020 - Feb 2021',
    description: 'Knockout Investing is a remote financial technology company providing online financial programs.',
    achievements: [
      'Developed and launched a responsive business website for an online financial program',
      'Automated administrative workflows using Google Workspace and scripts, streamlining daily operations',
      'Conducted data analysis on website traffic, leading to a 15% increase in engagement',
    ],
    logo: '/images/knockout_logo_half.png',
  }
];

const MainContent: React.FC = () => {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
          <Image
            src="/images/Justin.jpeg"
            alt="Justin Kalski"
            fill
            className="rounded-full border-2 border-[rgb(0,128,128)] shadow-lg shadow-[rgb(0,128,128)]/20 hover:shadow-[rgb(0,128,128)]/30 transition-shadow duration-300 object-cover"
          />
        </div>
        <div className="flex-1">
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

      {/* Jobs Section */}
      <section>
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Jobs</h2>
        <div className="space-y-4">
          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
            <h3 className="font-bold text-white">Back-End Developer Intern</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-cyan-500 font-medium">Lynkme Cards</p>
              <p className="text-sm text-gray-400">Feb 2025 - Present</p>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              Lynkme Cards is a business card scanning and data management platform in Northridge, CA.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Developed backend services to process, validate, and integrate OCR-extracted data from scanned business cards</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Implemented secure API endpoints for data transmission, improving data validation efficiency by 30%</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Optimized server-side logic for handling image processing workflows, reducing response time by 40%</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
            <h3 className="font-bold text-white">Front-End Development Intern</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-cyan-500 font-medium">Meta+Lab</p>
              <p className="text-sm text-gray-400">Summer 2018, 2019</p>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              Meta+Lab is a development agency in Northridge, CA, focused on creating innovative digital experiences.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Developed interactive web applications using React and modern JavaScript frameworks</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Collaborated with designers and backend engineers to improve UI/UX and application responsiveness</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Optimized website performance, improving load times by 20%</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
            <h3 className="font-bold text-white">Business Analyst / IT Intern</h3>
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
                <span>Developed and launched a responsive business website for an online financial program</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Automated administrative workflows using Google Workspace and scripts, streamlining daily operations</span>
              </li>
              <li className="text-sm text-gray-400 flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Conducted data analysis on website traffic, leading to a 15% increase in engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Education</h2>
        <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-4 transition-all duration-300">
          <h3 className="font-bold text-white">Bachelor of Science in Computer Science</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <p className="text-cyan-500 font-medium">California State University Northridge</p>
            <p className="text-sm text-gray-400">August 2022 - Present</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-1">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ProjectCard
            title="Phishing Email Detection App"
            description="A real-time phishing email detection web app built with Streamlit and powered by machine learning models trained on 80,000+ emails. Users can paste email content and get instant predictions from multiple models."
            technologies={['Python', 'Streamlit', 'Scikit-learn', 'TensorFlow']}
            image="/images/project1.jpg"
            demoLink="https://phishing-detector-feytfxdzppy4tnz3aynpd9.streamlit.app"
            githubLink="https://github.com/jkalski/phishing-email-detection"
          />
          <ProjectCard
            title="Code Quality Dashboard"
            description="A web application for analyzing Python code quality using Pylint. Features include code analysis, linting results, and a modern web interface to help developers improve their code."
            technologies={['Python', 'Pylint', 'Django', 'CI/CD']}
            image="/images/project2.jpg"
            githubLink="https://github.com/jkalski/code-quality-tool"
          />
          <ProjectCard
            title="Justflix"
            description="A Netflix clone built with the MERN stack. Features include user authentication, responsive UI, movie/TV show browsing, search functionality, and user profiles."
            technologies={['MongoDB', 'Express', 'React', 'Node.js']}
            image="/images/project3.jpg"
            demoLink="https://justflix.onrender.com/"
            githubLink="https://github.com/jkalski/Justflix"
          />
          <ProjectCard
            title="LynkMe Business Card Scanner"
            description="A mobile-friendly web app that allows users to upload or capture business cards, then extract and autofill contact data using OCR and AI. Includes image preprocessing, text extraction using Tesseract, and structured data delivery via webhooks."
            technologies={['OCR', 'Tesseract', 'AI', 'Webhooks']}
            image="/images/project4.jpg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section>
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
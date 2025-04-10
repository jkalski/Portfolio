'use client';

import Image from 'next/image';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Projects from '@/components/sections/Projects';

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

export default function MainContent() {
  return (
    <div className="space-y-8">
      {/* Intro Card */}
      <section id="about" className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">Justin Kalski</h1>
            <p className="text-gray-300 text-lg">
              Computer Science Student & Aspiring Full-Stack Developer with a passion for building modern, responsive web applications. While focused on scalable software solutions, I'm also a cybersecurity hobbyist, curious about how systems behave, uncovering hidden patterns, and designing with security in mind.
            </p>
            <a
              href="/Justin_Kalski_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <FiDownload className="mr-2" />
              Download Resume
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/jkalski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/justinkalski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:justin.kalski.123@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/3">
            <Image
              src="/images/Justin.jpeg"
              alt="Justin Kalski"
              width={300}
              height={300}
              className="w-64 h-64 rounded-full object-cover object-center border-2 border-[rgb(0,128,128)] shadow-lg shadow-[rgb(0,128,128)]/20 hover:shadow-[rgb(0,128,128)]/30 transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="space-y-4">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center gap-2 
                hover:bg-gray-800/70 transition-all duration-300 border border-gray-700
                hover:shadow-lg hover:shadow-[rgb(0,128,128)]/20 hover:-translate-y-1
                hover:border-[rgb(0,128,128)]/50 transform hover:scale-105"
            >
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={40}
                height={40}
                className={`w-10 h-10 transition-transform duration-300 hover:scale-110 ${
                  skill.name === 'MongoDB' ? 'bg-transparent' : ''
                } ${
                  skill.name === 'Java' || skill.name === 'Python' ? 'w-12 h-12' : ''
                } ${
                  skill.name === 'Docker' ? 'w-14 h-10' : ''
                } ${
                  skill.name === 'JavaScript' || skill.name === 'Next.js' || skill.name === 'React' ? 'w-12 h-12' : ''
                }`}
              />
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="space-y-4">
        <h2 className="text-2xl font-bold">Jobs</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.company} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-gray-700">
              <div className="flex items-start gap-4">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg bg-white p-2"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-gray-400">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.period}</p>
                </div>
              </div>
              <p className="text-gray-300">{job.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="space-y-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-gray-700">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="text-gray-400">{education.school}</p>
              <p className="text-lg font-medium text-[rgb(0,128,128)] mt-2">{education.period}</p>
            </div>
            <img
              src="/images/csun logo.png"
              alt="CSUN Logo"
              className="w-40 h-16 rounded-lg p-2"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-lg font-medium mb-4">Certifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800/30 p-4 rounded-lg border border-gray-700 hover:border-[rgb(0,128,128)]/50 
                    hover:shadow-lg hover:shadow-[rgb(0,128,128)]/20 hover:-translate-y-1 
                    transition-all duration-300 transform hover:scale-105
                    ${cert.date.startsWith('Planned') ? 'opacity-75' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {!cert.date.startsWith('Planned') && (
                      <Image
                        src="/images/google-cybersecurity-certificate-v2.png"
                        alt="Google Cybersecurity Badge"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg"
                      />
                    )}
                    <div>
                      <h5 className="font-semibold text-gray-200">{cert.name}</h5>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <p className={`text-sm ${cert.date.startsWith('Planned') ? 'text-blue-400' : 'text-gray-500'}`}>
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
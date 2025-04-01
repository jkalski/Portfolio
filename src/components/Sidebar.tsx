'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { 
  FiUser, 
  FiCode, 
  FiBriefcase, 
  FiFolder, 
  FiBookOpen,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX
} from 'react-icons/fi';

interface NavItem {
  label: string;
  icon: IconType;
  href: string;
}

interface SocialLink {
  label: string;
  icon: IconType;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', icon: FiUser, href: '#about' },
  { label: 'Skills', icon: FiCode, href: '#skills' },
  { label: 'Jobs', icon: FiBriefcase, href: '#jobs' },
  { label: 'Projects', icon: FiFolder, href: '#projects' },
  { label: 'Education', icon: FiBookOpen, href: '#education' },
];

const socialLinks: SocialLink[] = [
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/jkalski' },
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/in/justin-kalski' },
  { label: 'Email', icon: FiMail, href: 'mailto:contact@justinkalski.com' },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800/90 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        w-64 
        border-r border-gray-800/50
        bg-gray-900/50
        backdrop-blur-sm
        transition-transform 
        lg:transform-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block
        z-40
      `}>
        {/* Logo/Name */}
        <div className="p-6 border-b border-gray-800/50 backdrop-blur-sm">
          <h1 className="text-xl font-bold">Justin Kalski</h1>
          <p className="text-sm text-gray-400">Full-Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800/50 backdrop-blur-sm">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
} 
'use client';

import { useState, useEffect } from 'react';
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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700/90 transition-colors duration-200 shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 min-h-screen max-h-screen h-full
          w-[250px] 
          border-r border-gray-800/50
          bg-gray-900/95
          backdrop-blur-sm
          transition-transform duration-300 ease-in-out
          lg:transform-none
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:static lg:min-h-[calc(100vh-2rem)]
          z-40
          flex flex-col
          relative
          overflow-hidden
          p-0
        `}
      >
        {/* Logo/Name */}
        <div 
          className="p-3 sm:p-4 border-b border-gray-800/50 backdrop-blur-sm cursor-pointer hover:bg-gray-800/50 transition-colors duration-200"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            handleLinkClick();
          }}
        >
          <h1 className="text-base sm:text-lg font-bold">Justin Kalski</h1>
          <p className="text-xs text-gray-400">Full-Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="p-2 sm:p-3 overflow-y-auto flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links - positioned at the absolute bottom */}
        <div className="sticky bottom-0 left-0 right-0 w-full p-2 sm:p-3 border-t border-gray-800/50 bg-gray-900/95 mt-auto">
          <div className="flex justify-center space-x-3 sm:space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
} 
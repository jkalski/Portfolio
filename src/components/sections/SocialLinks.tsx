import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function SocialLinks() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-4 z-50">
      <a
        href="https://github.com/justinkalski"
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
        href="mailto:jkalski.cty@gmail.com"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <FiMail className="w-6 h-6" />
      </a>
    </div>
  );
} 
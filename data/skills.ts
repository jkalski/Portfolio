export interface Skill {
    name: string;
    level: number; // 0-100 scale
    icon?: string;
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }
  
  export const skillsData: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: 'react.svg' },
        { name: 'Next.js', level: 85, icon: 'nextjs.svg' },
        { name: 'TypeScript', level: 80, icon: 'typescript.svg' },
        { name: 'Tailwind CSS', level: 90, icon: 'tailwind.svg' },
        { name: 'HTML/CSS', level: 95, icon: 'html.svg' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: 'nodejs.svg' },
        { name: 'Express', level: 80, icon: 'express.svg' },
        { name: 'MongoDB', level: 75, icon: 'mongodb.svg' },
        { name: 'PostgreSQL', level: 70, icon: 'postgresql.svg' },
        { name: 'Firebase', level: 80, icon: 'firebase.svg' }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, icon: 'git.svg' },
        { name: 'Docker', level: 70, icon: 'docker.svg' },
        { name: 'CI/CD', level: 75, icon: 'cicd.svg' },
        { name: 'Jest', level: 75, icon: 'jest.svg' },
        { name: 'Figma', level: 65, icon: 'figma.svg' }
      ]
    }
  ];
  
  export const techIcons = [
    { name: 'React', icon: 'react.svg' },
    { name: 'Next.js', icon: 'nextjs.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Tailwind CSS', icon: 'tailwind.svg' },
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'Express', icon: 'express.svg' },
    { name: 'MongoDB', icon: 'mongodb.svg' },
    { name: 'PostgreSQL', icon: 'postgresql.svg' },
    { name: 'Firebase', icon: 'firebase.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'Jest', icon: 'jest.svg' }
  ];
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
  }
  
  export const projectsData: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product listings, cart functionality, user authentication, and payment processing.',
      image: '/images/projects/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://project1.example.com',
      githubUrl: 'https://github.com/yourusername/project1',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with team collaboration features, real-time updates, and data visualization.',
      image: '/images/projects/project2.jpg',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://project2.example.com',
      githubUrl: 'https://github.com/yourusername/project2',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application that fetches and displays weather data, forecasts, and location-based information.',
      image: '/images/projects/project3.jpg',
      tags: ['React', 'Weather API', 'Chart.js', 'CSS Modules'],
      liveUrl: 'https://project3.example.com',
      githubUrl: 'https://github.com/yourusername/project3',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A social media analytics dashboard that aggregates and visualizes data from multiple platforms.',
      image: '/images/projects/project4.jpg',
      tags: ['React', 'Redux', 'D3.js', 'Social Media APIs'],
      liveUrl: 'https://project4.example.com',
      githubUrl: 'https://github.com/yourusername/project4',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness application that allows users to track workouts, set goals, and visualize progress over time.',
      image: '/images/projects/project5.jpg',
      tags: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
      liveUrl: 'https://project5.example.com',
      githubUrl: 'https://github.com/yourusername/project5',
      featured: true
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A recipe application that allows users to search for recipes based on ingredients they have, dietary restrictions, and meal types.',
      image: '/images/projects/project6.jpg',
      tags: ['React', 'Food API', 'Styled Components', 'Context API'],
      liveUrl: 'https://project6.example.com',
      githubUrl: 'https://github.com/yourusername/project6',
      featured: false
    }
  ];
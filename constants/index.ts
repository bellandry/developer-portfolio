export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export const skills = {
  frontend: [
    {
      name: 'React',
      icon: 'react',
      description: 'Building efficient and reusable user interfaces with modern React patterns and hooks.'
    },
    {
      name: 'Next.js',
      icon: 'nextjs',
      description: 'Creating performant, SEO-friendly applications with server-side rendering and static generation.'
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      description: 'Writing type-safe code to reduce bugs and improve development experience.'
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
      description: 'Crafting responsive and beautiful UIs with utility-first CSS framework.'
    },
    {
      name: 'Redux Toolkit',
      icon: 'redux',
      description: 'Managing complex application state with modern Redux patterns.'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      icon: 'nodejs',
      description: 'Building scalable server-side applications with JavaScript runtime.'
    },
    {
      name: 'Express',
      icon: 'express',
      description: 'Fast, minimalist framework for building scalable web apps and RESTful APIs'
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql',
      description: 'Designing and managing relational databases for data persistence.'
    },
    {
      name: 'MongoDB',
      icon: 'mongodb',
      description: 'Working with NoSQL databases for flexible data storage.'
    },
    {
      name: 'GraphQL',
      icon: 'graphql',
      description: 'Implementing efficient data querying and manipulation.'
    }
  ],
  tools: [
    {
      name: 'Git',
      icon: 'git',
      description: 'Version control and collaborative development workflows.'
    },
    {
      name: 'Docker',
      icon: 'docker',
      description: 'Containerizing applications for consistent deployment.'
    },
    {
      name: 'Jest',
      icon: 'jest',
      description: 'Writing and maintaining comprehensive test suites.'
    },
    {
      name: 'GitHub Actions',
      icon: 'github',
      description: 'Automating CI/CD pipelines for seamless deployment.'
    },
    {
      name: 'VS Code',
      icon: 'vscode',
      description: 'Primary development environment with extensive customization.'
    }
  ]
};

export const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Real-time messaging app with WebSocket integration and message persistence.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Data visualization dashboard with real-time updates and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'D3.js', 'Redux', 'Material-UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const experience = [
  {
    title: 'Senior React Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Led development of enterprise-scale React applications, mentored junior developers, and implemented best practices.',
    achievements: [
      'Reduced application bundle size by 40% through code splitting and lazy loading',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Led team of 5 developers in successful delivery of major features',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Innovations Ltd.',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple React-based web applications with focus on performance and user experience.',
    achievements: [
      'Improved application performance by 50% through optimization techniques',
      'Implemented automated testing increasing code coverage to 85%',
      'Developed reusable component library used across multiple projects',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Co.',
    period: '2018 - 2019',
    description: 'Started career working on various web development projects using React and related technologies.',
    achievements: [
      'Developed and launched 3 successful client projects',
      'Implemented responsive designs ensuring cross-browser compatibility',
      'Contributed to internal tools improving team productivity',
    ],
  },
];
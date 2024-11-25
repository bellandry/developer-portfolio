export type Language = 'en' | 'fr';

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export type Skill = {
  name: string;
  icon: string;
  description: string;
}

export const translations = {
  en: {
    hero: {
      greeting: "Hi, I'm Landry Bella",
      role: "Fullstack TypeScript & Next.js Developer",
      description: "Building exceptional web experiences with React and Next.js. 5+ years of crafting modern, performant applications.",
      cta: "Let's work together"
    },
    navItems: [
      { name: 'Home', href: '/' },
      { name: 'Experience', href: '/#experience' },
      { name: 'Projects', href: '/#projects' },
      { name: 'Skills', href: '/#skills' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/#contact' },
    ],
    experience: [
      {
        title: 'Senior Web Developer',
        company: 'Solution Quickdo Canada',
        period: '2023 - 2024',
        description: [
          'Led the development of multiple high-impact web applications using Next.js and TypeScript',
          'Implemented CI/CD pipelines reducing deployment time by 40%',
          'Mentored junior developers and conducted code reviews',
          'Optimized application performance improving load times by 60%'
        ]
      },
      {
        title: 'Full Stack Developer',
        company: 'Tech Innovate Solutions',
        period: '2021 - 2023',
        description: [
          'Developed and maintained multiple client projects using React and Node.js',
          'Implemented responsive designs and ensured cross-browser compatibility',
          'Collaborated with UX designers to implement user-friendly interfaces',
          'Integrated third-party APIs and services'
        ]
      },
      {
        title: 'Frontend Developer',
        company: 'Digital Creations Agency',
        period: '2019 - 2021',
        description: [
          'Built responsive web applications using Vue.js and Laravel',
          'Worked closely with clients to gather requirements and implement features',
          'Improved website performance and SEO rankings',
          'Participated in daily stand-ups and sprint planning'
        ]
      }
    ],
    skills: {
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
          name: 'Vue.js',
          icon: 'vue',
          description: 'Creating interactive web applications with progressive JavaScript framework.'
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
          name: 'State Management',
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
          name: 'Laravel',
          icon: 'laravel',
          description: 'Developing robust PHP applications with elegant syntax and features.'
        },
        {
          name: 'Database & ORMs',
          icon: 'postgresql',
          description: 'Working with MySQL, PostgreSQL, MongoDB, Prisma, and Drizzle ORM.'
        },
        {
          name: 'Express & GraphQL',
          icon: 'graphql',
          description: 'Creating efficient APIs with Express.js and GraphQL for flexible data querying.'
        },
        {
          name: 'AI Integration',
          icon: 'ai',
          description: 'Implementing Generative AI solutions with OpenAI and Google Gemini.'
        },
        {
          name: 'API Validation',
          icon: 'zod',
          description: 'Ensuring type-safe APIs and data validation with Zod.'
        }
      ],
      tools: [
        {
          name: 'Git, Github & Gitlab',
          icon: 'git',
          description: 'Version control and collaborative development workflows.'
        },
        {
          name: 'Docker',
          icon: 'docker',
          description: 'Containerizing applications for consistent deployment.'
        },
        {
          name: 'Testing',
          icon: 'jest',
          description: 'Writing and maintaining comprehensive test suites.'
        },
        {
          name: 'GitHub Actions',
          icon: 'github',
          description: 'Automating CI/CD pipelines for seamless deployment.'
        },
        {
          name: 'Vercel',
          icon: 'vercel',
          description: 'Primary development environment with extensive customization.'
        }
      ]
    }
  },
  fr: {
    hero: {
      greeting: "Hello! je suis Landry Bella",
      role: "Développeur Fullstack TypeScript & Next.js",
      description: "Je crée des expériences web exceptionnelles avec React et Next.js. Plus de 5 ans d'expérience dans le développement d'applications modernes et performantes.",
      cta: "Travaillons ensemble"
    },
    navItems: [
      { name: 'Accueil', href: '/' },
      { name: 'Expérience', href: '/#experience' },
      { name: 'Projets', href: '/#projects' },
      { name: 'Compétences', href: '/#skills' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/#contact' },
    ],
    experience: [
      {
        title: 'Développeur Web Senior',
        company: 'Solution Quickdo Canada',
        period: '2023 - 2024',
        description: [
          'Direction du développement de plusieurs applications web à fort impact utilisant Next.js et TypeScript',
          'Mise en place de pipelines CI/CD réduisant le temps de déploiement de 40%',
          'Mentorat des développeurs juniors et revue de code',
          'Optimisation des performances des applications améliorant les temps de chargement de 60%'
        ]
      },
      {
        title: 'Développeur Full Stack',
        company: 'Tech Innovate Solutions',
        period: '2021 - 2023',
        description: [
          'Développement et maintenance de plusieurs projets clients avec React et Node.js',
          'Implémentation de designs responsifs et compatibilité cross-browser',
          'Collaboration avec les designers UX pour implémenter des interfaces conviviales',
          'Intégration d\'APIs et services tiers'
        ]
      },
      {
        title: 'Développeur Frontend',
        company: 'Digital Creations Agency',
        period: '2019 - 2021',
        description: [
          'Construction d\'applications web responsives avec Vue.js et Laravel',
          'Travail en étroite collaboration avec les clients pour recueillir les besoins et implémenter les fonctionnalités',
          'Amélioration des performances du site web et du référencement',
          'Participation aux daily stand-ups et à la planification des sprints'
        ]
      }
    ],
    skills: {
      frontend: [
        {
          name: 'React',
          icon: 'react',
          description: 'Construction d\'interfaces utilisateur efficaces et réutilisables avec les patterns et hooks React modernes.'
        },
        {
          name: 'Next.js',
          icon: 'nextjs',
          description: 'Création d\'applications performantes et optimisées pour le SEO avec rendu côté serveur et génération statique.'
        },
        {
          name: 'Vue.js',
          icon: 'vue',
          description: 'Création d\'applications web interactives avec un framework JavaScript progressif.'
        },
        {
          name: 'TypeScript',
          icon: 'typescript',
          description: 'Écriture de code typé sûr pour réduire les bugs et améliorer l\'expérience de développement.'
        },
        {
          name: 'Tailwind CSS',
          icon: 'tailwind',
          description: 'Création d\'interfaces utilisateur belles et responsives avec un framework CSS utility-first.'
        },
        {
          name: 'State Management',
          icon: 'redux',
          description: 'Gestion d\'état d\'application complexe avec les patterns Redux modernes.'
        }
      ],
      backend: [
        {
          name: 'Node.js',
          icon: 'nodejs',
          description: 'Construction d\'applications côté serveur évolutives avec l\'environnement d\'exécution JavaScript.'
        },
        {
          name: 'Laravel',
          icon: 'laravel',
          description: 'Développement d\'applications PHP robustes avec une syntaxe et des fonctionnalités élégantes.'
        },
        {
          name: 'Base de données & ORMs',
          icon: 'postgresql',
          description: 'Travail avec MySQL, PostgreSQL, MongoDB, Prisma et Drizzle ORM.'
        },
        {
          name: 'Express & GraphQL',
          icon: 'graphql',
          description: 'Création d\'APIs efficaces avec Express.js et GraphQL pour des requêtes de données flexibles.'
        },
        {
          name: 'Intégration IA',
          icon: 'ai',
          description: 'Implémentation de solutions IA génératives avec OpenAI et Google Gemini.'
        },
        {
          name: 'Validation API',
          icon: 'zod',
          description: 'Assurance d\'APIs et de validation de données type-safe avec Zod.'
        }
      ],
      tools: [
        {
          name: 'Git, Github & Gitlab',
          icon: 'git',
          description: 'Contrôle de version et flux de développement collaboratif.'
        },
        {
          name: 'Docker',
          icon: 'docker',
          description: 'Conteneurisation d\'applications pour un déploiement cohérent.'
        },
        {
          name: 'Tests',
          icon: 'jest',
          description: 'Écriture et maintenance de suites de tests complètes.'
        },
        {
          name: 'GitHub Actions',
          icon: 'github',
          description: 'Automatisation des pipelines CI/CD pour un déploiement transparent.'
        },
        {
          name: 'Vercel',
          icon: 'vercel',
          description: 'Environnement de développement principal avec personnalisation extensive.'
        }
      ]
    }
  }
};

export type Language = "en" | "fr";

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export type Skill = {
  name: string;
  icon: string;
  description: string;
};

export const translations = {
  en: {
    hero: {
      greeting: "Hi, I'm Landry Bella",
      role: "Fullstack Next.js Developer",
      description:
        "Building exceptional web experiences with React and Next.js. 5+ years of crafting modern, performant applications.",
      cta: "Let's work together",
    },
    navItems: [
      { name: "Home", href: "/" },
      { name: "Experience", href: "/#experience" },
      { name: "Projects", href: "/#projects" },
      { name: "Skills", href: "/#skills" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/#contact" },
    ],
    experience: [
      {
        title: "Senior Web Developer",
        company: "Solution Quickdo Canada",
        period: "2023 - 2024",
        description:
          "Develope and maintain web applications using modern technologies and best practices",
        achievements: [
          "Implemented automated testing increasing code coverage to 85%",
          "Reduced application bundle size by 40% through code splitting and lazy loading",
          "Implemented CI/CD pipeline reducing deployment time by 60%",
        ],
      },
      {
        title: "Tech Lead & Full-Stack Developer",
        company: "CINAF TV S.A",
        period: "2021 - 2023",
        description:
          "Improve user experience, mentored junior developers, and implemented best practices.",
        achievements: [
          "Whitch to Symfony for back-end and to Vue.js & React for front-ends",
          "Led team of 8 developers in successful delivery of major features",
          "Developed reusable component library used across multiple projects",
          "Improved application performance by 50% through optimization techniques",
        ],
      },
      {
        title: "Frontend Developer",
        company: "CINAF TV S.A",
        period: "2019 - 2021",
        description:
          "Started career working on VOD platform projects using PHP and related technologies.",
        achievements: [
          "Developed and launched successfully the project",
          "Implemented responsive designs ensuring cross-browser compatibility",
          "Contributed to internal tools improving team productivity",
        ],
      },
    ],
    skills: {
      frontend: [
        {
          name: "React",
          icon: "react",
          description:
            "Building efficient and reusable user interfaces with modern React patterns and hooks.",
        },
        {
          name: "Next.js",
          icon: "nextjs",
          description:
            "Creating performant, SEO-friendly applications with server-side rendering and static generation.",
        },
        {
          name: "Vue.js",
          icon: "vue",
          description:
            "Creating interactive web applications with progressive JavaScript framework.",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          description:
            "Writing type-safe code to reduce bugs and improve development experience.",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
          description:
            "Crafting responsive and beautiful UIs with utility-first CSS framework.",
        },
        {
          name: "State Management",
          icon: "redux",
          description:
            "Managing complex application state with modern Redux patterns.",
        },
      ],
      backend: [
        {
          name: "Node.js",
          icon: "nodejs",
          description:
            "Building scalable server-side applications with JavaScript runtime.",
        },
        {
          name: "Laravel",
          icon: "laravel",
          description:
            "Developing robust PHP applications with elegant syntax and features.",
        },
        {
          name: "Database & ORMs",
          icon: "postgresql",
          description:
            "Working with MySQL, PostgreSQL, MongoDB, Prisma, and Drizzle ORM.",
        },
        {
          name: "Express & GraphQL",
          icon: "graphql",
          description:
            "Creating efficient APIs with Express.js and GraphQL for flexible data querying.",
        },
        {
          name: "AI Integration",
          icon: "ai",
          description:
            "Implementing Generative AI solutions with OpenAI and Google Gemini.",
        },
        {
          name: "API Validation",
          icon: "zod",
          description: "Ensuring type-safe APIs and data validation with Zod.",
        },
      ],
      tools: [
        {
          name: "Git, Github & Gitlab",
          icon: "git",
          description:
            "Version control and collaborative development workflows.",
        },
        {
          name: "Docker",
          icon: "docker",
          description: "Containerizing applications for consistent deployment.",
        },
        {
          name: "Testing",
          icon: "jest",
          description: "Writing and maintaining comprehensive test suites.",
        },
        {
          name: "GitHub Actions",
          icon: "github",
          description: "Automating CI/CD pipelines for seamless deployment.",
        },
        {
          name: "Vercel",
          icon: "vercel",
          description:
            "Primary development environment with extensive customization.",
        },
      ],
    },
  },
  fr: {
    hero: {
      greeting: "Hello! je suis Landry Bella",
      role: "Développeur Full-Stack Next.js",
      description:
        "Je crée des expériences web exceptionnelles avec React et Next.js. Plus de 5 ans d'expérience dans le développement d'applications modernes et performantes.",
      cta: "Travaillons ensemble",
    },
    navItems: [
      { name: "Accueil", href: "/" },
      { name: "Expérience", href: "/#experience" },
      { name: "Projets", href: "/#projects" },
      { name: "Compétences", href: "/#skills" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/#contact" },
    ],
    experience: [
      {
        title: "Développeur Web Senior",
        company: "Solution Quickdo Canada",
        period: "2023 - 2024",
        description:
          "Développement et maintenance d’applications web en utilisant des technologies modernes et les meilleures pratiques.",
        achievements: [
          "Mise en place de tests automatisés, augmentant la couverture de code à 85 %",
          "Réduction de la taille des fichiers de l’application de 40 % grâce au code splitting et au lazy loading",
          "Implémentation d’un pipeline CI/CD, réduisant le temps de déploiement de 60 %",
        ],
      },
      {
        title: "Responsable Technique & Développeur Full-Stack",
        company: "CINAF TV S.A",
        period: "2021 - 2023",
        description:
          "Amélioration de l’expérience utilisateur, mentorat des développeurs juniors et mise en œuvre des meilleures pratiques.",
        achievements: [
          "Transition vers Symfony pour le back-end et Vue.js & React pour les front-ends",
          "Direction d’une équipe de 8 développeurs pour livrer avec succès des fonctionnalités majeures",
          "Création d’une bibliothèque de composants réutilisables utilisée dans plusieurs projets",
          "Amélioration des performances des applications de 50 % grâce à des techniques d’optimisation",
        ],
      },
      {
        title: "Développeur Front-End",
        company: "CINAF TV S.A",
        period: "2019 - 2021",
        description:
          "Début de carrière en travaillant sur des projets de plateformes de VOD en utilisant PHP et les technologies associées.",
        achievements: [
          "Développement et lancement réussi du projet",
          "Mise en œuvre de designs responsifs garantissant une compatibilité inter-navigateurs",
          "Contribution à des outils internes améliorant la productivité de l’équipe",
        ],
      },
    ],
    skills: {
      frontend: [
        {
          name: "React",
          icon: "react",
          description:
            "Construction d'interfaces utilisateur efficaces et réutilisables avec les patterns et hooks React modernes.",
        },
        {
          name: "Next.js",
          icon: "nextjs",
          description:
            "Création d'applications performantes et optimisées pour le SEO avec rendu côté serveur et génération statique.",
        },
        {
          name: "Vue.js",
          icon: "vue",
          description:
            "Création d'applications web interactives avec un framework JavaScript progressif.",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          description:
            "Écriture de code typé sûr pour réduire les bugs et améliorer l'expérience de développement.",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
          description:
            "Création d'interfaces utilisateur belles et responsives avec un framework CSS utility-first.",
        },
        {
          name: "State Management",
          icon: "redux",
          description:
            "Gestion d'état d'application complexe avec les patterns Redux modernes.",
        },
      ],
      backend: [
        {
          name: "Node.js",
          icon: "nodejs",
          description:
            "Construction d'applications côté serveur évolutives avec l'environnement d'exécution JavaScript.",
        },
        {
          name: "Laravel",
          icon: "laravel",
          description:
            "Développement d'applications PHP robustes avec une syntaxe et des fonctionnalités élégantes.",
        },
        {
          name: "Base de données & ORMs",
          icon: "postgresql",
          description:
            "Travail avec MySQL, PostgreSQL, MongoDB, Prisma et Drizzle ORM.",
        },
        {
          name: "Express & GraphQL",
          icon: "graphql",
          description:
            "Création d'APIs efficaces avec Express.js et GraphQL pour des requêtes de données flexibles.",
        },
        {
          name: "Intégration IA",
          icon: "ai",
          description:
            "Implémentation de solutions IA génératives avec OpenAI et Google Gemini.",
        },
        {
          name: "Validation API",
          icon: "zod",
          description:
            "Assurance d'APIs et de validation de données type-safe avec Zod.",
        },
      ],
      tools: [
        {
          name: "Git, Github & Gitlab",
          icon: "git",
          description:
            "Contrôle de version et flux de développement collaboratif.",
        },
        {
          name: "Docker",
          icon: "docker",
          description:
            "Conteneurisation d'applications pour un déploiement cohérent.",
        },
        {
          name: "Tests",
          icon: "jest",
          description: "Écriture et maintenance de suites de tests complètes.",
        },
        {
          name: "GitHub Actions",
          icon: "github",
          description:
            "Automatisation des pipelines CI/CD pour un déploiement transparent.",
        },
        {
          name: "Vercel",
          icon: "vercel",
          description:
            "Environnement de développement principal avec personnalisation extensive.",
        },
      ],
    },
  },
};

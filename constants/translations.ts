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
      role: "Full-Stack Web Developer",
      description:
        "Building exceptional web experiences with TypeScript, React and Next.js. 5+ years of crafting modern, performant applications.",
      cta: "Get in Touch",
    },
    navItems: [
      { name: "Home", href: "/#" },
      { name: "About", href: "/#about" },
      { name: "Experience", href: "/#experience" },
      { name: "Projects", href: "/#projects" },
      { name: "Skills", href: "/#skills" },
      { name: "Blog", href: "/blog" },
    ],
    about: {
      title: "About me",
      description:
        "Passionate Full Stack Developer specializing in modern technologies such as JavaScript, TypeScript, Node.js, React, Vue.js, PHP, and Laravel. With strong technical expertise and a versatile approach, I design innovative and high-performance digital solutions. Continuously staying ahead of industry trends, I am committed to turning your ideas into impactful and value-driven projects.",
      citation: "Best Citation",
    },
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
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. All rights reserved.`,
    },
  },
  fr: {
    hero: {
      greeting: "Hello! je suis Landry Bella",
      role: "Développeur Web Full-Stack",
      description:
        "Je crée des expériences web exceptionnelles avec TypeScript, React et Next.js. Plus de 5 ans d'expérience dans le développement d'applications modernes et performantes.",
      cta: "On se parle ?",
    },
    navItems: [
      { name: "Accueil", href: "/#" },
      { name: "A propos", href: "/#about" },
      { name: "Expérience", href: "/#experience" },
      { name: "Projets", href: "/#projects" },
      { name: "Compétences", href: "/#skills" },
      { name: "Blog", href: "/blog" },
    ],
    about: {
      title: "A propos de moi",
      description:
        "Développeur Full Stack passionné, spécialisé dans des technologies modernes telles que JavaScript, TypeScript, Node.js, React, Vue.js, PHP et Laravel. Fort d’une expertise technique et d’une approche polyvalente, je conçois des solutions numériques performantes et innovantes. Toujours en veille sur les dernières tendances, je m’engage à transformer vos idées en projets concrets et à forte valeur ajoutée.",
      citation: "Citation Favorite",
    },
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
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. Tous droits réservés.`,
    },
  },
};

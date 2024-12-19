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
      greeting: "Landry Bella",
      role: "Full-Stack Web Developer",
      description:
        "With over 5 years of experience, I assist you in creating modern applications tailored to your needs using TypeScript, React, Next.js, and Laravel.",
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
      description: `Passionate Full Stack Developer with several years of experience working in companies, I help organizations create innovative and high-performing digital solutions. Specialized in modern technologies such as JavaScript, React, TypeScript, and Laravel, I adopt a pragmatic approach to tackle business challenges.
        Always staying up-to-date with the latest trends, I strive to transform every idea into a concrete project tailored to real needs and delivering high value`,
      citation: "Favorite Quote",
    },
    experience: [
      {
        title: "Senior Web Developer",
        company: "Solution Quickdo Canada",
        period: "2023 - 2024",
        achievements: [
          "Developed and maintained modern web applications using cutting-edge technologies.",
          "Implemented automated tests, increasing code coverage from 65% to 85%, thus reducing regression risks.",
          "Optimized application file sizes by 40% using code splitting and lazy loading, improving application performance.",
          "Designed and deployed a CI/CD pipeline, reducing deployment time by 3x and improving production release frequency.",
        ],
      },
      {
        title: "Technical Lead & Full-Stack Developer",
        company: "CINAF TV S.A",
        period: "2021 - 2023",
        achievements: [
          "Transformed the company’s technical architecture by migrating from PHP to Symfony for the back-end and integrating Vue.js and React for the front-end.",
          "Led a team of 8 developers, successfully delivering key features on time.",
          "Designed a reusable component library, adopted in 100% of the company's projects, standardizing practices and reducing development timelines.",
          "Optimized application performance by 50% through advanced query optimization and resource management techniques.",
          "Mentored junior developers, improving their skills and productivity.",
        ],
      },
      {
        title: "Web Developer",
        company: "CINAF TV S.A",
        period: "2019 - 2021",
        achievements: [
          "Started my career by developing and successfully launching a VOD platform based on PHP and related technologies.",
          "Implemented responsive designs ensuring cross-browser compatibility for a better user experience.",
          "Contributed to improving internal tools, increasing team productivity by 20% through automation and workflow optimizations.",
          "Performed a security audit after multiple hacking incidents, enhancing the robustness and reliability of the systems.",
        ],
      },
    ],
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. All rights reserved.`,
    },
  },
  fr: {
    hero: {
      greeting: "Landry Bella",
      role: "Développeur Web Full-Stack",
      description:
        "Avec plus de 5 ans d'expérience, je vous accompagne dans la création d’applications modernes qui s'adaptent à vos besoins avec TypeScript, React, Next.js et Laravel.",
      cta: "Discutons de votre projet",
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
      description: `Développeur Full Stack passionné, avec plusieurs années d'expérience en entreprise, j'accompagne les organisations dans la création de solutions digitales innovantes et performantes. Spécialisé dans des technologies modernes comme JavaScript, React, TypeScript, et Laravel, je m'appuie sur une approche pragmatique pour répondre aux défis métiers.
        Toujours en veille sur les dernières tendances, je m'efforce de transformer chaque idée en un projet concret, adapté aux besoins réels et à forte valeur ajoutée.`,
      citation: "Citation Favorite",
    },
    experience: [
      {
        title: "Développeur Web Senior",
        company: "Solution Quickdo Canada",
        period: "2023 - 2024",
        achievements: [
          "Développé et maintenu des applications web modernes en utilisant des technologies de pointe.",
          "Mis en œuvre des tests automatisés, augmentant la couverture de code de 65 % à 85 %, réduisant ainsi les risques de régression.",
          "Optimisé la taille des fichiers de l’application de 40 % grâce au code splitting et au lazy loading, améliorant la performance des applications.",
          "Conçu et déployé un pipeline CI/CD, divisant par 3 le temps de déploiement et améliorant la fréquence des mises en production.",
        ],
      },
      {
        title: "Responsable Technique & Développeur Full-Stack",
        company: "CINAF TV S.A",
        period: "2021 - 2023",
        achievements: [
          "Transformé l’architecture technique de l’entreprise en passant de PHP à Symfony pour le back-end et en intégrant Vue.js et React pour les front-ends.",
          "Dirigé une équipe de 8 développeurs, livrant avec succès des fonctionnalités clés dans le respect des délais.",
          "Conçu une bibliothèque de composants réutilisables, adoptée dans 100 % des projets de l’entreprise, standardisant les pratiques et réduisant les délais de développement.",
          "Optimisé les performances des applications de 50 %, grâce à des techniques avancées d’optimisation de requêtes et de gestion des ressources.",
          "Mentoré des développeurs juniors, améliorant leurs compétences et leur productivité.",
        ],
      },
      {
        title: "Développeur Web",
        company: "CINAF TV S.A",
        period: "2019 - 2021",
        achievements: [
          "Débuté ma carrière en développant et lançant avec succès une plateforme VOD basée sur PHP et des technologies associées.",
          "Implémenté des designs réactifs garantissant une compatibilité inter-navigateurs pour une meilleure expérience utilisateur.",
          "Contribué à l’amélioration des outils internes, augmentant la productivité de l’équipe de 20 % grâce à des automatisations et des optimisations de workflow.",
          "Réalisé un audit de sécurité après plusieurs incidents de hacking, améliorant la robustesse et la fiabilité des systèmes.",
        ],
      },
    ],
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. Tous droits réservés.`,
    },
  },
};

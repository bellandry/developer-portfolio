export const JsonLd = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Landry Bella',
    jobTitle: 'Senior React Developer',
    url: 'https://laclass.dev',
    sameAs: [
      'https://github.com/bellandry',
      'https://gitlab.com/bellandry.work',
      'https://linkedin.com/in/bellandry',
    ],
    knowsAbout: [
      // Frontend Technologies
      'React.js', 'Next.js', 'TypeScript', 'JavaScript',
      'Tailwind CSS', 'Redux Toolkit', 'Framer Motion',
      'HTML5', 'CSS3', 'Responsive Design', 'Web Accessibility',
      
      // Backend Technologies
      'Node.js', 'Express.js', 'GraphQL', 'REST APIs',
      'PostgreSQL', 'MongoDB', 'Database Design',
      
      // DevOps & Tools
      'Git', 'Docker', 'CI/CD', 'GitHub Actions',
      'Jest', 'Unit Testing', 'Integration Testing',
      
      // Development Practices
      'Agile Methodologies', 'Test-Driven Development',
      'Clean Code', 'Performance Optimization',
      'SEO Best Practices', 'Web Security',
      
      // Architecture & Patterns
      'Microservices', 'Server-Side Rendering',
      'JAMstack', 'Component-Based Architecture',
      'State Management', 'API Design'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

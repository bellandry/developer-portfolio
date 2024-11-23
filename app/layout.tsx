import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { MeshGradient } from '@/components/mesh-gradient';
import { JsonLd } from '@/components/json-ld';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Landry Bella | Senior React Developer',
  description: 'Senior React/Next.js developer with 5+ years of experience building modern web applications. Expertise in TypeScript, React, Next.js, and full-stack development.',
  keywords: [
    // Core Roles
    'React Developer', 'Next.js Developer', 'TypeScript Expert', 'Full Stack Developer', 
    'Frontend Engineer', 'Senior Software Engineer',
    
    // Technical Expertise
    'React.js Expert', 'JavaScript Developer', 'Node.js Developer',
    'GraphQL Developer', 'REST API Developer', 'Database Engineer',
    
    // Specialized Skills
    'Web Performance Expert', 'UI/UX Developer', 'Responsive Design Specialist',
    'Modern Web Development', 'Progressive Web Apps', 'JAMstack Developer',
    
    // Industry Terms
    'Web Development', 'Software Engineering', 'Frontend Development',
    'Full Stack Development', 'Enterprise Software Development',
    
    // Location/Remote
    'Remote Developer', 'International Developer', 'Global Software Engineer'
  ],
  authors: [{ name: 'Landry Bella' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laclass.dev',
    title: 'Landry Bella | Senior React Developer',
    description: 'Senior React/Next.js developer with 5+ years of experience building modern web applications.',
    siteName: 'Landry Bella Portfolio',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Landry Bella - Senior React Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landry Bella | Senior React Developer',
    description: 'Senior React/Next.js developer with 5+ years of experience building modern web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MeshGradient />
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
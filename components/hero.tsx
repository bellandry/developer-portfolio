'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Gitlab, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/constants';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.greeting}
            <br />
            {t.role}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="#contact">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/bellandry" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://gitlab.com/bellandry.work" target="_blank" rel="noopener noreferrer">
                <Gitlab className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/bellandry" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
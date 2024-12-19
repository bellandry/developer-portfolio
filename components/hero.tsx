"use client";

import { Button } from "@/components/ui/button";
import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";
import { useContactStore } from "@/store/use-contact-store";
import { motion } from "framer-motion";
import { ArrowRight, Github, Gitlab, Linkedin } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const { open } = useContactStore();
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
            <span className="text-3xl md:text-5xl">-{t.greeting}-</span>
            <br />
            {t.role}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button onClick={open} className="w-full md:w-auto my-2">
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/bellandry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://gitlab.com/bellandry.work"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="gitlab"
              >
                <Gitlab className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/bellandry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

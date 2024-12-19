"use client";

import { translations } from "@/constants/translations";
import { useLanguage } from "@/lib/useLanguage";
import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const language = useLanguage();
  const t = translations[language];

  return (
    <footer className="mt-auto py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-4">
            {t.navItems.map((item) => (
              <a key={item.name} href={item.href} className="transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/bellandry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://gitlab.com/bellandry.work"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="gitlab"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGitlab className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/bellandry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

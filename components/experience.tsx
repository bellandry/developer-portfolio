"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

export function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4 ">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-6">
            {translations[language].experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <Card className="transition-all duration-200 group-hover:shadow-lg border-l-4 border-l-primary/20 group-hover:border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {job.company}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

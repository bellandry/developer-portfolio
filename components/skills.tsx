'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skills } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiJest,
  SiGithubactions,
  SiVisualstudiocode,
  SiDatadotai,
  SiLaravel,
  SiVuedotjs,
  SiVercel,
  SiGooglegemini,
  SiHttpie,
} from 'react-icons/si';

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  nodejs: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  graphql: SiGraphql,
  git: SiGit,
  docker: SiDocker,
  jest: SiJest,
  github: SiGithubactions,
  vscode: SiVisualstudiocode,
  zod: SiHttpie,
  ai: SiGooglegemini,
  database: SiDatadotai,
  laravel: SiLaravel,
  vue: SiVuedotjs,
  vercel: SiVercel
};

export function Skills() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, index) => {
                    const Icon = iconMap[skill.icon as keyof typeof iconMap];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative"
                        onMouseMove={(e) => {
                          const bounds = e.currentTarget.getBoundingClientRect();
                          const mouseXValue = e.clientX - bounds.left;
                          const mouseYValue = e.clientY - bounds.top;
                          mouseX.set(mouseXValue);
                          mouseY.set(mouseYValue);
                        }}
                      >
                        {/* Animated gradient border */}
                        <motion.div
                          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
                          style={{
                            background: useMotionTemplate`
                              radial-gradient(
                                500px circle at ${mouseX}px ${mouseY}px,
                                rgba(var(--primary-rgb) / 0.15),
                                transparent 80%
                              )
                            `,
                          }}
                        />
                        <Card className="h-full relative transition-all duration-300 bg-gradient-to-r from-transparent via-transparent to-transparent before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-primary/40 before:via-primary/60 before:to-primary/40 before:opacity-0 before:transition-opacity group-hover:before:opacity-100 overflow-hidden">
                          <CardContent className="relative pt-6 z-10 bg-background rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-2 bg-primary/10 rounded-lg transition-colors duration-300 group-hover:bg-primary/20">
                                <Icon className="w-6 h-6 text-primary/80 transition-colors duration-300 group-hover:text-primary" />
                              </div>
                              <h3 className="font-semibold transition-colors duration-300 group-hover:text-primary">{skill.name}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {skill.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
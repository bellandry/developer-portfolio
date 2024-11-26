"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/constants";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  SiAmazonwebservices,
  SiAndroid,
  SiApple,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGooglegemini,
  SiGraphql,
  SiHtml5,
  SiHttpie,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVuedotjs,
  SiZod,
} from "react-icons/si";

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
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
  github: SiGithub,
  gitlab: SiGitlab,
  vscode: SiVisualstudiocode,
  zod: SiZod,
  chatgpt: SiOpenai,
  ai: SiGooglegemini,
  laravel: SiLaravel,
  vue: SiVuedotjs,
  vercel: SiVercel,
  html: SiHtml5,
  css: SiCss3,
  sass: SiSass,
  redis: SiRedis,
  httpie: SiHttpie,
  api: SiGithubactions,
  postman: SiPostman,
  figma: SiFigma,
  aws: SiAmazonwebservices,
  gcp: SiGooglecloud,
  azure: SiMicrosoftazure,
  firebase: SiFirebase,
  cloudflare: SiCloudflare,
  flutter: SiFlutter,
  ios: SiApple,
  android: SiAndroid,
  php: SiPhp,
  mysql: SiMysql,
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, categorySkills]) => {
              return (
                <TabsContent key={category} value={category}>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => {
                      const Icon = iconMap[skill.icon as keyof typeof iconMap];
                      if (!Icon) {
                        console.warn(
                          `Icon not found for skill: ${skill.name} (${skill.icon})`
                        );
                        return null;
                      }
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="group relative"
                          onMouseMove={(e) => {
                            const bounds =
                              e.currentTarget.getBoundingClientRect();
                            const mouseXValue = e.clientX - bounds.left;
                            const mouseYValue = e.clientY - bounds.top;
                            mouseX.set(mouseXValue);
                            mouseY.set(mouseYValue);
                          }}
                        >
                          <motion.div
                            className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{
                              background: useMotionTemplate`
                                radial-gradient(
                                  500px circle at ${mouseX}px ${mouseY}px,
                                  rgba(var(--primary-rgb), 0.15),
                                  transparent 80%
                                )
                              `,
                            }}
                          />
                          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-2">
                                <Icon className="w-6 h-6 text-primary" />
                                <h3 className="font-medium">{skill.name}</h3>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

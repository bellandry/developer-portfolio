"use client";

import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center gap-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-40 h-40 md:w-64 md:h-64 my-14"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Effet de glow animé */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-80"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  filter: "blur(45px)",
                }}
              />

              {/* Conteneur de l'image avec bordure floue */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                {/* Bordure intérieure floue */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300/50 via-pink-300/70 to-blue-300/60 backdrop-blur-sm" />

                {/* Image */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-white">
                  <Image
                    src="/hero.png"
                    alt="Photo de profil"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contenu */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
                {t.title}
              </h2>
              <p className="text-md md:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                {t.description}
              </p>
              <span>
                {t.citation} :{" "}
                <span className="italic">&quot;Dubito Ergo Sum.&quot;</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

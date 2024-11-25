"use client";

import { motion } from "framer-motion";

export function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-[10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-500/30 blur-[100px] will-change-transform"
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute right-[5%] top-[30%] h-[25rem] w-[25rem] rounded-full bg-blue-500/30 blur-[100px] will-change-transform"
        animate={{
          x: [0, -25, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-[20rem] w-[20rem] rounded-full bg-pink-500/30 blur-[100px] will-change-transform"
        animate={{
          x: [0, 35, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  );
}

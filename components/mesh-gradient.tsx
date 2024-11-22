'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedBlobs } from './animated-blobs';

export function MeshGradient() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.2]);  

  return (
    <div ref={ref} className="fixed inset-0 -z-10">
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <AnimatedBlobs />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[url('/mesh.svg')] bg-repeat opacity-30 mix-blend-overlay will-change-opacity"
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[100px]" />
    </div>
  );
}

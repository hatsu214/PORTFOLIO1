import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundOrbs() {
  const { scrollYProgress } = useScroll();

  // Dynamic parallax transformations based on scroll position
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const orbY4 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const scaleOrb1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 0.9]);
  const scaleOrb2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 1.3]);
  const opacityOrb3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.75, 0.5, 0.7]);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Indigo Glow */}
      <motion.div 
        style={{ y: orbY1, scale: scaleOrb1 }}
        animate={{
          x: [0, 30, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
        className="glow-orb-indigo absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-75"
      ></motion.div>

      {/* Top-Right Orange Glow */}
      <motion.div 
        style={{ y: orbY2, scale: scaleOrb2 }}
        animate={{
          x: [0, -40, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut"
        }}
        className="glow-orb-orange absolute top-20 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-65"
      ></motion.div>

      {/* Middle Indigo Glow */}
      <motion.div 
        style={{ y: orbY3, opacity: opacityOrb3 }}
        animate={{
          x: [0, 45, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut"
        }}
        className="glow-orb-indigo absolute top-[40%] -left-60 w-[700px] h-[700px] rounded-full blur-3xl"
      ></motion.div>

      {/* Bottom Orange Glow */}
      <motion.div 
        style={{ y: orbY4 }}
        animate={{
          x: [0, -35, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
        className="glow-orb-orange absolute bottom-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-55"
      ></motion.div>
    </div>
  );
}

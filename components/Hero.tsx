'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/dragons/hero-dragon.jpg)',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </motion.div>

      {/* Subtle Floating Particles - Gold/Bronze */}
      <div className="absolute inset-0 z-10 opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/40 rounded-full blur-sm"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-6"
        >
          <h1 className="serif-display text-7xl md:text-9xl font-bold tracking-tight bg-gradient-to-b from-amber-200 via-yellow-600 to-amber-900 bg-clip-text text-transparent drop-shadow-2xl">
            THE DRAGON GUILD
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="serif-elegant text-2xl md:text-3xl text-gray-300 max-w-3xl mb-12 font-light tracking-wide"
        >
          An exclusive society of castle keepers and dragon masters
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-4 bg-transparent border-2 border-amber-700/50 text-amber-100 text-sm font-medium tracking-widest uppercase rounded-sm hover:border-amber-600 transition-all duration-500 overflow-hidden"
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-yellow-900/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.8 }}
          />
          <span className="relative z-10">Request Membership</span>
        </motion.button>

        {/* Elegant Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-amber-800/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

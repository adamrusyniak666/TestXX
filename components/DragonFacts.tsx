'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const facts = [
  {
    icon: '🔥',
    title: 'Oddech Ognia',
    description: 'Smoki mogą wytworzyć płomienie o temperaturze ponad 3000°C',
  },
  {
    icon: '⚡',
    title: 'Prędkość Lotu',
    description: 'Najszybsze smoki osiągają prędkość do 300 km/h',
  },
  {
    icon: '💎',
    title: 'Skarby',
    description: 'Instynkt zbierania skarbów jest wpisany w ich DNA',
  },
  {
    icon: '🧠',
    title: 'Inteligencja',
    description: 'Starsze smoki posiadają mądrość setek lat',
  },
];

export default function DragonFacts() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-4 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          style={{ opacity }}
          className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-20"
        >
          Smocze Tajemnice
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                  >
                    {fact.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{fact.title}</h3>
                  <p className="text-gray-400">{fact.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

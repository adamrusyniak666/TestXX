'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const facts = [
  {
    icon: '🔥',
    title: 'Ancient Fire',
    description: 'Dragons forge flames reaching temperatures of 3000°C',
  },
  {
    icon: '⚡',
    title: 'Swift Flight',
    description: 'Elite guardians achieve velocities exceeding 300 km/h',
  },
  {
    icon: '💎',
    title: 'Treasure Keepers',
    description: 'Innate guardians of precious artifacts and wealth',
  },
  {
    icon: '🧠',
    title: 'Timeless Wisdom',
    description: 'Elder dragons possess knowledge spanning centuries',
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
      className="relative py-32 px-4 bg-gradient-to-b from-black to-neutral-950 overflow-hidden"
    >
      {/* Subtle Parallax Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-20 left-10 w-32 h-32 bg-amber-900/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-900/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <h2 className="serif-display text-5xl md:text-6xl font-bold bg-gradient-to-b from-amber-200 to-amber-900 bg-clip-text text-transparent tracking-tight">
            Ancient Knowledge
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative backdrop-blur-sm bg-neutral-900/30 border border-neutral-800/50 rounded-sm p-8 h-full transition-all duration-500 group-hover:border-amber-900/50">
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-b from-amber-900/0 to-amber-900/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
                  >
                    {fact.icon}
                  </motion.div>
                  <h3 className="serif-display text-xl font-semibold text-amber-100 mb-3 tracking-tight">
                    {fact.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{fact.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

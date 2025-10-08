'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const dragons = [
  {
    id: 1,
    name: 'Pyraxis the Ancient',
    type: 'Fire Guardian',
    power: 'Eternal Flame',
    image: '/dragons/dragon1.jpg',
    description: 'Keeper of the volcanic sanctuaries, master of primordial fire',
  },
  {
    id: 2,
    name: 'Frostmourne',
    type: 'Ice Warden',
    power: 'Winter\'s Breath',
    image: '/dragons/dragon2.jpg',
    description: 'Ancient guardian of the northern peaks, wielder of eternal frost',
  },
  {
    id: 3,
    name: 'Stormcaller',
    type: 'Sky Sovereign',
    power: 'Thunder Strike',
    image: '/dragons/dragon3.jpg',
    description: 'Lord of tempests and lightning, fastest of all dragonkind',
  },
  {
    id: 4,
    name: 'Shadowfang',
    type: 'Night Stalker',
    power: 'Void Cloak',
    image: '/dragons/dragon4.jpg',
    description: 'Master of shadows and darkness, unseen predator of the night',
  },
  {
    id: 5,
    name: 'Verdantus',
    type: 'Earth Keeper',
    power: 'Nature\'s Wrath',
    image: '/dragons/dragon5.jpg',
    description: 'Ancient protector of forests and mountains, wisest of all',
  },
];

export default function DragonGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-900/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="serif-display text-5xl md:text-7xl font-bold bg-gradient-to-b from-amber-200 to-amber-900 bg-clip-text text-transparent mb-6 tracking-tight">
            Legendary Guardians
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-6" />
          <p className="serif-elegant text-xl md:text-2xl text-gray-400 tracking-wide">
            Ancient protectors of realms and castles
          </p>
        </motion.div>

        {/* Dragons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dragons.map((dragon, index) => (
            <motion.div
              key={dragon.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onHoverStart={() => setHoveredId(dragon.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative h-96 rounded-sm overflow-hidden cursor-pointer"
              >
                {/* Subtle Border Glow on Hover */}
                <motion.div
                  animate={{
                    opacity: hoveredId === dragon.id ? 0.3 : 0,
                  }}
                  className="absolute -inset-0.5 bg-gradient-to-b from-amber-700/50 to-yellow-900/50 rounded-sm blur-sm"
                />

                {/* Image Container */}
                <div className="relative h-full w-full rounded-sm overflow-hidden border border-neutral-800/50">
                  <Image
                    src={dragon.image}
                    alt={dragon.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="serif-display text-3xl font-semibold text-amber-100 mb-2 tracking-tight">
                        {dragon.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs tracking-widest uppercase text-amber-600 font-medium">
                          {dragon.type}
                        </span>
                        <span className="w-px h-4 bg-amber-800/50" />
                        <span className="text-xs text-amber-700 tracking-wide">{dragon.power}</span>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredId === dragon.id ? 1 : 0,
                          height: hoveredId === dragon.id ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="serif-elegant text-sm text-gray-400 overflow-hidden leading-relaxed"
                      >
                        {dragon.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

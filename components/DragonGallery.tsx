'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const dragons = [
  {
    id: 1,
    name: 'Pyraxis',
    type: 'Ognisty',
    power: 'Oddech Ognia',
    image: '/dragons/dragon1.jpg',
    description: 'Potężny smok z piekła rodem, władca lawowych krain',
  },
  {
    id: 2,
    name: 'Frostbite',
    type: 'Lodowy',
    power: 'Zamrażająca Aura',
    image: '/dragons/dragon2.jpg',
    description: 'Lodowy tytan z gór północy, jego tchnienie zamraża wszystko',
  },
  {
    id: 3,
    name: 'Thunderwing',
    type: 'Burzowy',
    power: 'Piorun',
    image: '/dragons/dragon3.jpg',
    description: 'Władca burz i błyskawic, najszybszy ze wszystkich smoków',
  },
  {
    id: 4,
    name: 'Shadowmaw',
    type: 'Cienia',
    power: 'Niewidzialność',
    image: '/dragons/dragon4.jpg',
    description: 'Nocny łowca, mistrz ukrywania się w ciemnościach',
  },
  {
    id: 5,
    name: 'Emeraldus',
    type: 'Ziemny',
    power: 'Kontrola Natury',
    image: '/dragons/dragon5.jpg',
    description: 'Strażnik lasów i gór, najstarszy i najmądrzejszy',
  },
];

export default function DragonGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            Legendarne Smoki
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Poznaj potężne stworzenia, które rządzą światem
          </p>
        </motion.div>

        {/* Dragons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dragons.map((dragon, index) => (
            <motion.div
              key={dragon.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(dragon.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Card Glow on Hover */}
                <motion.div
                  animate={{
                    opacity: hoveredId === dragon.id ? 0.6 : 0,
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-xl"
                />

                {/* Image Container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src={dragon.image}
                    alt={dragon.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {dragon.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full">
                          {dragon.type}
                        </span>
                        <span className="text-yellow-400 text-sm">⚡ {dragon.power}</span>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredId === dragon.id ? 1 : 0,
                          height: hoveredId === dragon.id ? 'auto' : 0,
                        }}
                        className="text-gray-300 text-sm overflow-hidden"
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

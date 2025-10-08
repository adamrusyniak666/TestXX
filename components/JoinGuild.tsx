'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function JoinGuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dragonType: '',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="join"
      ref={ref}
      className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            Dołącz do Smoczej Gildii
          </h2>
          <p className="text-xl text-gray-400">
            Stań się częścią elitarnej grupy poskramiaczy smoków
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glassmorphism Card */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-xl opacity-20" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-white font-semibold mb-2">Twoje Imię</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Wprowadź swoje imię"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  placeholder="twoj@email.com"
                />
              </motion.div>

              {/* Dragon Type Select */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-white font-semibold mb-2">
                  Preferowany Typ Smoka
                </label>
                <select
                  required
                  value={formData.dragonType}
                  onChange={(e) => setFormData({ ...formData, dragonType: e.target.value })}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="" className="bg-gray-900">
                    Wybierz typ smoka
                  </option>
                  <option value="fire" className="bg-gray-900">
                    🔥 Ognisty
                  </option>
                  <option value="ice" className="bg-gray-900">
                    ❄️ Lodowy
                  </option>
                  <option value="storm" className="bg-gray-900">
                    ⚡ Burzowy
                  </option>
                  <option value="shadow" className="bg-gray-900">
                    🌑 Cienia
                  </option>
                  <option value="earth" className="bg-gray-900">
                    🌿 Ziemny
                  </option>
                </select>
              </motion.div>

              {/* Experience Textarea */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-white font-semibold mb-2">
                  Dlaczego chcesz dołączyć?
                </label>
                <textarea
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 resize-none"
                  placeholder="Opowiedz nam swoją historię..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xl font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Dołącz Teraz</span>
              </motion.button>
            </form>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-3xl"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    🐉
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">Witamy w Gildii!</h3>
                  <p className="text-gray-400">Wkrótce otrzymasz wiadomość z dalszymi instrukcjami</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

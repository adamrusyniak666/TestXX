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
      className="relative py-32 px-4 bg-gradient-to-b from-neutral-950 via-black to-black overflow-hidden"
    >
      {/* Elegant Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-950/10 to-yellow-950/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="serif-display text-5xl md:text-7xl font-bold bg-gradient-to-b from-amber-200 to-amber-900 bg-clip-text text-transparent mb-6 tracking-tight">
            Join The Guild
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-6" />
          <p className="serif-elegant text-xl text-gray-400 tracking-wide">
            Become part of an elite society of dragon masters
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Premium Form Container */}
          <div className="relative backdrop-blur-sm bg-neutral-900/40 border border-neutral-800/50 rounded-sm p-10 md:p-14 shadow-2xl">
            <form onSubmit={handleSubmit} className="relative space-y-8">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-amber-100 text-sm tracking-widest uppercase mb-3 font-light">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-black/50 border border-neutral-700/50 rounded-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-800/50 transition-all duration-300 serif-elegant text-lg"
                  placeholder="Enter your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-amber-100 text-sm tracking-widest uppercase mb-3 font-light">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-black/50 border border-neutral-700/50 rounded-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-800/50 transition-all duration-300 serif-elegant text-lg"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Dragon Type Select */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-amber-100 text-sm tracking-widest uppercase mb-3 font-light">
                  Dragon Affinity
                </label>
                <select
                  required
                  value={formData.dragonType}
                  onChange={(e) => setFormData({ ...formData, dragonType: e.target.value })}
                  className="w-full px-6 py-4 bg-black/50 border border-neutral-700/50 rounded-sm text-gray-300 focus:outline-none focus:border-amber-800/50 transition-all duration-300 serif-elegant text-lg"
                >
                  <option value="" className="bg-neutral-950">
                    Select your affinity
                  </option>
                  <option value="fire" className="bg-neutral-950">
                    Fire Guardian
                  </option>
                  <option value="ice" className="bg-neutral-950">
                    Ice Warden
                  </option>
                  <option value="storm" className="bg-neutral-950">
                    Sky Sovereign
                  </option>
                  <option value="shadow" className="bg-neutral-950">
                    Night Stalker
                  </option>
                  <option value="earth" className="bg-neutral-950">
                    Earth Keeper
                  </option>
                </select>
              </motion.div>

              {/* Experience Textarea */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-amber-100 text-sm tracking-widest uppercase mb-3 font-light">
                  Your Heritage
                </label>
                <textarea
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 bg-black/50 border border-neutral-700/50 rounded-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-800/50 transition-all duration-300 resize-none serif-elegant text-lg leading-relaxed"
                  placeholder="Share your story and lineage..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full px-8 py-5 bg-transparent border-2 border-amber-800/50 text-amber-100 text-sm font-medium tracking-widest uppercase rounded-sm hover:border-amber-700 transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-950/30 to-yellow-950/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                <span className="relative z-10">Submit Application</span>
              </motion.button>
            </form>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md rounded-sm"
              >
                <div className="text-center px-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
                    className="text-7xl mb-6"
                  >
                    🐉
                  </motion.div>
                  <h3 className="serif-display text-3xl font-semibold text-amber-100 mb-3">
                    Welcome to The Guild
                  </h3>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-4" />
                  <p className="serif-elegant text-gray-400 text-lg">
                    Your application has been received
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

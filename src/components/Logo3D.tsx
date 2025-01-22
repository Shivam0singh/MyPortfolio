'use client';
import { motion } from 'framer-motion';

export const Logo3D = () => {
  return (
    <motion.div
      className="relative w-12 h-12"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg transform rotate-3 shadow-xl" />
      
      {/* Foreground shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform -rotate-3 shadow-lg
        hover:rotate-0 transition-transform duration-300">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-3xl font-bold text-white transform hover:scale-110 transition-transform duration-300">
            S
          </span>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-purple-500 rounded-lg blur-xl opacity-30 transform scale-90" />
    </motion.div>
  );
}; 
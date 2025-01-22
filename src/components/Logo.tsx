'use client';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      className="relative w-14 h-14"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
        <div className="h-full w-full flex items-center justify-center border-2 border-white/10 rounded-xl">
          <span className="text-2xl font-bold text-white/90 hover:text-white transition-colors" 
            style={{ fontFamily: 'Inter' }}>
            S
          </span>
        </div>
      </div>
      
      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent rounded-b-xl" />
    </motion.div>
  );
}; 
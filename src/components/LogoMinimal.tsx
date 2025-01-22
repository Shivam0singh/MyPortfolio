'use client';
import { motion } from 'framer-motion';

export const LogoMinimal = () => {
  return (
    <motion.div
      className="relative w-14 h-14"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#E6E6FA] to-[#FFE4E1] p-0.5">
        <div className="h-full w-full rounded-[11px] bg-gradient-to-br from-[#FFF0F5] to-[#E6E6FA] p-2">
          <div className="h-full w-full flex items-center justify-center rounded-lg backdrop-blur-sm">
            <span className="text-2xl font-light text-[#4B0082] font-serif tracking-wider">
              𝓢
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 
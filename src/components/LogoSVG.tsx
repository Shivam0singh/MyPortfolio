'use client';
import { motion } from 'framer-motion';

export const LogoSVG = () => {
  return (
    <motion.div
      className="w-14 h-14"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Replace this with your exported SVG from Canva/Figma */}
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Your SVG content here */}
      </svg>
    </motion.div>
  );
}; 
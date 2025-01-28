"use client"; // This makes the component a Client Component

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Logo } from '@/components/Logo';
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { smoothScrollTo } from '@/utils/smoothScroll';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  const handleDownloadResume = () => {
    try {
      const resumePath = '/assets/resume.pdf';
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Shivam_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId.replace('#', ''));
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="flex justify-between items-center py-4 md:py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-white/90 hover:text-white transition-colors group py-2"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full
                transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenu4Line className="w-6 h-6" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <RiCloseLine className="w-6 h-6 text-white" />
                </button>
              </div>
              <nav className="flex flex-col space-y-8 mt-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-2xl text-white/90 hover:text-white transition-colors py-2 px-4
                      hover:bg-white/10 rounded-lg"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={handleDownloadResume}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                    rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg 
                    hover:shadow-purple-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { saveAs } from 'file-saver';
import { smoothScrollTo } from '@/utils/smoothScroll';

const sentence = ["Hi,", "I'm","Shivam", "a", "Creative", "Full-Stack", "Web", "Developer", "&", "Tech", "Enthusiast"];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Shivam0singh", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shivam-11singh/", label: "LinkedIn" },
];

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleDownloadResume = () => {
    try {
      // Using direct href with the correct path
      const resumePath = '/assets/resume.pdf';
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Shivam_Resume.pdf'; // Name that will appear when downloading
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const handleExploreWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smoothScrollTo('projects');
  };

  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 px-4 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Animated Text */}
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-wrap gap-x-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              {sentence.map((word, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Turning ideas into beautiful, functional, and user-friendly web experiences. Let's build something amazing together!
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreWork}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full 
                  transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-transparent text-white border-2 border-purple-500/30 
                  rounded-full hover:bg-purple-500/10 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Connect With Me Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 
                text-transparent bg-clip-text">
                Connect With Me
              </h3>

              <div className="flex gap-6 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -4,
                      scale: 1.1,
                    }}
                    className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors
                      shadow-lg hover:shadow-purple-500/20 group relative"
                  >
                    <social.icon className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[30px] blur-3xl" />
              
              <div className="relative h-full w-full rounded-[30px] overflow-hidden border-2 border-white/10">
                <Image
                  src="/assets/images/my-picture2.png"
                  alt="my-image"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 320px, 400px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

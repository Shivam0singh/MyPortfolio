"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

export const ContactSection = () => {
  // pages/form.js

  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center bg-gradient-to-b from-transparent to-purple-900/10">
      <motion.div 
        className="container mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 
            text-transparent bg-clip-text">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
            shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none
                  focus:border-purple-500 transition-colors text-white placeholder-gray-400"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none
                  focus:border-purple-500 transition-colors text-white placeholder-gray-400"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-4 text-purple-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none
                  focus:border-purple-500 transition-colors text-white placeholder-gray-400 resize-none"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full
                transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2
                disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Optional: Add social links or additional contact info */}
        <motion.div 
          className="mt-12 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>Or reach out directly via email at:</p>
          <a 
            href="m" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            your.email@example.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

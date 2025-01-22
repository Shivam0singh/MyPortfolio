'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';

interface PortProject {
  project: string;
  title: string;
  bio: string;
  link: string;
  image: string;
}

interface ProjectsSectionProps {
  portfolioProjects: PortProject[];
}

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const ProjectsSection = ({ portfolioProjects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-20 section relative z-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          My Projects
        </h1>
        
        <div className="space-y-16 md:space-y-32">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-4 w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-4"
                >
                  <h2 className="text-2xl font-bold text-purple-300">
                    {project.project}
                  </h2>
                  <h3 className="text-xl text-gray-300 mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.bio}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full
                    hover:bg-purple-700 transition-all duration-300 transform hover:scale-105
                    shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                  >
                    View Project
                  </a>
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full md:w-1/2">
                <Tilt options={defaultTiltOptions}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-xl shadow-2xl
                    shadow-purple-500/20 transition-all duration-300
                    hover:shadow-purple-500/40"
                  >
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.image}
                        alt={`${project.title} image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                        priority={index === 0}
                      />
                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                        translate-x-[-200%] animate-[shine_3s_infinite]" />
                    </div>
                  </motion.div>
                </Tilt>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

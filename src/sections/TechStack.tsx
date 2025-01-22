'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { 
    name: "React", 
    icon: "/assets/icons/react.svg",
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.1)"
  },
  { 
    name: "Next.js", 
    icon: "/assets/icons/nextjs.png",
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.1)"
  },
  { 
    name: "TypeScript", 
    icon: "/assets/icons/typescript.svg",
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.1)"
  },
  { 
    name: "JavaScript", 
    icon: "/assets/icons/javascript.svg",
    color: "#F7DF1E",
    bgColor: "rgba(247, 223, 30, 0.1)"
  },
  { 
    name: "HTML5", 
    icon: "/assets/icons/html5.svg",
    color: "#E34F26",
    bgColor: "rgba(227, 79, 38, 0.1)",
    filter: "invert(37%) sepia(74%) saturate(1467%) hue-rotate(346deg) brightness(99%) contrast(88%)"
  },
  { 
    name: "CSS3", 
    icon: "/assets/icons/css3.svg",
    color: "#1572B6",
    bgColor: "rgba(21, 114, 182, 0.1)",
    filter: "invert(29%) sepia(94%) saturate(1728%) hue-rotate(189deg) brightness(97%) contrast(88%)"
  },
  { 
    name: "Node.js", 
    icon: "/assets/icons/nodejs.svg",
    color: "#339933",
    bgColor: "rgba(51, 153, 51, 0.1)"
  },
  { 
    name: "MongoDB", 
    icon: "/assets/icons/mongodb.svg",
    color: "#47A248",
    bgColor: "rgba(71, 162, 72, 0.1)"
  },
  { 
    name: "Git", 
    icon: "/assets/icons/git.svg",
    color: "#F05032",
    bgColor: "rgba(240, 80, 50, 0.1)"
  },
  { 
    name: "Tailwind CSS", 
    icon: "/assets/icons/tailwind.svg",
    color: "#38BDF8",
    bgColor: "rgba(56, 189, 248, 0.1)",
    filter: "invert(67%) sepia(59%) saturate(4033%) hue-rotate(176deg) brightness(101%) contrast(97%)"
  }
];

export const TechSection = () => {
  return (
    <section className="py-20 section relative z-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Tech Stack
        </h2>
        
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto relative">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
              }}
              className="flex flex-col items-center p-6 rounded-xl
                transition-all duration-300 cursor-pointer
                bg-gradient-to-b from-white/10 to-white/5
                hover:from-white/20 hover:to-white/10
                backdrop-blur-md border border-white/10
                shadow-[0_0_15px_rgba(0,0,0,0.2)]
                hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]
                group"
            >
              <div className="relative w-16 h-16 mb-4 transition-transform duration-300
                group-hover:transform group-hover:scale-110">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.bgColor}, transparent 70%)`,
                    filter: 'blur(10px)',
                    transform: 'scale(1.2)',
                  }}
                />
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain relative z-10 drop-shadow-lg"
                  style={{
                    filter: tech.filter || `drop-shadow(0 0 8px ${tech.bgColor})`,
                  }}
                />
              </div>
              <p 
                className="text-sm font-medium transition-colors duration-300 relative z-10"
                style={{ 
                  color: tech.color,
                  textShadow: `0 0 10px ${tech.bgColor}`
                }}
              >
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

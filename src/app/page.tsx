import { ContactSection } from "@/sections/Contact";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TechSection } from "@/sections/TechStack";

export default function Home() {
  const portfolioProjects = [
    {
      project: "Art Asta",
      title: "Art Portfolio and Auction Platform",
      bio: "Developed a platform enabling artists to showcase portfolios, auction artwork, and streamline custom art requests through 'art on demand,' fostering engagement with competitive bidding and improved communication.",
      link: "https://art-asta.netlify.app/",
      image: "/assets/images/art-asta.jpeg",
    },
    {
      project: "Kisan",
      title: "Agriculture Empowerment Platform",
      bio: "Developed a platform dedicated to empowering Indian farmers by providing personalized crop recommendations, real-time market insights, weather forecasts, and resources for sustainable farming. The platform features multilingual support for accessibility across regions and includes an AI-powered chatbot for instant assistance, ensuring farmers can make informed agricultural decisions with ease.",
      link: "https://kisanai.ca/landing",
      image: "/assets/images/kisan.jpeg",
    },
    // {
    //   company: "Quantum Dynamics",
    //   year: "2023",
    //   title: "AI Startup Landing Page",
    //   results: [
    //     { title: "Enhanced user experience by 40%" },
    //     { title: "Improved site speed by 50%" },
    //     { title: "Increased mobile traffic by 35%" },
    //   ],
    //   link: "https://youtu.be/Z7I5uSRHMHg",
    //   image: "/assets/images/light-saas-landing-page.png",
    // },
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <TechSection />
      <ProjectsSection portfolioProjects={portfolioProjects} />
      <ContactSection />
    </div>
  );
}

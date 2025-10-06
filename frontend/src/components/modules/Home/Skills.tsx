import html from "../../../assets/html.png";
import tailwindIcon from "../../../assets/tailwind-css.svg";
import jsIcon from "../../../assets/js.png";
import reactIcon from "../../../assets/react.png";
import reduxIcon from "../../../assets/redux.svg";
import firebaseIcon from "../../../assets/firebase.png";
import nodejsIcon from "../../../assets/nodejs.png";
import expressJsIcon from "../../../assets/express.png";
import mongodbIcon from "../../../assets/mongodb-original-wordmark.svg";
import gitIcon from "../../../assets/git.png";
import typescript from "../../../assets/typescript.png";
import postgresqlIcon from "../../../assets/postgresql.png";
import {
  Briefcase,
  Clock,
  Feather,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

const Experience = () => {
  const technologies = [
    { name: "HTML", description: "Markup Language", icon: html },
    { name: "Tailwind CSS", description: "CSS Framework", icon: tailwindIcon },
    { name: "JavaScript", description: "Programming Language", icon: jsIcon },
    {
      name: "TypeScript",
      description: "Typed JavaScript",
      icon: typescript,
    },
    { name: "React", description: "Frontend Library", icon: reactIcon },
    { name: "Redux", description: "State Management", icon: reduxIcon },

    {
      name: "Firebase",
      description: "Backend as a Service",
      icon: firebaseIcon,
    },
    { name: "Node.js", description: "JavaScript Runtime", icon: nodejsIcon },
    { name: "Express.js", description: "Web Framework", icon: expressJsIcon },
    { name: "MongoDB", description: "NoSQL Database", icon: mongodbIcon },
    { name: "PostgreSQL", description: "SQL Database", icon: postgresqlIcon },
    { name: "Git", description: "Version Control", icon: gitIcon },
  ];

  const softSkills = [
    
    { name: "Communication", icon: MessageCircle },
    { name: "Team Collaboration", icon: Users },
    { name: "Adaptability", icon: Feather },
    { name: "Time Management", icon: Clock },
    { name: "Problem Solving", icon: Sparkles },
    { name: "Attention to Detail", icon: Briefcase },
  ];

  return (
    <div id="experience" className="py-8 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-2 font-bold bg-gradient-to-r from-[#00CED1] via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Skills & Expertise
        </h1>

        {/* Technical Skills Section */}
        <div className="mt-10">
          <h2 className="font-semibold text-center text-[#00CED1] mb-8 bg-gray-900 flex items-center justify-center px-4 py-2 rounded-3xl shadow-2xl border border-gray-700  mx-auto cursor-no-drop max-w-fit">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 bg-gray-900 rounded-xl shadow-lg border border-gray-700 group cursor-pointer"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-primary transition-colors duration-300">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-100 text-center text-sm">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400 text-center mt-1">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        {/* Soft Skills Section */}
        <div className="mt-20">
          <h2 className="font-semibold text-center text-[#00CED1] mb-8 bg-gray-900 flex items-center justify-center px-4 py-2 rounded-3xl shadow-2xl border border-gray-700  mx-auto cursor-no-drop max-w-fit">
            Soft Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 bg-gray-900 rounded-xl shadow-lg border border-gray-700 group cursor-pointer"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-[#00CED1] transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-medium text-gray-200 text-center text-sm">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Blob */}

      <style>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
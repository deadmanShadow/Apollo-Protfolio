"use client";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col items-center py-10 px-4 font-primary text-gray-100  max-w-3xl mx-auto"
    >
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-10 font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
        About Me
      </h1>

      <div
        className={`transition-all duration-700 w-full ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Who I Am Section */}
        <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl px-8 py-8 shadow-2xl border-2 border-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#048ec5]">
            Who I Am
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 font-sans">
            A passionate web developer. I enjoy building user-friendly websites
            and writing clean, efficient code. I focus on both frontend and
            backend development, continuously learning new skills to grow as a
            full-stack developer. I love solving problems, creating helpful
            solutions, and delivering projects with quality and care.
          </p>

          <h3 className="text-2xl font-semibold mb-2 text-[#048ec5] flex items-center">
            My Approach to Development
          </h3>
          <p className="text-gray-400 font-sans leading-relaxed">
            I prioritize writing maintainable code, building intuitive
            interfaces, and creating reliable backend systems. I believe in
            continuous learning, problem-solving, and collaborating effectively
            to deliver projects that are both functional and enjoyable for
            users.
          </p>
        </div>
      </div>

      {/* Animated gradient background elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-600 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default About;

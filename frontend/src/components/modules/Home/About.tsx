"use client"
import { useState, useEffect } from "react";
import { FaLaptopCode, FaBuilding, FaGraduationCap } from "react-icons/fa";

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
      className="flex flex-col items-center py-10 px-4 font-primary text-gray-100 min-h-screen max-w-6xl mx-auto"
    >
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-16 font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
        About Me
      </h1>

      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: About Section */}
          <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl px-8 py-5 shadow-2xl border-2 border-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#048ec5]">
              Who I Am
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-sans">
              I&apos;m a web developer who enjoys creating
              easy-to-use websites. I focus on writing clear code, learning new
              skills, and improving in both frontend and backend work. My goal
              is to grow into a full-stack developer who can handle projects
              from start to finish with quality and care. I like solving
              problems through code and making things that people find helpful.
              Every project I work on teaches me something new and keeps me
              motivated to do better.
            </p>

            <h3 className="text-2xl font-semibold mb-2 text-[#048ec5] flex items-center">
              My Approach to Development
            </h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              I try to keep things simple, creative, and focused on
              functionality. Whether it’s designing clear interfaces or building reliable
              APIs. For me, good development is not just about code, but also
              about communication and teamwork.
            </p>
          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#048ec5]">
              My Journey
            </h2>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-700 rounded-full"></div>

              {/* Timeline items */}
              <div className="relative mb-10">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                  <FaBuilding />
                </div>
                <div className="pl-6">
                  <h3 className="text-xl font-semibold text-gray-200">
                    Junior Backend Developer
                  </h3>
                  <p className="text-sm text-gray-400 font-sans mt-1">
                    Aug 2025 - Present
                  </p>
                  <p className="text-gray-400 font-sans mt-1">
                    Bantain Tech Solutions, UK (Remote)
                  </p>
                </div>
              </div>

              <div className="relative mb-10">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
                  <FaLaptopCode />
                </div>
                <div className="pl-6">
                  <h3 className="text-xl font-semibold text-gray-200">
                    Full-stack Development Intern
                  </h3>
                  <p className="text-sm text-gray-400 font-sans mt-1">
                    Jan 2025 - Jul 2025 (7months)
                  </p>
                  <p className="text-gray-400 font-sans mt-1">
                    Bantain Tech Solutions, UK (Remote)
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
                  <FaGraduationCap />
                </div>
                <div className="pl-6">
                  <h3 className="text-xl font-semibold text-gray-200">
                    B.Sc. in Geography & Environment
                  </h3>
                  <p className="text-sm text-gray-400 font-sans mt-1">2019 - 2023</p>
                  <p className="text-gray-400 font-sans mt-1">
                    Completed graduation
                  </p>
                </div>
              </div>
            </div>
          </div>
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
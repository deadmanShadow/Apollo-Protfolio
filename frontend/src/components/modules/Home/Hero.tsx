"use client";
import { MdOutlineFileDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

import Image from "next/image";
import main from "../../../assets/main.jpg";

const Banners = () => {
  return (
    <div
      id="banner"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 pt-8  text-gray-200 bg-[#000018] font-sans overflow-hidden max-w-6xl mx-auto"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-20 h-20 bg-[#02b0b3] rounded-full filter blur-3xl opacity-50 animate-blob-1 top-10 left-4"></div>
        <div className="absolute w-64 h-64 bg-[#02b0b3] rounded-full filter blur-3xl opacity-50 animate-blob-1 top-1/4 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-[#02b0b3] rounded-full filter blur-3xl opacity-50 animate-blob-2 bottom-1/4 right-1/4"></div>
        <div className="absolute w-16 h-16 bg-[#02b0b3] rounded-full filter blur-3xl opacity-10 animate-blob-2 bottom-5 right-4"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center lg:text-left">
        <p className="text-gray-300 md:text-xl text-lg font-light">
          Hello there! I&apos;m
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-primary font-extrabold mt-2 leading-tight">
          Abdullah Raihan Shamil
        </h1>
        <p className="md:text-2xl text-xl bg-gradient-to-r from-[#00CED1] via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium mt-4 animate-gradient">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1500}
            deleteSpeed={25}
            loop={0}
            typeSpeed={100}
            words={[
              "A Full Stack Developer",
              "A MERN Stack Developer",
              "A React Developer",
              "A Frontend Developer",
              "A Backend Developer",
            ]}
          />
        </p>
        <p className="max-w-md mx-auto lg:mx-0 text-gray-400 mt-6 text-sm md:text-base">
          Driven by a passion for continuous learning, I’m a developer on a
          mission to master both front-end and back-end technologies.
        </p>

        <a
          href="https://drive.google.com/file/d/1LAiCkVdFkVi4WJy7AaOvZ37ONKcbnOwP/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 mt-8 text-white font-semibold rounded-full shadow-lg bg-[#0482b4] transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          Download Resume <MdOutlineFileDownload className="h-5 w-5" />
        </a>
      </div>

      {/* Image Section - This can be added back if desired */}
      <div className="relative z-10 mt-12 lg:mt-0 lg:ml-20">
        <Image
          src={main}
          className=" object-cover rounded-full border-2 border-[#048ec5] shadow-2xl"
          width={350}
          height={350}
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default Banners;

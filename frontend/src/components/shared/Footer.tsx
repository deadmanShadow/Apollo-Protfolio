"use client";

import { CgMail } from "react-icons/cg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import { useRouter } from "next/navigation";

const Footer = () => {
  // const router = useRouter();

  // const smoothScroll = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const handleNavClick = (id: string) => {
  //   router.push("/");
  //   setTimeout(() => {
  //     smoothScroll(id);
  //   }, 100);
  // };

  return (
    <footer className="bg-black text-gray-200 items-center  p-4 h-[180px] font-primary">
      <nav className="flex gap-4 justify-center  mt-8 mx-auto">
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new">
          <CgMail className="w-8 h-6 hover:opacity-60" />
        </a>
        <a href="https://www.linkedin.com/in/deadmanShadow/">
          <FaLinkedin className="w-8 h-6 hover:opacity-60" />
        </a>
        <a href="https://github.com/deadmanShadow">
          <FaGithub className="w-8 h-6 hover:opacity-60" />
        </a>
        <a href="https://www.facebook.com/deadmanShadow1">
          <FaFacebook className="w-8 h-6 hover:opacity-60" />
        </a>
      </nav>

      {/* <div className="flex justify-center items-center mt-4 font-mon gap-2">
    
        <a className="cursor-pointer hover:opacity-60" onClick={() => handleNavClick("about")}>About | </a>
       
     
        <a className="cursor-pointer hover:opacity-60" onClick={() => handleNavClick("experience")}>Experience |</a>
    
      
        <a className="cursor-pointer hover:opacity-60" onClick={() => handleNavClick("project")}>Project |</a>
  
        <a className="cursor-pointer hover:opacity-60" onClick={() => handleNavClick("contact")}>Contact</a>
     
    </div> */}

      <div className="font-mon mt-4 sm:mt-4">
        <p className="font-mon text-center sm:text-md text-xs">
          {" "}
          © {new Date().getFullYear()} - All right reserved by Abdullah Raihan
          Shamil
        </p>
      </div>
    </footer>
  );
};

export default Footer;

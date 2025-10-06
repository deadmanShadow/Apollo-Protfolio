import About from "@/components/modules/Home/About";
import BlogSection from "@/components/modules/Home/BlogSection";
import Contact from "@/components/modules/Home/Contact";
import Hero from "@/components/modules/Home/Hero";
import ProjectSection from "@/components/modules/Home/ProjectSection";
import Skills from "@/components/modules/Home/Skills";

export default function HomePage() {
  return (
    <div id="home" className=" mx-auto max-w-7xl bg-[#000018]   text-[#FFFFFF]">
      <Hero />
      <About />
      <Skills />
      <ProjectSection />
      <BlogSection />
      <Contact />
    </div>
  );
}

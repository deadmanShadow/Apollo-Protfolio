import ProjectCard from "@/components/projects/ProjectCard";
import { allProjects } from "@/services/projects/projects.service";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects | Abdullah Raihan Shamil",
  description: "Portfolio",
};

const ProjectsPage = async () => {
  const res = await allProjects();

  const { data, meta } = res;
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-4  mx-auto font-mono text-pretty  md:w-[60vw]">
        <h3 className="font-bold">Total: {meta.total} </h3>

        {data?.map((item: any) => (
          <ProjectCard project={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;

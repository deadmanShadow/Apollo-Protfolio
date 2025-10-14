/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import RichTextDisplay from "../RichTextDisplay";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white p-4 flex flex-col-reverse md:flex-row justify-between gap-4  dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="">
        <Link
          href={`/projects/${project.id}`}
          className="block group transform hover:-translate-y-1 transition-transform duration-300"
        >
          {" "}
          <h3 className="capitalize text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
        </Link>

        <div className="mb-4">
          <RichTextDisplay
            className="font-mono inline"
            html={project?.description?.substring(0, 100) + "..."}
          />

          <Link
            href={`/projects/${project.id}`}
            className="text-blue-600 inline  dark:text-blue-400 cursor-pointer font-semibold text-sm hover:underline"
          >
            See More →
          </Link>
        </div>

        <div className="flex items-center   gap-2 mb-4  ">
          <Link
            className="hover:underline text-sm font-semibold text-white bg-blue-500 py-1 px-3 rounded-3xl"
            target="blank"
            href={project.projectLink}
          >
            Project Link
          </Link>

          {project.liveSite && (
            <Link
              className="hover:underline text-sm font-semibold text-white bg-blue-500 py-1 px-3 rounded-3xl"
              target="blank"
              href={project.liveSite}
            >
              Live Link
            </Link>
          )}
        </div>
      </div>

      {project.thumbnail && (
        <div className="relative h-30 md:h-full w-full md:w-30">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
}

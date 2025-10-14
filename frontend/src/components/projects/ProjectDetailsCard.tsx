/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import RichTextDisplay from "../RichTextDisplay";

export default async function ProjectDetailsCard({
  project,
}: {
  project: any;
}) {
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <div className="max-w-4xl px-4 mb-10">
      <h1 className="text-5xl font-bold mb-6 capitalize">{project?.title}</h1>

      {project.thumbnail && (
        <div className="relative h-90 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="rounded-lg object-contain shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none my-4">
        <RichTextDisplay html={project?.description} />
      </article>

      <article className="prose prose-lg max-w-none my-4">
        <h2 className="text-lg font-bold my-2">Features:</h2>
        <RichTextDisplay html={project?.features} />
      </article>
    </div>
  );
}

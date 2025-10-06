import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Fetch single project by ID
async function getProject(id: string): Promise<Project | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data.data;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    if (!response.ok) return [];
    const data = await response.json();
    const projects = data.data || [];

    return projects.map((project: Project) => ({
      id: String(project.id),
    }));
  } catch {
    return [];
  }
}

interface Props {
  params: Promise<{ id: string }>;
}

// Page component
export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 max-w-6xl mx-auto px-6">
      <div className="container mx-auto px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 mt-10"
        >
          ← Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          {project.image && (
            <div className="mb-8">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className=" object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-4xl font-semibold mb-4 text-blue-600">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Key Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Live Demo
              </a>
            )}
            {project.frontendLink && (
              <a
                href={project.frontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Frontend Code
              </a>
            )}
            {project.backendLink && (
              <a
                href={project.backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Backend Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

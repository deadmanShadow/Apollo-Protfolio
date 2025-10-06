import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getProjects(): Promise<Project[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?limit=3`,
      {
        next: { revalidate: 60 },
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);
    if (!response.ok) return [];
    const data = await response.json();
    return data.data || [];
  } catch {
    return [];
  }
}

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-16 font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Projects
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-800 relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm group-hover:blur-0"></div>

              <div className="relative bg-gray-900 rounded-xl h-full">
                {/* Image Container */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      width={400}
                      height={200}
                      loading="lazy"
                    />
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-gray-200 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100 group-hover:border-blue-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm border border-gray-100">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex justify-center items-center gap-2 px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`View details for ${project.title} project`}
                    >
                      View Details
                    </Link>

                    <div className="flex gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.frontendLink && (
                        <a
                          href={project.frontendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Frontend
                        </a>
                      )}
                      {project.backendLink && (
                        <a
                          href={project.backendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Backend
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

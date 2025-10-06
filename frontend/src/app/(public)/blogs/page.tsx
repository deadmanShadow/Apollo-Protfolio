import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.data || [];
  } catch {
    return [];
  }
}

export default async function AllBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 mt-10 text-blue-700">
          All Blogs
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Explore all my thoughts on technology, development, and industry
          insights
        </p>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blogs found.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {blog.photo && (
                <div className="h-48 bg-gray-200">
                  <Image
                    src={blog.photo}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">RECENT</span>
                  <Link
                    href={blog.link || `/blogs/${blog.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

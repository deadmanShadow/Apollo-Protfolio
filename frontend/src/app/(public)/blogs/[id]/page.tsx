import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getBlog(id: string): Promise<Blog | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,
      {
        next: { revalidate: 3600 },
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    if (!response.ok) return [];
    const data = await response.json();
    const blogs = data.data || [];

    return blogs.map((blog: Blog) => ({
      id: String(blog.id),
    }));
  } catch {
    return [];
  }
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Blogs
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src={blog.photo || ""}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.concept || "" }} />
          </div>
        </article>
      </div>
    </div>
  );
}

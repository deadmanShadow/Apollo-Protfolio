import BlogCard from "@/components/blogs/BlogCard";
import { allBlogs } from "@/services/blogs/blogs.service";
import { Loader } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "All Blogs | Imran Hasan",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

export const revalidate = false;
export const dynamic = "force-static";

const BlogsPage = async () => {
  const res = await allBlogs({ published: true });
  const { data, meta } = res;
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid grid-cols-1 gap-4 mx-auto font-mono text-pretty  md:w-[60vw]">
        <small className="font-bold">Total: {meta.total} </small>
        {data.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Suspense>
  );
};
export default BlogsPage;

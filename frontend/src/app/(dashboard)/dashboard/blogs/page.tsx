import BlogCard from "@/components/dashboard/blogs/BlogCard";
import { Button } from "@/components/ui/button";
import { allBlogs } from "@/services/blogs/blogs.service";
import Link from "next/link";

export const revalidate = 0;

const BlogPage = async () => {
  const res = await allBlogs();

  const { data: blogs, meta } = res;
  return (
    <div className="py-4">
      <div className="flex flex-col">
        <Button asChild>
          <Link href="/dashboard/blogs/create">Create New +</Link>
        </Button>
        <h2 className="text-2xl my-4 text-center font-bold">All Blogs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
        {blogs?.map((blog: any) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};
export default BlogPage;

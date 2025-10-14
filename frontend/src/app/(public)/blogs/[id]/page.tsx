import BlogDetailsCard from "@/components/blogs/BlogDetails";
import { allBlogs, getBlog } from "@/services/blogs/blogs.service";

export const generateStaticParams = async () => {
  const res = await allBlogs();
  const { data: blogs } = res;

  return blogs.map((blog: any) => ({ id: String(blog.id) }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: blog } = await getBlog(id);
  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getBlog(id);
  return (
    <div className="grid grid-cols-1 gap-4 mx-auto font-mono text-pretty  w-[60vw]">
      <BlogDetailsCard blog={res?.data} />
    </div>
  );
};
export default BlogDetailsPage;

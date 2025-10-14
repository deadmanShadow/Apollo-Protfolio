import BackButton from "@/components/BackButton";
import BlogDetailsCard from "@/components/blogs/BlogDetails";
import { DeleteConfirmDialog } from "@/components/dashboard/DeleteConfirmDialog";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getBlog } from "@/services/blogs/blogs.service";
import { Edit } from "lucide-react";
import Link from "next/link";

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

const BlogPreviewPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getBlog(id);

  return (
    <div className="flex justify-center">
      <Card className="relative p-10 w-[70vw]">
        <div className="flex justify-between gap-1">
          <BackButton />
          <CardTitle className="text-center"> Blog Preview</CardTitle>

          <div className="flex gap-1">
            <Button asChild>
              <Link href={`/dashboard/blogs/${id}`}>
                <Edit />
              </Link>
            </Button>

            <DeleteConfirmDialog id={Number(id)} scope="blog" />
          </div>
        </div>

        <span
          className={cn(
            "absolute top-25 right-0 text-[10px] text-center font-bold px-2 py-1  text-gray-300 ",
            {
              " bg-green-700": res?.data.published,
              "bg-gray-500": !res?.data.published,
            }
          )}
        >
          {res?.data.published ? "Published" : "Unpublished"}
        </span>
        <BlogDetailsCard blog={res?.data} />
      </Card>
    </div>
  );
};
export default BlogPreviewPage;

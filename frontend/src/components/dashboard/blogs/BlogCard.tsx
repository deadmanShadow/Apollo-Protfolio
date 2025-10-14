/* eslint-disable @typescript-eslint/no-explicit-any */
import RichTextDisplay from "@/components/RichTextDisplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DeleteConfirmDialog } from "../DeleteConfirmDialog";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <span
          className={cn(
            "text-[10px] font-semibold px-2 py-1 rounded-4xl text-gray-300",
            { " bg-green-700": blog.published, "bg-gray-500": !blog.published }
          )}
        >
          {blog.published ? "Published" : "Unpublished"}
        </span>
        <Link
          href={`/dashboard/blogs/preview/${blog.id}`}
          className="block group transform hover:-translate-y-1 transition-transform duration-300"
        >
          {" "}
          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <div className="text-gray-700 dark:text-gray-300 mb-4">
          <RichTextDisplay
            className="font-mono"
            html={blog?.content?.substring(0, 150) + "..."}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {blog.view} views
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Button asChild>
              <Link href={`/dashboard/blogs/${blog.id}`}>Edit</Link>
            </Button>
            <DeleteConfirmDialog id={blog?.id} scope="blog" />
          </div>
          <div className="text-right">
            <Link href={`/dashboard/blogs/preview/${blog.id}`}>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                Preview →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

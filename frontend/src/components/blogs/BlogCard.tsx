/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import RichTextDisplay from "../RichTextDisplay";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <Link
          href={`/blogs/${blog.id}`}
          className="block group transform hover:-translate-y-1 transition-transform duration-300"
        >
          {" "}
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors capitalize">
            {blog.title}
          </h3>
        </Link>

        <div className="text-gray-700 dark:text-gray-300 mb-4 ">
          <RichTextDisplay
            className="font-mono"
            html={blog?.content?.substring(0, 150) + "..."}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {blog.view} views
          </span>

          <Link
            href={`/blogs/${blog.id}`}
            className="text-blue-600  dark:text-blue-400 font-semibold text-sm hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

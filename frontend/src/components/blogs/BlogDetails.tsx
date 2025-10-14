/* eslint-disable @typescript-eslint/no-explicit-any */

import { format } from "date-fns";
import RichTextDisplay from "../RichTextDisplay";

export default async function BlogDetailsCard({ blog }: { blog: any }) {
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }

  return (
    <main className="max-w-4xl px-4">
      <h1 className="text-5xl font-bold mb-6">{blog?.title}</h1>
      <p className="text-gray-500 text-sm">
        {format(new Date(blog.createdAt), "PP")} • {blog.view} views
      </p>
      <article className="prose prose-lg max-w-none py-2 font-mono text-justify text-lg">
        <RichTextDisplay html={blog?.content} />
      </article>
    </main>
  );
}

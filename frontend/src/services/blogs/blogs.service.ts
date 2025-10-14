import toast from "react-hot-toast";

function objectToKeyValueString(obj?: Record<string, any>) {
  return (
    obj &&
    Object.entries(obj as Record<string, any>)
      .map(([key, value]) => `${key}=${value}`)
      .join(" ")
  );
}

export const allBlogs = async (filter?: Record<string, any>) => {
  const queryParams = objectToKeyValueString(filter as Record<string, any>);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/all?${queryParams}`,
    {
      next: {
        tags: ["BLOGS"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return await res.json();
};

export const getBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
    next: {
      tags: [`BLOG-${id}`],
    },
  });

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

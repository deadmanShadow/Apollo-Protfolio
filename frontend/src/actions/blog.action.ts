"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

export const updateBlog = async (id: string, data: Record<string, any>) => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
    method: "PATCH",
    headers: {
      cookie: cookieHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  const resData = await res.json();
  revalidateTag("BLOGS");
  revalidateTag(`BLOG-${resData?.data?.id}`);
  revalidatePath("/blogs");
  revalidatePath(`/blogs/${resData?.data?.id}`);

  return resData;
};

export const createBlog = async (data: Record<string, any>) => {
  const cookieHeader = (await cookies()).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/create`,
    {
      method: "POST",
      headers: {
        cookie: cookieHeader,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const resData = await res.json();
  revalidateTag("BLOGS");
  revalidateTag(`BLOG-${resData?.data?.id}`);
  revalidatePath("/blogs");
  revalidatePath(`/blogs/${resData?.data?.id}`);

  return resData;
};

export const deleteBlog = async (id: number) => {
  const cookieHeader = (await cookies()).toString();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
    method: "DELETE",
    headers: {
      cookie: cookieHeader,
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  revalidateTag("BLOGS");
  revalidateTag(`BLOG-${id}`);
  revalidatePath("/blogs");
  revalidatePath(`/blogs/${id}`);

  return await res.json();
};

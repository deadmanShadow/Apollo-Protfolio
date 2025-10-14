"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateProject = async (id: string, data: FormData) => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {
      headers: {
        cookie: cookieHeader,
      },
      method: "PATCH",
      body: data,
    }
  );

  const resData = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  revalidateTag("PROJECTS");
  revalidateTag(`PROJECT-${resData?.data?.id}`);
  revalidatePath("/projects");
  revalidatePath(`/projects/${resData?.data?.id}`);

  return resData;
};

export const createProject = async (data: FormData) => {
  const cookieHeader = (await cookies()).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/create`,
    {
      headers: {
        cookie: cookieHeader,
      },
      method: "POST",

      body: data,
    }
  );

  const resData = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  revalidateTag("PROJECTS");
  revalidateTag(`PROJECT-${resData?.data?.id}`);
  revalidatePath("/projects");
  revalidatePath(`/projects/${resData?.data?.id}`);

  return resData;
};

export const deleteProject = async (id: number) => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {
      headers: {
        cookie: cookieHeader,
      },
      method: "DELETE",
    }
  );

  const resData = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  revalidateTag("PROJECTS");
  revalidateTag(`PROJECT-${id}`);
  revalidatePath("/projects");
  revalidatePath(`/projects/${id}`);

  return resData;
};

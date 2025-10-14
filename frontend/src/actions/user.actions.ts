"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const dashboardData = async () => {
  const cookieHeader = (await cookies()).toString();
  // const token = cookies().get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/dashboard`,
    {
      headers: {
        cookie: cookieHeader, // forward cookies to backend
      },
    }
  );

  return await res.json();
};

export const updateProfile = async (picture: File | null, data: any) => {
  const cookieHeader = cookies().toString();

  const profileInfo = {
    ...data,
    skills:
      data.skills.length !== 0
        ? data.skills
            .toString()
            .split(",")
            .map((skill: string) => skill.trim())
        : undefined,
  };

  const formData = new FormData();
  formData.append("picture", picture as File);
  formData.append("data", JSON.stringify(profileInfo));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/update`,
    {
      method: "PATCH",

      body: formData,
      headers: {
        Cookie: cookieHeader, // forward cookies to backend
      },
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  revalidateTag("ABOUT");
  revalidatePath("/");

  return await res.json();
};

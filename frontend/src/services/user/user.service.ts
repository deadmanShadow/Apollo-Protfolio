import toast from "react-hot-toast";

export const aboutMe = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/about-me`,
    {
      next: {
        tags: ["ABOUT", "EXPERIENCES"],
      },
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

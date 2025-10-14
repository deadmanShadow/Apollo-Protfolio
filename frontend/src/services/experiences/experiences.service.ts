import toast from "react-hot-toast";

export const allExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/all`,
    {
      next: {
        tags: ["EXPERIENCES"],
      },
    }
  );

  if (!res.ok) {
    console.log(res);
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const getExperience = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/${id}`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

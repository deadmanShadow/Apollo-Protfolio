import { AboutMe } from "@/components/about";
import { aboutMe } from "@/services/user/user.service";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "About Me",
};

const HomePage = async () => {
  const res = await aboutMe();

  const { data } = res;

  return (
    <div className="grid grid-cols-1 mx-auto max-w-3xl">
      <div className="">
        <AboutMe user={data} />
      </div>
    </div>
  );
};
export default HomePage;

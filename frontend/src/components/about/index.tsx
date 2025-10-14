import Link from "next/link";
import ExperienceTimeline from "../experience/ExperienceTimeline";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export async function AboutMe({ user }: { user: any }) {
  return (
    <>
      <div className="flex flex-row">
        <Link
          href="https://github.com/icerahi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full"
        >
          <Avatar className="size-40 shadow border my-2">
            <AvatarImage
              className="object-contain"
              alt={user.name}
              src={user.picture}
            />
            <AvatarFallback className="font-mono font-bold">
              {user.name}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className="flex items-center flex-row gap-4">
        <h1 className="flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance capitalize">
          {user.name}
        </h1>

        <Button
          variant="default"
          size={null}
          className="font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all ease-in-out duration-300"
          asChild
        >
          <Link
            href="https://linkedin.com/in/icerahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            Available
          </Link>
        </Button>
      </div>
      <div className="text-lg italic font-semibold">
        <p>{user.email}</p>
      </div>

      <div className="flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty my-4">
        <h2 className="text-justify">{user.bio}</h2>

        <div>
          <h2 className="text-2xl font-bold pb-2"> Skills:</h2>
          <h3>
            {user.skills.map((skill: string, index: number) => {
              const colors = [
                "bg-red-200",
                "bg-blue-200",
                "bg-green-200",
                "bg-yellow-200",
                "bg-purple-200",
                "bg-pink-200",
                "bg-indigo-200",
              ];
              const colorClass = colors[index % colors.length];
              return (
                <span key={skill} className={`${colorClass} p-1 m-1 font-bold`}>
                  {skill}
                </span>
              );
            })}
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-bold pb-2">Career:</h3>

          <div className="">
            <ExperienceTimeline data={user.experiences} />
          </div>
        </div>
      </div>
    </>
  );
}

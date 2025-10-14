/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Link from "next/link";
import { DeleteConfirmDialog } from "../DeleteConfirmDialog";
export default function ExperienceCard({ experience }: { experience: any }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {" "}
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {experience.position}
        </h3>
        <h4 className="font-medium italic">{experience.company}</h4>
        <p className="text-gray-700 text-sm dark:text-gray-300 mb-4 line-clamp-3">
          {format(new Date(experience.startDate), "PP")} -{" "}
          {experience?.endDate
            ? format(new Date(experience.endDate), "PP")
            : " Present"}
        </p>
        <div className="flex justify-between items-center ">
          <div className="flex gap-1  ml-auto">
            <Button asChild>
              <Link href={`/dashboard/experiences/${experience.id}`}>Edit</Link>
            </Button>
            <DeleteConfirmDialog id={experience?.id} scope="experience" />
          </div>
        </div>
      </div>
    </div>
  );
}

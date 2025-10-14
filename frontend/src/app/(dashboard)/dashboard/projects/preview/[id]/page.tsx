import BackButton from "@/components/BackButton";
import { DeleteConfirmDialog } from "@/components/dashboard/DeleteConfirmDialog";
import ProjectDetailsCard from "@/components/projects/ProjectDetailsCard";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { getProject } from "@/services/projects/projects.service";
import { Edit } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: project } = await getProject(id);
  return {
    title: project?.title,
    description: project?.description,
  };
};

const ProjectPreviewPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getProject(id);

  return (
    <div className="flex justify-center">
      <Card className="p-10  w-[70vw]">
        <div className="flex justify-between gap-1">
          <BackButton />
          <CardTitle className="text-center"> Project Preview</CardTitle>

          <div className="flex gap-1">
            <Button asChild>
              <Link href={`/dashboard/projects/${id}`}>
                <Edit />
              </Link>
            </Button>

            <DeleteConfirmDialog id={Number(id)} scope="project" />
          </div>
        </div>

        <ProjectDetailsCard project={res?.data} />
      </Card>
    </div>
  );
};
export default ProjectPreviewPage;

import ProjectEditForm from "@/components/dashboard/projects/ProjectEditForm";
import { Card, CardTitle } from "@/components/ui/card";
import { getProject } from "@/services/projects/projects.service";

const ProjectEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getProject(id);
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Update Project</CardTitle>

        <ProjectEditForm project={res?.data} />
      </Card>
    </div>
  );
};
export default ProjectEditPage;

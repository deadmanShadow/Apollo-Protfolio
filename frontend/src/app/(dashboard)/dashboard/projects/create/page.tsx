import ProjectCreateForm from "@/components/dashboard/projects/ProjectCreateForm";
import { Card, CardTitle } from "@/components/ui/card";

const CreateProject = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Add A New Project</CardTitle>

        <ProjectCreateForm />
      </Card>
    </div>
  );
};
export default CreateProject;

import ExperienceCreateForm from "@/components/dashboard/experiences/ExperienceCreateForm";
import { Card, CardTitle } from "@/components/ui/card";

const CreateExperience = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Create A New Experience</CardTitle>

        <ExperienceCreateForm />
      </Card>
    </div>
  );
};
export default CreateExperience;

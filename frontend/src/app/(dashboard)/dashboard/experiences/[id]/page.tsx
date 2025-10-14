import ExperienceEditForm from "@/components/dashboard/experiences/ExperienceEditForm";
import { Card, CardTitle } from "@/components/ui/card";
import { getExperience } from "@/services/experiences/experiences.service";

const ExperienceEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getExperience(id);
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Update Experience</CardTitle>

        <ExperienceEditForm experience={res?.data} />
      </Card>
    </div>
  );
};
export default ExperienceEditPage;

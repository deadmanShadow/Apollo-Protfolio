import ProfileInfo from "@/components/dashboard/profile/ProfileInfo";
import { Card, CardTitle } from "@/components/ui/card";
import { aboutMe } from "@/services/user/user.service";

export const revalidate = 0;

const ProfilePage = async () => {
  const res = await aboutMe();
  const { data } = res;
  return (
    <div className="flex justify-center">
      <Card className="md:w-[70vw] p-10">
        <CardTitle className="text-center">About Me Information</CardTitle>
        <ProfileInfo data={data} />
      </Card>
    </div>
  );
};
export default ProfilePage;

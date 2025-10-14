import BlogCreateForm from "@/components/dashboard/blogs/BlogCreateForm";
import { Card, CardTitle } from "@/components/ui/card";

const CreateBlog = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Create A New Blog</CardTitle>

        <BlogCreateForm />
      </Card>
    </div>
  );
};
export default CreateBlog;

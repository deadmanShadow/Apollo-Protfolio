"use client";
import { deleteBlog } from "@/actions/blog.action";
import { deleteExperience } from "@/actions/experience.actions";
import { deleteProject } from "@/actions/project.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface IParams {
  id: number;
  scope: "blog" | "project" | "experience";
}

export function DeleteConfirmDialog({ id, scope }: IParams) {
  const router = useRouter();

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting...");

    let res;
    switch (scope) {
      case "blog":
        res = await deleteBlog(id);
        if (res?.success) {
          toast.success(res?.message, { id: toastId });
          router.push("/dashboard/blogs");
        } else {
          toast.error(res.message ?? "Something went wrong!", { id: toastId });
        }
        return;

      case "project":
        res = await deleteProject(id);
        if (res?.success) {
          toast.success(res?.message, { id: toastId });
          router.push("/dashboard/projects");
        } else {
          toast.error(res.message ?? "Something went wrong!", { id: toastId });
        }
        return;

      case "experience":
        res = await deleteExperience(id);
        if (res?.success) {
          toast.success(res?.message, { id: toastId });
          router.push("/dashboard/experiences");
        } else {
          toast.error(res.message ?? "Something went wrong!", { id: toastId });
        }
        return;

      default:
        toast.error("Something went wrong!", { id: toastId });
        return;
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

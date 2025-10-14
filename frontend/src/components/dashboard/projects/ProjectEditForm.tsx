"use client";
import { updateProject } from "@/actions/project.action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileMetadata } from "@/hooks/use-file-upload";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import ImageUpload from "../ImageUpload";
import RichTextEditor from "../RichTextEditor";

const ProjectEditFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  projectLink: z.url(),
  liveSite: z.string().optional(),
  description: z.string(),
  features: z.string(),
});

type ProjectEditFormValues = z.infer<typeof ProjectEditFormSchema>;

export default function ProjectEditForm({ project }: { project: any }) {
  const [image, setImage] = useState<(File | FileMetadata) | null>(null);

  const router = useRouter();
  const form = useForm<ProjectEditFormValues>({
    resolver: zodResolver(ProjectEditFormSchema),
    defaultValues: {
      title: project?.title,
      projectLink: project?.projectLink,
      liveSite: project?.liveSite,
      description: project?.description,
      features: project?.features,
    },
  });

  async function onSubmit(data: ProjectEditFormValues) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("thumbnail", image as File);

    const toastId = toast.loading("Updating...");
    try {
      const res = await updateProject(project?.id, formData);
      console.log(res);
      if (res.success) {
        toast.success(res.message, { id: toastId });
        router.push("/dashboard/projects");
      } else {
        toast.error(res.message ?? "Something went wrong!", { id: toastId });
      }
    } catch (err) {}
  }
  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:justify-end items-center">
        {project?.thumbnail && (
          <div className="relative object-contain h-full">
            <Image src={project.thumbnail} alt={"Uploaded image"} fill />
          </div>
        )}
        <div className="">
          <ImageUpload onChange={setImage} label="thumbnail" />
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="E.g Wallet Management System" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="projectLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g. https://github.com/xx/xx"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="liveSite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Live Site</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. https://example.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <RichTextEditor name="description" control={form.control} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Features</FormLabel>
              <FormControl>
                <RichTextEditor name="features" control={form.control} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end items-center gap-2">
          <Button
            type="button"
            onClick={() => router.back()}
            variant={"secondary"}
          >
            Cancel
          </Button>
          <Button type="submit">Save Changes </Button>
        </div>
      </form>
    </Form>
  );
}

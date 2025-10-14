"use client";
import { createProject } from "@/actions/project.action";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import ImageUpload from "../ImageUpload";
import RichTextEditor from "../RichTextEditor";

const ProjectCreateFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  projectLink: z.url(),
  liveSite: z.string().optional(),
  description: z.string(),
  features: z.string(),
});

type ProjectCreateFormValues = z.infer<typeof ProjectCreateFormSchema>;

export default function ProjectCreateForm() {
  const [image, setImage] = useState<(File | FileMetadata) | null>(null);

  const router = useRouter();
  const form = useForm<ProjectCreateFormValues>({
    resolver: zodResolver(ProjectCreateFormSchema),
    defaultValues: {
      title: "",
      projectLink: "",
      liveSite: "",
      description: "",
      features: "",
    },
  });

  async function onSubmit(data: ProjectCreateFormValues) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("thumbnail", image as File);

    const toastId = toast.loading("Creating...");
    try {
      const res = await createProject(formData);
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
      <ImageUpload onChange={setImage} label="thumbnail" />
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

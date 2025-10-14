"use client";
import { updateProfile } from "@/actions/user.actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Textarea } from "@/components/ui/textarea";
import { FileMetadata } from "@/hooks/use-file-upload";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import ImageUpload from "../ImageUpload";

const ProjectEditFormSchema = z.object({
  name: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  email: z.email(),
  phone: z.string().optional(),
  skills: z.string().optional(),
  bio: z.string(),
});

type ProjectEditFormValues = z.infer<typeof ProjectEditFormSchema>;

export default function ProfileInfo({ data }: { data: any }) {
  const [image, setImage] = useState<(File | FileMetadata) | null>(null);

  const router = useRouter();
  const form = useForm<ProjectEditFormValues>({
    resolver: zodResolver(ProjectEditFormSchema),
    defaultValues: {
      name: data?.name || "",
      phone: data?.phone || "",
      email: data?.email,
      skills: data?.skills.join(","),
      bio: data?.bio || "",
    },
  });

  async function onSubmit(data: ProjectEditFormValues) {
    const toastId = toast.loading("Updating...");
    try {
      const res = await updateProfile(image as File, data);

      if (res.success) {
        toast.success(res.message, { id: toastId });
        router.push("/dashboard");
      } else {
        toast.error(res.message ?? "Something went wrong!", { id: toastId });
      }
    } catch (err) {}
  }
  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:justify-start items-center">
        <Avatar className="size-50 mx-auto">
          <AvatarImage className="object-contain" src={data?.picture} />
          <AvatarFallback>{data?.name}</AvatarFallback>
        </Avatar>
        <div className="">
          <ImageUpload onChange={setImage} label="Profile Picture" />
        </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-400 text-black"
                    disabled
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About You</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="About yourself...."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills (Comma Seperated)</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Javascript, Python, React"
                  {...field}
                />
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

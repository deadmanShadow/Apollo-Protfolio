"use client";
import { createBlog } from "@/actions/blog.action";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parseBoolean } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { z } from "zod";
import RichTextEditor from "../RichTextEditor";

const BlogCreateFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
  published: z.string().optional(),
});

type BlogCreateFormValues = z.infer<typeof BlogCreateFormSchema>;

export default function BlogCreateForm() {
  const router = useRouter();
  const form = useForm<BlogCreateFormValues>({
    resolver: zodResolver(BlogCreateFormSchema),
    defaultValues: {
      title: "",
      content: "",
      published: "true",
    },
  });

  async function onSubmit(data: BlogCreateFormValues) {
    const payload = {
      ...data,
      published: parseBoolean(data.published),
    };
    console.log("create blog", data);

    const toastId = toast.loading("Creating...");
    try {
      const res = await createBlog(payload);

      if (res.success) {
        toast.success(res.message, { id: toastId });
        router.push("/dashboard/blogs");
      } else {
        toast.error(res.message ?? "Something went wrong!", { id: toastId });
      }
    } catch (err) {}
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <RichTextEditor name="content" control={form.control} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Published</FormLabel>
              <Select onValueChange={field.onChange} defaultValue="true">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>

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

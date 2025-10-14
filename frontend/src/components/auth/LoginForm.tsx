"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "@/actions/auth.action";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Checking credentials...");
    try {
      const res = await login(values);

      if (res?.statusCode === 200) {
        toast.success("Login successful", { id: toastId });
        router.push("/dashboard");
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.message, { id: toastId });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full "
      >
        <h2 className="text-3xl font-bold text-center">Login</h2>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-2">
          Login
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;

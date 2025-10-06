"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.log("register failed");
  }

  return await res.json();
};

export const login = async (data: FieldValues) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("Login API URL:", `${apiUrl}/auth/login`);

  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("Login response status:", res.status);

  if (!res?.ok) {
    const errorText = await res.text();
    console.log("Login failed:", errorText);
    return { success: false, message: errorText };
  }

  return await res.json();
};

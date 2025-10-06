/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardHomePage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    const userData = sessionStorage.getItem("user");

    if (!authToken) {
      router.replace("/login");
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#000018] p-6 w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">
          Welcome, {user?.name || "User"}!
        </h1>
        <p className="text-gray-200 mb-8">Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default DashboardHomePage;

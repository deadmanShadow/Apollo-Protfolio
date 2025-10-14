// components/BackButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <ArrowBigLeft /> Back
    </Button>
  );
}

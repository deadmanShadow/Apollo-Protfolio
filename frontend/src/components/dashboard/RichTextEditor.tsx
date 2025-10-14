"use client";

import dynamic from "next/dynamic";
import { Control, useController } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface RichTextEditorProps {
  name: string;
  control: Control<any>;
}

export default function RichTextEditor({ name, control }: RichTextEditorProps) {
  const {
    field: { onChange, value },
  } = useController({ name, control });

  return (
    <div className="rounded-md border border-input bg-background">
      <ReactQuill
        theme="snow"
        value={value || ""}
        onChange={onChange}
        className="min-h-[150px]"
      />
    </div>
  );
}

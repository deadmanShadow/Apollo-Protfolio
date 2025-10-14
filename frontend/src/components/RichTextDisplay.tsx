"use client";

import DOMPurify from "isomorphic-dompurify";

interface RichTextDisplayProps {
  html: string;
  className?: string;
}

const RichTextDisplay = ({ html, className = "" }: RichTextDisplayProps) => {
  // Normalize HTML to avoid <div> inside <p>
  const normalizeHTML = (html: string) => {
    // Replace <p><div>...</div></p> with just <div>...</div>
    if (html) {
      return html.replace(/<p>(\s*<div[\s\S]*?<\/div>\s*)<\/p>/g, "$1");
    } else {
      return "";
    }
  };

  const cleanHTML = DOMPurify.sanitize(normalizeHTML(html));
  return (
    <div
      className={`prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
};
export default RichTextDisplay;

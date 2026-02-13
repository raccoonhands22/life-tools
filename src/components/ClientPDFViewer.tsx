"use client";

import { pdf } from "@react-pdf/renderer";
import { useEffect, useState, useRef } from "react";
import { createPDFDocument } from "@/lib/createPDFDocument";

type Props = {
  slug: string;
  values: Record<string, string | boolean>;
};

export default function ClientPDFViewer({ slug, values }: Props) {
  const [url, setUrl] = useState<string | null>(null);
  const prevUrl = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const doc = createPDFDocument(slug, values);
        if (!doc || cancelled) return;
        const blob = await pdf(doc).toBlob();
        if (cancelled) return;
        const newUrl = URL.createObjectURL(blob);
        // Clean up previous URL
        if (prevUrl.current) URL.revokeObjectURL(prevUrl.current);
        prevUrl.current = newUrl;
        setUrl(newUrl);
      } catch (e) {
        console.error("PDF preview failed:", e);
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [slug, values]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (prevUrl.current) URL.revokeObjectURL(prevUrl.current);
    };
  }, []);

  if (!url) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 text-sm">
        Rendering preview...
      </div>
    );
  }

  return <iframe src={url} width="100%" height="100%" style={{ border: "none" }} />;
}

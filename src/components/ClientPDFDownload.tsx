"use client";

import { pdf } from "@react-pdf/renderer";
import { useState } from "react";
import { createPDFDocument } from "@/lib/createPDFDocument";

type Props = {
  slug: string;
  values: Record<string, string | boolean>;
  fileName: string;
};

export default function ClientPDFDownload({ slug, values, fileName }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const doc = createPDFDocument(slug, values);
      if (!doc) return;
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const a = window.document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("PDF generation failed:", e);
    }
    setLoading(false);
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="w-full bg-gray-900 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm disabled:opacity-50"
    >
      {loading ? "Preparing..." : "Download PDF"}
    </button>
  );
}

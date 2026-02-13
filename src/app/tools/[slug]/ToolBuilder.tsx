"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Tool } from "@/lib/tools";
import PaywallModal from "@/components/PaywallModal";

const ClientPDFDownload = dynamic(() => import("@/components/ClientPDFDownload"), { ssr: false, loading: () => <span className="text-gray-400 text-sm">Loading...</span> });
const ClientPDFViewer = dynamic(() => import("@/components/ClientPDFViewer"), { ssr: false });

type Props = { tool: Tool };

export default function ToolBuilder({ tool }: Props) {
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  const [values, setValues] = useState<Record<string, string | boolean>>(() => {
    const init: Record<string, string | boolean> = {};
    tool.fields.forEach((f) => {
      init[f.name] = f.default ?? (f.type === "toggle" ? false : "");
    });
    return init;
  });

  const setValue = useCallback((name: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Pro tool — show paywall, no tool builder
  if (!tool.free) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            &larr; Back to tools
          </Link>
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-gray-600 mb-2">{tool.name}</p>
            <p className="text-sm text-gray-400">{tool.description}</p>
          </div>
        </div>
        <PaywallModal />
      </div>
    );
  }

  // Free tool — full builder
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-gray-700">{tool.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-80 flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h1>
            <p className="text-sm text-gray-500 mb-6">{tool.description}</p>

            <div className="space-y-4">
              {tool.fields.map((field) => (
                <div key={field.name}>
                  {field.type === "toggle" ? (
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-gray-700">{field.label}</span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={values[field.name] as boolean}
                        onClick={() => setValue(field.name, !values[field.name])}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          values[field.name] ? "bg-gray-900" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${
                            values[field.name] ? "translate-x-4.5" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </label>
                  ) : (
                    <>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <select
                          value={values[field.name] as string}
                          onChange={(e) => setValue(field.name, e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        >
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          value={values[field.name] as string}
                          onChange={(e) => setValue(field.name, e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <ClientPDFDownload
                slug={tool.slug}
                values={values}
                fileName={`${tool.slug}-page.pdf`}
              />
              <button
                onClick={() => setShowMobilePreview(!showMobilePreview)}
                className="w-full lg:hidden border border-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                {showMobilePreview ? "Hide Preview" : "Preview"}
              </button>
            </div>
          </div>

          <div className={`flex-1 ${showMobilePreview ? "block" : "hidden lg:block"}`}>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm" style={{ height: "700px" }}>
              <ClientPDFViewer slug={tool.slug} values={values} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

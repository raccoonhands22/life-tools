"use client";

import { useRouter } from "next/navigation";
import { STRIPE_LINK } from "@/lib/tools";

export default function PaywallModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="text-4xl mb-4">&#128274;</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Unlock All Tools</h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Get lifetime access to every tool — Week Planner, Waiting On, Decision Helper, Admin Checklist, and any future tools we add.
        </p>
        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mb-3 text-sm"
        >
          Unlock All Tools
        </a>
        <button
          onClick={() => router.push("/")}
          className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

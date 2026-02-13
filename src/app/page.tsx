import Link from "next/link";
import { tools, STRIPE_LINK } from "@/lib/tools";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Simple pages for real life.
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-2">
          Pick a tool. Customize it. Download a clean, printable PDF.
        </p>
        <p className="text-gray-400 text-sm">No account needed. Runs entirely in your browser.</p>
      </section>

      {/* Tool Grid */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono text-gray-300">{tool.icon}</span>
                {tool.free ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    Free
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    Pro
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-400 mb-6">
            How it works
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 text-center">
            <div className="flex-1">
              <div className="text-2xl mb-2">1</div>
              <p className="text-sm text-gray-600 font-medium">Pick a tool</p>
              <p className="text-xs text-gray-400 mt-1">Choose from our collection of one-page layouts</p>
            </div>
            <div className="flex-1">
              <div className="text-2xl mb-2">2</div>
              <p className="text-sm text-gray-600 font-medium">Customize it</p>
              <p className="text-xs text-gray-400 mt-1">Add your title, date, and toggle sections on or off</p>
            </div>
            <div className="flex-1">
              <div className="text-2xl mb-2">3</div>
              <p className="text-sm text-gray-600 font-medium">Download PDF</p>
              <p className="text-xs text-gray-400 mt-1">Print it, write on it, get things done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-4 pb-16 text-center">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Unlock All Tools</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Get lifetime access to every tool — today and everything we add in the future.
            No subscriptions, no accounts.
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            Unlock All Tools
          </a>
          <p className="text-xs text-gray-400 mt-3">2 tools free forever. No credit card required to start.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-medium text-gray-700 mb-2">One-Page Life Tools</p>
          <div className="flex justify-center gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

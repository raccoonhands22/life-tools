import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/lib/tools";
import ToolBuilder from "./ToolBuilder";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return <ToolBuilder tool={tool} />;
}

import { notFound } from "next/navigation";
import { sampleCaseStudies } from "@/lib/content";

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = sampleCaseStudies.find((v) => v.slug === slug);
  if (!cs) notFound();
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">{cs.title}</h1>
      <p className="mt-4 text-foreground/75">Before/After transformation with quantifiable enterprise outcomes.</p>
    </main>
  );
}

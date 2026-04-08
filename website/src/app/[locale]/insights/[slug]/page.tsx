import { notFound } from "next/navigation";
import { samplePosts } from "@/lib/content";

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = samplePosts.find((v) => v.slug === slug);
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-foreground/75">
        Technical article designed to strengthen authority for Indonesia-focused network and security topics.
      </p>
    </main>
  );
}

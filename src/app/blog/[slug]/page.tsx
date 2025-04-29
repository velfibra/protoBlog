import { getPostBySlug, getAllPosts } from "@/app/Lib/post";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

// Tipagem dos parâmetros da página
type PostPageProps = {
  params: {
    slug: string;
  };
};

// Geração de parâmetros estáticos para o Next.js
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}

// Página com tipagem correta
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="bg-gradient-to-bl from-[#1A0530] via-[#48088b] to-[#1A0530] min-h-screen flex flex-col items-center justify-start p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <article className="max-w-4xl w-full text-white">
        <h1 className="text-4xl font-bold mb-6 text-white">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-md mb-8 w-full h-auto object-cover"
        />
        <div
          className="space-y-6 leading-relaxed [&_a]:text-blue-400 [&_a:hover]:underline [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}

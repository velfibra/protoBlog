import { getPostBySlug, getAllPosts } from "@/app/Lib/post";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Geração dos parâmetros estáticos
export async function generateStaticParams() {
  const posts = getAllPosts(); // getAllPosts é síncrono no seu código
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Página principal
export default async function PostPage({ params }) {
  const { slug } = await params; // await para acessar slug async

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const content = post.content; // já é string, sem await

  return (
    <main className="bg-gradient-to-bl from-[#1A0530] via-[#48088b] to-[#1A0530] min-h-screen flex flex-col items-center justify-start p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <article className="max-w-4xl w-full text-white">
        <Link
          className="text-blue-700 p-5 text-2xl font-semibold -ml-5"
          href="/"
        >
          ⬅ Ultimas publicações
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-white mt-5">
          {post.title}
        </h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-md mb-8 w-full h-auto object-cover"
        />
        <div
          className="space-y-6 leading-relaxed [&_a]:text-blue-400 [&_a:hover]:underline [&_strong]:font-semibold text-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
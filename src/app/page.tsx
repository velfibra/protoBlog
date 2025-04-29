import { getAllPosts } from "@/app/Lib/post";
import PostSwiper from "@/components/PostSwiper";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="bg-gradient-to-bl from-[#1A0530] via-[#48088b] to-[#1A0530] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div />
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Últimos Posts
        </h2>
        <PostSwiper posts={posts} />
      </section>
      <div />
    </div>
  );
}

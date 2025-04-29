"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
};

export default function PostSwiper({ posts }: { posts: Post[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.slug}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px] flex flex-col justify-between">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <button className="animate-fadeInLeft rounded-2xl bg-[#511E84] cursor-pointer p-3 font-semibold uppercase text-white shadow-md shadow-gray-800 duration-500 animation-delay-500 hover:scale-105 max-lg:mt-3  max-lg:text-center ">
                  Ler mais →
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

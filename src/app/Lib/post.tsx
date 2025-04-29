import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((filename) => {
    const slug = filename.replace(".md", "").toLowerCase(); // forçar minúscula
    const fileContent = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf8"
    );
    const { data, content } = matter(fileContent);
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      image: data.image,
      content: marked(content),
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug.toLowerCase()}.md`); // forçar minúscula
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    image: data.image,
    content: marked(content),
  };
}

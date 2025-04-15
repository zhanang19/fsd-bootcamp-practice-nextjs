import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/contents");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      content,
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
    };
  });
}

export function getRandomPost() {
  const posts = getAllPosts();

  const randomIndex = Math.floor(Math.random() * posts.length);

  return posts[randomIndex];
}

export function getSortedPosts() {
  return getAllPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
  };
}

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));
}

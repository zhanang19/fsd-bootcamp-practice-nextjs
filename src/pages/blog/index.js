import Link from "next/link";
import { getSortedPosts } from "@/utils";

export async function getStaticProps() {
  const posts = getSortedPosts();

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title} ({post.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

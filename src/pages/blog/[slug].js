import { getAllPostSlugs, getPostBySlug } from "@/utils";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import styles from "@/styles/BlogPost.module.css";

export async function getStaticPaths() {
  const paths = getAllPostSlugs();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: { ...post, contentHtml },
    },
  };
}

export default function Post({ post }) {
  return (
    <div className={styles.blogPostContainer}>
      <h1>{post.title}</h1>
      <div>
        Back to <Link href="/blog">Blog</Link>
      </div>
      <br />
      <p>Published at: {post.date}</p>
      <br />
      <div
        className={styles.blogPost}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}

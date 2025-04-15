import Link from "next/link";
import { getRandomPost } from "@/utils";
import { remark } from "remark";
import html from "remark-html";

export async function getServerSideProps() {
  const post = getRandomPost();

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: { ...post, contentHtml },
    },
  };
}

export default function FeelingLucky({ post }) {
  return (
    <div>
      <h1>Feeling Lucky: {post.title}</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
      <br />
      <br />
      <p>Published at: {post.date}</p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

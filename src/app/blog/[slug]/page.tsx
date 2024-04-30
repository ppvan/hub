import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/utils/populates";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{}</p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const paths = posts.map((post) => ({
    slug: post.slug,
  }));

  return paths;
}

export default BlogPost;

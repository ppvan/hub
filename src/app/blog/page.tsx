import { getBlogPosts } from "@/utils/populates";
import Link from "next/link";

const BlogIndex = () => {
    let allBlogs = getBlogPosts();

    return (
        <section>
            {allBlogs
                .sort((a, b) => {
                    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
                        <div className="w-full flex flex-col group">
                            <h2 className="text-neutral-200 font-semibold text-lg tracking-tight group-hover:text-[#9e98f2]">
                                {post.metadata.title}
                            </h2>
                            <p className="text-slate-400 tracking-tight">{post.metadata.summary}</p>
                        </div>
                    </Link>
                ))}
        </section>
    );
};

export default BlogIndex;

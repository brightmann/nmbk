import React from "react";
import PostListing from "../components/PostListing";
import Pagination, {
    getTotalPages,
    getPagePosts
} from "../components/Pagination";

export const meta = {
    title: "Programming Posts",
    tags: ["Next.js", "MDX"],
    layout: "blog-post-list",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription:
        "All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`."
};

export function BlogList({ posts, currentPage, totalPages }) {
    return (
        <div className="blog-post-list">
            <h1>{meta.title}</h1>
            {posts.map((post, index) => (
                <PostListing key={index} post={post} indes={index} />
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath="/blog"
            />
        </div>
    );
}

export default function Blog(props) {
    const blogPosts = props.allData.filter(content => content.type == "post");
    const totalPages = getTotalPages(blogPosts.length);
    const pagePosts = getPagePosts(blogPosts, 1);
    return (
        <BlogList posts={pagePosts} currentPage={1} totalPages={totalPages} />
    );
}
Blog.defaultProps = {
    allData: []
};

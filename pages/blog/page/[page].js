import React from "react";
import { BlogList } from "../../blog";
import { getTotalPages, getPagePosts } from "../../../components/Pagination";
import BlogEngine from "../../../utils/blog-engine";

export async function getServerSideProps(ctx) {
    const page = parseInt(ctx.params.page, 10);
    const allData = await BlogEngine();
    const blogPosts = allData.filter(content => content.type == "post");
    const totalPages = getTotalPages(blogPosts.length);

    if (isNaN(page) || page < 1 || page > totalPages) {
        return { notFound: true };
    }
    if (page === 1) {
        return {
            redirect: { destination: "/blog", permanent: false }
        };
    }
    return { props: { page } };
}

export default function BlogPaginated(props) {
    // getServerSideProps result is nested under pageProps when _app has getInitialProps
    const page = props.pageProps?.page ?? props.page;
    const blogPosts = props.allData.filter(content => content.type == "post");
    const totalPages = getTotalPages(blogPosts.length);
    const pagePosts = getPagePosts(blogPosts, page);
    return (
        <BlogList posts={pagePosts} currentPage={page} totalPages={totalPages} />
    );
}
BlogPaginated.defaultProps = {
    allData: []
};

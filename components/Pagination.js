import React from "react";
import Link from "next/link";

export const POSTS_PER_PAGE = 5;

export function getTotalPages(totalPosts) {
    return Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
}

export function getPagePosts(posts, page) {
    return posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
}

export default function Pagination({ currentPage, totalPages, basePath }) {
    if (totalPages <= 1) return null;

    const pageLink = pageNum =>
        pageNum === 1 ? basePath : `${basePath}/page/${pageNum}`;

    const items = [];
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) items.push(i);
    } else {
        items.push(1);
        if (currentPage > 3) items.push("ellipsis-start");
        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPages - 1, currentPage + 1);
            i++
        ) {
            items.push(i);
        }
        if (currentPage < totalPages - 2) items.push("ellipsis-end");
        items.push(totalPages);
    }

    return (
        <nav className="pagination">
            {currentPage > 1 && (
                <Link href={pageLink(currentPage - 1)}>
                    <a className="page-link">Previous</a>
                </Link>
            )}
            {items.map(item =>
                typeof item === "string" ? (
                    <span key={item} className="ellipsis">
                        …
                    </span>
                ) : item === currentPage ? (
                    <span key={item} className="page-link current">
                        {item}
                    </span>
                ) : (
                    <Link key={item} href={pageLink(item)}>
                        <a className="page-link">{item}</a>
                    </Link>
                )
            )}
            {currentPage < totalPages && (
                <Link href={pageLink(currentPage + 1)}>
                    <a className="page-link">Next</a>
                </Link>
            )}
            <style jsx>{`
                .pagination {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 40px;
                    padding: 0 20px;
                }
                .page-link {
                    display: inline-block;
                    padding: 6px 16px;
                    margin: 4px;
                    border-radius: 9999px;
                    border: 2px solid #536dfe;
                    color: #536dfe;
                    font-size: 14px;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .page-link:hover {
                    transform: scale(1.05);
                }
                .page-link.current {
                    background: #536dfe;
                    color: #fff;
                }
                .ellipsis {
                    margin: 0 4px;
                    color: #455a64;
                }
            `}</style>
        </nav>
    );
}

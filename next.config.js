const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Images are not optimized on Cloudflare Workers — serve as-is.
    images: {
        unoptimized: true,
    },
}

module.exports = withMDX(nextConfig)

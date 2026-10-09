// Generates utils/file-list.json with the current pages/ and pages/blog/
// directory listings. Run before `next build` so the post/page lists
// always reflect the files on disk (replaces babel-plugin-preval, whose
// transform cache went stale on Cloudflare's persistent build cache).
const fs = require("fs");
const path = require("path");
const pagesDir = path.join(__dirname, "..", "pages");
const blogDir = path.join(pagesDir, "blog");
const pages = fs.readdirSync(pagesDir);
// Only .mdx files are posts; skip subdirectories (e.g. blog/page/ for pagination)
const posts = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir).filter(name => name.endsWith(".mdx"))
    : [];
const out = { pages, posts };
fs.writeFileSync(
    path.join(__dirname, "..", "utils", "file-list.json"),
    JSON.stringify(out, null, 2) + "\n"
);
console.log(`file-list.json: ${pages.length} pages, ${posts.length} posts`);

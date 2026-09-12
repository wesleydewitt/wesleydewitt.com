import fm from "front-matter";

const modules = import.meta.glob("/src/_content/posts/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const getTypeFromPath = (path) => path.split("/").at(-2).replace(/s$/, "");

const getSlugFromPath = (path) => path.split("/").pop().replace(/\.md$/, "");

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const { attributes, body } = fm(raw);

    return {
      slug: getSlugFromPath(path),
      type: getTypeFromPath(path),
      title: attributes.title,
      subtitle: attributes.subtitle,
      date: attributes.date,
      excerpt: attributes.excerpt,
      content: body,
    };
  })
  .sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });

export const essays = posts.filter((post) => post.type === "essay");
export const albums = posts.filter((post) => post.type === "album");
export const poems = posts.filter((post) => post.type === "poem");
export const shortFiction = posts.filter(
  (post) => post.type === "short-fiction",
);

export const getPostBySlug = (type, slug) =>
  posts.find((post) => post.type === type && post.slug === slug);

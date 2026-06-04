import { SITE, SERVICES, POSTS } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const routes = ["", "/services", "/method", "/about", "/the-agenda", "/contact"];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const postRoutes = POSTS.map((p) => `/the-agenda/${p.slug}`);

  return [...routes, ...serviceRoutes, ...postRoutes].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

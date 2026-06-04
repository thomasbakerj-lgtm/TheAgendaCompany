# The Agenda Company — Website

Boutique professional event management firm in Phoenix, AZ. Built with Next.js (App Router), statically generated, optimized for SEO, local SEO, and GEO (AI / answer-engine visibility).

## Stack
- Next.js 15 (App Router) · React 19
- `next/font` (Newsreader + Hanken Grotesk)
- No external UI dependencies — plain CSS design system in `app/globals.css`

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (GitHub → Vercel)
1. Create a new GitHub repo and push this folder.
2. In Vercel: New Project → import the repo. Framework preset auto-detects **Next.js**. No env vars required.
3. Add the custom domain in Vercel → Settings → Domains.

## Before / after launch — edit `lib/site.js`
The whole site reads from one config. Update `SITE`:
- `url` — set to the final domain (drives canonical URLs, sitemap, and all JSON-LD `@id`s).
- `email`, `phone` — leave empty to omit publicly; fill in to surface in the contact form (mailto) and schema.
- `social` — add LinkedIn / Instagram / Google Business URLs; they flow into schema `sameAs` automatically.

When the domain is set, the contact form's mailto and all structured data update with no other changes.

## SEO / GEO notes
- Every page sets its own `title`, `description`, and `canonical` via the Metadata API.
- JSON-LD is server-rendered: `ProfessionalService` + `WebSite` + `Person` site-wide (in `app/layout.js`), plus per-page `Service`, `FAQPage`, `BreadcrumbList`, `Blog`, and `Article`.
- `app/robots.js` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). **If you put Cloudflare in front of Vercel, re-check that its bot settings don't block these.**
- `app/sitemap.js` generates all routes including blog posts.
- Address is service-area only (Phoenix, AZ + `areaServed`); no street address is emitted. Configure the Google Business Profile as a service-area business to match.

## Content
- Page copy lives in the page files; service content in `lib/servicePages.js`; blog articles in `lib/articles.js`.
- To add a blog post: add an entry to `ARTICLES` in `lib/articles.js` — it's picked up by the hub, the dynamic route, the sitemap, and gets Article + FAQ schema automatically.

## Still to add (from the source-of-truth doc)
- Founder's specific role/verb per named event (currently "experience spanning").
- Real photography (replace any imagery; use descriptive filenames + alt text).
- Testimonials / case studies as they become available.
- Remaining 12 blog posts from the editorial roadmap.

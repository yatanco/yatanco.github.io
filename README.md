# yatan.co (Astro)

Bio/status homepage + `/writing` essay archive, one Astro project, one Cloudflare Pages deploy.

## Architecture

- **Shared shell** (`src/layouts/Shell.astro`): monospace nav, black background,
  mint accent. Persists across every page — bio and essays both live inside it.
- **Bio homepage** (`src/pages/index.astro`): operator-style status page, mirrors
  the current yatan.co structure (Now / Previously / Writing).
- **Writing index** (`src/pages/writing/index.astro`): list of essays, tagline
  "Essays and unfinished thoughts."
- **Essay layout** (`src/layouts/EssayLayout.astro`): same nav, but content
  switches register — serif titles/body, off-white text, wider line height,
  monospace reserved for metadata only.
- **Content collection** (`src/content/writing/*.md`): one file per post,
  shared frontmatter schema (title, date, description, tags, draft).

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## Migrating posts from Jekyll / guacamayalab.com

1. Copy the post's markdown body into a new file under `src/content/writing/`.
2. Convert frontmatter to this shape:

   ```yaml
   ---
   title: "Post Title"
   date: 2026-04-18
   description: "One-line summary, optional"
   tags: ["personal"]
   ---
   ```

3. Strip any Jekyll Liquid tags or layout references from the body.
4. Set up a 301 redirect in Cloudflare (Rules → Redirect Rules) from the old
   URL to `/writing/<new-slug>` for every migrated post, to preserve SEO/links.

Three pilot posts are already stubbed in `src/content/writing/` — swap in the
real migrated text and check the essay layout feels right before migrating
the rest of the archive.

## Redirect map (guacamayalab.com → yatan.co)

All 11 posts are already migrated into `src/content/writing/` with slugs matching
their original guacamayalab.com URLs exactly. Set up a Cloudflare Redirect Rule
(301) for each:

```
guacamayalab.com/systems-beat-emotions-in-parenting/ → yatan.co/writing/systems-beat-emotions-in-parenting
guacamayalab.com/what-you-resist-persists-avoiding-discomfort-makes-it-worse/ → yatan.co/writing/what-you-resist-persists-avoiding-discomfort-makes-it-worse
guacamayalab.com/what-if-caregivers-could-contribute-to-alzheimers-research/ → yatan.co/writing/what-if-caregivers-could-contribute-to-alzheimers-research
guacamayalab.com/a-simple-self-compassion-practice-that-changed-my-inner-dialogue/ → yatan.co/writing/a-simple-self-compassion-practice-that-changed-my-inner-dialogue
guacamayalab.com/acceptance-patience-and-fun-in-caregiving/ → yatan.co/writing/acceptance-patience-and-fun-in-caregiving
guacamayalab.com/the-importance-of-asking-yourself-what-you-want/ → yatan.co/writing/the-importance-of-asking-yourself-what-you-want
guacamayalab.com/how-i-spent-2-years-on-not-writing-a-blog/ → yatan.co/writing/how-i-spent-2-years-on-not-writing-a-blog
guacamayalab.com/why-i-go-for-a-meal-with-someone/ → yatan.co/writing/why-i-go-for-a-meal-with-someone
guacamayalab.com/what-if-your-family-was-more-like-a-team/ → yatan.co/writing/what-if-your-family-was-more-like-a-team
guacamayalab.com/a-simple-guide-to-being-a-great-guest-with-any-kind-of-host/ → yatan.co/writing/a-simple-guide-to-being-a-great-guest-with-any-kind-of-host
guacamayalab.com/the-mountain-and-the-bench/ → yatan.co/writing/the-mountain-and-the-bench
```

Since guacamayalab.com is staying alive as the product studio site, decide whether
these old URLs should redirect (killing the posts on that domain entirely) or
just get a rel=canonical pointing to yatan.co if you want them to linger there too.
Redirecting is cleaner and avoids duplicate content.

## Deploy

Connect this repo to Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro

Point `yatan.co` DNS at the Pages project once the build is verified.

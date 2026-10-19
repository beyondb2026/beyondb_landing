# Beyond B website

Marketing site for **Beyond B, the AI Product Experience Layer** (https://beyondbsolutions.com).
Next.js 15 (App Router, React 19, TypeScript), exported as plain static files and hosted on Cloudflare Pages.

## Run locally

```bash
npm install
npm run preview    # builds and serves the real site, the way Cloudflare will (use this to judge speed and animations)
npm run dev        # editing mode with hot reload, http://localhost:3000
npm run build      # writes the static site to ./out
npm run start      # serves an existing ./out
```

**Judge speed with `npm run preview`, not `npm run dev`.** The dev server compiles on demand and ships
about 8 MB of unminified JavaScript, so the first load takes 10 to 15 seconds and the animations start
several seconds late. The built site ships about 0.4 MB and starts its animations in about 1.3 seconds
(measured with the CPU slowed 4x).

Node 20 or newer (`.nvmrc` says 22).

## Project layout

```
src/app/layout.tsx          html shell, fonts, Organization + WebSite JSON-LD, theme colour
src/app/page.tsx            home page: assembles the section components
src/app/home.css            home page styles
src/app/features/           /features page and its styles
src/components/             one component per section (Hero, Problem, How, Explore, ...)
src/components/PageEffects  starts the interactive parts after the page is on screen
src/lib/meta.ts             title, description, canonical, Open Graph and X tags for each page
src/lib/page-script.js      hero phone demo, scroll steps, 3D viewer, layer diagram, smooth scroll
public/                     images, logos, video, 3D model, favicon, og-image.png,
                            robots.txt, sitemap.xml, _headers (Cloudflare cache + security headers)
```

To change page text, edit the matching file in `src/components`. To change tags for a page, edit `src/lib/meta.ts` or the `metadata` block in that page.

## Deploy on Cloudflare Pages (from GitHub)

1. Push this repo to GitHub.
2. Cloudflare dashboard > **Workers & Pages** > **Create** > **Pages** > **Connect to Git** and pick the repo.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
4. Save and deploy. Every push to `main` redeploys; other branches get preview URLs.

### Custom domain (beyondbsolutions.com)

1. In the Pages project: **Custom domains** > **Set up a custom domain** > `beyondbsolutions.com`.
2. If the domain's DNS is not on Cloudflare yet, add the domain to Cloudflare and change the nameservers at Spaceship to the two Cloudflare ones. Cloudflare creates the DNS record and the certificate for you.
3. Also add `www.beyondbsolutions.com` as a custom domain, then add a redirect from `www` to the bare domain: **Rules** > **Redirect Rules** > hostname equals `www.beyondbsolutions.com` > redirect to `https://beyondbsolutions.com${http.request.uri.path}` (301).
4. Email: when nameservers move to Cloudflare, copy your existing MX, SPF and DKIM records into Cloudflare DNS first, or `hello@beyondbsolutions.com` will stop receiving mail.

## After it is live

- Search Console: add the domain, submit `https://beyondbsolutions.com/sitemap.xml`.
- Check `https://beyondbsolutions.com/og-image.png` loads, then test the link preview in WhatsApp and X.
- The pilot button opens a Tally form (https://tally.so/r/jadOx6). Submit it once to confirm entries reach you.

## Notes

- Fonts load from Google Fonts at runtime (same as the original page).
- The interactive sections are written as DOM code in `src/lib/page-script.js`, carried over unchanged from the original page so behaviour is identical. They start in `PageEffects` once the page is on screen.
- Largest files: `media/problem.mp4` and `.webm` (about 3.5 MB each) and `media/wm_glb.txt` (3D model). Compressing these is the biggest speed win left.
- Cloudflare Pages limits: 25 MiB per file and 20,000 files per deployment. This site is far below both.

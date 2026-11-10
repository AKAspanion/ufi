# Agency website template

A Next.js (pages router) marketing-site template: home, services, how-we-work and portfolio pages.

## Getting started

```bash
npm install
npm run dev
```

- `npm run build` / `npm start` — production build and server
- `npm run export` — static export to `out/`
- `npm run lint` — ESLint (with Prettier) · `npm run format` — Prettier

## Configuration

Copy `.env.example` to `.env.local`. Settings live in [`config/site.js`](config/site.js):

| Variable                                              | Default        | Purpose                                       |
| ----------------------------------------------------- | -------------- | --------------------------------------------- |
| `NEXT_PUBLIC_DEMO_CONTENT`                            | `false`        | Show the reference agency's demo content      |
| `NEXT_PUBLIC_COMPANY_NAME`                            | `Your Company` | Company name used in page copy                |
| `NEXT_PUBLIC_CONTACT_URL`                             | `/#contact`    | Target of "Contact us" / "Get in touch" links |
| `NEXT_PUBLIC_BEHANCE_URL`, `NEXT_PUBLIC_DRIBBBLE_URL` | —              | Social links in the header and footer         |

`NEXT_PUBLIC_*` values are inlined at build time, so rebuild after changing them.

### Demo content

The pages were built from a reference agency site. Its company name, website and social
links, client case studies, testimonials and stats are kept as demo content and render only
when `NEXT_PUBLIC_DEMO_CONTENT=true`. By default you get neutral sample entries instead, and the
client case-study pages (`/portfolio/houselab`, `/portfolio/open-reel`) are not built.

Replace the sample entries in [`assets/data.js`](assets/data.js) with your own, and swap the
SVG placeholders in `public/images/placeholders/` for real images.

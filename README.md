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
| `NEXT_PUBLIC_COMPANY_SHORT_NAME`                      | company name   | Short name used in running copy               |
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

## Deploying to Netlify

The site deploys as a static export. [`netlify.toml`](netlify.toml) sets the build command
(`npm run export`), the publish directory (`out`) and Node.js 22, and overrides the matching
settings in the Netlify UI. To deploy from your machine instead, run `npm run deploy`
(needs the Netlify CLI, linked to the site).

### Automatic production deploys

[`.github/workflows/deploy-production.yml`](.github/workflows/deploy-production.yml) lints,
builds and deploys to Netlify production on every push to `master` (every merged pull
request). It can also be started by hand from the repository's **Actions** tab.

Add two repository secrets (**Settings → Secrets and variables → Actions**):

| Secret               | Where to find it                                                 |
| -------------------- | ---------------------------------------------------------------- |
| `NETLIFY_AUTH_TOKEN` | Netlify → User settings → Applications → Personal access tokens  |
| `NETLIFY_SITE_ID`    | Netlify → Project configuration → General → Project details → ID |

The `NEXT_PUBLIC_*` settings above can be set as repository **variables** on the same page.

If the Netlify project is also linked to this repository, Netlify builds every push itself
as well. Turn that off (**Project configuration → Build & deploy → Continuous deployment →
Stop builds**) so each merge deploys once, from GitHub Actions.

If an older setup is still attached to the site, remove it in the Netlify UI: under
**Site configuration → Build & deploy**, uninstall any old "Next.js" / `@netlify/plugin-nextjs`
plugin and clear a fixed Node.js version below 20.

To build with the demo content, set `NEXT_PUBLIC_DEMO_CONTENT=true` in `netlify.toml` or in the
site's environment variables.

const DEMO_CONTENT = process.env.NEXT_PUBLIC_DEMO_CONTENT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // `next export` was removed in Next.js 14; `npm run export` sets NEXT_OUTPUT=export
  // so `next build` writes the static site to ./out (used by `npm run deploy`).
  ...(process.env.NEXT_OUTPUT === 'export' && { output: 'export' }),
  // Always inline the demo flag at build time (even when unset) so server and client
  // agree and demo-only content is dropped from the bundles when it is off.
  env: { NEXT_PUBLIC_DEMO_CONTENT: DEMO_CONTENT ? 'true' : 'false' },
  // Client case studies copied from the reference site live in `*.demo.jsx` pages,
  // which are only routed (and built) when demo content is on.
  pageExtensions: DEMO_CONTENT ? ['js', 'demo.jsx'] : ['js'],
};

export default nextConfig;

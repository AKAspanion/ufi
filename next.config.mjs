/** @type {import('next').NextConfig} */
const nextConfig = {
  // `next export` was removed in Next.js 14; `npm run export` sets NEXT_OUTPUT=export
  // so `next build` writes the static site to ./out (used by `npm run deploy`).
  ...(process.env.NEXT_OUTPUT === 'export' && { output: 'export' }),
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static HTML into ./out, which Cloudflare Pages serves
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;

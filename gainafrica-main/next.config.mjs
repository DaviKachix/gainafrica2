/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ← enable App Router
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

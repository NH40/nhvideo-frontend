/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.SERVER_URL}/uploads/:path*`
      }
    ]
  }
}

export default nextConfig

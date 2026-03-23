/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.agentplus.store" }],
        destination: "https://agentplus.store",
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'v0-agent-hero-section-one-pi.vercel.app',
          },
        ],
        destination: 'https://agentplus.store/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

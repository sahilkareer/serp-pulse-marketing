import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Allow Sanity.io management console to embed the Studio
        source: '/studio/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://sanity.io https://*.sanity.io",
          },
        ],
      },
    ]
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: 'default',
    domains: ['api.education.local'],
    unoptimized: true,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.education.local',
        port: '8888',
        pathname: '/wp-content/**',
      },
    ],
  },
  env: {
    WORDPRESS_API_URL:'http://api.education.local:8888/',
    EMAIL_USER: "",
    EMAIL_PASS: "",
    EMAIL_TO: "",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Custom build directory
  distDir: "disk",

  // Performance optimizations
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable SWC minification
  swcMinify: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Compress responses
  compress: true,

  // Optimize fonts
  optimizeFonts: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "motion",
    ],
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "kbdfans.com" },
      { protocol: "https", hostname: "omnitype.com" },
      { protocol: "https", hostname: "mechaland.id" },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);

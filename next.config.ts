import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short spellings people might type for the release pages
  async redirects() {
    const pages: Record<string, string[]> = {
      '/that-one-girl': ['/thatonegirl', '/that1girl', '/tog'],
      '/mama-ay': ['/mamaay', '/mama'],
    };
    return Object.entries(pages).flatMap(([destination, sources]) =>
      sources.map((source) => ({ source, destination, permanent: true })),
    );
  },
};

export default nextConfig;

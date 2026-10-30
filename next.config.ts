import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short spellings people might type for the release page
  async redirects() {
    return ['/thatonegirl', '/that1girl', '/tog'].map((source) => ({
      source,
      destination: '/that-one-girl',
      permanent: true,
    }));
  },
};

export default nextConfig;

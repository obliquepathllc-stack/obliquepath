import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.obliquepath.dev" }],
        destination: "https://obliquepath.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

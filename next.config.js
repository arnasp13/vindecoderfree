/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/ai",
        destination:
          "https://chromewebstore.google.com/detail/vin-decoder-instant-vehic/ckghkkfgljadklgemfelfckaiimbnjki",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

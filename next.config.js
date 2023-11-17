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
        source: "/extension",
        destination:
          "https://chromewebstore.google.com/detail/vin-decoder-instant-vehic/ckghkkfgljadklgemfelfckaiimbnjki",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "https://chat.openai.com/g/g-iuxMxTLtW-vin-decoder",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

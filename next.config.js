/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: "http://localhost:8080"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.data.gov.sg",
        port: ""
      }
    ]
  }
};

module.exports = nextConfig;

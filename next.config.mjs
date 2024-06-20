/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },

  env: {
    CONTENTFUL_SPACE_ID: "77v1r8znr794",
    CONTENTFUL_ACCESS_TOKEN: "Vcx4c7va98luRq0ZXU5ZIncjd0FSEhEo1watBRwbwuw",
  },
};

export default nextConfig;

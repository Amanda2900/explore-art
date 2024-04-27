/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.artic.edu',
        port: '',
        pathname: '/iiif/2/**',
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: { 'background': "url('/public/Art_Institute_of_Chicago_logo.svg')" }
    },
  },
};

export default nextConfig;

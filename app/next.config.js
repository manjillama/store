/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'yatri-store.s3.ap-south-1.amazonaws.com',
      's3.ap-south-1.amazonaws.com',
    ],
  },
};

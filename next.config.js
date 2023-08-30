/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PWD: process.env.SMTP_PWD,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  },
};

module.exports = nextConfig;
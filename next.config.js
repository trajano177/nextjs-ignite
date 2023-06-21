/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com'
    ]
  },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  
}

module.exports = nextConfig

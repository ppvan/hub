import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            // pathname: "/ppvan"
        }
    ],
  },
  reactStrictMode: true,
  // Optionally, add any other Next.js config below
  output: "export",
  distDir: "dist"
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
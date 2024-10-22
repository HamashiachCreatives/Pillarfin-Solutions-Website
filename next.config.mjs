/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // This will ignore ESLint errors during builds
    },
    output:'export'
  };
  
  export default nextConfig;
  

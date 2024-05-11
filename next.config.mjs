/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['97.74.80.254'], // Add your localhost domain here
    },
    env: {
      customTo: process.env.SECRET_API_KEY,  
      customUR: process.env.SECRET_API_URL,  
      customFi: process.env.SECRET_APP_FIE,
    },
  };
  
  export default nextConfig;
  
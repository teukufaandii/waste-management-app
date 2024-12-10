/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DATABASE_URL: process.env.DATABASE_URL,
        NEXT_PUBLIC_WEB3AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
        NEXT_PUBLIC_WEB3AUTH_CLIENT_SECRET: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_SECRET,
    },
    
};

export default nextConfig;

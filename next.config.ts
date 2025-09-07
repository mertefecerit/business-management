import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL('https://avatars.githubusercontent.com/u/**'),
            new URL('https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/**/**/**.jpg'),
        ],
    },
    experimental: {
        optimizePackageImports: ["@phosphor-icons/react"],
    }
};

export default nextConfig;

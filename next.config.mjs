/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    basePath: process.env.BASE_PATH || "",
    assetPrefix: process.env.BASE_PATH || "",
};

export default nextConfig;
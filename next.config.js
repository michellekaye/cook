/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
		experimental: {
		images: {
			unoptimized: true,
			loader: "default",
    	domains: ["localhost"],
		}
	}
}

module.exports = nextConfig;
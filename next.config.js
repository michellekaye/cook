/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
	experimental: {
		images: {
			unoptimized: true,
			loader: "default",
    	domains: ["localhost"],
		}
	}
}
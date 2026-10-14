/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Project cards use simple SVG placeholders until you add real screenshots.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

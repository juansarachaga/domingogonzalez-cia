// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // clave para next/image en export estático
  trailingSlash: true,           // recomendado para hosting estático
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    ...nextConfig,
    i18n: {
        locales: ['pt-BR'],
        defaultLocale: 'pt-BR',
    }
}

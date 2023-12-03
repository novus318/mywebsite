// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add a file loader for PDFs
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    });

    return config;
  },
}

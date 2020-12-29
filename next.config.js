module.exports = {
  pageExtensions: ['jsx', 'js'],
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.md$/,
      use: ['raw-loader'],
    });

    return config;
  },
};

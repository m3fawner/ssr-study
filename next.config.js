const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const path = require('path');

module.exports = withPWA(withBundleAnalyzer({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  pageExtensions: ['jsx', 'js'],
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack(config, { isServer, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.md$/,
      use: ['raw-loader'],
    });
    if (!isServer) {
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(/react-markdown/, path.join(__dirname, 'empty.jsx')));
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(/remark-gfm/, path.join(__dirname, 'empty.jsx')));
    }

    return config;
  },
}));

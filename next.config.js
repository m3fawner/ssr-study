const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const path = require('path');

module.exports = withPWA(withBundleAnalyzer({
  swcMinify: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
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
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(/sso\.jsx/, path.join(__dirname, 'empty.tsx')));
      config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /\.md$/ }));
    }

    return config;
  },
}));

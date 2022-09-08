const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "checkout",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            checkout:
              "checkout@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            // pages
            "./pages/checkout/index": "./pages/checkout/index.js",
            "./pages/checkout/products/[...slug]":
              "./pages/checkout/products/[...slug].js",
            "./pages/checkout/test-webpack-png":
              "./pages/checkout/test-webpack-png.js",
            "./pages/checkout/test-webpack-svg":
              "./pages/checkout/test-webpack-svg.js",
            "./pages/checkout/exposed-pages":
              "./pages/checkout/exposed-pages.js",
            // components
            "./useCustomRemoteHook": "./components/useCustomRemoteHook.js",
            "./WebpackSvg": "./components/WebpackSvg.js",
            "./WebpackPng": "./components/WebpackPng.js",
            // utilities
            "./pages/_menu": "./pages/_menu.js",
            "./pages-map": "./pages-map.js",
          },
          extraOptions: {
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
          },
        })
      );
    }
    return config;
  },
};

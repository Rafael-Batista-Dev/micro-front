const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js",
            shop: "shop@http://localhost:3001/_next/static/chunks/remoteEntry.js",
            checkout:
              "checkout@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./NavBar": "./components/NavBar.js",
            "./Footer": "./components/Footer.js",
          },
          shared: {},
          extraOptions: {
            exposePages: true,
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
          },
        })
      );
    }

    return config;
  },
};

const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    deviceSizes: [640, 1080, 1440]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      // type: "asset",
      use: ["@svgr/webpack"],
    });
    return config;
  },
  optimizeFonts: false,
  staticPageGenerationTimeout: 300,
};

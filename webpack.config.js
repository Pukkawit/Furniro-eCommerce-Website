// webpack.config.js
export const module = {
  rules: [
    // Other rules...
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
  ],
};

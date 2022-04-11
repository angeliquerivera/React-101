module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./bundle.js",
  },
  mode: "development",
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
    ],
  },
};

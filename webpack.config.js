module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./bundle.js",
  },
  context: __dirname,
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};

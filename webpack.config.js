const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/icon"), to: "icon" },
      ],
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    fallback: {
      util: false,
      path: false,
      crypto: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      assert: false,
      url: false,
      vm: false,
      querystring: false,
      os: false,
      fs: false,
      esbuild: false,
      module: false,
      buffer: false,
      constants: false,
    },
  },
};

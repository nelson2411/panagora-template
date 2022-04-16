const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_, argv) => {
  const isDev = argv.mode === "development";

  const plugins = [
    new HtmlWebpackPlugin({
      title: "Panagora code-test",
      template: "./src/index.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
      inject: false,
    }),
  ];

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[chunkhash].css",
      }),

      new CopyPlugin({
        patterns: [
          { from: "./src/images", to: "./images" },
          { from: "./src/data", to: "./data" },
          { from: "./src/static", to: "./static" },
        ],
      })
    );
  }

  return {
    plugins,
    mode: argv.mode,
    entry: {
      index: "./src/index.js",
      product: "./src/product.js",
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].bundle.js",
      chunkFilename: "[id].[chunkhash].js",
    },
    devServer: {
      contentBase: path.join(__dirname, "src"),
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.svg$/,
          type: "asset/resource",
        },
      ],
    },
  };
};

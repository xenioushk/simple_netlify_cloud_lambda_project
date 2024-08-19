const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const configuration = {
  port: 3000, // this is browserSync Port
}

const PluginSettings = [
  new Dotenv(), // Load environment variables from .env file
]

PluginSettings.push(new MiniCssExtractPlugin({ filename: "styles/styles.css" }))

const config = {
  externals: {},
  entry: path.resolve(__dirname, "src/App.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/scripts.js",
    clean: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: PluginSettings,
}

module.exports = config

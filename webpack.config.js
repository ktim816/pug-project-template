import ESLintWebpackPlugin from "eslint-webpack-plugin";
import path from "path";

const isDebug = process.env.NODE_ENV !== "production";

/** @type {import('webpack').Configuration} */
export default () => ({
  entry: {
    app: path.resolve("./app/pages/index"),
  },
  output: {
    publicPath: "./assets/scripts/",
    filename: "[name].min.js",
    path: path.resolve("./dist/assets/scripts/"),
  },
  watch: isDebug,
  stats: "errors-only",
  mode: isDebug ? "development" : "production",
  plugins: [new ESLintWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
});

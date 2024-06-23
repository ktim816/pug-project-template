import ESLintWebpackPlugin from "eslint-webpack-plugin";
import path from "path";

const isDebug = process.env.NODE_ENV !== "production";

const devPlugins = [new ESLintWebpackPlugin()];
const plugins = [];

/** @type {import('webpack').Configuration} */
export default () => ({
  entry: {
    app: path.resolve("./app/pages/index"),
    form: path.resolve("./app/pages/form"),
  },
  output: {
    filename: "[name].min.js",
    publicPath: "./assets/scripts/",
    path: path.resolve("./dist/assets/scripts/"),
  },
  watch: isDebug,
  stats: "errors-only",
  mode: isDebug ? "development" : "production",
  plugins: isDebug ? devPlugins.concat(plugins) : plugins,
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

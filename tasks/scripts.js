import webpack from "webpack";
import {onError} from "gulp-notify";
import _webpackConfig from "../webpack.config.js";

const scriptsErrorHandler = onError({
  title: "Error in scripts task",
  message: "Error: <%= message %>",
});

export default (watch = false) =>
  callback => {
    const webpackConfig = _webpackConfig(watch);

    return webpack(webpackConfig, (error, stats) => {
      const jsonStats = stats.toJson();

      if (jsonStats.errors.length) {
        jsonStats.errors.forEach(message => {
          console.error(message);
          scriptsErrorHandler(message);
        });
      }

      if (watch === false) {
        callback();
      }
    });
  };

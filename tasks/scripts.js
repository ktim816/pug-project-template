import errorHandler from "gulp-plumber-error-handler";
import webpack from "webpack";
import _webpackConfig from "../webpack.config.js";

const scriptsErrorHandler = errorHandler("Error in 'scripts' task");

export default (watch = false) =>
  callback => {
    const webpackConfig = _webpackConfig(watch);

    return webpack(webpackConfig, (error, stats) => {
      const jsonStats = stats.toJson();

      if (jsonStats.errors.length) {
        jsonStats.errors.forEach(message => {
          console.error(message);
          scriptsErrorHandler.call({emit() {}}, {message});
        });
      }

      if (watch === false) {
        callback();
      }
    });
  };

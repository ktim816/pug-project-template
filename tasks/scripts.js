import webpack from "webpack";
import notify from "gulp-notify";
import _webpackConfig from "../webpack.config.js";

export default (watch = false) =>
  callback => {
    const webpackConfig = _webpackConfig(watch);

    return webpack(webpackConfig, (error, stats) => {
      const jsonStats = stats.toJson();

      if (jsonStats.errors.length) {
        jsonStats.errors.forEach(message => {
          notify({
            message,
            title: "Error in scripts task",
          });
        });
      }

      if (watch === false) {
        callback();
      }
    });
  };

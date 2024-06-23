import gulp from "gulp";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import svgmin from "gulp-svgmin";
import svgSymbols from "gulp-svg-symbols";
import {onError} from "gulp-notify";

export default () => {
  return gulp
    .src("app/static/icons/**/*.svg")
    .pipe(
      plumber({
        errorHandler: onError({
          title: "Error in icons task",
          message: "Error: <%= error.message %>",
        }),
      }),
    )
    .pipe(
      svgSymbols({
        title: false,
        id: "icon_%f",
        class: "%f",
        templates: ["default-svg"],
      }),
    )
    .pipe(
      svgmin({
        multipass: true,
        full: true,
        plugins: [
          "removeUselessStrokeAndFill",
          "cleanupAttrs",
          "removeMetadata",
          "removeTitle",
        ],
      }),
    )
    .pipe(rename("icon.svg"))
    .pipe(gulp.dest("dist/assets/images/"));
};

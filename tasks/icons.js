import gulp from "gulp";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import svgSymbols from "gulp-svg-symbols";
import imagemin, {svgo} from "gulp-imagemin";
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
      imagemin([
        svgo({
          plugins: [
            {optimizationLevel: 3},
            {progessive: true},
            {interlaced: true},
            {removeViewBox: false},
            {removeUselessStrokeAndFill: true},
            {cleanupIDs: false},
            {cleanupAttrs: true},
            {removeMetadata: true},
            {removeTitle: true},
            {removeAttrs: {attrs: "(fill|stroke|data-name)"}},
          ],
        }),
      ]),
    )
    .pipe(rename("icon.svg"))
    .pipe(gulp.dest("dist/assets/images/"));
};

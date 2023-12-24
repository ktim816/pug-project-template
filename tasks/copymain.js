import gulp from "gulp";
import fileinclude from "gulp-file-include";
import {onError} from "gulp-notify";
import plumber from "gulp-plumber";

export default () => {
  return gulp
    .src("app/scripts/main.js")
    .pipe(
      plumber({
        errorHandler: onError({
          title: "Error in copymain task",
          message: "Error: <%= error.message %>",
        }),
      }),
    )
    .pipe(fileinclude("@@"))
    .pipe(gulp.dest("dist/assets/scripts"));
};

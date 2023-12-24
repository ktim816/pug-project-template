import gulp from "gulp";
import plumber from "gulp-plumber";
import changed from "gulp-changed";
import {onError} from "gulp-notify";

export default () => {
  return gulp
    .src("app/static/videos/**/*")
    .pipe(
      plumber({
        errorHandler: onError({
          title: "Error in videos task",
          message: "Error: <%= error.message %>",
        }),
      }),
    )
    .pipe(changed("dist/assets/videos"))
    .pipe(gulp.dest("dist/assets/videos"));
};

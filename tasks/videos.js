import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import changed from "gulp-changed";

export default () => {
  return gulp
    .src("app/static/videos/**/*")
    .pipe(plumber({errorHandler: errorHandler("Error in videos task")}))
    .pipe(changed("dist/assets/videos"))
    .pipe(gulp.dest("dist/assets/videos"));
};

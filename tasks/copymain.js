import gulp from "gulp";
import fileinclude from "gulp-file-include";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";

export default () => {
  return gulp
    .src("app/scripts/main.js")
    .pipe(plumber({errorHandler: errorHandler("Error in copymain task")}))
    .pipe(fileinclude("@@"))
    .pipe(gulp.dest("dist/assets/scripts"));
};

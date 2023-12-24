import gulp from "gulp";
import newer from "gulp-newer";

const miscPath = ["app/static/misc/**/*", "app/static/misc/.*"];

export default () => {
  return gulp
    .src(miscPath, {since: gulp.lastRun("copy")})
    .pipe(newer("dist"))
    .pipe(gulp.dest("dist"));
};

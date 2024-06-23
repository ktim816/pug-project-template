import gulp from "gulp";
import plumber from "gulp-plumber";
import {onError} from "gulp-notify";
import imagemin, {svgo} from "gulp-imagemin";
import imageminWebp from "imagemin-webp";
import extReplace from "gulp-ext-replace";
import changed from "gulp-changed";

export const images = () => {
  return gulp
    .src("app/static/images/**/*")
    .pipe(
      plumber({
        errorHandler: onError({
          title: "Error in images task",
          message: "Error: <%= error.message %>",
        }),
      }),
    )
    .pipe(changed("dist/assets/images"))
    .pipe(imagemin([svgo()], {verbose: true}))
    .pipe(gulp.dest("dist/assets/images"));
};

export const webp = () => {
  return gulp
    .src(`app/static/images/**/*.{jpg,png}`)
    .pipe(
      plumber({
        errorHandler: onError({
          title: "Error in webp task",
          message: "Error: <%= error.message %>",
        }),
      }),
    )
    .pipe(imagemin([imageminWebp()]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("dist/assets/images"));
};

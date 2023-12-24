import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import imagemin, {svgo} from "gulp-imagemin";
import imageminWebp from "imagemin-webp";
import extReplace from "gulp-ext-replace";
import changed from "gulp-changed";

export const images = () => {
  return gulp
    .src("app/static/images/**/*")
    .pipe(plumber({errorHandler: errorHandler("Error in images task")}))
    .pipe(changed("dist/assets/images"))
    .pipe(
      imagemin(
        [
          svgo({
            plugins: [
              {
                removeViewBox: false,
              },
            ],
          }),
        ],
        {verbose: true},
      ),
    )
    .pipe(gulp.dest("dist/assets/images"));
};

export const webp = () => {
  return gulp
    .src(`app/static/images/**/*.{jpg,png}`)
    .pipe(plumber({errorHandler: "Error in webp task"}))
    .pipe(imagemin([imageminWebp()]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("dist/assets/images"));
};

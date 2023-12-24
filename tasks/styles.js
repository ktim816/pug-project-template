import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import gulpIf from "gulp-if";
import postcss from "gulp-postcss";
import gulpSass from "gulp-sass";
import cssnano from "cssnano";
import * as dartSass from "sass";
import sourcemaps from "gulp-sourcemaps";
import bulkSass from "gulp-sass-bulk-import";
import rename from "gulp-rename";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import discardComents from "postcss-discard-comments";
import tailwindcss from "tailwindcss";
import tailwindConfig from "../tailwind.config.js";

const isDebug = process.env.NODE_ENV !== "production";
const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src("app/styles/*.scss")
    .pipe(plumber({errorHandler: errorHandler("Error in styles task")}))
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(
      postcss([
        tailwindcss(tailwindConfig),
        autoprefixer({grid: "autoplace"}),
        postcssImport(),
        discardComents(),
        cssnano({
          preset: "default",
        }),
      ]),
    )
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(
      rename({
        suffix: ".min",
      }),
    )
    .pipe(gulp.dest("dist/assets/styles"));
};

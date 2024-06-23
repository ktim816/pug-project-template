import gulp from "gulp";
import plumber from "gulp-plumber";
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
import postcssSortMediaQueries from "postcss-sort-media-queries";
import discardComments from "postcss-discard-comments";
import tailwindcss from "tailwindcss";
import tailwindConfig from "../tailwind.config.js";
import {onError} from "gulp-notify";

const isDebug = process.env.NODE_ENV !== "production";
const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src("app/styles/*.scss")
    .pipe(
      plumber({
        errorHandler: onError({
          title: "Error in styles task",
          message: "Error: <%= error.message %>",
        }),
      }),
    )
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(
      postcss([
        postcssImport(),
        tailwindcss(tailwindConfig),
        postcssSortMediaQueries({
          sort: "mobile-first",
        }),
        autoprefixer(),
        discardComments(),
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

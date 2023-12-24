import gulp from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import prettify from "gulp-jsbeautifier";
import filter from "gulp-filter";
import rename from "gulp-rename";
import getData from "jade-get-data";

export default () => {
  return gulp
    .src("app/**/*.pug")
    .pipe(plumber({errorHandler: errorHandler("Error in templates task")}))
    .pipe(filter(file => /app[\\\/]pages/.test(file.path)))
    .pipe(pug({data: {getData: getData("app/data")}}))
    .pipe(
      prettify({
        braceStyle: "expand",
        indentWithTabs: true,
        indentInnerHtml: true,
        preserveNewlines: true,
        endWithNewline: true,
        wrapLineLength: 120,
        maxPreserveNewlines: 50,
        wrapAttributesIndentSize: 1,
        unformatted: ["use"],
      }),
    )
    .pipe(rename({dirname: "."}))
    .pipe(gulp.dest("dist"));
};

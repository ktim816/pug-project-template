import gulp from "gulp";
import clean from "./tasks/clean.js";
import copy from "./tasks/copy.js";
import icons from "./tasks/icons.js";
import server from "./tasks/server.js";
import {images, webp} from "./tasks/images.js";
import videos from "./tasks/videos.js";
import scripts from "./tasks/scripts.js";
import styles from "./tasks/styles.js";
import templates from "./tasks/templates.js";
import copymain from "./tasks/copymain.js";
import watch from "./tasks/watch.js";

gulp.task("scripts", scripts(false));
gulp.task("scripts:watch", scripts(true));
gulp.task("clean", clean);
gulp.task("copy", copy);
gulp.task("images", images);
gulp.task("webp", webp);
gulp.task("videos", videos);
gulp.task("icons", icons);
gulp.task("styles", styles);
gulp.task("templates", templates);
gulp.task("copymain", copymain);
gulp.task("server", server);
gulp.task("watch", watch);

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel(
      "styles",
      "scripts",
      "copymain",
      "images",
      "videos",
      "icons",
      "templates",
      "copy",
    ),
    "webp",
  ),
);

gulp.task(
  "default",
  gulp.series("build", gulp.parallel("watch", "scripts:watch", "server")),
);

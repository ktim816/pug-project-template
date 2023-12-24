import {create} from "browser-sync";

const browserSync = create();

export default () => {
  browserSync.init({
    open: true,
    reloadOnRestart: true,
    reloadDebounce: 100,
    port: 3000,
    snippetOptions: {
      rules: {
        match: /<\/body>/i,
      },
    },
    server: {
      baseDir: ["./dist"],
    },
    directory: false,
  });

  browserSync.watch("dist/**/*").on("change", browserSync.reload);
};

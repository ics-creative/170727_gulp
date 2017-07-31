/**
 * Sassのコンパイルタスクのサンプルファイルです。
 */
// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");

// style.scssをタスクを作成する
gulp.task("default", function () {
  gulp.src("css/style.scss")  // style.scssファイルを取得
    .pipe(sass({
      outputStyle: "expanded"
    }))  // Sassのコンパイルを実行
    .pipe(gulp.dest("css"));  // cssフォルダー以下に保存
});

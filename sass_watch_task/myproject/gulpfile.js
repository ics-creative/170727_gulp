/**
 * Sassのコンパイルタスクのサンプルファイルです。
 */
// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function () {
  gulp.watch("css/style.scss", function () {  // style.scssファイルを監視
    // style.scssの更新があったら、style.scssをコンパイルする
    gulp.src("css/style.scss")  // style.scssファイルを取得
      .pipe(sass({
        outputStyle: "expanded"
      }))  // Sassのコンパイルを実行
      .pipe(gulp.dest("css"));  // cssフォルダー以下に保存
  });
});
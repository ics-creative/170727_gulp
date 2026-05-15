// gulpプラグインの読み込み
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));

function compileStyles() {
  // style.scssファイルを取得
  return (
    src("css/style.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          style: "expanded",
        })
        // Sassのコンパイルエラーを表示
        // (これがないと自動的に止まってしまう)
        .on("error", sass.logError)
      )
      // cssフォルダー以下に保存
      .pipe(dest("css"))
  );
}

// style.scssの監視タスクを作成する
function defaultTask() {
  // ★ style.scssファイルを監視
  return watch("css/style.scss", compileStyles);
}

exports.default = defaultTask;

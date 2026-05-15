// gulpプラグインの読み込み
const { src, dest } = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));

// style.scssをタスクを作成する
function defaultTask() {
  // style.scssファイルを取得
  return (
    src("css/style.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          style: "expanded"
        })
      )
      // cssフォルダー以下に保存
      .pipe(dest("css"))
  );
}

exports.default = defaultTask;

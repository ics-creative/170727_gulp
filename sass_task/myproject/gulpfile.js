// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

// style.scssをタスクを作成する
gulp.task('default',  () => {
  // style.scssファイルを取得
  return gulp.src('css/style.scss')
  // Sassのコンパイルを実行
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    // cssフォルダー以下に保存
    .pipe(gulp.dest('css'));
});

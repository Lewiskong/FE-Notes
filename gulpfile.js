var gulp = require('gulp')
var sass = require('gulp-sass')

/**
 * 要求工作
 * 1. 自动编译less
 *
*/

gulp.task('default',
  // ['html_transfer','less_compile','file_uglify','img_compress'],
  function () {
    gulp.run('less_compile')
    gulp.watch('css/**/*.scss', ['less_compile'])
  })

gulp.task('less_compile', function () {
  gulp.src('css/**/*.scss')
    .pipe(sass())
    .on('error', function (err) {
      console.log('Less Error!', err.message)
      this.end()
    })
    .pipe(gulp.dest("css/"))
})

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcss2 = require('postcss');
const rucksack = require('rucksack-css');
const cssnext = require('postcss-cssnext');
const cssnested = require('postcss-nested');
const mixins = require('postcss-mixins');
const lost = require('lost');
const atImport = require('postcss-import');
const csswring = require('csswring');
const mqpacker = require('css-mqpacker');
const browserSync = require('browser-sync').create();

// ✅ Servidor de desarrollo
function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

// ✅ Procesar CSS
function css() {
  const processors = [
    postcss2(),
    atImport(),
    mixins(),
    cssnext({
      browsers: ['> 5%', 'ie 8']
    }),
    cssnested(),
    lost(),
    rucksack(),
    mqpacker(),
    csswring()
  ];

  return gulp.src('./src/css/estilos.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./compilados'))
    .pipe(browserSync.stream());
}

// ✅ Vigilar cambios
function watchFiles() {
  gulp.watch('./src/css/estilos.css', css);
  gulp.watch('./src/css/**/*.css', css);
  gulp.watch('./src/css/fonts.css', css);
  gulp.watch('./dist/index.html').on('change', browserSync.reload);
}

// ✅ Definir tareas
const watch = gulp.series(serve, watchFiles);
const build = gulp.series(css);

// Tareas disponibles
exports.serve = serve;
exports.css = css;
exports.watch = watch;
exports.build = build;
exports.default = watch;

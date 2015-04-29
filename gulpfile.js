var gulp = require('gulp');
var through = require('through2');
var losass = require('./');

function changeExt(filePath) {
  var path = require('path');
  var ext = path.extname(filePath);
  return filePath.replace(ext, '.css');
}

function gulpLosass(opts) {
  return through.obj(function(file, enc, cb) {
    var css = losass(file.contents.toString(), opts);
    file.contents = new Buffer(css);
    file.path = changeExt(file.path);
    this.push(file);
    cb();
  })
}

gulp.task('lotus', function() {
  gulp.src('./test/style.lotus')
    .pipe(gulpLosass({
      imports: './test/**',
      base: './test/style.lotus'
    }))
    .pipe(gulp.dest('./_build'));
});

gulp.task('default', ['lotus'], function() {
  gulp.watch('./**/*.lotus', ['lotus']);
});

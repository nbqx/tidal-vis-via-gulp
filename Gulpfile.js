var gulp = require('gulp'),
    shell = require('gulp-shell'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

gulp.task('init',function(){
  browserSync.init(null,{
    open: false,
    server: {
      baseDir: './out',
      index: 'index.html'
    }
  });
});

gulp.task('reload',['runghc'],function(){
  return browserSync.reload();
});

gulp.task('runghc',function(done){
  gulp.src('./src/vis.hs',{read: false})
    .pipe(shell('runghc <%= file.path %>'))
    .on('error',function(err){
      done(err);
    })
    .on('end',function(){
      done();
    });
});

gulp.task('watch',function(){
  return gulp.watch('src/vis.hs',['reload']);
});

gulp.task('default',['init','watch']);

/**
 * require
 */
const gulp = require('gulp');
const rimraf = require('rimraf');
const runSequence = require('run-sequence');
runSequence.use(gulp);
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

/**
 * Any context
 */
const outputFile = 'main.js';
const distributionDirName = 'dist';

/**
 * Tasks
 */
gulp.task('build', (callback) => {
    runSequence(
        'clean',
        'build:ts',
        callback
    )
});

gulp.task('build:ts', () => {
    browserify({
        entries: './src/app.ts'
    })
        .plugin('tsify')
        .transform('babelify')
        .plugin('gasify')
        .bundle()
        .pipe(source(outputFile))
        .pipe(gulp.dest(distributionDirName));

});

gulp.task('clean', (callback) => {
    rimraf('./' + distributionDirName + '/*', callback);
});

gulp.task('default', ['build']);

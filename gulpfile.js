const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build (){
    return src("style/**/*.scss")
    .pipe(sass()).pipe(dest("css"));
}

function watchBuild() {
    watch(["style/**/*.scss"], build);
}

exports.default = series(build, watchBuild)
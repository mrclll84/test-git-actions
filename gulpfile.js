const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const plumber = require("gulp-plumber")
const postscss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const server = require("browser-sync").create()
const cleancss = require("gulp-cleancss")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const style = () => {
    return gulp.src("src/scss/style.scss")
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(postscss([
            autoprefixer()
        ]))
        .pipe(cleancss())
        .pipe(gulp.dest("src/css"))
        .pipe(server.stream())
}
const scripts = () => {
    return gulp.src(["src/js/index.js","src/js/settings.js"])
        .pipe(concat("bandle.js"))
        .pipe(uglify())
        .pipe(gulp.dest("src/js"))
        .pipe(server.stream())
}
const serv = () => {
    server.init({
        server: "./src",
        notify: false,
        open: true,
        cors: true,
        ui: false
    })
    gulp.watch("src/scss/**/*.scss", style)
    gulp.watch("src/js/index.js", scripts)
    gulp.watch("src/js/settings.js", scripts)
    gulp.watch("src/*.html").on("change", server.reload)
}
exports.style = style
exports.scripts = scripts
exports.serv = serv
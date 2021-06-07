const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");

gulp.task("exportWebP", function() {
  let src = "photos/**/*.png"; // Where your PNGs are coming from.
  let dest = "photos/WebP"; // Where your WebPs are going.

  return gulp.src(src)
    .pipe(imagemin([
      webp({
        quality: 75
      })
    ]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(dest));
});

// gulp.task("exportWebP", function() {
//   let src = "photos/**/*.jpg"; // Where your PNGs are coming from.
//   let dest = "photos/WebP"; // Where your WebPs are going.

//   return gulp.src(src)
//     .pipe(imagemin([
//       webp({
//         quality: 75
//       })
//     ]))
//     .pipe(extReplace(".webp"))
//     .pipe(gulp.dest(dest));
// });
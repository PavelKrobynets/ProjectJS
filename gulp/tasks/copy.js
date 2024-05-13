export const copy = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};

export const libsCopy = () => {
  return app.gulp
    .src(app.path.src.libs)
    .pipe(app.plugins.replace(/libs\//g, "css/"))
    .pipe(app.gulp.dest(app.path.build.css));
};

export const icons = () => {
  return app.gulp
    .src(app.path.src.icons)
    .pipe(app.gulp.dest(app.path.build.icons));
};

export const json = () => {
	return app.gulp
	.src(app.path.src.json)
	.pipe(app.gulp.dest(app.path.build.js))
}
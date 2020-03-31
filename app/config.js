
'use strict'


// Export

module.exports = {

	app: {
		name: 'Лазурная',
	},

	use: {
		templates: '.html',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
		imagemin: [ 'png', 'jpg' ],
		sourcemaps: [ 'js', 'css' ],
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		mainLevel: 'develop',
		babel: true
	},

	dist: {
		styles: 'styles',
		fonts: 'styles/fonts',
		img: 'styles/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},
	levels: {
		common: 1, 
		develop: 2,
	  },

	HTMLBeautify: {
		preserve_newlines: false,
	},

}


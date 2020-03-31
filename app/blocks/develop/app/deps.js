
'use strict'

module.exports = {

	nodes: [],

	modules: [
		{
			from: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/', // jQuery from CDN
			inject: [ 'jquery.min.js' ], // this file will be used on the page separately
		},
		{
		from: 'node_modules/slick-carousel/slick', // get slick from node_modules
		inject: [ 'slick.min.js' ], // this file will be used on the page separately
		import: [ 'slick.css' ], // this file will be imported into the common bundle
		},
		{
			from: 'node_modules/js-datepicker/dist', // get slick from node_modules
			inject: [ 'datepicker.min.js' ], // this file will be used on the page separately
			import: [ 'datepicker.min.css' ], // this file will be imported into the common bundle
			},
		{
			import: 'normalize.css',
			import: 'icomoon/style.css'
		}
	],

}

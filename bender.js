/* jshint browser: false, node: true */

'use strict';

var config = {

	applications: {
		ckeditor: {
			path: '.',
			files: [
				'ckeditor.js'
			]
		}
	},

	framework: 'jasmine',
	startBrowser: 'firefox',
	plugins: [ 'benderjs-jasmine' ],
	tests: {
		'Plugins': {
			applications: [ 'ckeditor' ],
			basePath: 'tests/',
			paths: [
				'plugins/**',
				'!**/_*/**'
			]
		}
	}
	
	testTimeout: 10 * 1000
};

module.exports = config;

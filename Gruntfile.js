module.exports = function (grunt) {
	var SRC_DIR = 'src';
	var TEST_DIR = 'test';

	grunt.initConfig({
		jasmine: {
			dev: {
				//src: '',
				options: {
					polyfills: [],
					helpers: [],
					vendor: [
						SRC_DIR + '/index.js'
					],
					keepRunner: false,
					outfile: TEST_DIR + '/specs.html',
					specs: [TEST_DIR + '/test.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('test', ['jasmine']);
};
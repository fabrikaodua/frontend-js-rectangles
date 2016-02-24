module.exports = function (grunt) {
	var DOC_DIR = 'doc',
		SRC_DIR = 'src',
		TEST_DIR = 'test',
		BUILD_DIR = 'build';

	grunt.initConfig({
		watch: {
			sources: {
				files: [
					SRC_DIR + '/**/*.js',
					SRC_DIR + '/**/*.css',
					SRC_DIR + '/**/*.html',
					TEST_DIR + '/**/*.js',
					TEST_DIR + '/**/*.css',
					TEST_DIR + '/**/*.html'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		},
		jasmine: {
			dev: {
				//src: '',
				options: {
					polyfills: [],
					helpers: [],
                    vendor: [
						'src/index.js'
					],
					keepRunner: false,
					outfile: 'test/specs.html',
					specs: ['test/test.js']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('live', ['watch']);
	grunt.registerTask('test', ['jasmine']);
};
module.exports = function (grunt) {
	var TASKS_DIR = 'tasks',
		SRC_DIR = 'src',
		TEST_DIR = 'test',
		BUILD_DIR = 'build';

	grunt.initConfig({
		watch: {
			sources: {
				files: [
					SRC_DIR + '/**/*.*',
					TEST_DIR + '/**/*.*'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		},
		jshint: {
			dev: {
				options: {
					jshintrc: TASKS_DIR + '/.jshintrc'
				},
				src: [
					SRC_DIR + '/**/*.js'
				]
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
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('live', ['watch']);
	grunt.registerTask('test', ['jasmine']);
	grunt.registerTask('code', ['jshint:dev']);
};
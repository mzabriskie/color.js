/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        nodeunit: {
            all: ['test/*.js']
        },
        uglify: {
            dist: {
                files: {
                    'dist/color.min.js': ['dist/color.js']
                }
            }
        },
        browserify: {
            dist: {
				src: ['src/color.js'],
                dest: 'dist/color.js',
				options: {
					bundleOptions: {
						standalone: 'Color'
					}
				}
            }
        },
		watch: {
			test: {
				files: ['src/*.js', 'test/**/*.js'],
				tasks: ['test']
			}
		}
    });

    grunt.registerTask('test', ['jshint', 'nodeunit']);
    grunt.registerTask('default', ['test', 'publish']);
    grunt.registerTask('publish', ['browserify:dist', 'uglify:dist']);
};

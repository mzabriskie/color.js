/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/color.js']
        },
        nodeunit: {
            all: ['test/*.js']
        },
        uglify: {
            main: {
                files: {
                    'dist/color.min.js': ['src/color.js']
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {src: 'src/color.js', dest: 'dist/', expand: true, flatten: true}
                ]
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'nodeunit']);
    grunt.registerTask('default', ['test', 'publish']);
    grunt.registerTask('publish', ['uglify', 'copy:dist']);
};
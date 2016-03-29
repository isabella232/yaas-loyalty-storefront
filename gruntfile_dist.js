

    var path = require('path');

    module.exports = function (grunt) {

        var paths = {
            
        };

        paths['publicSource'] = './public';
        paths['webLibs'] = paths.publicSource + '/js/vendor';    




        grunt.initConfig({


            pkg: grunt.file.readJSON('package.json'),

            wiredep: {
 
                task: {

                    directory: paths.webLibs,

                    src: [
                        paths.publicSource + '/index.html'
                    ],

                    overrides: {

                        'jquery-ui': {
                            main: [
                                'jquery-ui.js',
                                'themes/base/jquery-ui.min.css'
                            ]
                        },

                        'algoliasearch': {

                            main: [
                                'dist/algoliasearch.angular.js'
                            ]
                        }
                    }
                }
            }
        });





        grunt.option('force', true);

        require('load-grunt-tasks')(grunt);
        
        grunt.registerTask('default', 'Hello', function() {
            grunt.log.writeln('Loyalty Store.').ok();            
        });

        grunt.registerTask('start', 'Start Server in cloud', function () {
            grunt.task.run( [ 'express:run' ] );
        });
    };
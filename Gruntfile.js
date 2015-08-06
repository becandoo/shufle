/*
 * Generated on 2015-08-06
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'shufle'
    },

    watch: {
        stylus: {
          files: 'src/assets/stylus/*.styl',
          tasks: [ 'stylus' ]
        },
        jade: {
          files: 'src/jade/*.jade',
          tasks: [ 'jade' ]
        },
        copy: {
          files: [ 'src/stylus/**' ],
          tasks: [ 'copy' ]
        }
    },

    copy: {
      stylus: {
        expand: true,
        cwd: 'src/stylus',
        src: '**',
        dest: '<%= config.dist %>/'
      }
    },

    stylus: {
      build: {
        options: {
          linenos: true,
          compress: false
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.styl' ],
          dest: 'src/stylesheets',
          ext: '.css'
        }]
      }
    },

    jade: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: [ 'jade/*.jade' ],
          dest: 'src/docs',
          ext: '.html'
        }]
      }
    },
    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml,css,styl}']

  });

  // grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');


  //define tasks

  grunt.registerTask('build', [
    'clean',
    'copy',
    'stylus'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};

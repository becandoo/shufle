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
      dist: 'docs'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        stylesheets: {
          files: 'src/assets/stylus/*.styl',
          tasks: [ 'stylesheets' ]
        },
        scripts: {
          files: 'src/assets/coffeescript/*.coffee',
          tasks: [ 'scripts' ]
        },
        jade: {
          files: 'src/**/*.jade',
          tasks: [ 'jade' ]
        },
        copy: {
          files: [ 'src/assets/**', '!src/**/*.styl', '!src/**/*.coffee', '!src/**/*.jade' ],
          tasks: [ 'copy' ]
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/partials/*.hbs',
          plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap'],
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/pages/*.hbs']
        }
      }
    },

    copy: {
      css: {
        expand: true,
        cwd: 'src/assets/stylesheets',
        src: '**',
        dest: '<%= config.dist %>/assets/css/'
      },
      js: {
        expand: true,
        cwd: 'src/assets/js',
        src: '**',
        dest: '<%= config.dist %>/assets/js'
      },
      stylus: {
        expand: true,
        cwd: 'src/assets/images',
        src: '**',
        dest: '<%= config.dist %>/assets/images/'
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
          dest: 'src/assets/stylesheets',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      build: {
        expand: true,
        cwd: 'docs',
        src: [ '**/*.css' ],
        dest: 'docs'
      }
    },

    coffee: {
      build: {
        expand: true,
        cwd: 'source',
        src: [ '**/*.coffee' ],
        dest: 'build',
        ext: '.js'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');


  //define tasks
  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.',
    [ 'coffee' ]
  );

  grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets.',
    [ 'stylus', 'autoprefixer' ]
  );



  grunt.registerTask('server',
   [ 'build', 'connect:livereload', 'watch' ]
  );


  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.',
    [ 'coffee' ]
  );


  grunt.registerTask('build', [
    'clean',
    'copy',
    'assemble',
    'stylesheets',
    'scripts'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};

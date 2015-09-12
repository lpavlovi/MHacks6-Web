module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['project/**/*.*', './project/*.*'],
        tasks: ['jshint']
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'project/*.js', 'project/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    karma: {
      options: {
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],

        files: [
          {
            pattern: 'project/scripts/**/*.js',
            included: false
          }, {
            pattern: 'test/*spec.js',
            included: false
          }, {
            pattern: 'bower_components/**/*.js',
            included: false
          }, {
            pattern: 'project/*.html',
            included: false
          },

          'test/test.config.js'
        ],

        exclude: [
          'project/scripts/main.js',
          'project/scripts/bootstrap.js',
          'Gruntfile.js'
        ]
      },
      dev: {
        autoWatch: true,
        browsers: ['PhantomJS']
      }
    },
    connect: {
      myserver: {
        options:{
          port: 3030,
          // keepalive: true,
          open: true,
          hostname: 'localhost',
          middleware: function (connect) {
            return [
              connect().use('/bower_components', connect.static('bower_components')),
              connect().use('/', connect.static('project'))
            ];
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('serve', ['watch']);
  grunt.registerTask('test', ['karma:dev']);
  grunt.registerTask('server', ['connect:myserver', 'watch']);
};

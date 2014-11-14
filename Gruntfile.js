/*global module:false*/
module.exports = function(grunt) {

  var style_tasks = ['sass', 'autoprefixer', 'uncss', 'cssmin'];

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    sass: {
      dev: {
        options: {
          lineNumbers: true,
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'css/scss',
          src: ['**/*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 version', 'ie 9'],
        map: true
      },
      dev: {
        src: ['css/**/*.css', '!css/**/*.min.css']
      }
    },
    uncss: {
       dist: {
          options: {
             ignore: [/js-.+/, '.added-at-runtime'],
             stylesheets: ['css/style.css']
          },
          files: {
             'css/tidy.css': ['index.html']
          }
       }
    },
    cssmin: {
      options: {
        banner: '<%= banner %>',
        keepSpecialComments: 0
      },
      prod: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
        interrupt: true
      },
      styles: {
        files: ['css/scss/**/*.scss'],
        tasks: style_tasks
      },
      configFiles: {
        files: ['Gruntfile.js', 'package.json'],
        tasks: style_tasks
      },
      html: {
        files: ['*.html'],
        tasks: ['uncss']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');

  // Default task.
  grunt.registerTask('default', style_tasks);

};

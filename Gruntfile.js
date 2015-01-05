/*global module:false*/
module.exports = function(grunt) {

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
          cwd: 'app/css/scss',
          src: ['**/*.scss'],
          dest: 'app/css',
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
        src: ['app/css/**/*.css', '!app/css/**/*.min.css']
      }
    },
    uncss: {
       prod: {
          options: {
             ignore: [/js-.+/, '.added-at-runtime', /:first-letter/],
             stylesheets: ['app/css/style.css']
          },
          files: {
             'app/css/tidy.css': ['index.html']
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
          cwd: 'app/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'app/css/',
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
        files: ['app/css/scss/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      configFiles: {
        files: ['Gruntfile.js', 'package.json'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      html: {
        files: ['app/*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');

  // Default task.
  grunt.registerTask('prod', ['uncss:prod', 'cssmin:prod']);
  grunt.registerTask('dev', ['sass:dev', 'autoprefixer:dev', 'watch']);

};

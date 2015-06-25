module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerRequirejs: {
      target: {
        rjsConfig: 'js/config.js'
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "js",
          mainConfigFile: "js/config.js",
          name: "main",
          out: "js/dist/dist-min.js",
          include: ['bower_components/almond/almond.js'],
          optimize: 'uglify2',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          keepBuildDir: true
        }
      },
      unmin: {
        options: {
          baseUrl: "js",
          mainConfigFile: "js/config.js",
          name: "main",
          out: "js/dist/dist.js",
          include: ['bower_components/almond/almond.js'],
          optimize: 'none',
          generateSourceMaps: false,
          keepBuildDir: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['bowerRequirejs', 'requirejs']);
};

module.exports = function(grunt) {
  grunt.initConfig({
    // running `grunt less` will compile once
    less: {
      development: {
        options: {
          paths: ["./css"],
          yuicompress: false,
        },
      files: {
        "./demo/css/styles.css": "./demo/less/styles.less"
      }
    }
  },
 autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6',
          'ie-8',
          'ie-9'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: './demo/css/styles.css'
      }
    },
  
  // running `grunt watch` will watch for changes
  watch: {
    files: "./demo/less/styles.less",
    tasks: ["less", "autoprefixer"]
  }
});
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
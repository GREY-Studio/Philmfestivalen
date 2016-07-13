

//Gruntfile setup
module.exports = function(grunt) {

  //Grunt initiation
  grunt.initConfig({

    //Grunt concat --> Combine JS files
    concat: {
      js: {
        src: ['public/components/javascripts/**/**/*.js'],
        dest: 'compiled/compiled.js',
      },
    },

    //Grunt watch --> Update concat on change
    watch: {
      socket: {
        files: ['public/components/javascripts/**/*.js'],
        tasks: ['concat:js'],
      },
    },

  });

  //Load Grunt concat task
  grunt.loadNpmTasks('grunt-contrib-concat');

  //Load Grunt watch task
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Register Grunt default tasks
  grunt.registerTask('default', ['concat', 'watch']);

};

module.exports = grunt => {
  grunt.initConfig({
    ts: {
      default: {
        tsconfig: './tsconfig.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.registerTask('default', ['ts']);
};
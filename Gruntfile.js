module.exports = function(grunt) {

  // grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-env');

  grunt.initConfig({
    env: {
      options: {
        //Shared Options Hash
      },
      prod: {
        FIREBASE_KEY:  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjQ1NTQ0MTE1OTcsInYiOjAsImlhdCI6MTM5ODczNzk5NywiZCI6eyJwcm9ncmFtIjoiVFJPTiJ9fQ.mHuiTNmHw5gWJIlfL_cxGsJCMRjygE9X9ulrX7P_uaQ',
        FIREBASE_ROOT: 'https://readie.firebaseio.com'
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '.',
          src: '**/*.litcoffee',
          dest: '.dist',
          ext: '.js'
        }]
      }
    }
  });

  grunt.registerTask('default', ['coffee:dist', 'env:prod' ]);
};
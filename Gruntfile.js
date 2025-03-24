module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        }
    })

    grunt.registerTask('olamundo', function() {
        const done = this.async();
        setTimeout(function(){
            console.log("Olá Mundo");
            done();
        }, 3000);
    })

    grunt.loadNpmTask('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
}
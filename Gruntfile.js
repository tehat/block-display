/**
 * Created by Thomas on 7/27/16.
 */
module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options:{
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src: 'client/assets/scripts/app.js',
                "dest": 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/assets/scripts/controllers/*.js',
                "dest": "server/public/assets/scripts/controllers/controller.min.js"
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules/angular/',
                src: [
                    'angular.min.js',
                    'angular.min.js.map'
                ],
                "dest": 'server/public/vendors/'
            },

            angularRoute: {
                expand: true,
                cwd: 'node_modules/angular-route/',
                src: [
                    "angular-route.min.js",
                    "angular-route.min.js.map"
                ],
                "dest": 'server/public/vendors/'

            },

            html: {
                expand: true,
                cwd: "client/assets/views/",
                src: "index.html",
                "dest": "server/public/assets/views/"
            },
            htmlRoutes: {
                expand: true,
                cwd: "client/assets/views/routes/",
                src: [
                    "home.html"
                ],
                "dest": "server/public/assets/views/routes/"
            },
            htmlTemplates: {
                expand: true,
                cwd: "client/assets/views/templates/",
                src: [
                    "header.html",
                    "footer.html"
                ],
                "dest": "server/public/assets/views/templates/"
            },
            styles: {
                expand: true,
                cwd: "client/assets/styles",
                src: ['style.css'],
                "dest": "server/public/assets/styles"
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
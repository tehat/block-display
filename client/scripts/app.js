/**
 * Created by Thomas on 7/26/16.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: "assets/views/routes/home.html",
            controller: "HomeController"
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
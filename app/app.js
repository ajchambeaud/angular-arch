var app = angular.module("app", [
    "app.home",
    "app.articulos",
    "app.models",
    "ui.router"
]);

app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state("home", {
                url : "/",
                controller : "homeController",
                templateUrl : "app/home/templates/home.html"
            })
            .state("articulos",{
                url : "/articulos",
                templateUrl : "app/articulos/templates/articulos.html",
                controller : "articuloController"
            })
            .state("articulos.detalle",{
                url : "/{id}", //por ej /articulos/3
                templateUrl : "app/articulos/templates/articulos.detalle.html",
                controller : "detalleController"
            });

        $urlRouterProvider.otherwise('/');
    }
]);

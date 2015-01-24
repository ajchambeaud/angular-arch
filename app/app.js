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
                templateUrl : "app/home/templates/home.html",
                onEnter: function(){
                    console.log("Activando estado HOME");
                },
                onExit: function(){
                    console.log("Saliendo de estado HOME");
                }
            })
            .state("articulos",{
                url : "/articulos",
                templateUrl : "app/articulos/templates/articulos.html",
                controller : "articuloController",
                onEnter: function(){
                    console.log("Activando estado ARTICULOS");
                },
                onExit: function(){
                    console.log("Saliendo de estado ARTICULOS");
                }
            })
            .state("articulos.detalle",{
                url : "/{id}", //por ej /articulos/3
                templateUrl : "app/articulos/templates/articulos.detalle.html",
                controller : "detalleController",
                onEnter: function(){
                    console.log("Activando estado ARTICULOS.DETALLE");
                },
                onExit: function(){
                    console.log("Saliendo de estado ARTICULOS.DETALLE");
                }
            });

        $urlRouterProvider.otherwise('/');
    }
]);

var home = angular.module("app.home");

home.controller("homeController", ["$scope",
    function($scope){
        $scope.tituloHome = "Home del sitio";
    }
]);

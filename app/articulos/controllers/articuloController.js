var articulos = angular.module("app.articulos");

articulos.controller("articuloController", ["$scope", "articuloModel", "$state",
    function($scope, articuloModel, $state){

        articuloModel.getArticulos().then(function(data){
            $scope.articulos = data.listado;
            if($scope.articulos.length > 0){
                //Activar el estado del detalle correspondiente al primer elemento de la lista
                $state.go("articulos.detalle", {id : $scope.articulos[0].id});
            }
        });

    }
]);

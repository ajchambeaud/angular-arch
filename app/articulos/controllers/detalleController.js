var articulos = angular.module("app.articulos");

articulos.controller("detalleController", ["$scope", "articuloModel", "$stateParams",
function($scope, articuloModel, $stateParams){

    articuloModel.getArticulo($stateParams.id).then(function(data){
        $scope.articulo = data;
    });

}
]);

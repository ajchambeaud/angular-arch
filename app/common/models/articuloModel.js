var models = angular.module("app.models");

models.service("articuloModel", ["$http", "$q", function($http, $q){

    var URI = {
        LIST : 'assets/dummy_json/listado.json',
        DETALLE : 'assets/dummy_json/detalle_{ID}.json',
    };

    this.getArticulos = function() {
        var deferred = $q.defer();

        $http.get(URI.LIST)
        .success(function(data){
            deferred.resolve(data);
        })
        .error(function(data){
            deferred.reject(data);
        });

        return deferred.promise;
    };

    this.getArticulo = function(id) {
        var deferred = $q.defer();

        $http.get(URI.DETALLE.replace("{ID}", id))
        .success(function(data){
            deferred.resolve(data);
        })
        .error(function(data){
            deferred.reject(data);
        });

        return deferred.promise;
    };
}]);

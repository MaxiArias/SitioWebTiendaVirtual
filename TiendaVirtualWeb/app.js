(function () {
    var app = angular.module("productos", []);

    app.controller("ProductosController", function ($scope, $http) {
      
        $http.get("http://35.185.15.6/WebApi/api/producto").then(function successCallback(response) {
            $scope.productos1 = response.data;
            alert("success");
        }, function errorCallback(response) {
            alert(response.status);
        });
    });

})();
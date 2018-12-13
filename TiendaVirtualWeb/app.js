(function () {
    var app = angular.module("productos", []);

    app.controller("ProductosController", function ($scope, $http) {
      
        $http.get("http://localhost:49559/api/producto").then(function successCallback(response) {
            $scope.productos1 = response.data;
            alert("success");
        }, function errorCallback(response) {
            alert(response.status);
        });
    });

})();
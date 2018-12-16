(function () {
    var app = angular.module("productos", []);

    app.controller("ProductosController", function ($scope, $http) {
      
        $http.get("http://35.185.15.6/WebApi/api/Producto").then(function successCallback(response) {
            $scope.productos1 = response.data;
        }, function errorCallback(response) {
            alert("Ha ocurrido un error");
        });
    });

    app.controller("LoginController", function ($scope, $rootScope, $http) {
        $scope.Login = function () {
            var parameter = JSON.stringify({ mail: $scope.mail, password: $scope.password });
            $http.post("http://35.185.15.6/WebApi/api/Usuario/Login", parameter).then(function successCallback(response) {
                $rootScope.id = response.data;
                modal.style.display = 'none';
            }, function errorCallback(response) {
                alert(response.statusText);
            });
        }
    });

    app.controller("RegistroController", function ($scope, $rootScope, $http) {
        $scope.Register = function () {
            var parameter = JSON.stringify({ mail: $scope.mail, password: $scope.password }, );
            $http.post("http://35.185.15.6/WebApi/api/Cliente", parameter).then(function successCallback(response) {
                $rootScope.id = response.data;
                modal.style.display = 'none';
            }, function errorCallback(response) {
                alert(response.statusText);
            });
        }
    });

})();

var modal = document.getElementById('id01');
var modal1 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

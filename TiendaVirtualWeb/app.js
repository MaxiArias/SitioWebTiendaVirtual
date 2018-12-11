(function () {
    var app = angular.module('productos', []);

    app.controller('ProductosController', function ($scope, $http) {
        $scope.productos = prods;
        $http.get("http://35.185.15.6/WebApi/api/Producto").then(function successCallback(response) {
            alert("success");
        }, function errorCallback(response) {
            alert(response.status);
        });
    });

    var prods = [
        {
            "IdProducto": 1,
            "Nombre": "Laptop HP",
            "Descripcion": "Laptop HP PAVILION",
            "Foto": "foto1.jpg",
            "Precio": 27500,
            "Stock": 250,
            "FechaAlta": "0001-01-01T00:00:00",
            "Habilitado": true,
            "IdCategoria": 10
        },
        {
            "IdProducto": 5,
            "Nombre": "Mochila",
            "Descripcion": "Mochila negra para laptop hasta 17\"",
            "Foto": "mochila1.jpg",
            "Precio": 899,
            "Stock": 350,
            "FechaAlta": "2018-12-09T00:00:00",
            "Habilitado": true,
            "IdCategoria": 13
        },
        {
            "IdProducto": 6,
            "Nombre": "PC",
            "Descripcion": "Computadora Personal incluye monitor,teclado y mouse",
            "Foto": "PC.jpg",
            "Precio": 28000,
            "Stock": 700,
            "FechaAlta": "2018-12-09T00:00:00",
            "Habilitado": true,
            "IdCategoria": 12
        }];
})();
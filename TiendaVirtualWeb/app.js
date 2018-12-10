(function () {
    var app = angular.module('productos', []);

    app.controller('ProductosController', function () {
        this.productos = prods;
    });

    var prods = [
        {
            id: 1,
            nombre: 'Computadora',
            descripcion: 'Intel i5',
            precio: 295,
        },
        {
            id: 2,
            nombre: 'Tarjeta de video',
            descripcion: 'Nvidia geforce',
            precio: 50,
        },
        {
            id: 3,
            nombre: 'Impresora 3d',
            descripcion: 'La mejor del mercado, descripcion alargada a proposito para chequear visualizacion, longitud de 150 caracteres que es el maximo que soporta la base de',
            precio: 500,
        },
        {
            id: 4,
            nombre: 'Servidor',
            descripcion: 'MegaServer 4000',
            precio: 2000,
        }
    ];
})();
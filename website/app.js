var app = angular.module("myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/home.html",
            controller: "homeCtrl"
        })
        .when("/cart", {
            templateUrl: "view/cart.html",
            controller: "cartCtrl"
        })
        .when("/product", {
            templateUrl: "view/product.html",
            controller: "productCtrl"
        })
        .when("/login", {
            templateUrl: "view/login.html",
            controller: "loginCtrl"
        })
        .when("/register", {
            templateUrl: "view/register.html",
            controller: "registerCtrl",
            // redirectTo: "/login"
        })
        .when("/detail/:id", {
            templateUrl: "view/detail.html",
            controller: "detailCtrl"
        })
        .when("/lienhe", {
            templateUrl: "view/lienhe.html",
            controller: "lienheCtrl"
        })
        .when("/news", {
            templateUrl: "view/news.html",
            controller: "newsCtrl"
        })
        .when("/admin", {
            templateUrl: "view/admin_home.html",
            controller: "adminCtrl"
        })
        .when("/admin_product", {
            templateUrl: "view/admin_product.html",
            controller: "adminProductCtrl"
        })
        .otherwise({
            templateUrl: '404.html'
        });
})
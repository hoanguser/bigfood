app.controller('mainCtrl', function ($scope, $http, $location, $rootScope, $timeout) {
    $http.get('http://localhost:3000/products').then(
        function (res) {
            $scope.dsSp = res.data;
        },
        function (res) {

        }
    )
    if (localStorage.getItem("user")) {
        $rootScope.user = JSON.parse(localStorage.getItem("user"));
    }
    $scope.logOut = function () {
        localStorage.removeItem("user");
        delete $rootScope.user;
        $location.path('/login');
    }
    $rootScope.cart = [];
    let inCart = false;
    $scope.showSuccessMessage = false;

    $scope.addToCart = function (sp) {
        $rootScope.cart.forEach(product => {
            inCart = false;
            if (product.id == sp.id) {
                inCart = true;
                product.quantity++;
            }
        });
        if (!inCart) {
            sp.quantity = 1;
            $rootScope.cart.push(sp);
        }
        localStorage.setItem('cart', JSON.stringify($rootScope.cart));
        $scope.showSuccessMessage = true;

        // Tắt thông báo sau 2 giây
        $timeout(function () {
            $scope.showSuccessMessage = false;
        }, 2000);    
        // console.log($rootScope.cart);
    }
    if (localStorage.getItem('cart')) {
        $rootScope.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        $rootScope.cart = [];
    }
})
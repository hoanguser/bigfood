app.controller('cartCtrl', function ($scope, $http, $rootScope, $location) {
    $scope.tinhTong = function () {
        let tong = 0;
        if ($rootScope.cart) {
            $rootScope.cart.forEach(sp => {
                tong += sp.price * sp.quantity;
            });
            return tong;
        }

    }
    $scope.saveCart = function () {
        localStorage.setItem('cart', JSON.stringify($rootScope.cart));
    }
    $scope.deleteCart = function (index) {
        $rootScope.cart.splice(index, 1);
        $scope.saveCart();
    }
    $scope.deleteCartAll = function () {
        $rootScope.cart = [];
        $scope.saveCart();
    }
    $scope.checkOut = function () {
        if ($scope.cart.length > 0) {
            $http.post('http://localhost:3000/oders', {
                name: $scope.name,
                phone: $scope.phone,
                address: $scope.address,
                product: $scope.cart,
                idUser: '-1',
                total: $scope.tinhTong(),
                date: new Date().toLocaleString('sv-SE'),
                status: 'oder',

            }).then(
                function (response) {
                    $scope.deleteCartAll();
                    document.querySelector('.btn-close').click();
                    alert('Đặt hàng thành công');
                    $location.path('/');
                }
            )
        } else {
            alert("Vui lòng thêm sản phẩm vào giỏ");
            $location.path('/');

        }

    }
})
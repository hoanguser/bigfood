app.controller('homeCtrl', function ($scope, $http, $location, $rootScope) {
    $http.get('http://localhost:3000/products').then(
        function (res) {
            $scope.dsSp = res.data;
        },
        function (res) {

        }
    )
    $scope.limit = 3;
    $scope.page = 1;
    $scope.begin = ($scope.page - 1) * $scope.limit;
    $scope.chuyenTrang = function (trang) {
        $scope.page = trang;
        $scope.begin = ($scope.page - 1) * $scope.limit;
    }
    $scope.totalPage = function () {
        return Math.ceil($scope.dsSP.length / $scope.limit);
    }
    $scope.pageList = function () {
        let arr = [];
        for (let i = 1; i <= $scope.totalPage(); i++) {
            arr.push(i);
        }
        return arr;

    }

    // $rootScope.cart = [];
    // let inCart = false;
    // $scope.addToCart = function (sp) {
    //     $rootScope.cart.forEach(product => {
    //         inCart = false;
    //         if (product.id == sp.id) {
    //             inCart = true;
    //             product.quantity++;
    //         }
    //     });
    //     if (!inCart) {
    //         sp.quantity = 1;
    //         $rootScope.cart.push(sp);
    //     }
    //     localStorage.setItem('cart', JSON.stringify($rootScope.cart));
    //     <div class="alert alert-success" role="alert">
    //         Thêm giỏ hàng thành công
    //     </div>
    //     // console.log($rootScope.cart);
    // }
})  
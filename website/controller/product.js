app.controller('productCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/products').then(
        function (res) {
            $scope.dsSp = res.data;
        },
        function (res) {

        }
    )
    $scope.limit = 6;
    $scope.page = 1;
    $scope.begin = ($scope.page - 1) * $scope.limit;
    $scope.chuyenTrang = function (trang) {
        $scope.page = trang;
        $scope.begin = ($scope.page - 1) * $scope.limit;
    }
    $scope.totalPage = function () {
        return Math.ceil($scope.dsSp.length / $scope.limit);
    }
    $scope.pageList = function () {
        let arr = [];
        for (let i = 1; i <= $scope.totalPage(); i++) {
            arr.push(i);
        }
        return arr;
    }

})
app.controller('adminCtrl', function ($scope, $rootScope, $http) {
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
})

app.controller('detailCtrl', function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.sp = $scope.dsSp.filter(item => item.id == $scope.id);
    // console.log($scope.sp);
})
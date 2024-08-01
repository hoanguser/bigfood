app.controller('loginCtrl', function ($scope,$rootScope, $http, $location, $window) {
    $scope.user = {};

    $scope.emailError = false;
    $scope.passwordError = false;
    $scope.inputsTouched = {};

    $scope.checkInput = function (inputName) {
        $scope.inputsTouched[inputName] = true;
    };
    $scope.checkEmpty = function (inputName) {
        if (!$scope.user[inputName]) {
            $scope[inputName + 'Error'] = true;
        } else {
            $scope[inputName + 'Error'] = false;
        }
    };

    $scope.checkEmail = function () {
        if ($scope.user.email && $scope.user.password) {
            // Thực hiện HTTP request để kiểm tra email và mật khẩu từ API
            $http.get('http://localhost:3000/users?email=' + $scope.user.email)
                .then(function (response) {
                    if (response.data.length > 0 && response.data[0].password === $scope.user.password) {
                        // console.log(response.data);
                        $rootScope.user = response.data[0];
                        localStorage.setItem("user",JSON.stringify($rootScope.user));
                        if (response.data[0].role === 'admin') {
                            $location.path('/admin') // Chuyển hướng đến trang admin nếu là admin
                        } else {
                            $location.path('/');// Chuyển hướng đến trang chủ nếu là user
                        }
                    } else {
                        $scope.emailError = true;
                        $scope.passwordError = true;
                    }
                })
                .catch(function (error) {
                    console.error('Error:', error);
                    // Xử lý lỗi nếu có
                    $scope.emailError = true;
                    $scope.passwordError = true;
                });
        }
    };


    $scope.login = function () {
        // Kiểm tra xem trường email và password có trống không
        $scope.checkEmpty('email');
        $scope.checkEmpty('password');

        // Kiểm tra xem có lỗi không trước khi thực hiện đăng nhập
        if (!$scope.emailError && !$scope.passwordError) {
            $scope.checkEmail();
        }
    };
});

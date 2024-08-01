app.controller('registerCtrl', function ($scope, $http, $location) {
    $scope.user = {
        role: 'user' // Thiết lập quyền truy cập mặc định là 'user'
    };

    $scope.emailExists = false;

    $scope.checkDuplicateEmail = function () {
        // Kiểm tra email đã tồn tại trước đó hay không
        // Thực hiện HTTP request đến server để kiểm tra email
        $http.get('http://localhost:3000/users?email=' + $scope.user.email)
            .then(function (response) {
                if (response.data.length > 0) {
                    $scope.emailExists = true;
                } else {
                    $scope.emailExists = false;
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    };

    $scope.register = function () {
        // Kiểm tra mật khẩu xác nhận
        if ($scope.user.password !== $scope.user.confirmPassword) {
            alert('Mật khẩu không khớp. Vui lòng thử lại.');
            return;
        }

        // Gửi dữ liệu đăng ký đến JSON Server
        var formData = {
            username: $scope.user.username,
            email: $scope.user.email,
            password: $scope.user.password,
            role: $scope.user.role
        };

        $http.post('http://localhost:3000/users', formData)
            .then(function (response) {
                // Xử lý kết quả từ API ở đây
                console.log(response.data);
                alert('Đăng ký thành công!');
                $location.path('/login');
                $scope.user = {
                    role: 'user' // Reset lại quyền truy cập mặc định
                };
            })
            .catch(function (error) {
                // Xử lý lỗi nếu có
                console.error('Error:', error);
                alert('Đăng ký thất bại. Vui lòng thử lại.');
            });
    };
    $scope.inputsTouched = {};

    $scope.checkInput = function (inputName) {
        $scope.inputsTouched[inputName] = true;
    };

});

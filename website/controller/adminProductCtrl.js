app.controller('adminProductCtrl', function ($scope, $rootScope, $http) {
    $scope.dsSp = [];
    $scope.inputsTouched = {};
    $scope.adpr = {}

    // Function to submit the form
    $scope.submitForm = function () {
        // Check if all required fields are filled
        if ($scope.adPrForm.$invalid) {
            alert("Vui lòng điền đầy đủ thông tin sản phẩm");
            return;
        }

        // Check for duplicate name
        if ($scope.dsSp.find(product => product.name === $scope.adpr.name)) {
            alert("Tên sản phẩm đã tồn tại. Vui lòng chọn tên khác.");
            return;
        }
        $scope.adpr = {
            name: $scope.adpr.name,
            price: $scope.adpr.price,
            giamgia: $scope.adpr.giamgia,
            image: $scope.adpr.image,
            describe: $scope.describe,
            describe2: $scope.describe2
        };
        // Add product to JSON Server
        $http.post('http://localhost:3000/products', $scope.adpr)
            .then(function (response) {
                $scope.dsSp.push(response.data);
                alert("Thêm sản phẩm thành công!");
                // Clear form after successful addition
                $scope.adpr = {};
                $scope.describe = "";
                $scope.describe2 = "";
            })
            .catch(function (error) {
                console.error("Lỗi khi thêm sản phẩm:", error);
                alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
            });
    };

    // Function to mark input as touched
    $scope.checkInput = function (inputName) {
        $scope.inputsTouched[inputName] = true;
    };
});

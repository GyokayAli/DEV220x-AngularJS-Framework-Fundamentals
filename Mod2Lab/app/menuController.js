app.controller('menuController', [
  '$scope',
  function ($scope) {
    $scope.model = {
      title: 'Our Menu'
    };

    $scope.$watch('model.mainDish.name', function (newValue, oldValue) {
      if (newValue === 'BBQ Chicken Pizza') {
        alert('You\'ve selected the BBQ Chicken Pizza!');
      }
    });

    $scope.changeMainDish = function (item) {
      var currentPrice;
      if (item === 'Cheese Pizza' || item === 'Margherita Pizza') {
        currentPrice = '$11.00';
      } else if (item === 'Pepperoni Pizza' || item === 'BBQ Chicken Pizza') {
        currentPrice = '$13.99';
      } else {
        currentPrice = '$15.99';
      }

      $scope.model.mainDish = {
        name: item,
        price: currentPrice
      };
    }
  }
]);
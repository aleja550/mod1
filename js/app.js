(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope, $filter) {
        $scope.items = "";
        $scope.message = "";
        $scope.color = {};

        $scope.countingItems = function() {
            if ($scope.items == "") {
                $scope.color.style = { "color": "red" };
                return $scope.message = "Please enter data first";
            }

            var items = $scope.items.split(',');
            var message = givingMessage(items.length);
            $scope.color.style = { "color": "#1cd610" };
            $scope.message = message;
        };
    }

    function givingMessage(numberItems) {
        if (numberItems <= 3) {
            return "Enjoy!";
        } else {
            return "Too much!";
        }
    }
})()
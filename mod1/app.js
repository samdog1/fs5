(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodList          = "";
  $scope.foodCount         = -1;
  $scope.blankItemsWarning = ""

  $scope.gradeAmount = function (num) {
    var msg;
    switch (num) {
      case -1:
        msg = ""
        break;
      case 0:
        msg = "Please enter data";
        break;
      case 1:
      case 2:
      case 3:
        msg = "Enjoy";
        break;
      default:
        msg = "Too Much!";
    }
    return msg;
  };

  $scope.analizeLunchList = function() {
    $scope.blankItemsWarning =""; // reset message about blank items
    if ($scope.foodList == "")
      $scope.foodCount = 0;
    else {
      var foodArray = $scope.foodList.split(",");
      var blanks = getEmptyItemCount(foodArray);
      if (blanks > 0) {
        $scope.blankItemsWarning = "Empty items are not counted";
      }
      $scope.foodCount = foodArray.length - blanks;
      console.log($scope.foodCount);
    }
  };

  function getEmptyItemCount(array){
    var empties = 0;
    for (var i = 0; i < array.length; i++) {
      if(!array[i].trim()) {
        empties +=1;
      }
    }
    return empties;
  }

}

})();

var myApp = angular.module('abc', [])

myApp.controller('MainController', ['$scope', '$http', function ($scope, $http) {
  $scope.learned = "";
  $scope.words = [];

  $scope.updateLearned = function () {
    if ($scope.learned === "") return;
    // remove spaces
    var cleanedString = $scope.learned.replace(/\s/g, '');

    // split by comma
    var learnedArray = cleanedString.split(",");

    // remove empty
    learnedArray = learnedArray.filter(function (val) {
      if (val) return val;
      return false;
    })

    // remove duplicates
    var uniqueLearnedArray = [];

    learnedArray.forEach((item, i) => {
      if (uniqueLearnedArray.indexOf(item) < 0) uniqueLearnedArray.push(item)
      return;
    });

    // set clean array
    $scope.learnedArray = uniqueLearnedArray;

    getWords($scope.learnedArray);
  }


  var getWords = function (learnedArray) {
    $http.put('http://localhost:3000/api/get-words', {
      words: learnedArray
    })
    .then(function (response) {
      $scope.words = response.data;
    })
    .catch(function(err) {
      console.error(err);
    })
  };

}]);

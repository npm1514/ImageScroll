angular.module("templates", [])
.controller("mainCtrl", function($scope) {
  $scope.pics = [];
  var catpic = "http://beforeitsnews.com/contributor/upload/486248/images/cat-funny-5.jpg";
  var flower = "http://www.hdwallpaper.nu/wp-content/uploads/2015/02/maxresdefault.jpg";
  for (var i = 0; i < 20; i++) {
    if(i%2 == 0){
      $scope.pics.push(flower)
    } else {
      $scope.pics.push(catpic)
    }
  }
  console.log($scope.pics);
});

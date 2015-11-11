angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $translate, language, theme) {
$translate.use(language.data);
$scope.theme = theme;
})

.controller('ChatsCtrl', function($scope, $translate, language, theme, Chats ) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.theme = theme;
  $translate.use(language.data);

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $translate, Chats, language, theme) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.theme = theme;
  $translate.use(language.data);

})

.controller('AccountCtrl', function($scope, $rootScope, $translate, language, theme) {

  $translate.use(language.data);
  $scope.theme = theme;

  $scope.settings = {
    light: false,
    dark:false,
    stable:false,
    positive:true,
  };

  $scope.langToggle = {
   DE: false,
   EN: true,
   FR: false,
   IT: false,
   };

  $scope.light = function() {
    $scope.settings.dark = false; 
    $scope.settings.light = true; 
    $scope.settings.stable = false; 
    $scope.settings.positive = false;
    theme.data = 'bar-light';
    console.log(theme.data);
  };

  $scope.dark = function() {
    $scope.settings.dark = true; 
    $scope.settings.light = false; 
    $scope.settings.stable = false; 
    $scope.settings.positive = false;
    theme.data = 'bar-dark';
    console.log(theme.data);
  };

  $scope.stable = function() {
    $scope.settings.dark = false; 
    $scope.settings.light = false; 
    $scope.settings.stable = true; 
    $scope.settings.positive = false;
    theme.data = 'bar-stable';
    console.log(theme.data);
  };

  $scope.positive = function() {
    $scope.settings.dark = false; 
    $scope.settings.light = false; 
    $scope.settings.stable = false; 
    $scope.settings.positive = true;
    theme.data = 'bar-positive';
    console.log(theme.data);
  };

  $scope.changeLanguage = function(data) {
  // here, not overwriting identity, but editing a property
  language.data = data;
  };

});

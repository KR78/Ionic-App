// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'pascalprecht.translate'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if (typeof navigator.globalization !== "undefined") {
      navigator.globalization.getPreferredLanguage(function(language){
          $translate.use((language.value).split("-")[0]).then(function(data) {
            console.log("Success: " + data);
          }, function(data) {
            console.log("Error: " + data);
          });
      }, null);
    }
  });

  // $rootScope.theme = 'bar-positive';
})
.value('language', { data: null })
.value('theme', { data: null })
.config(function($translateProvider) {
  $translateProvider.translations("en", {
    dashboard: "Dashboard",
    status: "Status",
    chats: "Chats",
    settings: "Settings",
    dark: "Dark Theme",
    light: "Light Theme",
    stable: "Stable Theme",
    positive: "Positive Theme"
  });
  $translateProvider.translations("fr", {
    dashboard: "Tablero",
    status: "Estado",
    chats: "Chats",
    settings: "Ajustes",
    dark: "Tema Oscuro",
    light: "Tema Ligero",
    stable: "Tema Estable",
    positive: "Tema Positivo"
  });
  $translateProvider.translations("sw", {
    dashboard: "Dashibodi",
    status: "Hadhi",
    chats: "Soga",
    settings: "Mazingira",
    dark: "Rangi Nyeusi",
    light: "Rangi Mwanga",
    stable: "Imara",
    positive: "Chanya"
  });
  $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});


angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Philo',
    lastText: 'You on your way?',
    face: 'img/philo.png'
  }, {
    id: 1,
    name: 'Alamin',
    lastText: 'What time is the makeup class?',
    face: 'img/alamin.png'
  }, {
    id: 2,
    name: 'Mr. Kioko',
    lastText: 'Please see me in the afternoon',
    face: 'img/user.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at this!',
    face: 'img/user.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/user.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

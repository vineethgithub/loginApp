angular.module('sampleApp')

.factory('login', function($resource){
    return $resource('https://api.iscs.io/api/v2/iic-ceg', {}, {
        auth: {method:'GET'}
    });
        
}).factory('UserService', function(store) {
    var service = this,
        currentUser = null;

    service.setCurrentUser = function(user) {
        currentUser = user;
        store.set('user', user);
        return currentUser;
    };

    service.getCurrentUser = function() {
        if (!currentUser) {
            currentUser = store.get('user');
        }
        return currentUser;
    };
});
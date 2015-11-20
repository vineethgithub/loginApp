'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */

 angular.module('sampleApp')
    .controller('LoginCtrl', function($rootScope, $state, LoginService, UserService){
    var login = this;

    function signIn(user) {
        LoginService.login(user)
            .then(function(response) {
                user.access_token = response.data.id;
                UserService.setCurrentUser(user);
                $rootScope.$broadcast('authorized');
                $state.go('dashboard');
            });
    }

    function register(user) {
        LoginService.register(user)
            .then(function(response) {
                login(user);
            });
    }

    function submit(user) {
        login.newUser ? register(user) : signIn(user);
    }

    login.newUser = false;
    login.submit = submit;
});


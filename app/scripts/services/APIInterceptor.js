'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Services of the sampleApp
 */

 angular.module('sampleApp')
    .service('APIInterceptor', function($rootScope, UserService) {
    var service = this;

    var access_token = '49ykt9wggfer9cckndfaj2dh';

    service.request = function(config) { 
        var currentUser = UserService.getCurrentUser(),
            access_token = currentUser ? currentUser.access_token : null;

        if (access_token) {
            config.headers.ISCS_API_KEY = access_token;
        }
        return config;
    };

    service.responseError = function(response) {
        if (response.status === 401) {
            $rootScope.$broadcast('unauthorized');
        }
        return response;
    };
});


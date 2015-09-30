(function() {
    'use strict';

    angular
        .module('app.auth')
        .service('auth', Auth);

    Auth.$inject = ['$localStorage'];

    /* @ngInject */
    function Auth($localStorage) {

    	var service = {
    		login: login,
    		logout: logout,
    		getUser: getUser
    	};
    	return service;


        function login(user) {
        	if(user){
        		$localStorage.user = user;
        	}
        }

         function logout() {
         	$localStorage.user = '';
        }

         function getUser() {
         	return $localStorage.user;
        }
    }
})();



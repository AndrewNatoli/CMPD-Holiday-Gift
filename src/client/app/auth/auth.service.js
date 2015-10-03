(function() {
    'use strict';

    angular
        .module('app.auth')
        .service('authService', Auth);

    // Auth.$inject = ['$localStorage'];
    function Auth (){
        return null;
    }
    /* @ngInject */
    // function Auth($localStorage) {

    // 	var service = {
    // 		login: login,
    // 		logout: logout,
    // 		getUser: getUser
    // 	};
    // 	return service;


    //     function login(user) {
    //         console.log('in login and user is: ', user);
    //     	if(user){
    //     		$localStorage.user = user;
    //     	}
    //     }

    //      function logout() {
    //      	$localStorage.user = '';
    //     }

    //      function getUser() {
    //         console.log('$localStorage.user = ', $localStorage.user);
    //      	return $localStorage.user;
    //     }
    // }
})();



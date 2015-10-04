(function() {
    'use strict';

    angular
        .module('app.userReg')
        .service('userReg', userReg);

    userReg.$inject = ['$http'];

    /* @ngInject */
    function userReg(dependencies) {

    	var service = {
    		getAllUsers: getAllUsers
    	};
    	return service; 
        

        ////////////////

        function getAllUsers() {
        	
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['logger'];
    /* @ngInject */
    function AuthController(logger) {
        var vm = this;
        vm.title = 'User Creation Form';
        vm.login = login;
        activate();


        function activate() {
            logger.info('Activated Auth View');
        }

        function login(){
            console.log('login clicked');
        }
    }
})();

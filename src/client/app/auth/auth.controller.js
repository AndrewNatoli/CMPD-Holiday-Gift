(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['logger', '$state', 'auth'];
    /* @ngInject */
    function AuthController(logger, $state, auth) {
        var vm = this;
        vm.title = 'User Creation Form';

        vm.login = login;
        activate();


        function activate() {
            logger.info('Activated Auth View');
        }

        function login(user){
            auth.login(user);
            $state.go('dashboard');
        }
       
    }
})();

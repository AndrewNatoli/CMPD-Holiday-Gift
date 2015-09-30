(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger', 'auth', '$state'];
    /* @ngInject */
    function ShellController($rootScope, $timeout, config, logger, auth, state) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        $rootScope.showSplash = true;
        vm.navline = {
            title: config.appTitle,
            user: auth.getUser()
        };
        vm.userLoggedIn = !!auth.getUser();
        console.log('vm.userLoggedIn = ', vm.userLoggedIn);
        vm.logout = logout;

        activate();

        function logout(){
            auth.logout();
            $state.go('login');
        }
        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 1000);
        }
    }
})();

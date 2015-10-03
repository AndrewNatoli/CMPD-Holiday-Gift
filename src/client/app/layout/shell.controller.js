(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope', '$scope', '$timeout', 'config', 'logger', 'auth', '$state'];
    /* @ngInject */
    function ShellController($rootScope,  $scope, $timeout, config, logger, auth, $state) {
        console.log('shell initiated');
        var vm = $scope;

        vm.userLoggedIn = !!auth.getUser();

        //redirects user to default state if user is already logged in
        $timeout(function(){
            var currState = $state.current.name;
            if(currState === 'login' && vm.userLoggedIn){
                $state.go('dashboard');
            }
        });

        $rootScope.$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
                if(toState.name === 'dashboard'){
                    vm.userLoggedIn = !!auth.getUser();
                }
            });

        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        $rootScope.showSplash = true;
        vm.navline = {
            title: config.appTitle,
            user: auth.getUser()
        };
        // vm.foo = 'bar';
        vm.logout = logout;

        activate();

        function logout(){
            auth.logout();
            vm.userLoggedIn = null;
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

(function() {
    'use strict';

    angular
        .module('app.auth')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    url: '/',
                    templateUrl: 'app/auth/login.html',
                    controller: 'AuthController',
                    controllerAs: 'vm',
                    title: 'Login',
                    // settings: {
                    //     nav: 2,
                    //     content: '<i class="fa fa-lock"></i> User Reg'
                    // }
                }
            }
        ];
    }
})();

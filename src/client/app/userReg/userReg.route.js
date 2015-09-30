(function() {
    'use strict';

    angular
        .module('app.userReg')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'userReg',
                config: {
                    url: '/userReg',
                    templateUrl: 'app/userReg/userReg.html',
                    controller: 'UserRegController',
                    controllerAs: 'vm',
                    title: 'User Reg',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> User Reg'
                    }
                }
            }
        ];
    }
})();

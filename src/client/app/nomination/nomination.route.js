(function() {
    'use strict';

    angular
        .module('app.nomination')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'nomination',
                config: {
                    url: '/nomination',
                    templateUrl: 'app/nomination/nomination.html',
                    controller: 'NominationController',
                    controllerAs: 'vm',
                    title: 'Nomination',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Nomination'
                    }
                }
            }
        ];
    }
})();

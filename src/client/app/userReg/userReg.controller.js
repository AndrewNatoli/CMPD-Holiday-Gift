(function () {
    'use strict';

    angular
        .module('app.userReg')
        .controller('UserRegController', UserRegController);

    UserRegController.$inject = ['logger'];
    /* @ngInject */
    function UserRegController(logger) {
        var vm = this;
        vm.title = 'User Creation Form';

        activate();

        function activate() {
            logger.info('Activated UserReg View');
        }
    }
})();

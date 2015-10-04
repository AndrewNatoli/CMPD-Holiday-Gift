(function () {
    'use strict';

    angular
        .module('app.userReg')
        .controller('NominationController', NominationController);

    NominationController.$inject = ['logger'];
    /* @ngInject */
    function NominationController(logger) {
        var vm = this;
        vm.title = 'Nomination Form';

        activate();

        function activate() {
            logger.info('Activated Nomination View');
        }
    }
})();

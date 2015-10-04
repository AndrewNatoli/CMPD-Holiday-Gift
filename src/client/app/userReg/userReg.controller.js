(function () {
    'use strict';

    angular
        .module('app.userReg')
        .controller('UserRegController', UserRegController);

    UserRegController.$inject = ['logger', 'stateService'];
    /* @ngInject */
    function UserRegController(logger, stateService) {
        var vm = this;
        vm.createAccount = createAccount;
        vm.userTypeChanged = userTypeChanged;
        vm.userTypes = ['CMPD', 'CFD', 'CMS', 'Partner'];
        vm.states = stateService.getStates();
        console.log('vm.states = ', vm.states);

        vm.title = 'User Creation Form';


        activate();

        function activate() {
            logger.info('Activated UserReg View');
        }

        function createAccount(userReg){
            console.log('the user is: ', userReg);
        }

        function userTypeChanged(userType){
            // vm.entity = 'Division';
            // vm.entityName = 'Division/Unit';
            if(userType){
                switch(userType){
                    case 'CMPD': vm.entity = 'Division'; vm.entityName = 'Division'; break;
                    case 'CFD': vm.entity = 'Station'; vm.entityName = 'Fire Station'; break;
                    case 'CMS': vm.entity = 'School'; vm.entityName = 'School Name'; break;
                    case 'Partner': vm.entity = 'Agency'; vm.entityName = 'Agency Name'; break;
                }    
            }
            
        }
    }
})();

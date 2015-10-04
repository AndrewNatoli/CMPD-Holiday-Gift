// /* jshint -W117, -W030 */
// describe('NominationController', function() {
//     var controller;

//     beforeEach(function() {
//         bard.appModule('app.userReg');
//         bard.inject('$controller', '$log', '$rootScope');
//     });

//     beforeEach(function () {
//         controller = $controller('NominationController');
//         $rootScope.$apply();
//     });

//     bard.verifyNoOutstandingHttpRequests();

//     describe('Nomination controller', function() {
//         it('should be created successfully', function () {
//             expect(controller).to.be.defined;
//         });

//         describe('after activate', function() {
//             it('should have title of Admin', function() {
//                 expect(controller.title).to.equal('User Creation Form');
//             });

//             it('should have logged "Activated"', function() {
//                 expect($log.info.logs).to.match(/Activated/);
//             });
//         });
//     });
// });

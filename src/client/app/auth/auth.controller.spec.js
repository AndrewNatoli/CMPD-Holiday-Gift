/* jshint -W117, -W030 */
describe('AuthController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.auth');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('AuthController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Auth controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Admin', function() {
                expect(controller.title).to.equal('User Creation Form');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});

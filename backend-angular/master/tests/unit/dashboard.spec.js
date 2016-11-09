describe('TestDashboardController', function() {

    var controller, $scope, $rootScope;

    beforeEach(function() {
        module('angle');
    });

    beforeEach(inject(function($injector) {
        $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');

        $scope = $rootScope.$new();
        controller = $controller('DashboardController as vm', {
            $scope: $scope
        });
    }));

    it('should have some variables defined', function() {

        expect($scope.vm.splineData).toBeDefined();
        expect($scope.vm.splineOptions).toBeDefined();

    });

});

describe('Test route', function() {

    var controller, $scope, httpBackend, state, RouteHelpers;

    beforeEach(function() {
        angular.mock.module('angle');

        inject(function($injector) {
            state = $injector.get('$state');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
            RouteHelpers = $injector.get('RouteHelpers');
        });

    });

    it('should NOT be an abstract state', function() {
        var s = state.get('app.dashboard');
        expect(s.abstract).toBeFalsy();
    });

    it('should have a template defined', function() {
        var s = state.get('app.dashboard');
        expect(s.templateUrl).toBe(RouteHelpers.basepath('dashboard.html'));
    });

});

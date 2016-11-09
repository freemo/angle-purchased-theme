describe('TestE2EDemo', function() {

    beforeEach(function() {
        browser.get('http://localhost:3010/#/app/dashboard');
    });

    it('should be true', function() {

        expect(true).toBeTruthy();

    });

});
describe('TestDashboard', function () {

  var title = element(by.css('.content-wrapper > h3'));
  var subtitle = element(by.css('.content-wrapper > h3 > small'));

  beforeEach(function() {
    browser.get('http://localhost:3010/#/app/dashboard');
  });

  it('initially has a title and subtitle', function () {
    expect(title.getText()).toContain('Dashboard');
    expect(subtitle.getText()).toBe('Welcome to Angle !');
  });

});


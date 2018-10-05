// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#app')
      .assert.containsText('.logo__text h4', 'GitHub')
      .assert.containsText('.logo__text p', 'search')
      .assert.containsText('.without-repository h4', 'NO RESULTS FOUND')
      .assert.containsText('.without-repository p', 'select other parameters and try again')
      .assert.containsText('.search-input label', 'Type here for search')
      .assert.elementPresent('.search-btn')
      .click('.search-btn')
      .assert.cssClassPresent(".search-input input", "red-border")
      .end();

    // browser.click('.search-btn')
  }
}

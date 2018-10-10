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
      .assert.cssClassPresent(".search-input input", "red-border");


    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('.search-input input', 'test')
      .click('.search-btn')
      .waitForElementVisible('.string-item', 5000)
      .assert.elementPresent('.string-item')
      .click('.string-item button')
      .click('#my-list')
      .assert.elementPresent('.string-item')
      .click('.string-item button')
      .click('#search');


    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('.search-input input', 'test')
      .click('.search-btn')
      .waitForElementVisible('.string-item', 5000)
      .assert.elementPresent('.string-item')
      .assert.containsText('.string-item .language-name', 'JavaScript')
      .click('.string-item button')
      .click('#my-list')
      .assert.containsText('.string-item .language-name', 'JavaScript')
      .click('#search')
      .setValue('.search-input input', 'testing')
      .click('.language')
      .click('#languageSelect option[value=css]')
      .click('.search-btn')
      .waitForElementVisible('.string-item', 5000)
      .assert.containsText('.string-item .language-name', 'CSS')
      .click('#my-list')
      .assert.containsText('.string-item .language-name', 'JavaScript')
      .end()
  }
};

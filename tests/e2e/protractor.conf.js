exports.config = {
  directConnect: true,
  capabilities: { 'browserName': 'chrome' },
  specs: ['demo.spec.js'],
  jasmineNodeOpts: { showColors: true, defaultTimeoutInterval: 30000 },
  chromeDriver: 'C:/Users/Christian/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver.exe',
};

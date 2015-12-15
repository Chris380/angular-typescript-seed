exports.config = {
  directConnect: true,
  capabilities: { 'browserName': 'chrome' },
  specs: ['demo.spec.js'],
  jasmineNodeOpts: { showColors: true, defaultTimeoutInterval: 30000 },
  chromeDriver: '../../node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
};

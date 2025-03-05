const config = require('./config.json');

module.exports = {
  e2e: {
    baseUrl: config.base_url, // Dynamically set base URL
    setupNodeEvents(on, config) {
      return config;
    },
  },
};

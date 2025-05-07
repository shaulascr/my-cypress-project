const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"cypress/support/e2e.js",
    defaultCommandTimeout: 30000, //atur waktu timeout custom dl miliseconds
    baseUrl: "https://www.saucedemo.com/"
  },
});

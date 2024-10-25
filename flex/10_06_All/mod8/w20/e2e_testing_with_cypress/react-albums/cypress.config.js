const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1280,
  e2e: {
    baseUrl: "http://localhost:8765",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

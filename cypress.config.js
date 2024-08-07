const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hgdhk4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


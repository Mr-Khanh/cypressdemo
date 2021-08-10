// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import addContext from "mochawesome/addContext";

require('cypress-xpath');

// Alternatively you can use CommonJS syntax:
// require('./commands')

const jsonAssertion = require("soft-assert")

Cypress.Commands.add('softAssert', (actual, expected, message) => {
  jsonAssertion.softAssert(actual, expected, message)
  if (jsonAssertion.jsonDiffArray.length) {
    jsonAssertion.jsonDiffArray.forEach(diff => {
      
      const log = Cypress.log({
        name: 'Soft assertion error',
        displayName: 'softAssert',
        message: diff.error.message
      })
    
    })
  } 
  else
  {
    cy.log("Soft Assertion is passed because of there are not different.");
  }

});

Cypress.Commands.add('softAssertAll', () => jsonAssertion.softAssertAll())

// Take a screenshot after testscript is failed

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});





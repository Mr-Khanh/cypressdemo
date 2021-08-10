/// <reference types="cypress" />

import textbox from '../pages/textbox';

describe('My-first-test-02', () => {

    beforeEach(()=>{
        cy.visit("/text-box");
    });

    it.only('Test textbox element ', () => {

        // User action on GUI
        textbox.typeFullName('testFullname');
        textbox.typeEmail('test@gmail.com');
        textbox.typeCurrentAddress('testCurrentAddress');
        textbox.typePermanentAddress('testPermanentAddress');
        textbox.clickSubmit();

        // Verification on GUI
        cy.get('div[id="output"]').find('p').should(($p) => {
           expect($p).to.have.length(4);
           expect($p.first()).to.contain('testFullname');
           expect($p.get(1)).to.contain("test@gmail.com");
           expect($p.get(2)).to.contain("testCurrentAddress");
           expect($p.get(3)).to.contain("testPermanentAddress");
        })
    })

    it.only('Trying with cy.task', () => {
        cy.task('log', 'This will be output to the terminal');
    })

    it.skip('Testscript 02', function() {
        cy.log('Testscript 02 will be ran')
    })

    it.skip('Testscript 03', function() {
        cy.log('Testscript 03 will be skiped')
    })
    
})

